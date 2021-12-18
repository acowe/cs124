import './App.css';
import TaskList from './TaskList.js';
import Top from './Top.js';
import Bottom from './Bottom.js';

function App(props) {

    let initial = true;

    if (props.loading){
        return(props.loading && <h1>Loading</h1>);
    }

    else if(props.currentList === "wow"){
        return (<div className="App">
            <h1>List of Things to Do</h1>
            <h5>Select a list or create a new one!</h5>
            <Top
                currentList = {props.currentList}
                taskLists = {props.taskLists}
                handleTaskListSelect={props.handleTaskListSelect}
                setSort={props.setSort}
                sortPriority={props.sortPriority}
                sortVal={props.sortVal}
                sortDirection={props.sortDirection}
                deleteAllTasks = {props.deleteAllTasks}
                initial = {initial}/>
            <Bottom
                showCompletedTask = {props.showCompletedTask}
                handleTaskListAdded = {props.handleTaskListAdded}
                handleTaskAdded = {props.handleTaskAdded}
                isOwner = {props.isOwner}
                initial = {initial}
            />

        </div>);
    }

    else if(props.tasks.length === 0){
        initial = false;
        return (<div className="App">
            {props.loading && <h1>Loading</h1>}
            <h1>List of Things to Do</h1>
            <Top
                currentList = {props.currentList}
                taskLists = {props.taskLists}
                handleTaskListSelect={props.handleTaskListSelect}
                setSort={props.setSort}
                sortPriority={props.sortPriority}
                sortVal={props.sortVal}
                sortDirection={props.sortDirection}
                deleteAllTasks = {props.deleteAllTasks}
                sharedWith = {<p>Shared with: {props.currentListSharedWith.map(s=> s + " ,")}</p>}
                initial = {initial}/>

            <p>Your list has no tasks</p>

            <Bottom
                showCompletedTask={props.showCompletedTask}
                handleTaskListAdded = {props.handleTaskListAdded}
                handleTaskAdded = {props.handleTaskAdded}
                handleTaskListDeleted={props.handleTaskListDeleted}
                handleTasksDeleted = {props.handleTasksDeleted}
                handleHideCompleted={props.handleHideCompleted}
                handleTaskListShared = {props.handleTaskListShared}
                handleTaskListUnShared={props.handleTaskListUnShared}
                currentListSharedWith={props.currentListSharedWith}
                isOwner = {props.isOwner}
                initial = {initial}
            />

        </div>);
    }

    else{
        initial = false;
        const taskCount = props.tasks.length;
        return(<div className="App">
            {props.loading && <h1>Loading</h1>}
            <h1>List of Things to Do</h1>
            <Top
                currentList = {props.currentList}
                taskLists = {props.taskLists}
                handleTaskListSelect={props.handleTaskListSelect}
                setSort={props.setSort}
                sortPriority={props.sortPriority}
                sortVal={props.sortVal}
                sortDirection={props.sortDirection}
                deleteAllTasks = {props.deleteAllTasks}
                sharedWith = {<span>Shared with: {props.currentListSharedWith.map(s => <span>{s}, </span>)}</span>}
                initial = {initial}
            />
            <p>Number of tasks: {taskCount + (taskCount===10 && " (max)") }</p>
            <TaskList handleTaskFieldChanged={props.handleTaskFieldChanged}
                      tasks={props.tasks}
                      setSort={props.setSort}
                      sortPriority={props.sortPriority}
                      sortDirection={props.sortDirection}
                      toDelete={props.toDelete}
                      showCompletedTask={props.showCompletedTask}/><br/>
            <Bottom
                showCompletedTask={props.showCompletedTask}
                handleTaskListAdded = {props.handleTaskListAdded}
                handleTaskAdded = {props.handleTaskAdded}
                handleTaskListDeleted={props.handleTaskListDeleted}
                handleTasksDeleted = {props.handleTasksDeleted}
                handleHideCompleted={props.handleHideCompleted}
                handleTaskListShared = {props.handleTaskListShared}
                handleTaskListUnShared={props.handleTaskListUnShared}
                isOwner = {props.isOwner}
                currentListSharedWith={props.currentListSharedWith}
                initial = {initial}

            />


        </div>);
    }
}

export default App;