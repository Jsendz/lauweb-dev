import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    'English',
    'Spanish',
    'French',
    'Catalan',
    
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-dropdown">
      <button onClick={handleToggle} className="dropdown-toggle">
        {selectedLanguage || 'Select a language'}
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((language) => (
            <li key={language} onClick={() => handleSelect(language)}>
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;