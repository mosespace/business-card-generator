"use client";
import { useSearchParams } from "next/navigation";
import PrintContent from "@/components/PrintContent";

export default function page() {
  const params = useSearchParams();

  const cards = params.get("cards");
  // console.log(cards);

  return (
    <>
      <PrintContent numberOfCards={cards} />
    </>
  );
}
