"use client"; 
import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem("auth") != "true") {
      location.href = "/login";
    }
  }, []);
  return (
    <main>
      {/* <h1>My Library</h1> */}
      <BookList />
    </main>
  );
}
