
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import PosterFrame from '@/components/PosterFrame.vue'

let links = [
"https://drive.google.com/file/d/1v2RBsEXCP9li_bPUP1TlzI1rm_w9RIlZ/view",
"https://drive.google.com/file/d/1Nrnxp3x0Erlvrca8CVYybH2Qwv3YhysX/view",
"https://drive.google.com/file/d/1IsJ6z--0ZIYt7y1kdkM26es8sN_3o8IA/view",
"https://drive.google.com/file/d/1vWiWZsbXZzhwNGUyKfGFL6nI_FCxB5Qw/view",
"https://drive.google.com/file/d/1ZQp2d9TWdJ83xM7nnrfGX3ppkc0MTH32/view",
"https://drive.google.com/file/d/1qfu24_6EZLvXRZnVdr9zMfa6-eWJ3s_m/view",
"https://drive.google.com/file/d/1Ei_Du0NDGFLmuL0jbDyHNZOUBp6otItF/view",
"https://drive.google.com/file/d/1DTkzbLE4ur8Zu5DcdWPy0Ls9ny3Y4PsH/view",
"https://drive.google.com/file/d/1aG8liFgCaI6yXf8q3B5KVrPZ0T8t-6dt/view",
"https://drive.google.com/file/d/1IEZjkAjHGpGbVixVXZqf3VnO4uD0khvf/view",
"https://drive.google.com/file/d/1xdmQ5PVDCW_AZZbJYMHxOfWLEtuBaFcw/view",
"https://drive.google.com/file/d/1J1-X-ParUBn-5cQUjJ5mRXEVegVNPXS6/view",
"https://drive.google.com/file/d/1hZtPB0bDo_sIfjdd8xJXm4NU6baP1C1h/view",
"https://drive.google.com/file/d/1LwFhvZqpwaNf0ZY5TmR7jKGy_t0-MIN_/view",
"https://drive.google.com/file/d/19qOmPiF_xfCQo4XFll6zSL01jy2BLEIy/view",
"https://drive.google.com/file/d/1pTBH0ezE5JUOwyXoa_J-tqzl5YCtUH3G/view",
"https://drive.google.com/file/d/1ehQxAE2hm8s_swfNo3FnmEOlKJyYbV2X/view",
"https://drive.google.com/file/d/1nI3lDKTz201l3lUZxGruW_XtcZ1r-rzN/view",
"https://drive.google.com/file/d/1aADIi352WPDyU25M_Y_0qgXXrai6WVDo/view" ,
"https://drive.google.com/file/d/1AUV-waRrnfoR37FtIN2ecxqFUHsLMfbK/view",
"https://drive.google.com/file/d/1zsmsRcAnRoPr-kdgsSanCX8j9esjR7e0/view",
"https://drive.google.com/file/d/109gzcyCgXoEUoAn0po2AUKHt_6h04qxJ/view",
// "https://drive.google.com/file/d/1Ghvp_02cvOcrtKQWx6f89XNji0SLzGra/view", Ghost link
"https://drive.google.com/file/d/1311PjLVAKe7t3GLgWrENNqmL4cFsUCY1/view",
"https://drive.google.com/file/d/1zs9xGQnTZVSQeJ81Ufl7Pdp64nTXv61S/view",
"https://drive.google.com/file/d/1msVTyUkXwOiOZMHbviU0iVboPMqXo6r7/view",
"https://drive.google.com/file/d/1imw699r_YheQRz1Xuzdg_xeBQvJMzzzX/view"
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