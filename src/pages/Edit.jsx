import React, {useState, createRef} from 'react'
import { Button } from '@material-tailwind/react';
import { useParams } from 'react-router';
import Inputfield from '../components/Inputfield';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Edit = () => {

  const memeRef = createRef()

  const { memeImageUrl } = useParams();
  const [count, setCount] = useState(0)
  
  const handleText = () => {
    setCount(count + 1)
  }
  
  
  return (

    //this is also responsive for mobile as well
    // <div className="flex flex-col items-center bg-blue-gray-800">
    //   <div ref={memeRef} className="meme mt-5 mb-5 w-full max-w-xl">
    //     <img src={memeImageUrl} alt="Meme" className="h-auto w-full" />
    //     {Array(count).fill(0).map((e, index) => (
    //       <Inputfield key={index} />
    //     ))}
    //   </div>
    //   <div className="flex flex-col md:flex-row gap-4">
    //     <Button onClick={handleText} color="blue">
    //       Add Text
    //     </Button>
    //     <Button
    //       variant="filled"
    //       onClick={() => exportComponentAsJPEG(memeRef)}
    //       color="green"
    //     >
    //       Save
    //     </Button>
    //   </div>
    // </div>

    <div className="flex flex-col items-center bg-blue-gray-800">
      <div ref={memeRef} className="meme mt-5 mb-5 w-full max-w-xl">
        <img src={memeImageUrl} alt="Meme" className="object-cover w-full h-full" />
        {Array(count).fill(0).map((e, index) => (
          <Inputfield key={index} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Button onClick={handleText} color="blue">
          Add Text
        </Button>
        <Button
          variant="filled"
          onClick={() => exportComponentAsJPEG(memeRef, { include: 'all', quality: 1 })}
          color="green"
        >
          Save
        </Button>
      </div>
    </div>

  )
}
export default Edit

// <div className="flex flex-col items-center">
    //   <div ref={memeRef} className="meme mt-5 mb-5 w-full max-w-xl">
    //     <img src={memeImageUrl} alt="Meme" className="h-auto w-full" />
    //     {Array(count).fill(0).map((e, index) => (
    //       <Inputfield key={index} />
    //     ))}
    //   </div>
    //   <div className="flex gap-4">
    //     <Button onClick={handleText} color="blue">
    //       Add Text
    //     </Button>
    //     <Button
    //       variant="filled"
    //       onClick={() => exportComponentAsJPEG(memeRef)}
    //       color="green"
    //     >
    //       Save
    //     </Button>
    //   </div>
    // </div>




// import React from 'react';
// import { useParams } from 'react-router';

// const Edit = () => {
//   const { memeImageUrl } = useParams();

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="max-w-md w-full mx-auto p-8 bg-white rounded shadow-lg">
//         <h1 className="text-2xl font-semibold mb-4">Edit Meme</h1>
//         <div className="flex justify-center mb-4">
//           <img src={memeImageUrl} alt="Meme" className="max-w-full h-auto" />
//         </div>
//         {/* Add additional editing options or controls here */}
//       </div>
//     </div>
//   );
// };

// export default Edit;

// import React from 'react';
// import { useParams } from 'react-router';

// const Edit = () => {
//   const { memeImageUrl } = useParams();

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
//       <div className="max-w-md w-full mx-auto p-8 bg-gray-800 rounded shadow-lg">
//         <h1 className="text-2xl font-semibold mb-4">Edit Meme</h1>
//         <div className="flex justify-center mb-4">
//           <img src={memeImageUrl} alt="Meme" className="max-w-full h-auto" />
//         </div>
//         {/* Add additional editing options or controls here */}
//       </div>
//     </div>
//   );
// };

// export default Edit;

// import React from 'react';
// import { useParams } from 'react-router';

// const Edit = () => {
//   const { memeImageUrl } = useParams();

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
//       <div className="max-w-md w-full mx-auto p-8 bg-gray-800 bg-opacity-80 rounded shadow-lg">
//         <h1 className="text-2xl font-semibold mb-4">Edit Meme</h1>
//         <div className="flex justify-center mb-4">
//           <img src={memeImageUrl} alt="Meme" className="max-w-full h-auto" />
//         </div>
//         {/* Add additional editing options or controls here */}
//       </div>
//     </div>
//   );
// };

// export default Edit;
