<template>
    <div>
<v-container>
    <v-row>
        <v-col cols="12">
            <v-img :src="post.image" :lazy-src="post.image"></v-img>
        </v-col>
        <v-col>
            <div v-html="post.content"></div>
        </v-col>
    </v-row>
</v-container>
    </div>
</template>

<script setup>

import { usemenusStore } from "~/store/menu";
const menusStore = usemenusStore();
const route = useRoute();
await menusStore.getmenus();

const posts= menusStore.menus.map((m)=>
m.posts.find((p) => p.slug == route.params.slug));

const post= posts.find((p) => p !=null);

</script>