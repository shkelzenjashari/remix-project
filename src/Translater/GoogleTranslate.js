import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    // Load the Google Translate API script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Translate when the script is loaded
    script.onload = googleTranslateElementInit;

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleTranslate = () => {
    // Change the target language to Albanian ('sq')
    window.google.translate.translate("en", "sq");
  };

  return (
    <div>
      <div id="google_translate_element"></div>
      <button onClick={handleTranslate}>Translate to Albanian</button>
    </div>
  );
};

export default GoogleTranslate;
