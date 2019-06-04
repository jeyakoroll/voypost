import React from 'react'

const Trip = ({ trip: { fromName, toName, date, vehicle } }) => (
  <div className="list-item">
    <h3 className="list-item_from">{ fromName }</h3>
    <h4 className="list-item_to">{ toName }</h4>
    <p className="list-item_date">{ date }</p>
    <p className="list-item_how">{ vehicle }</p>
  </div>
)

export default Trip;