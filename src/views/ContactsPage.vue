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
        <div class="container-fluid d-flex align-items-center justify-content-center vh-100">
            <div class="cont">
                <div class="row">
                    <h1 class="animate-charcter">WATCHUTHINK?</h1>
                </div>
                <div class="row d-flex align-items-center justify-content-center">
                    <p @click="email" class="email">CHARLESCLARK0808@GMAIL.COM</p>
                </div>
                <div class="row ">
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="icon" @click="insta">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="#a1a1a1"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 0C15.295 0 14.5827 0.02625 12.3427 0.126C10.1062 0.231 8.58375 0.58275 7.245 1.1025C5.86425 1.638 4.69175 2.35725 3.5245 3.5245C2.35725 4.69175 1.63625 5.8625 1.1025 7.245C0.58275 8.58375 0.22925 10.1062 0.126 12.3427C0.021 14.5827 0 15.295 0 21C0 26.705 0.02625 27.4173 0.126 29.6573C0.231 31.892 0.58275 33.4163 1.1025 34.755C1.62976 36.1565 2.45629 37.4262 3.5245 38.4755C4.57324 39.5445 5.84307 40.3711 7.245 40.8975C8.5855 41.4155 10.108 41.7708 12.3427 41.874C14.5827 41.979 15.295 42 21 42C26.705 42 27.4173 41.9738 29.6573 41.874C31.892 41.769 33.4163 41.4155 34.755 40.8975C36.1562 40.3696 37.4257 39.5431 38.4755 38.4755C39.5448 37.4271 40.3715 36.1571 40.8975 34.755C41.4155 33.4163 41.7708 31.892 41.874 29.6573C41.979 27.4173 42 26.705 42 21C42 15.295 41.9738 14.5827 41.874 12.3427C41.769 10.108 41.4155 8.582 40.8975 7.245C40.37 5.84363 39.5435 4.57402 38.4755 3.5245C37.4275 2.45462 36.1575 1.62783 34.755 1.1025C33.4163 0.58275 31.892 0.22925 29.6573 0.126C27.4173 0.021 26.705 0 21 0ZM21 3.78C26.6053 3.78 27.2738 3.808 29.4875 3.90425C31.535 4.0005 32.6463 4.34 33.3848 4.6305C34.3683 5.01025 35.0647 5.46525 35.8032 6.1985C36.5365 6.9335 36.9915 7.63175 37.3713 8.61525C37.6583 9.35375 38.0012 10.465 38.094 12.5125C38.1937 14.728 38.2165 15.393 38.2165 21C38.2165 26.607 38.1902 27.2738 38.087 29.4875C37.9802 31.535 37.639 32.6463 37.3503 33.3848C37.0086 34.2961 36.4716 35.1216 35.777 35.8032C35.0982 36.4985 34.2733 37.0341 33.362 37.3713C32.627 37.6583 31.4983 38.0012 29.4508 38.094C27.2213 38.1937 26.565 38.2165 20.9475 38.2165C15.3283 38.2165 14.672 38.1902 12.4443 38.087C10.395 37.9802 9.26625 37.639 8.53125 37.3503C7.61933 37.0128 6.79468 36.4752 6.118 35.777C5.41552 35.1028 4.87675 34.2767 4.543 33.362C4.25425 32.627 3.91475 31.4983 3.808 29.4508C3.72925 27.2458 3.70125 26.565 3.70125 20.9737C3.70125 15.3807 3.72925 14.6983 3.808 12.467C3.91475 10.4195 4.25425 9.2925 4.543 8.5575C4.9105 7.56 5.38125 6.8775 6.118 6.14075C6.85125 5.4075 7.5355 4.935 8.53125 4.56925C9.26625 4.27875 10.3705 3.9375 12.418 3.8325C14.6493 3.75375 15.3055 3.7275 20.9212 3.7275L21 3.78ZM21 10.2165C19.5839 10.2165 18.1816 10.4954 16.8733 11.0373C15.565 11.5793 14.3763 12.3736 13.3749 13.3749C12.3736 14.3763 11.5793 15.565 11.0373 16.8733C10.4954 18.1816 10.2165 19.5839 10.2165 21C10.2165 22.4161 10.4954 23.8184 11.0373 25.1267C11.5793 26.435 12.3736 27.6237 13.3749 28.6251C14.3763 29.6264 15.565 30.4207 16.8733 30.9627C18.1816 31.5046 19.5839 31.7835 21 31.7835C23.86 31.7835 26.6028 30.6474 28.6251 28.6251C30.6474 26.6028 31.7835 23.86 31.7835 21C31.7835 18.14 30.6474 15.3972 28.6251 13.3749C26.6028 11.3526 23.86 10.2165 21 10.2165ZM21 28C17.1325 28 14 24.8675 14 21C14 17.1325 17.1325 14 21 14C24.8675 14 28 17.1325 28 21C28 24.8675 24.8675 28 21 28ZM34.7305 9.79125C34.7062 10.4433 34.4301 11.0606 33.9601 11.5134C33.4902 11.9661 32.863 12.2191 32.2105 12.2191C31.558 12.2191 30.9308 11.9661 30.4609 11.5134C29.9909 11.0606 29.7148 10.4433 29.6905 9.79125C29.6905 9.1229 29.956 8.48193 30.4286 8.00934C30.9012 7.53675 31.5422 7.27125 32.2105 7.27125C32.8788 7.27125 33.5198 7.53675 33.9924 8.00934C34.465 8.48193 34.7305 9.1229 34.7305 9.79125Z"
                                    fill="#ffffff" />
                            </svg>

                        </div>
                        <div class="icon">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="#a1a1a1"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M37.3333 0C38.571 0 39.758 0.491665 40.6332 1.36683C41.5083 2.242 42 3.42899 42 4.66667V37.3333C42 38.571 41.5083 39.758 40.6332 40.6332C39.758 41.5083 38.571 42 37.3333 42H4.66667C3.42899 42 2.242 41.5083 1.36683 40.6332C0.491665 39.758 0 38.571 0 37.3333V4.66667C0 3.42899 0.491665 2.242 1.36683 1.36683C2.242 0.491665 3.42899 0 4.66667 0H37.3333ZM36.1667 36.1667V23.8C36.1667 21.7826 35.3652 19.8478 33.9387 18.4213C32.5122 16.9947 30.5774 16.1933 28.56 16.1933C26.5767 16.1933 24.2667 17.4067 23.1467 19.2267V16.6367H16.6367V36.1667H23.1467V24.6633C23.1467 22.8667 24.5933 21.3967 26.39 21.3967C27.2564 21.3967 28.0873 21.7408 28.6999 22.3535C29.3125 22.9661 29.6567 23.797 29.6567 24.6633V36.1667H36.1667ZM9.05333 12.9733C10.093 12.9733 11.09 12.5603 11.8252 11.8252C12.5603 11.09 12.9733 10.093 12.9733 9.05333C12.9733 6.88333 11.2233 5.11 9.05333 5.11C8.0075 5.11 7.00449 5.52546 6.26498 6.26498C5.52546 7.00449 5.11 8.0075 5.11 9.05333C5.11 11.2233 6.88333 12.9733 9.05333 12.9733ZM12.2967 36.1667V16.6367H5.83333V36.1667H12.2967Z"
                                    fill="#ffffff" />
                            </svg>

                        </div>
                    </div>


                </div>
            </div>

            <!-- <div class="watchuthink">

            </div> -->

        </div>
    </div>
