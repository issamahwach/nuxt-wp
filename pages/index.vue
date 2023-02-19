<script lang="ts" setup>
import PostList from '../interfaces/PostList';
// const { data } = await useFetch<PostList>("http://localhost:82/wordpress/wp-json/wp/v2/posts?_embed=wp:featuredmedia&_fields=id,title,slug,excerpt,_links,_embedded.wp:featuredmedia");
const {data} = await useWpApi().getPosts<PostList>();
</script>
<template>
  <div>
   

    <div class="container">
      <h2 class="text-lg font-semibold">Latest Posts:</h2>
      <div v-if="data?.length" class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <NuxtLink :to="'/posts/' + item.slug" v-for="(item, index) in data" :key="index" class="max-w-sm">
          <img v-if="item._embedded" :src="item._embedded['wp:featuredmedia'][0].source_url" class="w-full h-64 object-cover rounded-md"/>
          <div v-else class="w-full h-64 bg-gray-400 rounded-md"></div>
          <div class="px-2 py-2">
            <h3 class="font-semibold">
              {{ item.title.rendered }}
            </h3>
            <p class="mt-2" v-html="item.excerpt.rendered"/>
            
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>