"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SiSlideshare } from "react-icons/si";
import TextInput from "./form_inputs/TextInput";
import ImageInput from "./form_inputs/ImageInput";
import { BiSolidCreditCardFront } from "react-icons/bi";

export default function Form({ toggleMode, updateData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [currentDisplay, setCurrentDisplay] = useState("front-side");

  const tabs = [
    {
      type: "front-side",
      title: "Front Side",
      icon: SiSlideshare,
    },
    {
      type: "back-side",
      title: "Back Side",
      icon: BiSolidCreditCardFront,
    },
  ];

  const companyName = watch("companyName");
  // console.log(companyName);
  updateData(companyName);

  async function onSubmit(data) {
    data.companyName = companyName;
    console.log(data);
    // data.logo = logoUrl;

    // makePostRequest(setLoading, "api/market", data, "market", reset, redirect);
    // setLogoUrl("");
  }

  return (
    <div className='flex flex-col items-center text-gray-900'>
      <div className='flex justify-center items-center border-gray-200 w-full'>
        <ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
          <li className='me-2'></li>

          <li className='me-2'>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentDisplay(tab.type);
                  toggleMode(tab.type);
                }}
                className={
                  currentDisplay === tab.type
                    ? "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                    : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                }
              >
                <tab.icon className='w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300' />
                {tab.title}
              </button>
            ))}
          </li>

          <li>
            <Link
              href='/#'
              className='inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500'
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      {currentDisplay == "front-side" && (
        <div className='relative mt-6 flex flex-col bg-transparent shadow-none rounded-xl bg-clip-border'>
          <h4 className='block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
            Edit Front Side
          </h4>
          <p className='block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700'>
            Nice to meet you! Enter your details to register.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='max-w-screen-lg w-full mt-8 mb-2 sm:w-96'
          >
            <TextInput
              label='Company Logo Name'
              name='companyName'
              register={register}
              errors={errors}
              isRequired={true}
            />
            <ImageInput
              label='Company Logo'
              name='companyLogo'
              register={register}
              errors={errors}
              isRequired={true}
              endpoint='logoUploader'
            />
            <p className='flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700'>
              I agree that the above provided
              <a
                href='#'
                className='font-medium transition-colors hover:text-gray-900'
              >
                &nbsp;Information is true and mine
              </a>
            </p>
            <button className='mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
              Save Changes
            </button>
          </form>
        </div>
      )}

      {currentDisplay == "back-side" && (
        <div className='relative mt-6 flex flex-col bg-transparent shadow-none rounded-xl bg-clip-border'>
          <h4 className='block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
            Edit Back Side
          </h4>
          <p className='block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700'>
            Nice to meet you! Enter your details to register.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='max-w-screen-lg w-full mt-8 mb-2 sm:w-96'
          >
            <TextInput
              label='Company Name'
              name='companyName'
              register={register}
              errors={errors}
              isRequired={true}
            />
            <TextInput
              label='Card Owner'
              name='cardOwner'
              register={register}
              errors={errors}
              isRequired={true}
            />
            <TextInput
              label='Tel Phone (01)'
              name='cardOwner'
              type='tel'
              register={register}
              errors={errors}
              isRequired={true}
            />
            <TextInput
              label='Tel Phone (02)'
              name='cardOwner'
              type='tel'
              register={register}
              errors={errors}
              isRequired={true}
            />
            <TextInput
              label='Email Address'
              name='cardOwner'
              type='email'
              register={register}
              errors={errors}
              isRequired={true}
            />
            <TextInput
              label='Business Location'
              name='cardOwner'
              register={register}
              errors={errors}
              isRequired={true}
            />
            <label
              className='mt-px font-light text-gray-700 cursor-pointer select-none'
              htmlFor='remember'
            >
              <p className='flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700'>
                I agree that the above provided
                <a
                  href='#'
                  className='font-medium transition-colors hover:text-gray-900'
                >
                  &nbsp;Information is true and mine
                </a>
              </p>
            </label>
            <button className='mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
