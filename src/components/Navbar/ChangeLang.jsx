import { useTranslation } from 'react-i18next';
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'uz' ? 'en' : 'uz');
  };

  return (
    <button id='langbtn' onClick={toggleLanguage}>
      {i18n.language === 'us' ? '🇺🇸' : '🇺🇿'}
    </button>
  );
};

export default LanguageSwitcher;