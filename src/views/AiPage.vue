<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import PosterFrame from '@/components/PosterFrame.vue'

let links = [
'https://drive.google.com/file/d/1phd6Zaimqv3qtbVNrV1GuaytD4QhohbS/view',
'https://drive.google.com/file/d/1Asm9bbnWQD7SwSfDPqwKd6nVSaQji6TL/view',
'https://drive.google.com/file/d/1mEJimdaO32TfFKKwxxJnN0qgdywDFe0I/view',
'https://drive.google.com/file/d/1XNWOqTZM8ymlmWkrckw5Z_eFWj3FPal5/view',
'https://drive.google.com/file/d/11FCrHEeQF3yCNjk4VCDnHS-C6PnWdBIO/view',
'https://drive.google.com/file/d/1FSalG2w5QEO6puq5YNtVXYGglRmH9lkq/view',
'https://drive.google.com/file/d/1fd5icR9scw_HU_1aTgq84T9z125fYdU8/view',
'https://drive.google.com/file/d/1IJqeu0MUKzaTlBkhoBmjwK0XUiZPgOd9/view',
'https://drive.google.com/file/d/14Kh4RbyY-raYNF0japNvlKVwR96iSIMw/view',
'https://drive.google.com/file/d/12hqdUP4mhbGkSqXcXVrt0uXCW0LIs6mV/view',
'https://drive.google.com/file/d/15tYKthjV5oE9uta2m6qrExO1ismq5rKM/view',
'https://drive.google.com/file/d/1UFgRpyrwyMdZV06Dy3ozfFt3LNesJz3r/view',
'https://drive.google.com/file/d/1YNUCz1wPKjuThYu_JgWjtstggps2SWva/view',
'https://drive.google.com/file/d/1q4cpfIqBYMVBR6stN1-svScayK7LwtMn/view',
'https://drive.google.com/file/d/19-6it-s0L2S6Gjvp-Y4ux4f0x0p_Znsr/view'

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