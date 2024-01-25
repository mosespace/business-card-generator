"use client";
import React from "react";
import Image from "next/image";
import { BiSolidEditAlt } from "react-icons/bi";
import { UploadDropzone } from "@/utils/uploadthing";

export default function ImageInput({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full",
  endpoint = "imageUploader",
}) {
  return (
    <div className={className}>
      <div className='flex justify-between items-center my-4'>
        <label
          htmlFor='course-image'
          className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type='button'
            className='flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4'
          >
            <BiSolidEditAlt className='w-5 h-5' />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt='Product image'
          width={1000}
          height={667}
          className='w-full h-64 object-contain'
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
            // Do something with the response
            console.log("Files: ", res);
            console.log("Image Has Uploaded Sucessessfully");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            console.log("Image Has Failed Uploading");
            console.log(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
}
