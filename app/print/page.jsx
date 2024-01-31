"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PrintContent from "@/components/PrintContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrintContentWithSuspense />
    </Suspense>
  );
}

function PrintContentWithSuspense() {
  const params = useSearchParams();
  const cards = params.get("cards");

  return <PrintContent numberOfCards={cards} />;
}
