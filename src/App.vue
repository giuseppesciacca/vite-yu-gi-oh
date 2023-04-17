<script>
import axios from 'axios';
export default {
  data() {
    return {
      API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=0',
      characters: null,
      info: null,
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          this.characters = response.data.data;
          console.log(response.data.data);
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
          <option v-for="character in characters" value="">{{ character.archetype }} </option>
        </select>
      </div>

      <div class="row bg-white justify-content-between p-5">
        <div class="col-12 main_count bg-dark text-white p-3 fw-bold">Found tot cards</div>


        <div v-for="character in characters" class="col-12 col-md-4 col-lg-3">
          <div class="content_card">
            <img class="img-fluid" :src="character.card_images[0].image_url" alt="">

            <h6 class="text-white fw-bold pt-3 text-center px-2">{{ character.name }} </h6>
            <p class="text-center py-2">{{ character.archetype }} </p>
          </div>
        </div>
        <!-- ./cols -->

      </div>
      <!-- ./row -->
    </div>
    <!-- /.container -->
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
    height: 500px;
    margin-bottom: 1rem;
  }
}
</style>