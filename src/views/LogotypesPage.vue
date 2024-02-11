<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import PosterFrame from '@/components/PosterFrame.vue'

let links = [
"src/assets/LOGOTYPES/LOGOTYPES-01.png",
"src/assets/LOGOTYPES/LOGOTYPES-02.png",
"src/assets/LOGOTYPES/LOGOTYPES-03.png",
"src/assets/LOGOTYPES/LOGOTYPES-04.png",
"src/assets/LOGOTYPES/LOGOTYPES-05.png",
"src/assets/LOGOTYPES/LOGOTYPES-06.png",
"src/assets/LOGOTYPES/LOGOTYPES-07.png",
"src/assets/LOGOTYPES/LOGOTYPES-08.png",
"src/assets/LOGOTYPES/LOGOTYPES-09.png",
"src/assets/LOGOTYPES/LOGOTYPES-10.png",
"src/assets/LOGOTYPES/LOGOTYPES-11.png",
"src/assets/LOGOTYPES/LOGOTYPES-12.png",
"src/assets/LOGOTYPES/LOGOTYPES-13.png",
"src/assets/LOGOTYPES/LOGOTYPES-14.png",
"src/assets/LOGOTYPES/LOGOTYPES-15.png",
"src/assets/LOGOTYPES/LOGOTYPES-16.png",
"src/assets/LOGOTYPES/LOGOTYPES-17.png",
"src/assets/LOGOTYPES/LOGOTYPES-18.png",
"src/assets/LOGOTYPES/LOGOTYPES-19.png",
"src/assets/LOGOTYPES/LOGOTYPES-20.png",
"src/assets/LOGOTYPES/LOGOTYPES-21.png",
"src/assets/LOGOTYPES/LOGOTYPES-22.png",
"src/assets/LOGOTYPES/LOGOTYPES-23.png",
"src/assets/LOGOTYPES/LOGOTYPES-24.png",
"src/assets/LOGOTYPES/LOGOTYPES-25.png",
"src/assets/LOGOTYPES/LOGOTYPES-26.png",
"src/assets/LOGOTYPES/LOGOTYPES-27.png",
"src/assets/LOGOTYPES/LOGOTYPES-28.png",
"src/assets/LOGOTYPES/LOGOTYPES-29.png",
"src/assets/LOGOTYPES/LOGOTYPES-30.png",

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
}</style>