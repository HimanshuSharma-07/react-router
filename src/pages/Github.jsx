import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
      fetch('https://api.github.com/users/himanshusharma-07')
        .then(res => res.json())
        .then(data => setData(data) )

    }, [])
    

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col justify-center items-center gap-4'>
         <img className='rounded-[50%] w-60 ' src={data.avatar_url} alt="" />
        Github Followers : {data.followers}
    </div>
       
  )
}

export default Github