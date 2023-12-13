import React from 'react'

const Error = ({mensaje}) => {
  return (

    <div className="bg-red-600 text-center rounded-xl p-2 mb-3">
              <p className="font-bold text-white uppercase m-2">{mensaje}</p>
            </div>
  )
}

export default Error
