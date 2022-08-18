function WelcomeBar(props){

    let welcomeMessage = `Welcome ${props.loggedInUser}!`

    function logOut(){
        props.setLoggedInUser("Guest")
    }


    return(
        <div className="welcome">
            {props.loggedInUser !== "Guest" && <button className="logBut" onClick={logOut}>Log Out</button>}
            {welcomeMessage}

            </div>
  
    );
  }