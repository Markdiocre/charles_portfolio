
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import PosterFrame from '@/components/PosterFrame.vue'

let links = [
"src/assets/POSTERS/4TH DIMENSION_web.jpg",
"src/assets/POSTERS/2023_web.jpg",
"src/assets/POSTERS/AD_web.jpg",
"src/assets/POSTERS/ALAB_web.jpg",
"src/assets/POSTERS/BEAT BOY_web.jpg",
"src/assets/POSTERS/CB_web.jpg",
"src/assets/POSTERS/CSD_web.jpg",
"src/assets/POSTERS/DBTK_web.jpg",
"src/assets/POSTERS/DOPAMINE_web.jpg",
"src/assets/POSTERS/GENGAR_web.jpg",
"src/assets/POSTERS/GET OUT_web.jpg",
"src/assets/POSTERS/GOF_web.jpg",
"src/assets/POSTERS/GOOD_web.jpg",
"src/assets/POSTERS/HAKU_web.jpg",
"src/assets/POSTERS/HART_web.jpg",
"src/assets/POSTERS/INCEPTION_web.jpg",
"src/assets/POSTERS/KON_web.jpg",
"src/assets/POSTERS/MANIFEST_web.jpg",
"src/assets/POSTERS/MAX_web.jpg",
"src/assets/POSTERS/MULAT_web.jpg",
"src/assets/POSTERS/NEGATIVE_web.jpg",
"src/assets/POSTERS/OMG_web.jpg",
"src/assets/POSTERS/RICK_web.jpg",
"src/assets/POSTERS/UNBOX_web.jpg",
"src/assets/POSTERS/UTAK_web.jpg",
"src/assets/POSTERS/XG_web.jpg",
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