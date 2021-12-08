
<<<<<<< HEAD

=======
>>>>>>> a75daee89c3e4a5c081009f7af3a983468149aee

VoiceOver Demo Video (per Lab 4): https://youtu.be/nocYTCVjTVI

* Our design decisions:
    * We decided to design a minimalist task list because we wanted it to be easy to use and view.
    * We also wanted to (somewhat) emulate a classic paper check list so we included checkboxes and strikethrough upon checking the task.
    * The button colors were changed to be less straining on the eyes; The blue-green buttons indicate creation and edit buttons (for tasks and lists while the red buttons indicate deletion buttons 
    * Buttons and textboxes were padded out vertically for easier visibility


* Alternative designs:
    * We wanted to have it so that the completed tasks would disappear from the screen upon checking it off. We scrapped the idea because creating that function was more complicated than we anticipated.


* Any user testing you did 
    * User testing was last done by two partcipants in the lab 3 iteration of the app.
    * No user testing done for lab 4 
    * No user testing done for lab 5 (though an informal demo was done with at least one person)


* Final design & Flow:

  ![Log-in page](https://github.com/acowe/cs124/blob/lab5/Lab5%20Login%20Screen.png)
  * If a user is not logged in, then they a brought to a login screen with a sign-in tab and a sign up tab
  * The user can either login with an account created within the sign-up tab or with Google
  ![Start page](https://github.com/acowe/cs124/blob/lab5/Starting%20Screen.png)
  * Upon successful login, the user is brought here
  * In the top-left corner, the logged in user's email or display name is displayed with a logout button and a verify email button
  * The start page has a textbox and a button to select create a list.
  ![Final Design (List created by user)](https://github.com/acowe/cs124/blob/lab5/List%20(Owned).png)
  * Our final design has menus at the top to select existing lists and how tasks should be sorted.
  * Below that, there are the tasks for that list which can be edited, and marked as completed. 
  * At the bottom, tasks can be created or completed tasks can be hidden or cleared.
  * At the very bottom, new lists can be created, and the current list that the user is on can be shared, unshared, or deleted
  * ![Final Design (List shared with user but not created by them)](https://github.com/acowe/cs124/blob/lab5/Shared%20but%20not%20primary%20owner.png)
  * In the case where a user has a list shared with them, they can add, edit, and remove tasks but they cannot delete the list 
  * In this case, the user cannot share the list either

* Challenges we faced 
    * Learning how to use collection and subcollection (accessing data, editing data, etc.)
    * Learning Google Firebase Security Rules Work



* Parts of the design we're most proud of:

    * We were proud of the strikethrough on checked items. It was a pretty creative idea by Giovanni.
<<<<<<< HEAD
    * We were also proud of the edit buttons we made to give the user a feeling of control over their tasks.
=======
    * We were also proud of the edit buttons we made to give the user a feeling of control over their tasks.
    * We were proud of the addition of number of tasks so sighted and non-sighted alike can have a sense of how many tasks are on their list
    * In the "Top" part of the app, the list of users that a current list is shared with is displayed, making it easy for users to keep track of sharing while using the list
>>>>>>> a75daee89c3e4a5c081009f7af3a983468149aee
