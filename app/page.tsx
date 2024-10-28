"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { changeLocale } from "./store/localeSlice";
import Hero from "./components/hero";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { welcome, language, greeting } = useSelector(
    (state: RootState) => state.locale.messages
  );

  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en";
    dispatch(changeLocale(savedLocale));
    setIsLocaleLoaded(true);
  }, [dispatch]);

  if (!isLocaleLoaded) return null;

  return (
    <main className="min-h-screen flex flex-col items-center p-8 text-center">
      <Hero />
      <h1>{welcome}</h1>
      <p>{language}</p>
      <p>{greeting}</p>
      <LanguageSwitcher />
    </main>
  );
}
