<script setup lang="ts">
    const props = defineProps(['d_link'])

    const ds = props.d_link.split("/")
    var link = "https://drive.google.com/uc?export=view&id="+ds[5]
</script>

<template>
    <img :src="link" alt="" srcset="">
</template>

<style scoped>

    img{
        width: 100%;
    }


</style>