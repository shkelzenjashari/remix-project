import React, { useEffect } from "react";

const GoogleTranslate = () => {
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
          includedLanguages: "sq", // Albanian language code
        },
        "google_translate_element"
      );
    };

    loadGoogleTranslateScript();
  }, []);

  const handleTranslate = () => {
    // Clear the content of the translation element
    const translateElement = document.getElementById(
      "google_translate_element"
    );
    translateElement.innerHTML = "";

    // Create a new script element to simulate script reload
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);
  };

  return (
    <div>
      <div id="google_translate_element"></div>
      <button onClick={handleTranslate}>Translate Website to Albanian</button>
    </div>
  );
};

export default GoogleTranslate;
