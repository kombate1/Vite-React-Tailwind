import React from 'react'

const GreetingCard = ({Title,Message}) => {
  return (
    <div className="flex  items-center">
        <h1>{Title}</h1>
        <p>{Message}</p>
    </div>
  )
}

export default GreetingCard