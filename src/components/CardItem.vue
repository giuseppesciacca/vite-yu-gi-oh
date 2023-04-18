<script>
export default {
    name: 'CardItem',
    props: {
        imageUrl: String,
        characterName: String,
        characterArchetype: String
    }
}
</script>

<template>
    <div class="col-12 col-md-4 my_lg_col ">
        <div class="content_card">
            <img class="img-fluid" :src="imageUrl" alt="">

            <h6 class="text-white fw-bold pt-3 text-center px-2">{{ characterName }} </h6>
            <p class="text-center py-2">{{ characterArchetype }} </p>
        </div>
    </div>
    <!-- ./card -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.content_card {
    background-color: $primary;
    height: 450px;
    margin-bottom: 1rem;
}

@media screen and (min-width: 1199.98px) {
    .my_lg_col {
        width: calc(100% / 5);
    }
}
</style>