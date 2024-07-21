<template>
    <div>
<v-dialog v-model="noticeStore.dialog" width="450">
<v-card > 
<div class="text-right">
<v-btn icon="mdi-close"  variant="flat" color="blue" @click="noticeStore.click"> </v-btn></div>
<v-img   :src="noticeStore.notice.file"> </v-img>


</v-card>
</v-dialog>

<!-- latest notice -->
<Latestnews />

    <!-- carousel -->
 <carousel />

 <!-- messages -->
 <Teacher />

 <!-- notice -->

 <Notice />


 <!-- programs -->
 <Programs />

 <!-- gallery -->
 <Gallery />

 <!-- member -->
 <Member />
    </div>
</template>

<script setup>
import { usenoticesStore } from "~/store/notice";
const noticeStore = usenoticesStore();

// const dialog = ref(true)

</script>