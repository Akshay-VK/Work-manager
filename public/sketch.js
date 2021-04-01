// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyC7MI0aylw4eqsZVFxVtQaeGjvbHWmkzmM",
authDomain: "work-manager-4e272.firebaseapp.com",
projectId: "work-manager-4e272",
storageBucket: "work-manager-4e272.appspot.com",
messagingSenderId: "141419354399",
appId: "1:141419354399:web:706dc3cec36f7d88ed382a",
measurementId: "G-1LPN75V321"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if(user){
        
        console.log('signed in.');
        var html = `
        <nav>
      <table>
        <tr>
          <td style="text-align: left;padding-left:50px;"><img id='userImage' src=''></td>
          <td style="text-align: center;">WORK MANAGER</td>
          <td style="text-align: right;"><button class="btn btn-primary" type="submit" onclick="auth.signOut();">Sign out</button></td>
        </tr>
      </table>
    </nav>
    <div id ="idea">
      Ideas
      <div class="list-group">
        <div class="list-group-item list-group-item-action">Dapibus ac facilisis in</div>
        <div class="list-group-item list-group-item-action list-group-item-warning">Idea</div>
      </div>
    </div>
    </div>
    <div id ="todo">Todos
      <div class="list-group">
        <div class="list-group-item list-group-item-action">Dapibus ac facilisis in</div>
      
        <div class="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item</div>
        <div class="list-group-item list-group-item-action list-group-item-success">This is a success list group item</div>
      </div>
    </div>
    </div>
    <div id = "delays">Delays
      <div class="list-group">
        <div class="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</div>
        </div>
    </div>
    <div id = "footer">
      <table>
        <tr>
          <td style="width:95%;">NOTES/ADDER</td>
          <td><button class="btn btn-primary" type="submit">Add</button></td>
        </tr>
      </table><br>
      <div class="list-group">
        <div class="list-group-item list-group-item-action list-group-item-dark">Just for reminding that dark is there</div>
      </div>
    </div>
        `;
        document.getElementById('main').innerHTML = html;
        document.getElementById('userImage').src=`${user.photoURL}`;
        
    }else{
        console.log('not signed in.');
        document.getElementById('main').innerHTML = 
        `<button class="btn btn-primary" type="submit" id = 'signinbutton' onclick="auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())">Sign in.</button>`;
    
    }
});

