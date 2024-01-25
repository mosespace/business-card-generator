"use client";
import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Image from "next/image";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

export default function Preview({
  side,
  companyName,
  cardOwner,
  cardOwnerPosition,
  ownerTelOne,
  companyWebsite,
  cardEmail,
  cardLocation,
  serviceOne,
  serviceTwo,
  serviceThree,
}) {
  const [getColor, setGetColor] = useState("#be123c");

  function updateColor(color) {
    setGetColor(color);
  }
  // console.log(side);
  return (
    <div className='w-full lg:w-4xl flex flex-col items-center justify-between'>
      {side === "back-side" ? (
        <div className='w-full max-w-lg h-72'>
          <div className='relative cursor-pointer transition-transform duration-500'>
            <div
              className={`w-full h-72 m-auto rounded-xl text-white shadow-2xl absolute`}
              // style={{ backgroundColor: getColor }}
            >
              <img
                src='https://i.ibb.co/LPLv5MD/Payment-Card-01.jpg'
                className='relative object-cover w-full h-full rounded-xl'
              />
              <div className='w-full px-8 absolute top-5'>
                <div className='text-left'>
                  <Image
                    width={360}
                    height={140}
                    placeholder='empty'
                    src='/npm-logo.png'
                    className='w-24 h-16 ml-auto object-contain'
                    alt='Client Logo'
                  />
                </div>
                <div className='pt-1'>
                  <p className='font-light'>{cardOwner}</p>
                  <p
                    id='imageCardNumber'
                    className='font-medium tracking-more-wider h-6'
                  >
                    {cardOwnerPosition}
                  </p>
                </div>
                <div className='pt-4 flex justify-between'>
                  {/* Content On The LeftSide */}
                  <div>
                    <p
                      id='imageCardName'
                      className='font-medium tracking-widest h-6'
                    >
                      {companyName}
                    </p>
                    <p className='font-light mt-1 flex items-center gap-2'>
                      <IoCallOutline className='w-4 h-4' />
                      {ownerTelOne}
                    </p>
                    <p className='font-light flex items-center gap-2'>
                      <RiGlobalLine className='w-4 h-4' />
                      {companyWebsite}
                    </p>
                    <p className='font-light flex items-center gap-2'>
                      <MdOutlineAttachEmail className='w-4 h-4' />
                      {cardEmail}
                    </p>
                  </div>

                  {/* Separator */}
                  <div className='border-r border-gray-300 h-full mx-4'></div>

                  {/* Content On The RightSide */}
                  <div>
                    <p className='font-medium tracking-wider h-6 w-14'>
                      {/* {cardLocation} */} Services;
                    </p>
                    <p className='font-light'>{serviceOne}</p>
                    <p className='font-light'>{serviceTwo}</p>
                    <p className='font-light'>{serviceThree}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full max-w-lg h-72'>
          <div className='relative cursor-pointer transition-transform duration-500'>
            <div
              className={`w-full h-72 m-auto rounded-xl text-white shadow-2xl px-10 flex flex-col gap-4 items-center justify-center`}
              style={{ backgroundColor: getColor }}
            >
              <Image
                width={360}
                height={140}
                placeholder='empty'
                src='/npm-logo.png'
                className='w-full object-contain h-14'
                alt='Client Logo'
              />
              <h2 className='font-bold text-xl'>{companyName}</h2>
            </div>
          </div>
        </div>
      )}

      <ColorPicker updateColor={updateColor} />
    </div>
  );
}
