import React, { useEffect, useState } from "react";
import Memecard from "../components/Card";
import { memesApi } from "../api/memesApi";
// import Edit from './Edit';

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     memesApi().then((meme) => setData(meme.data.memes));
//   }, []);

//   return (
//     <div className="bg-gray-900 text-gray-300 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-white mb-8">Browse Memes</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 */}
//           {data.map((meme) => (
//             <Memecard key={meme.id} img={meme.url} title={meme.name} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     memesApi().then((meme) => setData(meme.data.memes));
//   }, []);

//   const handleSearchChange = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     // Filter memes based on search query
//     const filteredMemes = data.filter(meme => meme.name.toLowerCase().includes(query.toLowerCase()));
//     setSuggestions(filteredMemes);
//   };

//   return (
//     <div className="bg-gray-900 text-gray-300 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-white mb-8">Browse Memes</h1>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="Search for a meme..."
//           className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
//         />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {suggestions.map((meme) => (
//             <Memecard key={meme.id} img={meme.url} title={meme.name} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// const Home = () => {
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     fetchMemes();
//   }, []);

//   const fetchMemes = async () => {
//     try {
//       const memeData = await memesApi();
//       setData(memeData.data.memes);
//     } catch (error) {
//       console.error('Error fetching memes:', error);
//     }
//   };

//   const handleSearchChange = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     // Filter memes based on search query
//     const filteredMemes = data.filter(meme => meme.name.toLowerCase().includes(query.toLowerCase()));
//     setSuggestions(filteredMemes);
//   };

//   return (
//     <div className="bg-gray-900 text-gray-300 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-white mb-8">Browse Memes</h1>
//         <div className="flex justify-end mb-4">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search for a meme..."
//             className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
//           />
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {suggestions.map((meme) => (
//             <Memecard key={meme.id} img={meme.url} title={meme.name} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home

const Home = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    try {
      const memeData = await memesApi();
      const memes = memeData.data.memes;
      setData(memes);
      setSuggestions(memes); // Initialize suggestions with all memes
    } catch (error) {
      console.error('Error fetching memes:', error);
    }
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Filter memes based on search query
    const filteredMemes = data.filter(meme => meme.name.toLowerCase().includes(query.toLowerCase()));
    setSuggestions(filteredMemes);
  };

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white mb-8">Browse Memes</h1>
        <div className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a meme..."
            className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {suggestions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {suggestions.map((meme) => (
              <Memecard key={meme.id} img={meme.url} title={meme.name} />
            ))}
          </div>
        ) : (
          <p className="text-white">No memes found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;

