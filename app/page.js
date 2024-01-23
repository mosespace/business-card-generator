"use client";
import { useState } from "react";
import Form from "@/components/Form";
import Preview from "@/components/Preview";

export default function Home() {
  const [data, setData] = useState("");
  const [side, setSide] = useState("front-end");

  function updateSide(side) {
    setSide(side);
  }

  function updateCompanyName(data) {
    setData(data);
  }

  return (
    <main className='flex flex-col lg:flex-row min-h-screen items-center justify-between bg-zinc-950 text-white max-w-screen'>
      <div className='w-full lg:w-1/2 sticky inset-x-0 bottom-0 top-0 h-screen lg:flex py-10 px-8 justify-center hidden'>
        <Preview side={side} data={data} />
      </div>
      <div className='w-full lg:w-1/2 bg-white min-h-screen flex flex-col items-center justify-center py-10 px-24'>
        <Form toggleMode={updateSide} updateCompanyName={updateCompanyName} />
      </div>
    </main>
  );
}
