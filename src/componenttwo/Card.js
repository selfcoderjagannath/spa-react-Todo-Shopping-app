import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Card = (props) => {
  const cart = props.cart
  const courseTotal = cart.reduce((sum, course) =>sum + course.Price, 0)
  return (
    <div className='mt-2'>
      <h4 className='my-3'>Order Details</h4>
      <h6>Total Item Order:{cart.length}</h6>
      <h6>Price:{courseTotal}</h6>
    </div>
  )
}

export default Card