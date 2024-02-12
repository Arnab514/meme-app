import React from 'react'
import { useParams } from 'react-router-dom' 

const Edit = () => {
  const {url} = useParams()
  console.log(url)
  
  return (
    <div>
      <img src= {url}  />
    </div>
  )
}

export default Edit
