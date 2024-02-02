import React, { useEffect, useState, useRef } from "react";

const GoogleTranslate = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isButtonHidden, setIsButtonHidden] = useState(true);
  const intersectionObserverRef = useRef();

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
          includedLanguages: "sq,en",
        },
        "google_translate_element"
      );

      // Once the translator is initialized, show the button
      setIsButtonHidden(false);
    };

    loadGoogleTranslateScript();
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsButtonHidden(false);
          intersectionObserverRef.current.disconnect();
        }
      });
    };

    intersectionObserverRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    });

    const targetElement = document.getElementById("google_translate_element");

    if (targetElement) {
      intersectionObserverRef.current.observe(targetElement);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
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
      {!isButtonHidden && (
        <button onClick={handleTranslate}>
          Translate Website to {currentLanguage === "en" ? "Albanian" : "English"}
        </button>
      )}
    </div>
  );
};

export default GoogleTranslate;
