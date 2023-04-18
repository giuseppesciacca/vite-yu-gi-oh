<script>
import { store } from '../store.js';
import CardItem from './CardItem.vue';

export default {
    name: "AppMain",
    data() {
        return {
            store,
            optionSelected: '',
        };
    },
    components: {
        CardItem
    },
    computed: {
        filterCards() {
            const url = this.store.API_URL + `archetype=${this.optionSelected}`;
            console.log(url);
            this.store.API_URL = url;
        },
    },
    mounted() {
        this.store.callApi(this.store.API_URL);
    },
}
</script>

<template>
    <main>
        <div class="container">
            <div class="py-3">
                <select @click="filterCards" name="" id="" v-model="optionSelected">
                    <option v-for="character in store.cards" :value="character.archetype">{{ character.archetype }}
                    </option>
                </select>
            </div>

            <div class="row bg-white justify-content-between p-5">
                <div v-if="store.cards">
                    <p class="bg-dark p-3 m-0 text-white fw-bold">Found {{ store.cards.length }} cards</p>
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