import React, { useEffect, useState } from "react";
import Memecard from "../components/Card";
import { memesApi } from "../api/memesApi";
// import Edit from './Edit';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    memesApi().then((meme) => setData(meme.data.memes));
  }, []);

  return (
    // <div className="bg-gray-900 text-gray-300 min-h-screen">
    //   <div className="container mx-auto px-4 py-8">
    //     <h1 className="text-3xl font-bold text-white mb-8">Browse Memes</h1>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    //       {data.map((meme) => (
    //         <Memecard key={meme.id} img={meme.url} title={meme.name} />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Browse Memes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((meme) => (
            <Memecard key={meme.id} img={meme.url} title={meme.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
