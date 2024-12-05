import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      'product.nike': 'Nike shoes',
      'product.nikeDescription': 'Premium sports footwear',
      overview: 'Overview',
      activities: 'Activities',
      products: 'Products',
      billing: 'Billing',
      people: 'People',
      reports: 'Reports',
      settings: 'Settings',
      darkMode: 'Dark Mode',
      aiAssistant: 'AI Assistant',
      createNew: 'Create New',
      search: 'Search...',
      profile: 'Profile Settings',
      appearance: 'Appearance',
      language: 'Language'
    }
  },
  fr: {
    translation: {
      overview: 'Aperçu',
      activities: 'Activités',
      products: 'Produits',
      billing: 'Facturation',
      people: 'Personnes',
      reports: 'Rapports',
      settings: 'Paramètres',
      darkMode: 'Mode Sombre',
      aiAssistant: 'Assistant IA',
      createNew: 'Créer Nouveau',
      search: 'Rechercher...',
      profile: 'Paramètres du Profil',
      appearance: 'Apparence',
      language: 'Langue'
    }
  },
  rw: {
    translation: {
      'product.nike': 'Inkweto za Nike',
      'product.nikeDescription': 'Inkweto zo mukiciro cyo hejuru',
      overview: 'Incamake',
      activities: 'Ibikorwa',
      products: 'Ibicuruzwa',
      billing: 'Kwishyura',
      settings: 'Igenamiterere',
      darkMode: 'Umukara',
      language: 'Ururimi'
    }
  },
  sw: {
    translation: {
      overview: 'Muhtasari',
      activities: 'Shughuli',
      products: 'Bidhaa',
      billing: 'Malipo',
      settings: 'Mipangilio',
      darkMode: 'Hali ya Giza',
      language: 'Lugha'
    }
  },
  zh: {
    translation: {
       //TODO: gushyiramo nizind translations
    }
  },
  ja: {
    translation: {
       
    }
  },
  es: {
    translation: {
       
    }
  }
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en'
  });

export default i18n;
