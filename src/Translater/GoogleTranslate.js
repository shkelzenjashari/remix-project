import React, { useEffect, useState } from "react";

const GoogleTranslate = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en"); // Default to English

  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.head.appendChild(script);
    };

    // Define googleTranslateElementInit globally
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          defaultLanguage: "en",
          pageLanguage: "en",
          includedLanguages: "sq,en", // Albanian and English language codes
        },
        "google_translate_element"
      );
    };

    loadGoogleTranslateScript();
  }, []);

  const handleTranslate = () => {
    const newLanguage = currentLanguage === "en" ? "sq" : "en";
    setCurrentLanguage(newLanguage);

    // Change the target language for the entire page
    window.google.translate.translatePage(newLanguage);
  };

  return (
    <div>
      <div id="google_translate_element"></div>
      <button onClick={handleTranslate}>
        Translate Website to {currentLanguage === "en" ? "Albanian" : "English"}
      </button>
    </div>
  );
};

export default GoogleTranslate;
