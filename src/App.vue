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

  <main>
    <div class="container">
      <div class="py-3">
        <select name="" id="">
          <option value="">Alien</option>
        </select>
      </div>

      <div class="row bg-white p-5">
        <div class="col-12 main_count bg-dark text-white p-3 fw-bold">Found tot cards</div>
        <div class="col-12 col-md-4 col-lg-2">
          <div class="content_card">
            <img class="img-fluid" src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">

            <h5 class="text-white fw-bold pt-3">Lorem ipsum dolor sit amet.</h5>
            <p class="text-center py-2">Alien</p>
          </div>
        </div>
      </div>
    </div>
  </main>
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

main {
  background-color: $primary;

  .content_card {
    background-color: $primary;

  }
}
</style>