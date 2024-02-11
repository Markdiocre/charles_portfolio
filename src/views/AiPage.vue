<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import PosterFrame from '@/components/PosterFrame.vue'

let links = [
"src/assets/AI/BAL_web.jpg",
"src/assets/AI/BUR_web.jpg",
"src/assets/AI/CHANEL_web.jpg",
"src/assets/AI/DBTK_web.jpg",
"src/assets/AI/DIOR_web.jpg",
"src/assets/AI/GUCCI_1_web.jpg",
"src/assets/AI/GUCCI_2_web.jpg",
"src/assets/AI/HERMES_web.jpg",
"src/assets/AI/LV_web.jpg",
"src/assets/AI/NIKE_web.jpg",
"src/assets/AI/OFF WHITE_web.jpg",
"src/assets/AI/SKOOP_web.jpg",
"src/assets/AI/TNF_web.jpg",
"src/assets/AI/YEE_web.jpg",
"src/assets/AI/YSL_web.jpg"

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

.container-fluid{
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-top: 8.64vh;
}

::-webkit-scrollbar {
    display: none;
}

</style>