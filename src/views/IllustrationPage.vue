<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import PosterFrame from '@/components/PosterFrame.vue'

let txt = 'Under Innovation, Redefining What\'s Possible_'
let i = 0
let speed = 100

let desc = ref("")
const is_done = ref(false)

function typeWriter() {
    if (i < txt.length) {
        desc.value += txt.charAt(i);
        i++;

        setTimeout(typeWriter, speed);
    } else {
        is_done.value = true
    }
}

onMounted(() => {
    typeWriter()
})

</script>
<template>
    <!-- <div class="page-container">
        <Navbar />
        <div class="container-fluid">
            <div class="row g-0">
                <div class="col-xl-4 col-md-6 col-sm-12" v-for="link in links">
                    <PosterFrame :d_link="link"/>
                </div>
            </div>
        </div>
    </div> -->
    <Navbar />

    <div class="page-container">
        <div class="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div>
                <div class="cat" v-show="is_done"></div>
                <h1 class="maintenance">{{ desc }}</h1>
                <span class="loader" v-show="is_done"></span>
            </div>

        </div>

    </div>
</template>

<style scoped>
.page-container {
    /* padding-top: 15vh; */
    background-color: #000;
    /* height: 100vh; */
    scrollbar-width: none;
    -ms-overflow-style: none;
    height: 100vh;

}

.maintenance{
    text-align: center;
    font-family: NeueGrotesk;
  color: #fff;
  font-weight: 400;
}

.cat{
    background-image: url('../assets/cursor2.svg');
    width: 100%;
    height: 90px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    position: relative;
    top: 14px;
}


::-webkit-scrollbar {
    display: none;
}

h1 {
    color: white;
}

.loader {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    top: -1vh;
}

.loader::after {
    content: '';
    width: 96px;
    height: 4.8px;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: hitZak 0.6s ease-in-out infinite alternate;
}

@keyframes hitZak {
    0% {
        left: 0;
        transform: translateX(-1%);
    }

    100% {
        left: 100%;
        transform: translateX(-99%);
    }
}
</style>