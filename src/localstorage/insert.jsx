import React,{useState} from 'react'

export default function Insert() {
    const [name, setName] = useState("");


    const [employee, setEmployee] = useState([]);

    const [display, setDisplay] = useState([]);
    
    
    
    const Submit=()=>{
        console.log("Name : " +name)
        
        localStorage.setItem("Employee",name)
    }

    

    const Retrive=()=>{
        setDisplay(()=>JSON.parse(localStorage.getItem('Student_Name')))
    }

    const Delete= ()=>{
        localStorage.removeItem("Student_Name")
        alert("Delete Successfull")
    }
    
  return (
    <div>

        Name: <input type="text" onChange={(e)=>{setName(e.target.value)}}/><br /><br />
       
       
        <button onClick={Submit}>Submit</button> <br/><br/>


        <h2>Output : {display.map((item)=><h2>{item.name}</h2>)}</h2><br/>
        <button onClick={Retrive}>Retrive</button><br/><br/>
     
        <button onClick={Delete}>Delete</button><br/><br/>

    </div>
  )
}
