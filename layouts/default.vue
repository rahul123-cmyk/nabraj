<template>
    <div>
<header>
<!-- topbar -->
<Topbar />

<!-- banner -->
<Banner />

<!-- navbar -->
<Navbar />


</header>

<main>

<slot />
</main>

<footer>
<Footer />

</footer>
    </div>
</template>

<script setup>

// menus
import { usemenusStore  } from "~/store/menu";
const menusStore = usemenusStore();
await menusStore.getmenus();

 import { useprofileStore  } from "~/store/profile";
const profileStore = useprofileStore();
await profileStore.getSchoolprofile();

// notice
import {usenoticesStore} from "~/store/notice";
const noticeStore = usenoticesStore();
await noticeStore.getnotices();

await noticeStore.getlatestnotice();

// program

import {useprogramsStore} from "~/store/program";
const programStore = useprogramsStore();
await programStore.getprograms();

// gallery
import {usegalleriesStore} from "/store/gallery";
const galleriesStore = usegalleriesStore();
await galleriesStore.getgalleries();

// member

import {  usemembersStore} from "~/store/member";
const memberStore = usemembersStore();
await memberStore.getmembers();





// flowbite
import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';

// initialize components based on data attribute selectors
onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})


</script>

