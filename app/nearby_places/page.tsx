"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { changeLocale } from "../store/localeSlice";

type LocaleType = "en" | "kn";

const placesContent: Record<LocaleType, { title: string; places: { name: string; description: string }[] }> = {
  en: {
    title: "Nearby Places",
    places: [
      { name: "Kukke Shri Subrahmanya Temple", description: "Famous Hindu temple in Subrahmanya, located 8.8 km from Shri Harihareshwara Temple." },
      { name: "Adi Subrahmanya Temple", description: "Dedicated to Lord Subrahmanya, worshipped in the form of an ant hill (valmika) for serpent-related afflictions, located 9.3 km from Shri Harihareshwara Temple." },
      { name: "Shri Subrahmanya Mutt", description: "A mutt belonging to the Dwaitha tradition, southeast of Kukke Shri Subrahmanya Temple, and 8.8 km from Shri Harihareshwara Temple. Oversees various temples, including the Shri Abhaya Ganapathi Temple and Sri Vanadurga Devi Temple." },
      { name: "Kashikatte Shri Ganapathi Temple", description: "Located beside the main road at Kashikatte in Subrahmanya, about 9.0 km from Shri Harihareshwara Temple. Includes temples of Ganapathi and Anjaneya." },
      { name: "Biladwara", description: "A historical cave, about 9.3 km from Shri Harihareshwara Temple, where Vasuki, the serpent king, is said to have hidden to escape from Garuda." },
      { name: "Shri Vanadurga Devi Temple", description: "Temple dedicated to Goddess Durga, about 9.6 km from Shri Harihareshwara Temple, known for daily poojas." },
      { name: "Shree Abhaya Mahaganapathi", description: "Located on the main road to Subrahmanya, 9.6 km from Shri Harihareshwara Temple. Features a 21-foot-tall monolithic statue of Lord Ganesha in Nepali style." },
      { name: "Agrahara Shri Somanatha Temple", description: "Known as Panchami Theertha, located 10.1 km from Shri Harihareshwara Temple, this temple is dedicated to Lord Shiva and serves as the entombment site of Shri Subrahmanya Mutt swamijis." },
      { name: "Kochila Shree Mayuravahana Subrahmanya Swamy Temple", description: "Located in Katta village near Hariharapallattadka, about 4.3 km from Shri Harihareshwara Temple, Lord Subrahmanya is worshipped here." },
      { name: "Kumaradhara River (Bathing Ghat)", description: "Traditional bathing ghat 10.3 km from Shri Harihareshwara Temple. Originates from Kumaraparvatha and joins the Arabian Sea. Pilgrims traditionally bathe in the river before visiting the temple." },
      { name: "Shri Kshethra Dharmasthala", description: "Major Hindu pilgrimage site dedicated to Lord Shiva, fostering religious harmony. Located 62.2 km from Shri Harihareshwara Temple." },
      { name: "Bisle Ghat Viewpoint", description: "Known for scenic views of Kumara Parvatha and the Western Ghats, located 32.4 km from Shri Harihareshwara Temple. A viewpoint meeting point for Dakshina Kannada, Hassan, and Kodagu districts." },
      { name: "Patla Betta", description: "Picturesque hill in Sakleshpur, 40.5 km from Shri Harihareshwara Temple, ideal for trekking. Offers views of the Kumara Parvatha and Pushpagiri mountain ranges." },
      { name: "Mallalli Falls", description: "57.3 km from Shri Harihareshwara Temple, this 200-foot waterfall in Coorg is best visited during the monsoon, formed by the Kumaradhara River." },
      { name: "Kumara Parvatha Trek", description: "Known as Pushpagiri, this challenging trek to the fourth-highest peak in the Western Ghats starts from Kukke Subrahmanya, 10.1 km from Shri Harihareshwara Temple." },
      { name: "Kulkunda Shree Basaveshwara Temple", description: "Located 12.1 km from Shri Harihareshwara Temple in Kulkunda, where Lord Shiva is worshipped in the form of Basava, the sacred bull." },
    ],
  },
  kn: {
    title: "ಸಮೀಪದ ಸ್ಥಳಗಳು",
    places: [
      { name: "ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ", description: "ಸುಬ್ರಹ್ಮಣ್ಯದಲ್ಲಿರುವ ರಾಜ್ಯದ ಪ್ರಸಿದ್ಧ ಹಿಂದೂ ದೇವಸ್ಥಾನ, ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ 8.8 ಕಿಮೀ ದೂರ." },
      { name: "ಆದಿ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ", description: "ಸರ್ಪ ದೋಷದ ಪರಿಹಾರಕ್ಕಾಗಿ ವಲ್ಮೀಕ (ಹುತ್ತ) ರೂಪದಲ್ಲಿ ಪೂಜಿಸಲ್ಪಡುವ ದೇವಾಲಯ, 9.3 ಕಿಮೀ ದೂರ." },
      { name: "ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಮಠ", description: "ದ್ವೈತ ಪರಂಪರೆಯ ಮಠ, ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ 8.8 ಕಿಮೀ ದೂರ. ಶ್ರೀ ಅಭಯ ಗಣಪತಿ ಮತ್ತು ಶ್ರೀ ವನದುರ್ಗಾ ದೇವಿ ದೇವಸ್ಥಾನಗಳ ಜೊತೆಗೆ ವಿವಿಧ ದೇವಸ್ಥಾನಗಳ ನಿರ್ವಹಣೆ ಮಾಡುತ್ತದೆ." },
      { name: "ಕಾಶಿಕಟ್ಟೆ ಶ್ರೀ ಗಣಪತಿ ದೇವಸ್ಥಾನ", description: "ಸುಬ್ರಹ್ಮಣ್ಯದಲ್ಲಿನ ಕಾಶಿಕಟ್ಟೆ ಮುಖ್ಯ ರಸ್ತೆಯ ಬಳಿಯೇ ಇರುವ ದೇವಸ್ಥಾನ, 9.0 ಕಿಮೀ ದೂರ." },
      { name: "ಬಿಲದ್ವಾರ", description: "ಐತಿಹಾಸಿಕ ಗುಹೆ, ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ 9.3 ಕಿಮೀ ದೂರ, ವಾಸುಕಿ (ಸರ್ಪ ರಾಜ)ನು ಗರುಡನಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳಲು ಆಶ್ರಯ ಪಡೆದಿದ್ದನೆಂದು ಹೇಳುತ್ತಾರೆ." },
      { name: "ಶ್ರೀ ವನದುರ್ಗಾ ದೇವಿ ದೇವಸ್ಥಾನ", description: "ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಮಠದ ಆಡಳಿತಕ್ಕೆ ಒಳಪಡುವ ಈ ದೇವಸ್ಥಾನ, 9.6 ಕಿಮೀ ದೂರ." },
      { name: "ಶ್ರೀ ಅಭಯ ಮಹಾಗಣಪತಿ", description: "ಸುಬ್ರಹ್ಮಣ್ಯ ಮುಖ್ಯ ರಸ್ತೆಯಲ್ಲಿರುವ 21 ಅಡಿ ಎತ್ತರದ ಏಕಶೀಲಾ ಗಣಪತಿಯ ಪ್ರತಿಮೆಯ ದೇವಾಲಯ, 9.6 ಕಿಮೀ ದೂರ." },
      { name: "ಅಗ್ರಹಾರ ಶ್ರೀ ಸೋಮನಾಥ ದೇವಸ್ಥಾನ", description: "ಪಂಚಮಿ ತೀರ್ಥ ಎಂದು ಕರೆಯಲ್ಪಡುವ ಈ ಸ್ಥಳವು, ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ 10.1 ಕಿಮೀ ದೂರ, ಭಗವಾನ್ ಶಂಕರನಿಗೆ ಅರ್ಪಿತವಾಗಿದೆ." },
      { name: "ಕೊಚ್ಚಿಲ ಶ್ರೀ ಮಯೂರವಹನ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿ ದೇವಸ್ಥಾನ", description: "ಕಟ್ಟ ಗ್ರಾಮದಲ್ಲಿರುವ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಾಲಯ, 4.3 ಕಿ.ಮೀ ದೂರ." },
      { name: "ಕುಮಾರಧಾರಾ ನದಿ (ಸ್ನಾನ ಘಟ್ಟ)", description: "ಪಾರಂಪರಿಕ ಸ್ನಾನದ ಸ್ಥಳ, ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನದಿಂದ 10.3 ಕಿ.ಮೀ ದೂರ.ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವರ ದರ್ಶನ ಪಡೆಯುವುದಕ್ಕೆ ಮೊದಲು ಸ್ನಾನ ಮಾಡಲಾಗುತ್ತದೆ." },
      { name: "ಶ್ರೀ ಕ್ಷೇತ್ರ ಧರ್ಮಸ್ಥಳ", description: "ಭಗವಾನ್ ಶಂಕರನಿಗೆ ಅರ್ಪಿತವಾದ ಹಿಂದು ಕ್ಷೇತ್ರ, 62.2 ಕಿ.ಮೀ ದೂರ." },
      { name: "ಬಿಸ್ಲೆ ಘಾಟ್ ವೀಕ್ಷಣಾ ಕವಾಟ", description: "ಕುಮಾರ ಪರ್ವತ ಹಾಗೂ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ನೋಟದ ಸ್ಥಳ, 32.4 ಕಿ.ಮೀ ದೂರ." },
      { name: "ಪಟ್ಲ ಬೆಟ್ಟ", description: "ಸಕಲೇಶಪುರದ ಪ್ರಸಿದ್ಧ ಬೆಟ್ಟ, 40.5 ಕಿ.ಮೀ ದೂರ." },
      { name: "ಮಲ್ಲಳ್ಳಿ ಜಲಪಾತ", description: "ಕುಮಾರಧಾರ ನದಿಯಿಂದ ತೇಜವಾದ 200 ಅಡಿ ಜಲಪಾತ, 57.3 ಕಿ.ಮೀ ದೂರ." },
      { name: "ಕುಮಾರ ಪರ್ವತ ಚಾರಣ", description: "ದಕ್ಷಿಣ ಭಾರತದ ಕಠಿಣ ಚಾರಣಗಳಲ್ಲಿ ಒಂದು, 10.1 ಕಿ.ಮೀ ದೂರ." },
      { name: "ಕುಲ್ಕುಂದ ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನ", description: "ಬಸವನ ರೂಪದಲ್ಲಿ ಶಂಕರನಿಗೆ ಅರ್ಪಿತ, 12.1 ಕಿ.ಮೀ ದೂರ." },
    ],
  },
};

export default function Nearby_Places() {
  const dispatch = useDispatch<AppDispatch>();
  const currentLocale: LocaleType = useSelector(
    (state: RootState) => state.locale.locale
  ) as LocaleType;

  const { title, places } = placesContent[currentLocale];
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") || "en") as LocaleType;
    dispatch(changeLocale(savedLocale));
    setIsLocaleLoaded(true);
  }, [dispatch]);

  if (!isLocaleLoaded) return null;

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-white to-[#fbc687] font-serif">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">{title}</h1>
      <div className="max-w-2xl mx-auto bg-opacity-90 p-8 rounded-lg shadow-lg">
        {places.map(({ name, description }, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-orange-600 font-semibold text-lg">
              <strong>{name}</strong>
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed text-base mt-2 whitespace-pre-line">{description}</p>
            {index < places.length - 1 && (
              <hr className="border-t border-gray-300 my-4" />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
