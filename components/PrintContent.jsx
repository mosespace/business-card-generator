"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { RiGlobalLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useReactToPrint } from "react-to-print";

export default function PrintContent({ numberOfCards }) {
  const printRef = useRef();
  const router = useRouter();
  const cardsContent = Array.from({ length: numberOfCards }, (_, index) => (
    <div className=''>
      <div key={index} className='flex items-center justify-center px-0 py-8'>
        <div className='w-full lg:w-4xl flex items-center justify-center px-8 gap-4'>
          <div className='w-full max-w-lg h-72'>
            <div className='relative cursor-pointer transition-transform duration-500'>
              <div
                className={`w-full h-72 m-auto rounded-xl text-white shadow-2xl px-10 flex flex-col gap-4 items-center justify-center`}
                // style={{ backgroundColor: getColor }}
              >
                {/* <Image
                    width={360}
                    height={140}
                    placeholder='empty'
                    src='/npm-logo.png'
                    className='w-full object-contain h-14'
                    alt='Client Logo'
                  /> */}
                <h2 className='font-bold text-xl'>{"companyName"}</h2>
              </div>
            </div>
          </div>
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
                    <p className='font-light'>{"cardOwner"}</p>
                    <p
                      id='imageCardNumber'
                      className='font-medium tracking-more-wider h-6'
                    >
                      {"cardOwnerPosition"}
                    </p>
                  </div>
                  <div className='pt-4 flex justify-between'>
                    {/* Content On The LeftSide */}
                    <div>
                      <p
                        id='imageCardName'
                        className='font-medium tracking-widest h-6'
                      >
                        {"companyName"}
                      </p>
                      <p className='font-light mt-1 flex items-center gap-2'>
                        <IoCallOutline className='w-4 h-4' />
                        {"ownerTelOne"}
                      </p>
                      <p className='font-light flex items-center gap-2'>
                        <RiGlobalLine className='w-4 h-4' />
                        {"companyWebsite"}
                      </p>
                      <p className='font-light flex items-center gap-2'>
                        <MdOutlineAttachEmail className='w-4 h-4' />
                        {"cardEmail"}
                      </p>
                    </div>

                    {/* Separator */}
                    <div className='border-r border-gray-300 h-full mx-4'></div>

                    {/* Content On The RightSide */}
                    <div>
                      <p className='font-medium tracking-wider h-6 w-14'>
                        {/* {cardLocation} */} Services;
                      </p>
                      <p className='font-light'>{"serviceOne"}</p>
                      <p className='font-light'>{"serviceTwo"}</p>
                      <p className='font-light'>{"serviceThree"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const handlePrintClick = () => {
    if (printRef.current) {
      handlePrint();
      router.push("/");
    } else {
      // Show a toast error if invoiceRef is not defined
      alert("⚠️ BEFORE PRINTING NOTE THIS", {
        description:
          "Please create an invoice first and then proceed to the preview section before attempting to print. 🤗",
      });
    }
  };
  return (
    <div className=''>
      <div className='flex items-center justify-center'>
        <button
          onClick={handlePrintClick}
          className='mt-6 block select-none rounded-lg bg-gray-900 py-3 px-8 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
        >
          Print {numberOfCards} Cards🤗
        </button>
      </div>
      <div ref={printRef} className=''>
        {cardsContent}
      </div>
    </div>
  );
}
