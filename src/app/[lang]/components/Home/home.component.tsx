"use client";
import React from "react";

interface Props {
  contentLocale: {
    title: string;
    description: string;
  };
}

function HomePage({ contentLocale }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white py-10">
      <h1 className="text-3xl font-bold text-black">{contentLocale.title}</h1>
      <p className="italic text-gray-600">{contentLocale.description}</p>
    </main>
  );
}

export default HomePage;
