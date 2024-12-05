import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "rw", name: "Kinyarwanda", flag: "🇷🇼" },
    { code: "sw", name: "Kiswahili", flag: "🇹🇿" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50"
      } py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <section
            className={`rounded-xl shadow-lg ${
              isDarkMode
                ? "bg-dark-secondary text-dark-text"
                : "bg-light-secondary text-light-text"
            } transition-colors duration-300`}
          >
            <h2 className="text-2xl font-bold mb-6">{t("profile")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <img
                  src="/avatar.jpg"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  {t("changePhoto")}
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t("name")}
                  className="w-full p-3 rounded-lg border"
                />
                <input
                  type="email"
                  placeholder={t("email")}
                  className="w-full p-3 rounded-lg border"
                />
              </div>
            </div>
          </section>

          {/* Language Settings */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">{t("language")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {languages.map((lang) => (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center ${
                    i18n.language === lang.code
                      ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                      : "border-gray-200"
                  }`}
                >
                  <span className="text-3xl mb-2">{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </motion.button>
              ))}
            </div>
          </section>

          {/* Appearance Settings */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">{t("appearance")}</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span>{t("darkMode")}</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isDarkMode ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isDarkMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </motion.button>
              </div>
            </div>
          </section>

          {/* Notification Settings */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">{t("notifications")}</h2>
            {/* Add notification settings here */}
          </section>

          {/* Security Settings */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">{t("security")}</h2>
            {/* Add security settings here */}
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
