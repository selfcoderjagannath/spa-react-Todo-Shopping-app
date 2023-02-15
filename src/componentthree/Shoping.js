import React from 'react'
import { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CatagoryData from './CatagoryData'
import Price from './Price'
import uuid from 'react-uuid'

const Shoping = () => {
    const [data, setData] = useState(CatagoryData);
    const [newEntry, setNewEntry] = useState([]);

    const addHandler = (catItem) => {
        const result = CatagoryData.filter((value) => {
            return value.catagory === catItem;
        });
        setData(result)
    }
    const singleInfo = (receive) => {
        const newData = receive;
        setNewEntry([...newEntry, newData])
        console.log(newEntry);
    }

    return (
        <div>
            <h4 className='text-info text-center m-auto my-4 bg-dark py-1'>Let's Shop</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <button className="btn btn-primary w-100 mb-3" onClick={() => addHandler('Men')}>Men</button>
                        <button className="btn btn-primary w-100 mb-3" onClick={() => addHandler('Women')}>Women</button>
                        <button className="btn btn-primary w-100 mb-3" onClick={() => addHandler('Children')}>Children</button>
                        <button className="btn btn-primary w-100 mb-3" onClick={() => addHandler('Black')}>Black</button>
                        <button className="btn btn-primary w-100 mb-3" onClick={() => addHandler('White')}>White</button>
                        <button className="btn btn-primary w-100 mb-3" onClick={() => setData(CatagoryData)}>All</button>
                        <div>
                            <h4 className='btn btn-danger text-light w-100'>Order Details:</h4>
                            {
                                newEntry.map((i) => (
                                    <Price key={uuid()} newEntryValue={newEntry} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                data.map((value) => {
                                    const { title, price, image } = value;
                                    return (
                                        <div className="col-sm-4" key={uuid()}>
                                            <div className="card mb-4 shadow">
                                                <img src={image} className="m-auto mt-2 rounded-circle w-50" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title text-center"><u>{title}</u></h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <p className='text-center'>Price: <del>Rs 500=/</del><br />Price: {price}</p>
                                                    <div className="d-flex justify-content-center">
                                                        <button className="btn btn-dark" onClick={() => singleInfo(value)}>Bye Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoping;