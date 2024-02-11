<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import PosterFrame from '@/components/PosterFrame.vue';


let links = [
"src/assets/COVERS/ALMOHADA_web.jpg",
"src/assets/COVERS/ENEMY_web.jpg",
"src/assets/COVERS/FLAVAH_web.jpg",
"src/assets/COVERS/LOVE U LIKE THAT_web.jpg",
"src/assets/COVERS/MOTIONZ_web.jpg",
"src/assets/COVERS/OBS_web.jpg",
"src/assets/COVERS/PART1_web.jpg",
"src/assets/COVERS/SANDALI_web.jpg",
"src/assets/COVERS/SELFISH_web.jpg",
"src/assets/COVERS/SEVEN_web.jpg",
"src/assets/COVERS/TRACK ART_web.jpg",
"src/assets/COVERS/WAG MUNA_web.jpg"
]

</script>

<template>
    <div class="page-container">
        <Navbar />
        <div class="container-fluid">
            <div class="row g-0">
                <div class="col-xl-4 col-md-6 col-sm-12" v-for="link in links">
                    <PosterFrame :d_link="link"/>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped>
.page-container {
    /* padding-top: 15vh; */
    background-color: var(--black-color);
    /* height: 100vh; */
    scrollbar-width: none;
    -ms-overflow-style: none;

}

::-webkit-scrollbar {
    display: none;
}

.container-fluid{
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-top: 8.64vh;
}

</style>