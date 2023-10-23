<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import PosterFrame from '@/components/PosterFrame.vue';


let links = [
    "https://drive.google.com/file/d/1LI5I4XvyCDBSdEn6T2xzxauC00QCfufd/view",
    "https://drive.google.com/file/d/18d6rngB222JgWMrmLVaj_ddPqJtj01ss/view",
    "https://drive.google.com/file/d/1oh5cztLNbcjIxtHftiDa5VMbzggAdLdB/view",
    "https://drive.google.com/file/d/171IEakmwz8zU6B4msBNvqmhXQlfHYd-V/view",
    "https://drive.google.com/file/d/18wdEnK0YAgawJcgCR5FD5F873tmzsm_S/view",
    "https://drive.google.com/file/d/12-SM-6uPoCYbP3Vhj1ousTZNmYBisBEP/view",
    "https://drive.google.com/file/d/1Ile3aofMD6KSohz6F1czIYfC2_vLy3EB/view",
    "https://drive.google.com/file/d/1qFkcT_vgrL-_kJXSv74-JZ2YphD1eS7Z/view",
    "https://drive.google.com/file/d/1wkFCeOd5POsehGe0iVjRjsD0ZaE32za1/view",
    "https://drive.google.com/file/d/1fRwWrbDjcIlForYbHMb_FYjsbrcPmA2Q/view",
    "https://drive.google.com/file/d/11KRC_xgq4PqE0wSaRPPpVayhTo4oJ1ZF/view"
]

</script>

<template>
    <div class="page-container">
        <Navbar />
        <div class="container-fluid">
            <div class="row g-0">
                <div class="col-xl-3 col-md-6 col-sm-12" v-for="link in links">
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
}

.container-fluid{
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-top: 8.64vh;
}

</style>