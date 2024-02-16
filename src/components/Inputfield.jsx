// import { input } from "@material-tailwind/react";
import React, { useState } from "react";
import Draggable from "react-draggable";

const Inputfield = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [val, setVal] = useState("Double click or tap on me");
  const [fontSize, setFontSize] = useState(16);

  const handleClick = () => {
    if (!isMobile()) {
      const now = new Date().getTime();
      if (now - lastTap < 300) {
        setIsEditable(true);
      }
      lastTap = now;
    } else {
      setIsEditable(true);
    }
  };

  const handleTouchStart = () => {
    if (isMobile()) {
      const now = new Date().getTime();
      if (now - lastTap < 300) {
        setIsEditable(true);
      }
      lastTap = now;
    }
  };

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  const handleBlur = () => {
    setIsEditable(false);
    // Trim the value to remove leading and trailing white spaces
    setVal(val.trim());
  };

  const isMobile = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  let lastTap = 0;

  return (
    <Draggable>
      <div className="relative" onClick={handleClick} onTouchStart={handleTouchStart}>
        {isEditable ? (
          <textarea
            value={val}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-gray-200 rounded p-2 focus:outline-none text-base md:text-lg"
            style={{ fontSize: `${fontSize}px` }}
          />
        ) : (
          <h1
            className="font-bold text-base md:text-lg cursor-pointer"
            style={{ fontSize: `${fontSize}px` }}
          >
            {val.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </h1>
        )}
        {isEditable && (
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <input
              type="number"
              value={fontSize}
              onChange={handleFontSizeChange}
              min="12"
              max="48"
              className="w-16 px-2 py-1 text-sm bg-gray-200 rounded focus:outline-none"
              />
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Inputfield;


// const Inputfield = () => {
//   const [isEditable, setIsEditable] = useState(false);
//   const [val, setVal] = useState("Double click or tap on me");
//   const [fontSize, setFontSize] = useState(16);

//   const handleClick = () => {
//     if (!isMobile()) {
//       const now = new Date().getTime();
//       if (now - lastTap < 300) {
//         setIsEditable(true);
//       }
//       lastTap = now;
//     } else {
//       setIsEditable(true);
//     }
//   };

//   const handleTouchStart = () => {
//     if (isMobile()) {
//       const now = new Date().getTime();
//       if (now - lastTap < 300) {
//         setIsEditable(true);
//       }
//       lastTap = now;
//     }
//   };

//   const handleChange = (e) => {
//     setVal(e.target.value);
//   };

//   const handleFontSizeChange = (e) => {
//     setFontSize(parseInt(e.target.value));
//   };

//   const handleBlur = () => {
//     setIsEditable(false);
//     // Trim the value to remove leading and trailing white spaces
//     setVal(val.trim());
//   };

//   const isMobile = () => {
//     return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//   };

//   let lastTap = 0;

//   return (
//     <Draggable>
//       <div className="relative" onClick={handleClick} onTouchStart={handleTouchStart}>
//         {isEditable ? (
//           <textarea
//             value={val}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="bg-gray-200 rounded p-2 focus:outline-none text-base md:text-lg"
//             style={{ fontSize: `${fontSize}px` }}
//           />
//         ) : (
//           <h1
//             className="font-bold text-base md:text-lg cursor-pointer"
//             style={{ fontSize: `${fontSize}px` }}
//           >
//             {val.split('\n').map((line, index) => (
//               <React.Fragment key={index}>
//                 {index > 0 && <br />}
//                 {line}
//               </React.Fragment>
//             ))}
//           </h1>
//         )}
//         {isEditable && (
//           <div className="absolute top-0 right-0 mt-2 mr-2">
//             <input
//               type="number"
//               value={fontSize}
//               onChange={handleFontSizeChange}
//               min="12"
//               max="48"
//               className="w-16 px-2 py-1 text-sm bg-gray-200 rounded focus:outline-none"
//             />
//           </div>
//         )}
//       </div>
//     </Draggable>
//   );
// };


// const Inputfield = () => {
//   const [isEditable, setIsEditable] = useState(false);
//   const [val, setVal] = useState("Double cLick on me");
//   const [fontSize, setFontSize] = useState(16);

//   const handleMouseDown = () => {
//     const now = new Date().getTime();
//     if (now - lastTap < 300) {
//       setIsEditable(true);
//     }
//     lastTap = now;
//   };

//   const handleTouchStart = () => {
//     const now = new Date().getTime();
//     if (now - lastTap < 300) {
//       setIsEditable(true);
//     }
//     lastTap = now;
//   };

//   const handleChange = (e) => {
//     setVal(e.target.value);
//   };

//   const handleFontSizeChange = (e) => {
//     setFontSize(parseInt(e.target.value));
//   };

//   const handleBlur = () => {
//     setIsEditable(false);
//     // Trim the value to remove leading and trailing white spaces
//     setVal(val.trim());
//   };

//   let lastTap = 0;

//   return (
//     <Draggable>
//       <div className="relative" onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
//         {isEditable ? (
//           <textarea
//             value={val}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="bg-gray-200 rounded p-2 focus:outline-none text-base md:text-lg"
//             style={{ fontSize: `${fontSize}px` }}
//           />
//         ) : (
//           <h1
//             className="font-bold text-base md:text-lg cursor-pointer"
//             style={{ fontSize: `${fontSize}px` }}
//           >
//             {val.split('\n').map((line, index) => (
//               <React.Fragment key={index}>
//                 {index > 0 && <br />}
//                 {line}
//               </React.Fragment>
//             ))}
//           </h1>
//         )}
//         {isEditable && (
//           <div className="absolute top-0 right-0 mt-2 mr-2">
//             <input
//               type="number"
//               value={fontSize}
//               onChange={handleFontSizeChange}
//               min="12"
//               max="48"
//               className="w-16 px-2 py-1 text-sm bg-gray-200 rounded focus:outline-none"
//             />
//           </div>
//         )}
//       </div>
//     </Draggable>
//   );
// };



// const Inputfield = () => {
//   const [isEditable, setIsEditable] = useState(false);
//   const [val, setVal] = useState("Double cLick on me");
//   const [fontSize, setFontSize] = useState(16);

//   const handleClick = () => {
//     const now = new Date().getTime();
//     if (now - lastTap < 300) {
//       setIsEditable(true);
//     }
//     lastTap = now;
//   };

//   const handleChange = (e) => {
//     setVal(e.target.value);
//   };

//   const handleFontSizeChange = (e) => {
//     setFontSize(parseInt(e.target.value));
//   };

//   const handleBlur = () => {
//     setIsEditable(false);
//     // Trim the value to remove leading and trailing white spaces
//     setVal(val.trim());
//   };

//   let lastTap = 0;

//   return (
//     <Draggable>
//       <div className="relative">
//         {isEditable ? (
//           <textarea
//             value={val}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="bg-gray-200 rounded p-2 focus:outline-none text-base md:text-lg"
//             style={{ fontSize: `${fontSize}px` }}
//           />
//         ) : (
//           <h1
//             className="font-bold text-base md:text-lg cursor-pointer"
//             onClick={handleClick}
//             style={{ fontSize: `${fontSize}px` }}
//           >
//             {val.split('\n').map((line, index) => (
//               <React.Fragment key={index}>
//                 {index > 0 && <br />}
//                 {line}
//               </React.Fragment>
//             ))}
//           </h1>
//         )}
//         {isEditable && (
//           <div className="absolute top-0 right-0 mt-2 mr-2">
//             <input
//               type="number"
//               value={fontSize}
//               onChange={handleFontSizeChange}
//               min="12"
//               max="48"
//               className="w-16 px-2 py-1 text-sm bg-gray-200 rounded focus:outline-none"
//             />
//           </div>
//         )}
//       </div>
//     </Draggable>
//   );
// };

//this is also responsive for mobile as well
// <Draggable>
//   <div className="relative" onDoubleClick={handleDoubleClick} onTouchStart={handleTouchStart}>
//     {isEditable ? (
//       <input
//         value={val}
//         onChange={handleChange}
//         type="text"
//         onBlur={() => setIsEditable(false)}
//         className="bg-gray-200 rounded p-2 focus:outline-none text-base md:text-lg"
//         style={{ fontSize: `${fontSize}px` }}
//       />
//     ) : (
//       <h1
//         className="font-bold text-base md:text-lg cursor-pointer"
//         style={{ fontSize: `${fontSize}px` }}
//       >
//         {val}
//       </h1>
//     )}
//     {isEditable && (
//       <div className="absolute top-0 right-0 mt-2 mr-2">
//         <input
//           type="number"
//           value={fontSize}
//           onChange={handleFontSizeChange}
//           min="12"
//           max="48"
//           className="w-16 px-2 py-1 text-sm bg-gray-200 rounded focus:outline-none"
//         />
//       </div>
//     )}
//   </div>
// </Draggable>

//   <Draggable>
//   <div className="relative">
//     {isEditable ? (
//       <input
//         value={val}
//         onChange={handleChange}
//         type="text"
//         onBlur={() => setIsEditable(false)}
//         className="bg-gray-200 rounded p-2 focus:outline-none text-base md:text-lg"
//         style={{ fontSize: `${fontSize}px` }}
//       />
//     ) : (
//       <h1
//         className="font-bold text-base md:text-lg cursor-pointer"
//         onDoubleClick={handleDoubleClick}
//         style={{ fontSize: `${fontSize}px` }}
//       >
//         {val}
//       </h1>
//     )}
//     {isEditable && (
//       <div className="absolute top-0 right-0 mt-2 mr-2">
//         <input
//           type="number"
//           value={fontSize}
//           onChange={handleFontSizeChange}
//           min="12"
//           max="48"
//           className="w-16 px-2 py-1 text-sm bg-gray-200 rounded focus:outline-none"
//         />
//       </div>
//     )}
//   </div>
// </Draggable>
