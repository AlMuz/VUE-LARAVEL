<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        LOGO
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">{{ $t("navbar.login") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">{{ $t("navbar.signup") }}</router-link>
          </li>
        </ul>
      </div>
      <div class="locale-changer">
        <select class="form-control form-control-sm" v-model="$i18n.locale" @change="onChange($event)">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    onChange(event) {

      var lang = event.target.value;
      // saving language to localStorage
      localStorage.setItem("language", lang);
    }
  },
  data () {

    return { langs: ['en', 'ru'] }
  }
}
</script>
