import { input } from '@material-tailwind/react'
import React, { useState } from 'react'
import Draggable from 'react-draggable'

const Inputfield = () => {

    const [isEditable , setIsEditable] = useState(false)
    const [val , setVal] = useState("Double cLick on me")
    const [fontSize, setFontSize] = useState(16)
    
    const handleDoubleClick = () => {
      setIsEditable(!isEditable);
    };
  
    const handleChange = (e) => {
      setVal(e.target.value);
    };

    const handleFontSizeChange = (e) => {
      setFontSize(parseInt(e.target.value));
    };

    const handleTouchStart = () => {
      const now = new Date().getTime();
      if (isEditable && now - lastTap < 300) {
        setIsEditable(false);
      }
      lastTap = now;
    };
  
    let lastTap = 0;
  
    return (

      //this is also responsive for mobile as well
      <Draggable>
        <div className="relative" onDoubleClick={handleDoubleClick} onTouchStart={handleTouchStart}>
          {isEditable ? (
            <input
              value={val}
              onChange={handleChange}
              type="text"
              onBlur={() => setIsEditable(false)}
              className="bg-gray-200 rounded p-2 focus:outline-none text-base md:text-lg"
              style={{ fontSize: `${fontSize}px` }}
            />
          ) : (
            <h1
              className="font-bold text-base md:text-lg cursor-pointer"
              style={{ fontSize: `${fontSize}px` }}
            >
              {val}
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

  )
}
        

export default Inputfield