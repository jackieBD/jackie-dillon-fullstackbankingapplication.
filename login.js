function Login(props){
  const [status, setStatus] = React.useState(false);    


  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={<LoginForm setLoggedInUser={props.setLoggedInUser} setStatus={setStatus}/>}
      />
  )
  
}

// function LoginMsg(props){
//   return(<>
//     <h5>Success</h5>
//     <button type="submit" 
//       className="btn btn-light" 
//       onClick={() => props.setShow(false)}>
//         Authenticate again
//     </button>
//   </>);
// }

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [success, setSuccess] = React.useState(true)
  let success

  function handle(){
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            console.log('success:', data)
            props.setLoggedInUser(data.name)
            // React.useEffect(()=>{
            // success = "Success!"}, [success])
            // console.log(success)  

            // props.setShow(true);


        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }


    });
  }


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>

   
  </>);
}