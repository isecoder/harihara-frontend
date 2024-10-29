"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { changeLocale } from "./store/localeSlice";
import Hero from "./components/hero";
// import LanguageSwitcher from "./components/LanguageSwitcher";

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
      <p className="text-4xl font-bold text-orange-500 pt-7">Welcome to our Site</p>
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Donation</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">ACCOUNT DETAILS</h3>
          <p className="text-2xl mb-2">Bank of Baroda</p>
          <p className="mb-2 text-2xl">Account Number: 131101011001504</p>
          <p className="text-2xl">IFSC Code: VIJB0001311</p>
        </div>
      </main>
    </main>
  );
}
