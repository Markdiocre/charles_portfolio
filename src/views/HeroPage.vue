<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'

import { useRoute, useRouter } from 'vue-router';


const route = useRoute()
const router = useRouter()

function navTohome() {
    router.push({ name: 'home' })
}


onMounted(() => {
    const wrapper: any = document.querySelector("#page-container")
    const content: any = document.querySelector("#page-container .main")

    function handleResize(event: any) {
        content.removeAttribute("style")
        content.setAttribute("style", `width: ${wrapper.scrollWidth}px`)
    }

    window.addEventListener("resize", handleResize, true)


    const lenis = new Lenis({
        wrapper: wrapper,
        content: content,
        orientation: "horizontal",
        gestureOrientation: "both",
        touchMultiplier: 2,
    })

    function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
})



// lenis.on('scroll', (e: any) => {
//     console.log(e)
// })

// function raf(time: any) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)



</script>

<template>
    <!-- <Navbar /> -->
    <nav class="navbar">
        <div class="logo">
            <svg width="64" height="49" viewBox="0 0 75 69" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="navTohome()">
                <path
                    d="M70.6179 13.5222C68.4553 12.4413 66.1156 12.2793 63.9093 12.2651C63.8531 12.2651 63.7968 12.2642 63.7414 12.2642C57.4667 4.76756 48.0398 0 37.4993 0C23.0439 0 10.6815 8.96781 5.6739 21.6433C5.21905 21.54 4.7365 21.4293 4.2229 21.3093C3.9661 21.2497 3.70259 21.2186 3.43992 21.2186C1.92011 21.2186 0.598348 22.1955 0.151888 23.6481C-0.378494 25.3685 0.521984 27.224 2.20125 27.8719C2.74925 28.0834 3.27207 28.2865 3.76973 28.482C3.45586 30.3434 3.29222 32.2559 3.29222 34.2071C3.29222 41.8741 5.81488 48.9512 10.0747 54.6553C9.95387 55.3519 9.8624 56.0492 9.79946 56.7475C9.64672 58.4376 9.60308 60.9326 10.9836 63.0751C12.0838 64.7812 14.0593 65.884 16.0172 65.884C16.9277 65.884 17.8097 65.6439 18.5701 65.1891C19.1365 64.8794 19.7181 64.4179 20.2166 63.7322C25.2879 66.7081 31.1943 68.4142 37.4993 68.4142C39.2155 68.4142 40.9023 68.2875 42.5514 68.0424C43.9126 67.8418 45.2477 67.5607 46.5519 67.2032C50.3644 66.1592 53.9118 64.4724 57.0689 62.2661C57.7469 62.6824 58.5232 63.2169 59.3994 63.8287C59.9751 64.2307 60.6506 64.443 61.353 64.443C62.2695 64.443 63.1615 64.0671 63.801 63.41C64.9726 62.2057 65.0984 60.351 64.1015 59.0007C63.5912 58.3092 63.1683 57.7176 62.8225 57.204C68.342 51.1298 71.7064 43.0616 71.7064 34.2071C71.7064 31.5661 71.4068 28.9956 70.8403 26.5275C71.1794 26.3303 71.5125 26.1129 71.8373 25.8704C73.7113 24.4714 74.8593 22.4967 74.9877 20.4524C75.1866 17.2735 72.9367 14.6812 70.6179 13.5222Z"
                    fill="#7a59ff" />
                <path
                    d="M69.4925 15.7747C67.7814 14.9195 65.8067 14.7953 63.8933 14.7827C58.2194 14.7466 52.5405 15.5666 47.1066 17.2005C47.0336 17.2223 46.9689 17.1468 47.0033 17.078V17.0763C47.9676 15.1117 48.6222 12.9516 48.555 10.7637C48.4887 8.57591 47.6403 6.35873 45.9912 4.91948C44.364 3.49954 42.1493 2.95908 40.0018 2.72997C34.4311 2.13581 28.6808 3.37113 23.8453 6.20179C19.0106 9.03245 15.1175 13.4417 12.9079 18.5902C12.0905 20.4961 11.4946 22.553 11.5408 24.6124C11.5492 24.9926 11.2143 25.288 10.8384 25.2334C9.01812 24.9699 6.69603 24.4706 3.64969 23.7614C3.17722 23.6515 2.6997 23.9251 2.55704 24.39C2.41437 24.8541 2.65522 25.3492 3.10756 25.5238C15.1309 30.1646 15.3357 30.8654 14.2741 38.644C14.2128 39.0922 14.4856 39.5193 14.9178 39.6519C15.3508 39.7853 15.8157 39.5856 16.0171 39.1803C17.9029 35.3887 19.0056 33.7128 20.9584 33.1531C22.1451 32.8123 23.6976 32.8501 26.0012 33.2227C26.2975 33.2705 26.4057 33.6398 26.1842 33.8412C25.3475 34.599 24.5234 35.3719 23.7186 36.165C17.9624 41.8339 13.0304 48.9269 12.3061 56.9732C12.1593 58.5988 12.2164 60.3393 13.1 61.7114C13.9837 63.0827 15.9366 63.8699 17.3188 63.003C19.3429 61.9481 19.1726 58.3101 18.8864 56.2121C18.6615 54.5689 18.6632 52.9022 18.8923 51.259C18.9049 51.1692 18.9183 51.0786 18.9317 50.9863C19.5167 47.0579 21.2001 43.3713 23.7689 40.3409C25.5993 38.1808 27.5286 36.1264 29.6375 34.2138C29.7953 34.0712 30.0127 34.0141 30.2208 34.0602C30.9677 34.2256 31.7666 34.4085 32.6235 34.6082C33.0968 34.7173 33.5743 34.4438 33.7161 33.9797C33.8588 33.5156 33.6188 33.0205 33.1664 32.8459C32.892 32.7402 32.6235 32.6361 32.3608 32.5337C32.1258 32.4422 32.0796 32.1309 32.2777 31.9748C32.3876 31.8875 32.4984 31.8002 32.61 31.7138C33.7514 30.8251 35.319 30.6614 36.5963 31.3412C36.8699 31.4864 37.125 31.6668 37.3524 31.8791C38.7254 33.1648 38.9494 35.2469 38.889 37.1276C38.7833 40.4055 38.0859 43.6356 37.8064 46.9027C37.5278 50.1706 37.6998 53.5971 39.2155 56.5058C40.3224 58.6315 42.1376 60.3754 44.2885 61.4269C44.8088 61.6812 44.9599 62.3509 44.5898 62.7965C44.1811 63.2875 43.7455 63.8061 43.2814 64.3541C42.9768 64.7141 43.0028 65.247 43.3402 65.576C43.6775 65.9049 44.2113 65.9159 44.5637 65.602C45.9174 64.3935 47.0889 63.363 48.1228 62.4978C52.428 58.8925 54.3313 58.1548 56.9648 59.349C58.0566 59.8442 59.2743 60.6708 60.8403 61.7634C61.2003 62.0152 61.6895 61.9682 61.9967 61.6535C62.303 61.3388 62.3366 60.8487 62.0756 60.4954C59.6343 57.1881 58.6751 55.4937 59.0561 53.5585C59.4606 51.4999 61.3639 48.9856 65.4752 44.1257C65.7798 43.7657 65.7538 43.232 65.4165 42.903C65.0791 42.5749 64.5454 42.5631 64.1929 42.877C54.8667 51.2053 54.1702 51.0727 47.9172 46.7097C47.5572 46.4579 47.068 46.5049 46.7616 46.8188C46.4545 47.1335 46.4218 47.6244 46.6828 47.9777C49.124 51.2851 50.0824 52.9794 49.7014 54.9163C49.5495 55.6884 49.1878 56.5234 48.5785 57.5221C48.3595 57.8813 47.9172 58.034 47.5195 57.8955C46.3412 57.4843 45.2435 56.8423 44.3195 56.0031C42.4389 54.2945 41.3059 51.7919 41.2623 49.2525C41.2136 46.4042 42.4557 43.7053 42.9357 40.8965C43.5324 37.4121 42.913 33.7304 41.2094 30.6329L41.2069 30.6287C41.1037 30.4407 41.2338 30.2099 41.4486 30.2015C49.9439 29.8642 58.3906 28.3293 66.4596 25.6505C67.8158 25.1999 69.1854 24.7064 70.3309 23.8512C71.4764 22.9961 72.3853 21.7196 72.4742 20.293C72.5942 18.3838 71.2028 16.6281 69.4917 15.773L69.4925 15.7747ZM29.4764 30.9652C29.2716 31.139 28.9855 31.1834 28.7379 31.0794C25.6865 29.7929 23.8529 28.7875 22.8106 27.6151C21.9848 26.6878 21.655 25.6564 21.6071 24.2977C21.5643 23.085 21.7481 21.6131 22.0058 19.724C22.067 19.2759 21.7943 18.8487 21.3621 18.7161C20.929 18.5827 20.4641 18.7824 20.2619 19.1877C19.5494 20.6211 18.9485 21.7515 18.3711 22.6344C18.1345 22.9969 17.5714 22.7829 17.6318 22.3541C18.1345 18.7707 19.5796 15.3173 21.8236 12.4766C25.0278 8.42402 29.823 5.66469 34.9372 4.9329C37.2097 4.60813 39.5939 4.68198 41.7096 5.57406C43.8244 6.46614 45.6329 8.26877 46.1415 10.5078C46.546 12.2936 46.1045 14.1928 45.2485 15.8099C44.3917 17.4279 43.1455 18.8042 41.8581 20.1058C37.9961 24.0115 33.6632 27.4095 29.4756 30.9661L29.4764 30.9652ZM68.8279 21.8262C67.0865 24.1349 62.6781 25.0731 56.5712 26.5476C56.0467 26.6743 55.5163 26.7818 54.9842 26.869C47.5606 28.0859 40.7084 28.5542 40.3299 26.3387C39.9389 24.0392 45.9308 19.4294 53.6692 18.111C59.6049 17.1006 65.419 16.4805 68.0877 18.0405C69.4237 18.8218 69.7594 20.5909 68.827 21.8271L68.8279 21.8262Z"
                    fill="#1A1A1A" />
            </svg>
        </div>
        <div class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            <div class="menu">
                <li><router-link :to="{ name: 'illustration' }">ILLUSTRATIONS</router-link></li>

                <li><router-link :to="{ name: 'logotypes' }">LOGOTYPES</router-link></li>
                <li><router-link :to="{ name: 'posters' }">POSTERS</router-link></li>
                <li><router-link :to="{ name: 'covers' }">COVERS</router-link></li>
                <li ><router-link :to="{ name: 'ai' }">AI</router-link></li>
                <!-- <li> <router-link :to="{ name: 'contacts' }">CONTACTS </router-link> </li> -->
            </div>

        </div>
    </nav>

    <div id="page-container" class="d-flex align-items-start">
        <div class="main" style="width: 105vw">
            <div class="row">
                <div class="col">
                    <div class="row d-flex">
                        <div class="hand-drawn">

                        </div>
                        <div class="cat">
                        </div>
                        <div class="name-title">

                        </div>
                    </div>
                    <div class="row d-flex">
                        <div class="digitalized-brilliance"></div>
                        <div class="marquee-wrapper">
                            <div class="marquee-content">
                                <div class="marquee"></div>
                                <div class="marquee"></div>

                            </div>

                        </div>
                        <div class="tv-smile">

                        </div>
                    </div>
                </div>
                <div class="col">

                </div>
            </div>
            <div class="r-wrapper">

            </div>

            <div class="sticker-wrapper">
                <div class="row">
                    <div class="stix"></div>
                </div>
                <div class="links">
                    <li><router-link :to="{ name: 'illustration' }" class="link-des">ILLUSTRATIONS</router-link></li>
                    <li><router-link :to="{ name: 'logotypes' }" class="link-des">LOGOTYPES</router-link></li>
                    <li><router-link :to="{ name: 'posters' }" class="link-des">POSTERS</router-link></li>
                    <li><router-link :to="{ name: 'covers' }" class="link-des">COVERS</router-link></li>
                    <li ><router-link :to="{ name: 'ai' }" class="link-des">AI</router-link></li>
                    <!-- <li>charlesclark0808@gmail.com</li> -->

                    <!-- <li> <router-link :to="{ name: 'contacts' }" class="link-des">CONTACTS</router-link> </li> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/** Start of Navbar Design */

