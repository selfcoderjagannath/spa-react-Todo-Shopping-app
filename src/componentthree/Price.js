import React from 'react'

const Price = (props) => {
  const newEntry = props.newEntryValue;
  const purchaseTotal = newEntry.reduce((sum, purchase) =>sum + purchase.price, 0)
  return (
    <div>
      <span>Total Number of Order:{newEntry.length}  and Price:{purchaseTotal}</span>
    </div>
  )
}

export default Price