'use client'

import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "./store"
import { changeLocale } from "./store/localeSlice"
import Hero from "./components/hero"
import Link from "next/link"
import Image from "next/image"
import SEOComponent from "./cmpnents/SEOComponent"

type LocaleType = "en" | "kn"

const welcomeTitle: Record<LocaleType, string> = {
  en: "WELCOME TO SHRI HARIHARESHWARA TEMPLE",
  kn: "ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನಕ್ಕೆ ಸ್ವಾಗತ",
}

const welcomeContent: Record<LocaleType, string> = {
  en: "Shri Harihareshwara Temple is a sacred Triveni Sangam Kshetra located at the foot of the Western Ghats in this Tulunadu of Parasurama creation in South India. Sullia is a rural taluk in Dakshina Kannada where most of the land is covered by forests and agriculture lands. Hariharapallathadka is one of the villages in this Sullia Taluk where Lord Harihareshwara resides.",
  kn: "ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ ದಕ್ಷಿಣ ಭಾರತದ ಪರಶುರಾಮ ಸೃಷ್ಟಿಯ ಈ ತುಳುನಾಡಿನಲ್ಲಿ ಪಶ್ಚಿಮ ಘಟ್ಟದ ತಪ್ಪನಲ್ಲಿರುವ ಒಂದು ಪುಣ್ಯ ತ್ರಿವೇಣಿ ಸಂಗಮ ಕ್ಷೇತ್ರ. ದಕ್ಷಿಣ ಕನ್ನಡ ಜಿಲ್ಲೆಯ ಗ್ರಾಮೀಣ ತಾಲೂಕು ಸುಳ್ಯ ಈ ಸುಳ್ಯ ತಾಲೂಕಿನ ಹರಿಹರಪಲ್ಲತ್ತಡ್ಕ ಎಂಬ ಒಂದು ಹಳ್ಳಿಯಲ್ಲಿ ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವರು ನೆಲೆಸಿದ್ದಾರೆ. ",
}

export default function Component() {
  const dispatch = useDispatch<AppDispatch>()
  const currentLocale: LocaleType = useSelector((state: RootState) => state.locale.locale) as LocaleType

  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false)

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") || "en") as LocaleType
    dispatch(changeLocale(savedLocale))
    setIsLocaleLoaded(true)
  }, [dispatch])

  if (!isLocaleLoaded) return null

  return (
    <>
    <SEOComponent
    title="Shri Harihareshwara Temple - A Sacred Destination for Devotees"
    description="Explore the Shri Harihareshwara Temple, a revered spiritual destination in Karnataka, dedicated to peace, devotion, and cultural heritage."
    image="http://www.shriharihareshwara.org/logo.jpg" 
    url="http://www.shriharihareshwara.org/"
  />

    <main className="min-h-screen flex flex-col items-center p-4 sm:p-8 text-center">
      <Hero />
      <div className="w-full max-w-6xl mt-8 sm:mt-20">
        <div className="flex flex-col md:flex-row items-center border-4 p-4 sm:p-8 md:p-16">
          <Image
            src="/temple4.png"
            alt="Shri Harihareshwara Temple"
            className="w-full md:w-1/3 h-auto rounded-md mb-4 md:mb-0 md:mr-8"
            width={240}
            height={160}
          />
          <div className="flex-1">
            <h2 className="font-bold text-lg sm:text-xl mb-4">{welcomeTitle[currentLocale]}</h2>
            <div className="text-sm sm:text-base text-justify mb-4">{welcomeContent[currentLocale]}</div>
            <Link href="/history">
              <button className="text-red-600 hover:text-red-400 transition-all duration-300">Read more</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}