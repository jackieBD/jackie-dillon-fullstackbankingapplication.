export default function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);                
            });

    }, []);


    let dataHtml = ""

    for (let i=0; i < data.length; i++){
        dataHtml += `<p><b>Name:</b> ${data[i].name} <br>
                        <b>Email:</b> ${data[i].email} <br>
                        <b>Password:</b> ${data[i].password} <br>
                        <b>Balance:</b> ${data[i].balance} <br>
        
        </p>`
    }





    return (<div>
        <h5>All Data in Store:</h5>
        <div className = "dataCards"
        dangerouslySetInnerHTML = {{__html: dataHtml}}></div>
    </div>);
}
