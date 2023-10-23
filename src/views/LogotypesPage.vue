<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import PosterFrame from '@/components/PosterFrame.vue'

let links = [
'https://drive.google.com/file/d/1qe9NtYGIJAMvk5XMmvcsde-r_-VWTsAI/view',
'https://drive.google.com/file/d/1XPak9evlPpVR7QDqrc-8E7HFrClegPMO/view',
'https://drive.google.com/file/d/1HrIA65WOQttjCPPOi0bpn99inQnsa9XU/view',
'https://drive.google.com/file/d/1K6Illp9CslovlcG8C6BKf0FTahc1j-zj/view',
'https://drive.google.com/file/d/1JT3b8PUVddw1tJaJ4Mj2KbpnQsxIPX_q/view',
'https://drive.google.com/file/d/1lKtM1mtEE16HlL3CkiIVkv8UeXiMZ9Sd/view',
'https://drive.google.com/file/d/1rQrGyeyZdk9F0l6rePNL2itBMU2-IqLC/view',
'https://drive.google.com/file/d/11vYHiuZwvU585AJRyNeHo8mcQhDnGioA/view',
'https://drive.google.com/file/d/1cVAmfGd4WYLM09oZWG2TrxUFxnMhJ4_v/view',
'https://drive.google.com/file/d/1nJLzbdJa_2Qf8Q0935ka-aCw1BkZE5a7/view',
'https://drive.google.com/file/d/1IhcmJbEFiK-UUJtUxvbLOhUmkw2EL6LC/view',
'https://drive.google.com/file/d/1gPcF677KhKlTqtRjT0zBrsAyHM2332EN/view',
'https://drive.google.com/file/d/1aT5cVXt1ePu_Ha07uhYgMvTWFSZQB3lE/view',
'https://drive.google.com/file/d/1aRoI2CSeuNpFnTPRYIRCbhrHbUIcUB8O/view',
'https://drive.google.com/file/d/1MQ79plan2jBq6nlqeE-fizAiZXqLpAao/view',
'https://drive.google.com/file/d/1vez6YuYrgID4o1yboFCMWQUMxtjT9jvu/view',
'https://drive.google.com/file/d/11pIuISSvEiOTOP6mG6UjlO5PU9E3grma/view',
'https://drive.google.com/file/d/1J-2nSSbZRmhXua_hqpXYkfr4m76RbpX1/view',
'https://drive.google.com/file/d/1R7JfZCa7wPVED5NMqtONN_Cev7ozKubp/view',
'https://drive.google.com/file/d/1GOcKrjKeCMd_4BeCt0WAMnuZbCHNYRyZ/view',
'https://drive.google.com/file/d/1p3bOYhZbgtxVzXX27u6297kSiHP7L2MH/view',
'https://drive.google.com/file/d/1z2nzuPwP3r4b-U6VQrA71CfqmLhJH1HD/view',
'https://drive.google.com/file/d/1Yf0agUlewxndy3jJjVT5Chy6yVcSqiCq/view',
'https://drive.google.com/file/d/1LHEg9vNY5ae3i31zm5Ag9NQ_U8pkNjjL/view',
'https://drive.google.com/file/d/154QyHc-k4rw7UjRMP2EOul4zodBq_Jev/view',
'https://drive.google.com/file/d/1EYT4eDbKlR9ZF6Xr2Nn7vB0q2_fYTutM/view',
'https://drive.google.com/file/d/1m72NmL4jbINoVqahHCGnJGEGYkuJ6MC0/view',
'https://drive.google.com/file/d/12aaoByq_bLGMMzEMWASEL0wK7RnjuKfO/view',
'https://drive.google.com/file/d/1rLpVEsTHMNmk1EspWGizJtXSiFnAcpqa/view',
'https://drive.google.com/file/d/1sDMDt2Ba8tgDMcIgb2kgFxvD1dlj1TCj/view'

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