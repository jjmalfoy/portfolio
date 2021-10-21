<template>
  <div class="app">
    <div class="main_content">
      <div class="md-layout md-gutter">
        <div id="nav">
          <img alt="JM" class="hero-logo md-layout-item" src="../assets/hero-jm-logo.svg">
          <div class="md-layout-item router-links">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">About</router-link>
            <router-link class="link" to="/projects">Projects</router-link>
            <router-link class="link" to="/contact">Contact</router-link>
          </div>
        </div>
          <!-- <hero-image></hero-image>  -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
