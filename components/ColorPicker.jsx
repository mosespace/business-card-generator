"use client";
import React, { useState } from "react";
import {
  CirclePicker,
  SketchPicker,
  SliderPicker,
  TwitterPicker,
} from "react-color";

export default function ColorPicker({ updateColor }) {
  const [currentColor, setCurrentColor] = useState("#ca8a04");

  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
    updateColor(currentColor);
    // console.log(color.hex);
  };
  return (
    <div className=''>
      <h1 className='font-bold text-white uppercase py-3'>
        Change Background Color Here
      </h1>
      <div className='mb-8 flex gap-4'>
        <SketchPicker color={currentColor} onChangeComplete={handleOnChange} />
        <div className='flex flex-col justify-between'>
          <TwitterPicker
            color={currentColor}
            onChangeComplete={handleOnChange}
          />
          <CirclePicker
            color={currentColor}
            onChangeComplete={handleOnChange}
          />
          <SliderPicker
            color={currentColor}
            onChangeComplete={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
}
