import React from 'react'
import { useSearchParams } from 'react-router-dom' 

const Edit = () => {
  const [Params] = useSearchParams()
  const myParams = Params.get("url")
  console.log (myParams)

  // const [searchParams] = useSearchParams();
  // const urlParam = searchParams.get("url");
  // console.log(urlParam.split("/").pop())

  return (
    <div>
      I am Edit page
    </div>
  )
}

export default Edit
