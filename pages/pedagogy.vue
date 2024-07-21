<template>
    <section>
        <v-container class="flex flex-col gap-3">
            <div class="text-4xl font-bold italic"> {{pedagogy.data.title}}</div>
            <div class="font-bold" v-html="pedagogy.data.description"></div>
            <v-img :src="pedagogy.data.photo"></v-img>
        </v-container>

    </section>
</template>

<script setup>
const {data: pedagogy} = await useFetch("https://dmcdharan.com/api/pedagogy")
</script>