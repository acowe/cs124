import App from './App.js';
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCcjiZC0kvbIDUuYKiskjJDrvurCA-F2g8",
    authDomain: "acowe-fbdb1.firebaseapp.com",
    projectId: "acowe-fbdb1",
    storageBucket: "acowe-fbdb1.appspot.com",
    messagingSenderId: "258279491687",
    appId: "1:258279491687:web:b339460be12ffae3222cc2",
    measurementId: "G-DQR3SH9VE5"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function InCloudApp(props) {

    const collectionName = props.collectionName;
    console.log(collectionName);

    const query = db.collection(collectionName).where("sharedWith", "array-contains", props.user.email);
    const [value, loading, error] = useCollection(query);
    const [currentList, setCurrentList] = useState("wow");
    const [currentListSharedWith, setCurrentListSharedWith] = useState([]);
    const [isOwner, setIsOwner] = useState(false);

    const [sortVal, setSortVal] = useState("default");
    const [sortPriority, setSortPriority] = useState("place_order");
    const [sortDirection, setSortDirection] = useState("asc");



    let query_2a = "";

    if (sortDirection === "desc"){
        query_2a = db.collection(collectionName).doc(currentList)
            .collection("Tasks")
            .orderBy(sortPriority,"desc");
    }
    else{
        query_2a = db.collection(collectionName).doc(currentList)
            .collection("Tasks")
            .orderBy(sortPriority,"asc");
    }

    const query_2 = query_2a;


    const [task_value, task_loading, t_error] = useCollection(query_2);


    const [showCompletedTask, setShowCompletedTask]=useState(true);
    const [toDelete, setToDelete]=useState(false);
    const [maxMessage, setMaxMessage] = useState("");
    const [orderNum, setOrderNum] = useState(0);



    /*database.collection(collectionName).doc(tasks.).collection('movies').get()*/

    let taskLists = [];
    let tasks = [];
    if (value) {
        taskLists = value.docs.map((doc) => {
            return {...doc.data()}});
    }

    if(currentList !== "wow" && task_value){
        tasks = task_value.docs.map((doc)=>{
            return {...doc.data()}});
    }


    function sharedListSelect(list){
        const user_email = props.user.email;
        if(list !== "wow"){
            db.collection(collectionName).where("sharedWith", "array-contains", props.user.email)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc =>
                    {if(doc.id === list){
                        setCurrentListSharedWith(doc.data().sharedWith);
                        setIsOwner(doc.data().sharedWith[0] === user_email);
                    }
                    });
                });
        }

    }
    
    function setSort(sortPref) {
        setSortVal(sortPref);
        if (sortPref === "priorityAsc"){
            setSortPriority("priority");
            setSortDirection("asc");
        }
        else if (sortPref === "priorityDesc"){
            setSortPriority("priority");
            setSortDirection("desc");
        }
        else{
            setSortPriority("place_order");
            setSortDirection("desc");
        }

    }

    function handleTaskListAdded(listNameText) {
        const newListId = generateUniqueID();
        db.collection(collectionName).doc(newListId).set({
            list_id: newListId,
            list_name: listNameText,
            sharedWith: [props.user.email],
            owner: props.user.uid
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });

        setCurrentList(newListId);
        sharedListSelect(newListId);
    }

    function handleTaskListSelect(listId){
        console.log("input list id: " + listId);
        setCurrentList(listId);
        sharedListSelect(listId);
    }





    function handleTaskAdded(text, priorityNum){
        setMaxMessage("");
        const newTaskId = generateUniqueID();
        setOrderNum(orderNum + 1);
        db.collection(collectionName).doc(currentList)
            .collection("Tasks")
            .doc(newTaskId).set({
            task_id: newTaskId,
            task_name: text,
            completed: false,
            priority: priorityNum,
            place_order: orderNum,
            sharedWith: currentListSharedWith,
            owner: props.user.uid
        }).catch((error) => {
            console.error("Error writing document: ", error);
        })

    }

    function deleteAllTasks(listID){
        db.collection(collectionName).doc(listID)
            .collection("Tasks")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    db.collection(collectionName)
                        .doc(listID)
                        .collection("Tasks").
                    doc(doc.id).delete()
                });
            });
    }

    function handleTaskListDeleted(){
        if(taskLists.length > 0){
            let listToBeDeleted = currentList;
            if(listToBeDeleted === "wow"){
                console.log("A");
                console.log("Please select a list to be deleted");
            }
            else if(listToBeDeleted === taskLists[0].list_id){
                if(taskLists.length===1){
                    setCurrentList("wow");
                }
                else{
                    setCurrentList(taskLists[1].list_id);
                }
            }
            else{
                setCurrentList(taskLists[0].list_id);
            }
            deleteAllTasks(listToBeDeleted);
            db.collection(collectionName).doc(listToBeDeleted).delete().catch((error) => {
                console.error("Error deleting document: ", error);
            });
        }
    }

    function handleTaskListShared(newOwner) {
        db.collection(collectionName).doc(currentList).update(
            {sharedWith: currentListSharedWith.concat([newOwner])}
        ).catch((error) => {
            console.error("Error writing document: ", error);
        });
        sharedListSelect(currentList);
    }

    function handleTaskListUnShared(removedOwner) {
        db.collection(collectionName).doc(currentList).update(
            {sharedWith: currentListSharedWith.filter(owner => owner !== removedOwner)}
        ).catch((error) => {
            console.error("Error writing document: ", error);
        });
        sharedListSelect(currentList);
    }

    function handleTaskFieldChanged(taskId, field, value) {
        db.collection(collectionName).doc(currentList)
            .collection("Tasks").doc(taskId).update(
            {[field]:value}
        ).catch((error) => {
            console.error("Error writing document: ", error);
        });
    }


    function getCompleted(){
        let retArr = [];
        for (let i=0; i< tasks.length;i++){
            if(tasks[i].completed){
                retArr.push(tasks[i].task_id);
            }
        }
        return retArr;
    }



    function handleTasksDeleted(){
        const completedIDs =getCompleted();
        setToDelete(true);
        for(let i=0; i< completedIDs.length;i++){
            db.collection(collectionName)
                .doc(currentList)
                .collection("Tasks")
                .doc(completedIDs[i]).delete().catch((error) => {
                console.error("Error writing document: ", error);
            });
        }
        setToDelete(false);
    }



    /* print all tasks (delete all things in a subcol)*/
    /*db.collection(collectionName).doc(currentList)
        .collection(currentList + "_tasks")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data().task_id);});
        });*/


    return <div>
        <App loading={loading}
             taskLists={taskLists}
             taskLoading = {task_loading}
             tasks={tasks}
             currentList = {currentList}
             showCompletedTask={showCompletedTask}
             handleHideCompleted={()=>setShowCompletedTask(!showCompletedTask)}
             handleTaskListAdded ={handleTaskListAdded}
             handleTaskListSelect = {handleTaskListSelect}
             handleTaskListShared = {handleTaskListShared}
             handleTaskListUnShared = {handleTaskListUnShared}
             handleTaskAdded ={handleTaskAdded}
             handleTaskFieldChanged = {handleTaskFieldChanged}
             handleTaskListDeleted={handleTaskListDeleted}
             handleTasksDeleted={handleTasksDeleted}
             deleteAllTasks = {deleteAllTasks}
             setSort={setSort}
             sortVal={sortVal}
             toDelete={toDelete}
             maxMessage={maxMessage}
             isOwner = {isOwner}
             currentListSharedWith = {currentListSharedWith}
        />
    </div>
}
export default InCloudApp;