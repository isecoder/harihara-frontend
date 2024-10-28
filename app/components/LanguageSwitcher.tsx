// app/components/LanguageSwitcher.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { changeLocale } from "../store/localeSlice";

export default function LanguageSwitcher() {
  const dispatch = useDispatch<AppDispatch>();
  const locale = useSelector((state: RootState) => state.locale.locale);

  const handleLocaleChange = (newLocale: string) => {
    dispatch(changeLocale(newLocale));
  };

  return (
    <div>
      <button onClick={() => handleLocaleChange("en")}>English</button>
      <button onClick={() => handleLocaleChange("kn")}>Kannada</button>
      <p>Current Locale: {locale}</p>
    </div>
  );
}
