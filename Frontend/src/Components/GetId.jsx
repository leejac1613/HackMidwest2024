import React, {useState,useEffect} from 'react'
import axios from 'axios'

function GetID() {
    //Define run
    const[getID, setID] = useState({
        id: '',
        title: '',
        start: '',
        end: '',
        miles: '',
        location: ''
    })
    const[getUser, setUser] = useState({
        id: '',
        title: '',
        start: '',
        end: '',
        miles: '',
        location: ''
    })
    //Get runs based on user input
    const[val,setVal] = useState('')
    const click = async () => {
        try{
        const data = await axios.get(`http://localhost:8080/${val}`);
        setID(data.data)
        } catch(error){
            alert("ID does not exist!")
        }
    }
    const change = event => {
        setVal(event.target.value)
    }


    const onSubmit = async (e) =>{
        e.preventDefault()
        await axios.post("http://localhost:8080/addRun", getUser)
    }

    return (
        <div className = "getID">
            <input onChange = {change} value = {val}/>
            <button onClick = {click}>Click Me</button>
            <p>
                {getID.id}
                <br></br>
                {getID.title}
                <br></br>
                {getID.start}
                <br></br>
                {getID.end}
                <br></br>
                {getID.miles}
                <br></br>
                {getID.location}
            </p>
            {/* <button type = "submit" className = "btn btn-primary">
                Submit
            </button> */}
        </div>
    )
}

export default GetID;