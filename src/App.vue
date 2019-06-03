<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">
          <img class="img-fluid p-2" src="@/assets/logo.png" alt>
        </a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Produtores</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    send(search) {
      this.$store.dispatch("fetchProdutores", search);
    }
  }
};
</script>


<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  img {
    width: 5rem;
  }

  a {
    font-weight: bold;
    color: #42b98377;
    &.router-link-exact-active {
      color: #42b98377;
    }
  }
}
</style>
