<script>
import axios from 'axios';
export default {
  data() {
    return {
      API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response.data);
        }).catch(err => {
          console.log(err);
          console.error(err.message);
        })
    }
  }, mounted() {
    this.callApi(this.API_URL);
  }
}

</script>

<template>
  <header>
    <div class="d-flex align-items-center p-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/800px-Yu-Gi-Oh%21_%28Logo%29.jpg"
        alt="">
      <h1>Yu-Gi-Oh Api</h1>
    </div>
  </header>

  <main></main>
</template>

<style lang="scss">
@use './assets/scss/partials/variables.scss' as *;

header {
  height: 100px;

  img {
    max-width: 100%;
    height: 30px !important;
    padding-right: 1rem;
  }
}
</style>