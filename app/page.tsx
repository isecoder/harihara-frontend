"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { changeLocale } from "./store/localeSlice";
import Hero from "./components/hero";
import Link from "next/link";

type LocaleType = "en" | "kn";
const welcomeTitle: Record<LocaleType, string> = {
  en: "WELCOME TO SHRI HARIHARESHWARA TEMPLE",
  kn: "ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನಕ್ಕೆ ಸ್ವಾಗತ",
};
const welcomeContent: Record<LocaleType, string> = {
  en: "Shri Harihareshwara Temple is a sacred Triveni Sangam Kshetra located at the foot of the Western Ghats in this Tulunadu of Parasurama creation in South India.Sullia is a rural taluk in Dakshina Kannada where most of the land is covered by forests and agriculture lands. Hariharapallathadka is one of the village in this Sullia Taluk where Lord Harihareshwara resides.",
  kn: "ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನಕ್ಕೆ ಸ್ವಾಗತ",
};

export default function Home() {
  // const dispatch = useDispatch<AppDispatch>();
  // // const { welcome, greeting } = useSelector(
  // //   (state: RootState) => state.locale.messages
  // // );

  // const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  // useEffect(() => {
  //   // Retrieve the saved locale and cast it to "en" | "kn"
  //   const savedLocale = (localStorage.getItem("locale") || "en") as "en" | "kn";
  //   // dispatch(changeLocale(savedLocale));
  //   setIsLocaleLoaded(true);
  // }, [dispatch]);

  // if (!isLocaleLoaded) return null;

  const dispatch = useDispatch<AppDispatch>();
  const currentLocale: LocaleType = useSelector(
    (state: RootState) => state.locale.locale
  ) as LocaleType;

  const messages = welcomeContent[currentLocale];
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") || "en") as LocaleType;
    dispatch(changeLocale(savedLocale));
    setIsLocaleLoaded(true);
  }, [dispatch]);

  if (!isLocaleLoaded) return null;

  return (
    <main className="min-h-screen flex flex-col items-center p-8 text-center">
      <Hero />
      {/* <p className="text-4xl font-bold text-orange-500 pt-7">{greeting}</p>{" "} */}
      {/* Use greeting */}
      {/* <p className="text-lg">{`Language: ${language}`}</p> Use language */}
      {/* <p className="text-4xl font-bold text-orange-500 pt-7">{welcome}</p>{" "} */}
      {/* Use welcome */}
      {/* <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Donation</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            ACCOUNT DETAILS
          </h3>
          <p className="text-2xl mb-2">Bank of Baroda</p>
          <p className="mb-2 text-2xl">Account Number: 131101011001504</p>
          <p className="text-2xl">IFSC Code: VIJB0001311</p>
        </div>
      </main> */}
      <main className="flex flex-col items-center px-16 py-20 text-center border-4 mt-20">
        <div className="flex items-center">
          <img src="temple4.png" className="h-60 rounded-md" />
          <div>
            <h2 className=" font-bold text-xl">{welcomeTitle[currentLocale]}</h2>
            <div className="p-7 text-justify">
              {welcomeContent[currentLocale]}
            </div>
            <Link href="/about">
              <button className="text-red-600 hover:text-red-400 transition-all duration-300">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </main>
    </main>
  );
}
