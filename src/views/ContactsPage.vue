<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';

function insta() {
    window.open("https://www.instagram.com/chalseu.zip/", "_")
}

function linked() {
    window.open("", "_")
}

function email() {
    window.open("mailto:charlesclark0808@gmail.com")
}

</script>
<template>
    <div id="page-container">
        <Navbar />
        <div class="container-fluid d-flex align-items-center vh-100">

            <div @click="email" class="cat-container">
                <!-- <div @click="email" class="email">CHARLESCLARK0808@GMAIL.COM</div> -->
            </div>

        </div>
    </div>
</template>

<style scoped>

#page-container{
    background-color: #404042;
    scrollbar-width: none;

}


.cat-container{
    width: inherit;
    height: 100vh;
    background-image: url('https://drive.google.com/uc?export=view&id=13DZj9amgf4IS4Qiq8iOC_-uIlF4McNY1');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    cursor: pointer;
/* 
    position: absolute;
    bottom: 0px;
    left: 0px; */
}

@media only screen and (max-width: 1060px) {

    .cat-container{
        background-image: url("https://drive.google.com/uc?export=view&id=1WPQpJ44fW9f1wk4jf_Nb4nU7NV5QwmlW");
        height: 100vh;
        background-position: 50%;
    }
}

@keyframes textclip {
  to {
    background-position: -200% center;
  }
}
</style>