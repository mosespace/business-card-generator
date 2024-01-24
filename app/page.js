"use client";
import { useState } from "react";
import Form from "@/components/Form";
import Preview from "@/components/Preview";

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [ownerTelOne, setOwnerTelOne] = useState("");
  const [ownerTelTwo, setOwnerTelTwo] = useState("");
  const [cardEmail, setCardEmail] = useState("");
  const [cardLocation, setCardLocation] = useState("");

  const [side, setSide] = useState("front-end");

  function updateSide(side) {
    setSide(side);
  }

  function updateComponyName(companyName) {
    setCompanyName(companyName);
  }
  function updateCardOwner(cardOwner) {
    setCardOwner(cardOwner);
  }
  function updateOwnerTelOne(ownerTelOne) {
    setOwnerTelOne(ownerTelOne);
  }
  function updateOwnerTelTwo(ownerTelTwo) {
    setOwnerTelTwo(ownerTelTwo);
  }
  function updateCardEmail(cardEmail) {
    setCardEmail(cardEmail);
  }
  function updateCardLocation(cardLocation) {
    setCardLocation(cardLocation);
  }

  return (
    <main className='flex flex-col lg:flex-row min-h-screen items-center justify-between bg-zinc-950 text-white max-w-screen'>
      <div className='w-full lg:w-1/2 sticky inset-x-0 bottom-0 top-0 h-screen lg:flex py-10 px-8 justify-center hidden'>
        <Preview
          side={side}
          companyName={companyName}
          cardOwner={cardOwner}
          ownerTelOne={ownerTelOne}
          ownerTelTwo={ownerTelTwo}
          cardEmail={cardEmail}
          cardLocation={cardLocation}
        />
      </div>
      <div className='w-full lg:w-1/2 bg-white min-h-screen flex flex-col items-center justify-center py-10 px-24'>
        <Form
          toggleMode={updateSide}
          updateComponyName={updateComponyName}
          updateCardOwner={updateCardOwner}
          updateOwnerTelOne={updateOwnerTelOne}
          updateOwnerTelTwo={updateOwnerTelTwo}
          updateCardEmail={updateCardEmail}
          updateCardLocation={updateCardLocation}
        />
      </div>
    </main>
  );
}
