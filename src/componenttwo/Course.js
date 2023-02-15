import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Course = (props) => {
  const { name, title, Price } = props.course;

  return (
    <div className="card bg-warning my-2">
      <div className="card-body">
        <h5 className="card-title text-start">Course Name:{name}</h5>
        <h5 className="card-title text-start">Course Title:{title}</h5>
        <h5 className="card-title text-start">Course Price:{Price}</h5>
        <p className="card-text text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus perferendis dolore sit adipisci suscipit numquam?</p>
        <div className="d-flex justify-content-center">
          <button className='btn btn-success' type="button" onClick={() => (props.buttonHandler(props.course))}>Add Item</button>
        </div>
      </div>
    </div>
  )
}

export default Course