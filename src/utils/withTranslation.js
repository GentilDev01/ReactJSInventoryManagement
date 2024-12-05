import React from 'react';
import { useTranslation } from 'react-i18next';

export const withTranslation = (WrappedComponent) => {
  return function TranslatedComponent(props) {
    const { t } = useTranslation();
    
    const translateProps = (obj) => {
      const translatedObj = {};
      Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'string') {
          translatedObj[key] = t(obj[key]);
        } else {
          translatedObj[key] = obj[key];
        }
      });
      return translatedObj;
    };

    return <WrappedComponent {...props} t={t} translateProps={translateProps} />;
  };
};
