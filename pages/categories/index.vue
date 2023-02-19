<script lang="ts" setup>
import CategoryList from '~/interfaces/CategoryList'
const {data} = await useWpApi().getCategories<CategoryList>();
</script>
<template>
    <div class="container">
        <div class="flex flex-row flex-wrap">
            <NuxtLink :to="'/categories/'+ item.slug" class="bg-blue-200 px-3 py-2 max-w-max mr-4 mb-4" v-for="item in data" :key="item.id">{{ item.name }}</NuxtLink>            
        </div>
    </div>
</template>