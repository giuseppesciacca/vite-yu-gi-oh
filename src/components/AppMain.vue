<script>
import { store } from '../store.js';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    mounted() {
        this.store.callApi(this.store.API_URL)
    },
}
</script>

<template>
    <main>
        <div class="container">
            <div class="py-3">
                <select name="" id="">
                    <option v-for="character in store.cards" value="">{{ character.archetype }} </option>
                </select>
            </div>

            <div class="row bg-white justify-content-between p-5">
                <div class="col-12 main_count bg-dark text-white p-3 fw-bold" v-if="store.cards">Found {{ store.cards.length
                }} cards</div>

                <div v-for="character in store.cards" class="col-12 col-md-4 col-lg-3">
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

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

main {
    background-color: $primary;

    .content_card {
        background-color: $primary;
        height: 500px;
        margin-bottom: 1rem;
    }
}
</style>