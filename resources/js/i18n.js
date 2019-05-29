import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const lang =  localStorage.getItem("language") ? localStorage.getItem("language") : 'en';

const translations = {
  en: {
    navbar: {
      login: 'Login',
      signup: 'Signup',
    }
  },
  ru: {
    navbar: {
      login: 'Войти',
      signup: 'Регистрация',
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: lang, // set locale
  messages: translations, // set locale messages
})

export default i18n
