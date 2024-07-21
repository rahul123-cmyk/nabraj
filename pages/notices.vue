<template>
  <div>
    <section class="py-10">
      <v-container>
        <table class="w-full">

          <tr class="bg-[#437B9B]  " >
            <th class="capitalize px-5 py-1">published on</th>
            <th class="capitalize  ">subject</th>
            <th class="capitalize text-center">notce category</th>
            <th class="capitalize ">action</th>
          </tr>

          <tr v-for="notice in noticeStore.notices" :key="notice.id" class="border-b border-gray-900" >
            <td class=" py-3 px-5 border-r border-l border-gray-400 font-light ">{{ notice.createdAt }}</td>
            <td class="px-15 border-r border-gray-400 font-semibold ">{{ notice.subject }}  <button class="bg-red-500 px-4 rounded-lg text-white py-1   ">
           <a href="">  welcome</a>
            </button></td>
            <td class=" border-r  border-gray-400 px-3 ">{{ notice.noticeCategory }}</td> 
            <td class="px-5 border-r  border-gray-400 "><a href="#" :download="notice.file">download</a></td>
          </tr>

        </table>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { usenoticesStore } from "~/store/notice";
const noticeStore = usenoticesStore();
// await noticeStore.getnotices();
</script>