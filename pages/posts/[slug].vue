<script lang="ts" setup>
const {params} = useRoute();
const {data} = await useWpApi().getPost<any>(params.slug as string);
</script>

<template>
<div class="container">
    <div>
        <div class="text-3xl text-center">{{ data[0].title.rendered }}</div>
        <img :src="data[0]._embedded['wp:featuredmedia'][0].source_url" class="mt-4 w-full max-h-96 object-cover"/>
    </div>
    <div v-html="data[0].excerpt.rendered" class="mt-4"/>
    
</div>
</template>