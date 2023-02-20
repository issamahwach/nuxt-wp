<script lang="ts" setup>
import PostList from '../interfaces/PostList';
const {data} = await useWpApi().getPosts<PostList>();
</script>
<template>
  <div>
   

    <div class="container">
      <h2 class="text-lg font-semibold">Latest Posts:</h2>
      <div v-if="data?.length" class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <PostCard v-for="(item, index) in data" :key="index" :slug="item.slug" :title="item.title.rendered" :excerpt="item.excerpt.rendered" :_embedded="item._embedded"/>
      </div>
    </div>
  </div>
</template>