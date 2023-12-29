import React, { useState } from "react";
import il8n from "./i18n.js";
import { withNamespaces } from "react-i18next";

const LanguageDropdown = ({ t, props }) => {
  const changeLanguage = (language) => {
    il8n.changeLanguage(language);
  };

  return (
    <li className="nav-item d-none d-md-block">
      <a className="nav-link" href="javascript:void(0)">
        <div className="customize-input">
          <select
            className="custom-select form-control bg-white custom-radius custom-shadow border-0"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="">{t("Choose Language")}....</option>
            <option value="en">{t("English")}</option>
            <option value="fe">{t("French")}</option>
          </select>
        </div>
      </a>
    </li>
  );
};

export default withNamespaces()(LanguageDropdown);