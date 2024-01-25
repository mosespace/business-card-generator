"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Modalz() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef();

  return (
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
        initialFocus={emailInputRef}
        className='!bg-white/40 !backdrop-blur-md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='space-y-6'>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
              Were Glad Your Finally Here🤗
            </h3>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email' value='How many cards would you want?' />
              </div>
              <TextInput
                id='email'
                type='number'
                placeholder='eg; 10'
                required
              />
            </div>

            <div className='w-full'>
              <Button className='bg-gray-900 hover:!bg-gray-900 hover:shadow-xl focus:!ring-0 focus:!outline-0'>
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
  );
}
