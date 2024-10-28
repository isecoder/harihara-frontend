// store/localeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const translations = {
  en: {
    welcome: "Welcome to our site!",
    language: "Language",
    greeting: "Hello, how can we assist you today?",
  },
  kn: {
    welcome: "ನಮ್ಮ ತಾಣಕ್ಕೆ ಸ್ವಾಗತ!",
    language: "ಭಾಷೆ",
    greeting: "ಹಲೋ, ಇಂದು ನಾವು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
  },
};

interface LocaleState {
  locale: string;
  messages: typeof translations.en;
}

const initialState: LocaleState = {
  locale: "en",
  messages: translations["en"],
};

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
      state.messages =
        translations[action.payload as keyof typeof translations];
      if (typeof window !== "undefined") {
        localStorage.setItem("locale", action.payload); // Store preference in localStorage
      }
    },
  },
});

export const { changeLocale } = localeSlice.actions;
export default localeSlice.reducer;
