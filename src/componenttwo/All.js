import React, { useState } from 'react'
import Card from './Card'
import Course from './Course'
import CourseData from '../fakeData/CourseData'

const All = () => {
    const [course, setCourse] = useState(CourseData);
    const [cart, setCart] = useState([]);

    const buttonHandler = (course) => {
        const newCart = [...cart, course]
        setCart(newCart)
        setCourse(CourseData)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-lg-2 col-sm-12 bg-danger text-light my-2 text-center">
                    <Card cart={cart} />
                </div>
                <div className="col-md-10 col-sm-12">
                    <div className="row">
                        {
                            course.map((value, i) => {
                                return (
                                    <div key={i + 1} className="col-sm-6 col-md-3">
                                        <div className='shadow'>
                                            <Course course={value} buttonHandler={buttonHandler} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default All