<template>
  <section>
    <v-container>
      <h1
        class="text-center py-5 text-5xl capitalize font-semibold text-blue-300"
      >
        download
      </h1>
      <table class="w-full border ">
        <tr class="text-left ">
          <th class="py-5 px-5" >Sn</th>
          <th class="text-center">Subject</th>
          <th>Download</th>
        </tr> 
        <tr v-for="download in download.data" :key="download.id" class="border-b  border-gray-600">
          <td class="px-5">{{ download.id }}</td>
          <td class="px-5 ">{{ download.title }}</td>
          <td v-if="download.file != null">
            <a href="#" :download="download.file">download</a>
          </td>
          <td v-else class="py-2" >
            <a :href="download.googleDrive" target="_blank"
              ><button class="bg-red-500 py-1 px-3 text-white capitalize rounded-lg">google drive link</button></a
            >
          </td>
        </tr>
      </table>
    </v-container>
  </section>
</template>

<script setup>
const { data: download } = await useFetch("https://dmcdharan.com/api/download");
</script>
