import { createI18n } from "vue-i18n";

const messages = {
  az: {
    home: "Ana səhifə",
    about: "Haqqımızda",
    blog: "Bloq",
    contact: "Əlaqə",
    categories: "Kateqoriyalar",
    pages: "Səhifələr",
    login: "Login",
    register: "Qeydiyyat",
    "already-have-account": "Artıq hesabınız var?",
    "dont-have-account": "Hesabınız yoxdur?",
    
  },
  en: {
    home: "Home",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    categories: "Categories",
    pages: "Pages",
    login: "Login",
    register: "Register",
    "already-have-account": "Already have an account?",
    "dont-have-account": "Don't have an account?",
  },
};

const i18n = createI18n({
  locale: "az",
  fallbackLocale: "en",
  messages,
});

export default i18n;
