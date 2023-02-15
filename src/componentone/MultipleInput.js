import React, { useState, useRef, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { FaEdit, FaDoorClosed, FaAd, FaAngleLeft } from 'react-icons/fa';

const MultipleInput = () => {
    const [item, setItem] = useState({
        name: '',
        age: '',
        email: '',
        contact: '',
        isEdit: false
    });

    const [newEntry, setNewEntry] = useState([]);
    const InputRef = useRef(null);

    useEffect(() => {
        InputRef.current.focus();
    }, [item.name])

    const itemHandler = (e) => {
        e.preventDefault();
        if (item.name && item.age && item.email && item.contact) {
            const newData = { name: item.name, age: item.age, email: item.email, contact: item.contact }
            setNewEntry([...newEntry, newData])
            setItem({
                name: '',
                age: '',
                email: '',
                contact: '',
                isEdit: false
            })
        } else {
            alert("please fill up the all fields value...")
        }
    }
    const deleteHandler = (id) => {
        const newInfo = newEntry.filter((value, i) => id !== i)
        setNewEntry(newInfo)
    }
    const editHandler = (id) => {
        // console.log('clicked', id);
        const newDaata = newEntry.filter((item, i) => i !== id)
        setNewEntry(newDaata);
        const selectedItem = newEntry.find((item, i) => i === id)
        setItem({
            name: selectedItem.name,
            age: selectedItem.age,
            email: selectedItem.email,
            contact: selectedItem.contact
        })
    }

    return (
        <div className="container-fluid my-4">
            <div className='row'>
                <div className='col-md-6'>
                    <form onSubmit={itemHandler}>
                        <div className='d-flex my-2 py-2'>
                            <label className='form-label mx-3'>Name:</label>
                            <input type="text" ref={InputRef} className='form-control' placeholder='Enter Your Name' name='name' value={item.name} onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} />
                        </div>
                        <div className='d-flex my-2 py-2'>
                            <label className='ml-auto mx-4'>Age:</label>
                            <input type="number" className='form-control' placeholder='Enter Your Age' name='age' value={item.age} onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} />
                        </div>
                        <div className='d-flex my-2 py-2'>
                            <label className='ml-auto mx-3'>Email:</label>
                            <input type="email" className='form-control' placeholder='Enter Your Email' name='email' value={item.email} onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} />
                        </div>
                        <div className='d-flex my-2 py-2'>
                            <label className='ml-auto mx-2'>Contact:</label>
                            <input type="text" className='form-control' placeholder='Enter Your Number' name='contact' value={item.contact} onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} />
                        </div>
                        <button disabled={item.name ? false : true} className={item.isEdit === false ? "btn btn-primary" : "btn btn-success"} type="submit">{item.isEdit === false ? <FaAd /> : <FaEdit />}</button>
                        <Link className="btn btn-danger my-4 m-2" to={'/'} ><FaAngleLeft /></Link>
                    </form>
                </div>
                <div className='col-md-6'>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newEntry.map((value, index) => (
                                    <tr key={index + 1}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.email}</td>
                                        <td>{value.contact}</td>
                                        <td>
                                            <button onClick={(e) => deleteHandler(index)} className='btn btn-danger mx-1'><FaDoorClosed /></button>
                                            <button onClick={(e) => editHandler(index)} className='btn btn-success ml-auto'><FaEdit /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MultipleInput