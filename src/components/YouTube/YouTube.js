import React from 'react'

const YouTube = () => {
  return (
    <div className='flex items-center justify-center mb-10 mt-10 pl-10 sm:pl-0 pr-10 sm:pr-0'>
        <iframe className='shadow-2xl rounded-lg ' width="700" height="350" src="https://www.youtube.com/embed/MktZEf12qDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default YouTube