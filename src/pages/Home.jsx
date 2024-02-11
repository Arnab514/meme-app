import React, {useEffect , useState} from 'react'
import MemeCard from '../components/Card'
import {memesApi} from '../api/memesApi'



const Home = () => {
  
  const [data , setData] = useState([])

  useEffect(() => {
    memesApi().then((meme) => setData(meme.data.memes))
  } , [])


  return (
    <div className='flex flex-wrap gap-6'>
      {data.map((elements) => <MemeCard img = {elements.url} title = {elements.name}/>
      )}

    </div>
  )
}

export default Home
