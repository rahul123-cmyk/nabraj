<template>
    <div>

<div class=" flex items-center" >
<div class="mr-2  text-white"> login </div>


<div> 

<v-btn color="orange text-white"> 
<v-icon icon="mdi-email"></v-icon> webemail</v-btn>
</div>

</div>

    </div>
</template>

<script setup>


 import { useprofileStore  } from "~/store/profile";
const profileStore = useprofileStore();
</script>

