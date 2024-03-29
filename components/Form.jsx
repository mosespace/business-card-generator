"use client";
import Link from "next/link";
import Modalz from "./Modalz";
import React, { useState } from "react";
import { BiData } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { SiSlideshare } from "react-icons/si";
import TextInputs from "./form_inputs/TextInputs";
import { GrFormPrevious } from "react-icons/gr";
import ImageInput from "./form_inputs/ImageInput";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidCreditCardFront } from "react-icons/bi";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { setCurrentSlide, updateFormData } from "@/redux/slices/cardSidesSlice";
import { useRouter } from "next/navigation";

export default function Form({
  toggleMode,
  updateComponyName,
  updateComponyLogo,
  updateCardOwner,
  updateOwnerTelOne,
  updateCompanyWebsite,
  updateCardEmail,
  updateCardLocation,
  updateCardOwnerPosition,
  updateServiceOne,
  updateServiceTwo,
  updateServiceThree,
  updateNumberOfCards,
}) {
  const currentSide = useSelector((store) => store.sideChange.currentSlide);
  // console.log(currentSide);
  const globalData = useSelector((store) => store.sideChange.formData);
  // console.log(globalData, currentSide);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...globalData,
    },
  });

  const [currentDisplay, setCurrentDisplay] = useState(currentSide);
  const [logo, setLogo] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [numberOfCards, setNumberOfCards] = useState(0);

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
  const cardOwner = watch("cardOwner");
  const ownerTelOne = watch("ownerTelOne");
  const companyWebsite = watch("companyWebsite");
  const cardEmail = watch("cardEmail");
  const cardLocation = watch("cardLocation");
  const cardOwnerPosition = watch("cardOwnerPosition");
  const serviceOne = watch("serviceOne");
  const serviceTwo = watch("serviceTwo");
  const serviceThree = watch("serviceThree");
  // const cardOwner = watch("cardOwner");

  updateComponyName(companyName);
  updateComponyLogo(logo);
  updateCardOwner(cardOwner);
  updateOwnerTelOne(ownerTelOne);
  updateCompanyWebsite(companyWebsite);
  updateCardEmail(cardEmail);
  updateCardLocation(cardLocation);
  updateCardOwnerPosition(cardOwnerPosition);
  updateServiceOne(serviceOne);
  updateServiceTwo(serviceTwo);
  updateServiceThree(serviceThree);

  const dispatch = useDispatch();
// console.log(logo)
  async function onSubmit(data) {
    data.companyLogo = logo;
    dispatch(updateFormData(data));
    dispatch(setCurrentSlide("back-side"));
    setCurrentDisplay("back-side");
  }
  

  const handleDownload = (numberOfCards) => {
    updateNumberOfCards(numberOfCards);
    // console.log(`Download/Print ${numberOfCards} cards`);
  };
  const router = useRouter();

  const handlePrintClick = () => {
    handleDownload();
    router.push(`/print?cards=${numberOfCards}`);
  };

  async function backSideSubmit(data) {
    console.log(data);
    handlePrintClick();
    dispatch(updateFormData(data));
    // dispatch(setCurrentSlide("back-side"));
    // setCurrentDisplay("back-side");
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='max-w-screen-lg w-full mt-8 mb-2 sm:w-96'
        >
          <div className='relative mt-6 flex flex-col bg-transparent shadow-none rounded-xl bg-clip-border'></div>
          <h4 className='block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
            Edit Front Side
          </h4>
          <p className='block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700'>
            Nice to meet you! Enter your details to register.
          </p>
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
            imageUrl={logo}
            setImageUrl={setLogo}
            isRequired={true}
            endpoint='logoUploader'
          />

          <button
            // type='submit'
            onClick={() => {
              // dispatch(setCurrentSlide("back-side"));
              // // Update the currentDisplay state to switch to the front-side form
              // setCurrentDisplay("back-side");
              toggleMode("back-side");
            }}
            className='mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          >
            Save and go to the back side
          </button>
        </form>
      )}

      {currentDisplay == "back-side" && (
        <form
          onSubmit={handleSubmit(backSideSubmit)}
          className='max-w-screen-lg w-full mt-8 mb-2 sm:w-96'
        >
          <div className='relative flex flex-col bg-transparent shadow-none my-4'>
            <h4 className='block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
              Edit Back Side
            </h4>
            <p className='block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 max-w-80'>
              Nice to meet you! Enter your details that you need on the
              back-side we will sort it for you.
            </p>
          </div>

          <TextInputs
            label='Company Name'
            name='companyName'
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextInputs
            label='Card Owner'
            name='cardOwner'
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextInputs
            label='Card Owner Position'
            name='cardOwnerPosition'
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextInputs
            label='Tel Phone (01)'
            name='ownerTelOne'
            type='tel'
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextInputs
            label='Company Website'
            name='companyWebsite'
            type='url'
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextInputs
            label='Email Address'
            name='cardEmail'
            type='email'
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextInputs
            label='Business Location'
            name='cardLocation'
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextInputs
            label='Service One(1)'
            name='serviceOne'
            register={register}
            errors={errors}
            isRequired={false}
          />
          <TextInputs
            label='Service Two(2)'
            name='serviceTwo'
            register={register}
            errors={errors}
            isRequired={false}
          />
          <TextInputs
            label='Service Three(3)'
            name='serviceThree'
            register={register}
            errors={errors}
            isRequired={false}
          />
          <label
            className='mt-px font-light text-gray-700 cursor-pointer select-none'
            htmlFor='remember'
          ></label>
          <div className='flex justify-between gap-8'>
            <button
              type='button'
              onClick={() => {
                dispatch(setCurrentSlide("front-side"));
                setCurrentDisplay("front-side");
                toggleMode("front-side");
              }}
              className='mt-6 w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center'
            >
              <GrFormPrevious className='w-5 h-5' /> Previous
            </button>
            <>
              <Button
                className='bg-gray-900 hover:!bg-gray-900 hover:shadow-2xl focus:!ring-0 focus:!outline-0 mt-6 w-full select-none rounded-lg !py-0 !px-6 text-center align-middle font-sans !text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center'
                onClick={() => setOpenModal(true)}
              >
                Download/Print
              </Button>
              <Modal
                show={openModal}
                size='md'
                popup
                onClose={() => setOpenModal(false)}
                className='!bg-white/40 !backdrop-blur-md'
              >
                <Modal.Header />
                <Modal.Body>
                  <div className='space-y-6'>
                    <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                      We're Glad You're Finally Here🤗
                    </h3>
                    <div>
                      <div className='mb-2 block'>
                        <Label
                          htmlFor='numberOfCards'
                          value='How many cards would you want?'
                        />
                      </div>
                      <TextInput
                        id='numberOfCards'
                        type='number'
                        placeholder='eg; 10'
                        value={numberOfCards}
                        onChange={(e) =>
                          setNumberOfCards(parseInt(e.target.value, 10) || 0)
                        }
                        required
                      />
                    </div>

                    <div className='w-full'>
                      <Button
                        className='bg-gray-900 hover:!bg-gray-900 hover:shadow-xl focus:!ring-0 focus:!outline-0'
                        onClick={handleSubmit(backSideSubmit)}
                      >
                        Save and Download
                      </Button>
                    </div>
                    <div className='flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300'>
                      I would like to create an account!&nbsp;
                      <Link
                        href='#'
                        className='text-cyan-700 hover:underline dark:text-cyan-500'
                      >
                        Create account
                      </Link>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </>
          </div>
        </form>
      )}
    </div>
  );
}
