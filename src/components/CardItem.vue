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
    <div class="col-12 col-md-4 col-lg-3">
        <div class="content_card">
            <img class="img-fluid" :src="imageUrl" alt="">

            <h6 class="text-white fw-bold pt-3 text-center px-2">{{ characterName }} </h6>
            <p class="text-center py-2">{{ characterArchetype }} </p>
        </div>
    </div>
    <!-- ./card -->
</template>

<style lang="scss" scoped></style>