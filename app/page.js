"use client";
import { useState } from "react";
import Form from "@/components/Form";
import Preview from "@/components/Preview";

export default function Home() {
  const [side, setSide] = useState("front-end");
  const [data, setData] = useState("");

  function updateSide(side) {
    setSide(side);
  }

  function updateData(data) {
    setData(data);
  }
  // console.log(data);
  return (
    <main className='flex min-h-screen items-center justify-between bg-zinc-950 text-white max-w-screen'>
      <div className='w-1/2 sticky inset-x-0 bottom-0 top-0 h-screen flex py-10 px-8 justify-center'>
        <Preview side={side} data={data} />
      </div>
      <div className='w-1/2 bg-white min-h-screen flex flex-col items-center justify-center py-10 px-24'>
        <Form toggleMode={updateSide} updateData={updateData} />
      </div>
    </main>
  );
}