a {
    text-decoration: none;

}

a:visited {
    text-decoration: none;

}

li {
    list-style: none;

}

.logo {
    cursor: pointer;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--black-color);
    padding-right: 10px;
    padding-left: 10px;
    position: fixed;
    width: 100%;
    z-index: 3;
    height: 8.64vh;
    /* mix-blend-mode: difference; */

}

.router-link-active {
    font-family: NeueGrotesk;
    color: var(--black-color);
    font-weight: 900;
}

.menu a {
    color: var(--black-color);

}


/* .nav-links a {
  color: ;
} */

.contacts a {
    font-family: "NeueGrotesk";
    color: var(--black-color) !important;
    font-weight: 900;
    
}


/* NAVBAR MENU */
.menu {
    display: flex;
    /* gap: 1em; */
    font-size: 12px;
    font-family: NeueGrotesk;
    font-weight: 100;
}

.menu li:hover {
    background-color: var(--violet-color);
    border-radius: 5px;
    transition: 0.3s ease;
    color: var(--black-color);
    cursor: pointer;

}


.menu li {
    padding: 5px 14px;
    font-weight: 400;


}

input[type=checkbox] {
    display: none;
}

/* HAMBURGER MENU */
.hamburger {
    display: none;
    font-size: 24px;
    user-select: none;
}

