import React from 'react'

const GreetingCard = ({Title,Message}) => {
  return (
    <div className='flex flex-wrap justify-center'>
    <div className="flex gap-5 items-center border rounded-xl w-60 h-40 p-5 text-center bg-blue-200 py-5 my-5 hover:shadow-xl ">
        <div>
        <h1 className="text-2xl font-bold py-2">{Title}</h1>
        <p>{Message}</p>
        </div>
    </div>
    </div>
  )
}

export default GreetingCard