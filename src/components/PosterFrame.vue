<script setup lang="ts">
    const props = defineProps(['d_link'])
</script>

<template>
    <img :src="$props.d_link" alt="" srcset="" oncontextmenu="return false;" ondrag="return false;">
</template>

<style scoped>

    img{
        width: 100%;
    }


</style>