/* APPLYING MEDIA QUERIES */
@media only screen and (max-width: 985px) {
    .menu {
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        padding: 80px 0;
        font-size: 2rem;
        background-color: var(--black-color);

        height: 100vh;
        width: 100vw;
        mix-blend-mode: unset;
        color: white;
    }

    .logo svg {
        width: 40px;
        height: 40px;
    }

    .menu li a{
        color: white;
    }

    .menu li:hover {
        display: inline-block;
        /* width: 100%; */
        background-color: var(--violet-color);
        transition: 0.3s ease;
        /* border-radius: unset; */
    }

    .menu li+li {
        margin-top: 12px;
    }

    input[type=checkbox]:checked~.menu {
        display: block;
    }

    .hamburger {
        display: block;
        z-index: 99 !important;
        position: relative;
        font-size: 32px;
        color: #000;
    }
}

/** End of Navbar design */


@keyframes move-banner {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

#page-container {
    width: 100vw;
    height: 100vh;
    padding-top: 10.59vh;
    padding-bottom: 10.59vh;
    position: fixed;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

div {
    display: block;
}

::-webkit-scrollbar {
    display: none;
}

.row {
    flex-wrap: nowrap !important;
}

.r-wrapper {
    width: inherit;
    height: 85vh;
    background-image: url("src/assets/LANDING_PAGE/3d_logo.png");
    background-repeat: no-repeat;
    /* background-position: 50%; */
    background-size: contain;
    position: absolute;
    bottom: -1vh;
    left: 115vh;
}

.main {
    height: 100%;
    flex-direction: column;
    position: relative;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: start;
}

.sticker-wrapper {
    z-index: 666;
    display: block;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}

.hand-drawn {
    width: 129vh;
    height: 39vh;
    background-image: url('../assets/1.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
}

.digitalized-brilliance {
    width: 200.7306vh;
    height: 18.8454vh;
    background-image: url('../assets/2.svg');
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: -5vh;
    /* background-position: 0 0; */
}

.stix {
    width: 32.7963vh;
    height: 22vh;
    display: block;
    background-image: url('../assets/stix.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    position: absolute;
    top: 26.2vh;
    left: 29.4vh;
    rotate: -20deg;
}

.cat {
    width: 100vh;
    height: 40vh;
    background-image: url('../assets/cat.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    margin-right: 50px;
    margin-left: 9vh;
}

.links {
    position: absolute;
    bottom: 13vh;
    display: flex;
}

.links li {
    list-style: none;
    margin-left: 1vh;
}

.links li a {
    text-decoration: none;
    color: #1A1A1A;
}

.link-des {
    font-family: NeueGrotesk;
    margin-top: -29px;
    text-align: center;
    background: linear-gradient(currentColor 0 0) bottom left/ var(--underline-width, 0%) 2px no-repeat;
    /* display: inline-block; */
    text-decoration: none;
    color: var(--white-color);
    transition: background-size 0.5s;
    width: fit-content;
}

.link-des:hover {
    --underline-width: 100%;
    cursor: pointer;
    color: #1A1A1A;
}

.tv-smile {
    width: 42vh;
    height: 42vh;
    background-image: url('src/assets/LANDING_PAGE/tv.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 0;
    margin-top: -26vh;
    margin-left: -4vh;
    position: relative;
    top: 8vh;
    z-index: 1;
}

.marquee-wrapper {
    width: 120vh;
    overflow: hidden;
    margin-left: -22vh;
}

.marquee-content {
    width: 290vh;
    height: 15vh;
    display: flex;
    align-items: center;
    animation: move-banner 10s infinite linear;
}

.marquee {
    width: 145vh;
    height: 12vh;
    background-image: url('src/assets/LANDING_PAGE/marquee.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
}

.name-title {
    width: 79vh;
    height: 40vh;
    background-image: url('src/assets/LANDING_PAGE/3.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    position: relative;
    /* margin-top: -1vh; */
    top: 4vh;
    margin-left: -8vh;
}


/* .tagline:hover g .star{
    rotate: x 50deg;
    transition: 1s ease-in-out;
} */
</style>