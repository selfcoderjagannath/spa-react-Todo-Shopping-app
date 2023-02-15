import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FaEdit, FaDoorClosed, FaAd, FaAngleLeft } from 'react-icons/fa';

const Contact = () => {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        city: '',
        state: '',
        zip: '',
        editItem: false
    })
    const InputRef = useRef(null);

    useEffect(() => {
        InputRef.current.focus();
    }, [student.name])

    const [newEntry, setnewEntry] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        if (student.name && student.email && student.city && student.state && student.zip) {
            const newData = { student }
            setnewEntry([...newEntry, newData])
            setStudent({
                name: '',
                email: '',
                city: '',
                state: '',
                zip: '',
                editItem: false
            })
        } else {
            alert("please fill up the all fields value...")
        }
    }
    const deleteHandler = (id) => {
        const freshData = newEntry.filter((data, i) => i !== id)
        setnewEntry(freshData);
    }
    const editHandler = (id) => {
        const freshData = newEntry.filter((data, i) => i !== id)
        setnewEntry(freshData);
        const selectedItem = newEntry.find((value, i) => i === id)
        setStudent({
            name: selectedItem.student.name,
            email: selectedItem.student.email,
            city: selectedItem.student.city,
            state: selectedItem.student.state,
            zip: selectedItem.student.zip,
        })
    }

    return (
        <div className="container-fluid bg-warning text-light">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h3 className='m-4 text-secondary text-center'>Contact Page</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 m-auto">
                    <form onSubmit={submitHandler}>
                        <div className="form-group col-md-7 col-sm-12 m-auto mb-2">
                            <div className="row">
                                <div className="col-md-2 bg-success py-2"><label>Name</label></div>
                                <div className="col-md-10"><input ref={InputRef} type="text" className="form-control" id="inputEmail4" placeholder="Enter Your Name" name='name' value={student.name} onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} /></div>
                            </div>
                        </div>
                        <div className="form-group col-md-7 col-sm-12 m-auto mb-2">
                            <div className="row">
                                <div className="col-md-2 bg-success py-2"><label>Email</label></div>
                                <div className="col-md-10"><input type="email" className="form-control" id="inputEmail5" placeholder="xxxx@example.com" name='email' value={student.email} onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} /></div>
                            </div>
                        </div>
                        <div className="form-group col-md-7 m-auto mb-2">
                            <div className="row">
                                <div className="col-md-2 bg-success py-2"><label>City</label></div>
                                <div className="col-md-10"><input type="text" placeholder='Kolkata' className="form-control" id="inputCity" value={student.city} name='city' onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} /></div>
                            </div>
                        </div>
                        <div className="form-group col-md-7 m-auto mb-2">
                            <div className="row">
                                <div className="col-md-2 bg-success py-2"> <label>State</label></div>
                                <div className="col-md-10"><select id="inputState" className="form-control" value={student.state} name='state' onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} >
                                    <option>Choose...</option>
                                    <option>West Bengal</option>
                                    <option>Chennai</option>
                                    <option>Panjab</option>
                                    <option>Uttar Pradesh</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-7 m-auto mb-2">
                            <div className="row">
                                <div className="col-md-2 bg-success py-2"> <label>Zip</label></div>
                                <div className="col-md-10"><input type="text" placeholder='xxxxxx' className="form-control" id="inputZip" value={student.zip} name='zip' onChange={(e) => { setStudent({ ...student, [e.target.name]: e.target.value }) }} /></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button disabled={student.name ? false : true} type="submit" className={student.editItem === false ? "btn btn-primary btn-outline-light" : "btn btn-success btn-outline-light"}>{student.editItem === false ? <FaAd /> : <FaEdit />}</button>
                        <Link className="btn btn-danger mx-2" to={'/'} ><FaAngleLeft /></Link>
                        </div>
                    </form>
                    <div className='d-flex justify-content-center'>
                    <button className='btn btn-danger my-2' onClick={() => setnewEntry([])}>Clear List</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-7 col-xs-12 m-auto d-flex justify-content-center">
                    <table className="table bg-dark text-light">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className='text-start'>#</th>
                                <th scope="col" className='text-start'>Name</th>
                                <th scope="col" className='text-start'>Email</th>
                                <th scope="col" className='text-start'>City</th>
                                <th scope="col" className='text-start'>State</th>
                                <th scope="col" className='text-start'>Zip</th>
                                <th scope="col" className='text-start'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-secondary'>
                            {
                                newEntry.map((value, index) => (
                                    <tr key={index + 1}>
                                        <th className='text-start' scope="row">{index + 1}</th>
                                        <td className='text-start'>{value.student.name}</td>
                                        <td className='text-start'>{value.student.email}</td>
                                        <td className='text-start'>{value.student.city}</td>
                                        <td className='text-start'>{value.student.state}</td>
                                        <td className='text-start'>{value.student.zip}</td>
                                        <td className='text-start'><button onClick={(e) => deleteHandler(index)} className='btn btn-danger mx-2'><FaDoorClosed /></button>
                                        <button onClick={(e) => editHandler(index)} className='btn btn-success text-light'><FaEdit /></button></td>
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

export default Contact