"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { changeLocale } from "./store/localeSlice";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { welcome, language, greeting } = useSelector(
    (state: RootState) => state.locale.messages
  );

  // Track loading state to avoid flickering
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en";
    dispatch(changeLocale(savedLocale));
    setIsLocaleLoaded(true); // Set loading state to true after locale is loaded
  }, [dispatch]);

  // Show nothing until the locale is loaded to avoid flickering
  if (!isLocaleLoaded) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <Hero />
        <h1>{welcome}</h1>
        <p>{language}</p>
        <p>{greeting}</p>
        <LanguageSwitcher />
      </main>
    </div>
  );
}
