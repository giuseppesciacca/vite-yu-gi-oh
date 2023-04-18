<script>
import { store } from '../store.js';
import CardItem from './CardItem.vue';

export default {
    name: "AppMain",
    data() {
        return {
            store
        };
    },
    component: {
        CardItem
    },
    mounted() {
        this.store.callApi(this.store.API_URL);
    },
    components: { CardItem }
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
                <div class="main_count bg-dark text-white p-3 fw-bold" v-if="store.cards">
                    Found {{ store.cards.length }} cards
                </div>


                <CardItem v-for="character in store.cards" :imageUrl="character.card_images[0].image_url"
                    :characterName="character.name" :characterArchetype="character.archetype"></CardItem>

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
}
</style>