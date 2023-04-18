<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="d-flex align-items-center p-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/800px-Yu-Gi-Oh%21_%28Logo%29.jpg"
                alt="">
            <h1>Yu-Gi-Oh Api</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 100px;

    img {
        max-width: 100%;
        height: 30px !important;
        padding-right: 1rem;
    }
}
</style>