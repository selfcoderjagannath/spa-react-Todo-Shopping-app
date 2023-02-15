import React from 'react';
import { useState, useRef, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import uuid from 'react-uuid'
import { FaEdit, FaDoorClosed, FaAd } from 'react-icons/fa';

const TodoList = () => {
    const [name, setName] = useState({
        name: '',
        editItem: false
    })
    const [newEntry, setNewEntry] = useState([])
    const InputRef = useRef(null);

    useEffect(() => {
        InputRef.current.focus();
    }, [name.editItem])

    const addHandler = (e) => {
        e.preventDefault();
        if (name.name) {
            const newData = { name };
            setNewEntry([...newEntry, newData])
            setName({
                name: '',
                editItem: false
            })
        } else {
            alert("Enter some text before hit the add button")
        }

    }
    const deleteHandler = (id) => {
        const newInfo = newEntry.filter((item, i) => i !== id)
        setNewEntry(newInfo);
    }
    const hitHandler = (e) => {
        if (e.key === 'Enter') {
            const newData = { name };
            setNewEntry([...newEntry, newData])
            setName({
                name: '',
                editItem: false
            })
        }
    }

    const selectHandler = (id) => {
        const newInfo = newEntry.filter((item, i) => i !== id)
        setNewEntry(newInfo);
        const selectedItem = newEntry.find((item, i) => i === id)
        setName({ name: selectedItem.name.name });

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 m-auto d-flex my-4">
                    <input type='text' ref={InputRef} onKeyDown={hitHandler} placeholder='Please Enter some text' name='name' className='form-control' value={name.name} onChange={(e) => { setName({ ...name, [e.target.name]: e.target.value }) }} />
                    <button disabled={name.name ? false : true} onClick={addHandler} className={name.editItem === false ? "btn btn-primary ml-auto mx-1" : "btn btn-success ml-auto mx-1"}>{name.editItem === false ? <FaAd /> : <FaEdit />}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7 m-auto">
                    {
                        newEntry.map((item, index) => (
                            <div className="card" key={uuid()}>
                                <div className="card-body bg-secondary text-light">
                                    <div className="row">
                                        <div className="col-md-9 col-sm-9 col-xs-6 m-auto d-flex">
                                            <h5 className="card-title-left">{item.name.name}</h5>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-6 m-auto d-flex justify-content-end">
                                            <button className="btn btn-danger ml-auto" onClick={(e) => deleteHandler(index)}><FaDoorClosed /></button>
                                            <button className="btn btn-success mx-1" onClick={(e) => selectHandler(index)}><FaEdit /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="d-flex justify-content-center">
                        <button disabled={name.name ? true : false} className={name.editItem === false ? "btn btn-danger" : "btn btn-success"} onClick={() => setNewEntry([])}>Clear List</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default TodoList