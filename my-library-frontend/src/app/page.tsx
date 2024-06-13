"use client"; // this is important for client component in next 13
import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";

export default function Home() {
  return (
    <main>
      <h1>My Library</h1>
      <BookList />
    </main>
  );
}
