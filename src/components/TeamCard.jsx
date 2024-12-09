import React from 'react'

const TeamCard = ({ img, name, designation, position, socials }) => {
  return (
    <div className="bg-white rounded-lg p-6 text-center">
        <div className=''>
            <img
                src={img}
                alt={name}
                className="rounded-lg shadow-lg shadow-gray-500/25"
            />
            <h5 className="text-2xl font-semibold text-gray-800 mt-6 mb-1">
                {name}
            </h5>
            <p className="text-md font-bold text-gray-700">
                  {designation}
            </p>
            <p className="text-md font-bold text-gray-500">
                {position}
             </p>
            {socials && <div className="mt-5">{socials}</div>}
      </div>
    </div>
  )
}

export default TeamCard
