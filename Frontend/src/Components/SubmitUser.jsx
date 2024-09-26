import React, {useState,useEffect} from 'react'
import axios from 'axios'

function SubmitUser() {
    const [post, setPost] = useState({
        id: '',
        title: '',
        start: '',
        end: '',
        miles: '',
        location: ''
    });

    function handleSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:8080/addRun", post)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    return (
        <div className = "getID">
            <form action={handleSubmit}>
                <input type = {'text'}
                className='form-control'
                placeholder='Enter your id'
                name = "id"
                value = {post.id}
                onChange = {e => {setPost({...post, id: e.target.value});
                console.log(post)
                }}
                />
                <input type = "text"
                className='form-control'
                placeholder='Enter your title'
                name = "title"
                value = {post.title}
                onChange = {e => {setPost({...post, title: e.target.value});
                }}
                />
                <input type = {"text"}
                className='form-control'
                placeholder='Enter your start time'
                name = "start time"
                value = {post.start}
                onChange = {e => {setPost({...post, start: e.target.value});
            }}
                />
                <input type = {"text"}
                className='form-control'
                placeholder='Enter your end time'
                name = "tiend timetle"
                value = {post.end}
                onChange = {e => {setPost({...post, end: e.target.value});
            }}
                />
                <input type = {"text"}
                className='form-control'
                placeholder='Enter your total miles'
                name = "miles"
                onChange = {e => {setPost({...post, miles: e.target.value});
                }}
                />
                <select onChange = {e => {setPost({...post, location: e.target.value});
                console.log(post)}} name = "location" className='form-select'>
                    <option defaultValue= ''>Select Menu</option>
                    <option value = "INDOOR">Indoor</option>
                    <option value = "OUTDOOR">Outdoor</option>
                </select>
            </form>
            <button onClick = {(e) => handleSubmit(e)} className = "btn btn-primary">
                Submit
            </button>
        </div>
    )
}

export default SubmitUser;