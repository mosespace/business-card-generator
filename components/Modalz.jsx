"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Button, Label, Modal, TextInput } from "flowbite-react";

export default function Modalz({ onDownload }) {
  const [openModal, setOpenModal] = useState(false);
  const [numberOfCards, setNumberOfCards] = useState(0);

  // const handleDownload = () => {
  //   onDownload(numberOfCards);
  //   setOpenModal(false);
  // };

  const router = useRouter();

  const handlePrintClick = () => {
    onDownload(numberOfCards);
    // handlePrint();
    // setNumberOfCards(0);
    // setOpenModal(false);
    router.push(`/print?cards=${numberOfCards}`);
  };

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
                onClick={handlePrintClick}
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
  );
}
