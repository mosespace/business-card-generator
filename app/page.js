"use client";
import { useState } from "react";
import Form from "@/components/Form";
import Preview from "@/components/Preview";

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [ownerTelOne, setOwnerTelOne] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [cardEmail, setCardEmail] = useState("");
  const [cardLocation, setCardLocation] = useState("");
  const [cardOwnerPosition, setCardOwnerPosition] = useState("");
  const [serviceOne, setServiceOne] = useState("");
  const [serviceTwo, setServiceTwo] = useState("");
  const [serviceThree, setServiceThree] = useState("");

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
  function updateCompanyWebsite(companyWebsite) {
    setCompanyWebsite(companyWebsite);
  }
  function updateCardEmail(cardEmail) {
    setCardEmail(cardEmail);
  }
  function updateCardLocation(cardLocation) {
    setCardLocation(cardLocation);
  }
  function updateCardOwnerPosition(cardOwnerPosition) {
    setCardOwnerPosition(cardOwnerPosition);
  }
  function updateServiceOne(serviceOne) {
    setServiceOne(serviceOne);
  }
  function updateServiceTwo(serviceTwo) {
    setServiceTwo(serviceTwo);
  }
  function updateServiceThree(serviceThree) {
    setServiceThree(serviceThree);
  }

  return (
    <main className='flex flex-col lg:flex-row min-h-screen items-center justify-between bg-zinc-950 text-white max-w-screen'>
      <div className='w-full lg:w-1/2 sticky inset-x-0 bottom-0 top-0 h-screen lg:flex py-10 px-8 justify-center hidden'>
        <Preview
          side={side}
          companyName={companyName}
          cardOwner={cardOwner}
          ownerTelOne={ownerTelOne}
          companyWebsite={companyWebsite}
          cardEmail={cardEmail}
          cardLocation={cardLocation}
          cardOwnerPosition={cardOwnerPosition}
          serviceOne={serviceOne}
          serviceTwo={serviceTwo}
          serviceThree={serviceThree}
        />
      </div>
      <div className='w-full lg:w-1/2 bg-white min-h-screen flex flex-col items-center justify-center py-10 px-24'>
        <Form
          toggleMode={updateSide}
          updateComponyName={updateComponyName}
          updateCardOwner={updateCardOwner}
          updateOwnerTelOne={updateOwnerTelOne}
          updateCompanyWebsite={updateCompanyWebsite}
          updateCardEmail={updateCardEmail}
          updateCardLocation={updateCardLocation}
          updateCardOwnerPosition={updateCardOwnerPosition}
          updateServiceOne={updateServiceOne}
          updateServiceTwo={updateServiceTwo}
          updateServiceThree={updateServiceThree}
        />
      </div>
    </main>
  );
}