</template>

<style scoped>

#page-container{
    background-color: var(--violet-color);
}

.row {
    margin: 0px;
}

.row h1 {
    font-family: NeueGrotesk;
    font-weight: 800;
    font-size: 128px;
    color: #f1f1f1;
}

.email {
    font-family: NeueGrotesk;
    font-weight: 800;
    font-size: 24px;
    margin-top: -29px;
    text-align: center;
    display: flex;
    align-self: center;
    justify-self: center;
    background: linear-gradient(currentColor 0 0) 
        bottom left/
        var(--underline-width, 0%) 0.2em
        no-repeat;
    /* display: inline-block; */
    text-decoration: none;
    color: var(--white-color);
    transition: background-size 0.5s;
    width: fit-content;
}

.email:hover {
  --underline-width: 100%;
  cursor: pointer;
  color: #f1f1f1;
}





/* 
.row p:hover{
    color: var(--white-color);
} */

.icon {
    margin-left: 10px;
    margin-top: -10px;
    cursor: pointer;
}

.watchuthink{
    width: 100vw;
    height: 100vh;
    background-image: url("https://drive.google.com/uc?export=view&id=13DZj9amgf4IS4Qiq8iOC_-uIlF4McNY1");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -2;
    background-color: #404042;

}

.animate-charcter
{
   text-transform: uppercase;
   background-image: linear-gradient(
    -225deg,
     #44107a 29% 
    var(--black-color) 0%,
    var(--white-color) 80%,

    var(--violet-color) 100%
  ); 
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  animation: textclip 5s linear infinite;
  display: inline-block;
  color: white;
    font-size: 190px;
}

@media only screen and (max-width: 1000px) {
    .row h1 {
        font-size: 64px;

    }
}

@media only screen and (max-width: 520px) {
    .row h1 {
        font-size: 36px;

    }

    .row p {
        font-size: 16px;
        margin-top: -20px;
    }
}

@keyframes textclip {
  to {
    background-position: -200% center;
  }
}
</style>