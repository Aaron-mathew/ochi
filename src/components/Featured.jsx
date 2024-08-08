import React from 'react'

const Featured = () => {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl font-["Neue Montreal"] tracking-tight'>Featured projects</h1>
        </div>
        <div>
          <div className="cards w-full flex gap-10 mt-10">
                <div className='card w-1/2 h-[80vh] bg-red-500'></div>
                <div className='card w-1/2 h-[80vh] bg-red-500'></div>
          </div>
        </div>
    </div>
  )
}

export default Featured

