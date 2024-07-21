<template>
    <section class="py-20">
        {{ postMessage }}
        <v-container>
            <v-row>
                <v-col cols="12" lg="6" :md="6" >
                    <h1 class="text-center text-4xl capitalize text-blue-400 ">get in touch</h1>
            <div class="border flex flex-col gap-3 " >
                
          <div class="border-b py-2 px-1 ">
            <h1 >{{ contact.data.name }}</h1>
          </div >
            <div class="border-b px-1 ">
         <h1>{{ contact.data.street }}</h1>
            </div>
             <div class="border-b px-1">
                <h1>{{ contact.data.contactOne }}</h1>
             </div>
             <div class="px-1">
<h1>
    {{ contact.data.email }}
</h1>
             </div>
              <div v-html="contact.data.map">

              </div>
            </div>
            </v-col>
            <v-col cols="12" :md="6">
                <div>
                <h1> send message</h1>
                <div>
                    <label for="full name"> Full Name</label>
                    <input v-model="postMessage.name" type="text" placeholder="Enter your name"  class="border w-full h-10 px-5">
                </div>
                <div>
                    <label for="full name"> Email</label>
                    <input v-model="postMessage.email" type="text" placeholder="Enter your email"  class="border w-full h-10 px-5">
                </div>
                <div>
                    <label for="subject"> Subject</label>
                    <input v-model="postMessage.subject" type="text" placeholder="subject" class="border w-full h-10 px-5">
                </div>
                <div>
                    <label for="full name"> Message</label>
    <textarea v-model="postMessage.message" name="message" id="" class="w-full h-40 border"  > </textarea>
                </div>
                <button class="bg-red-400 py-1 px-8 rounded-lg "> Submit</button>
            </div>
            </v-col>
            
                
                </v-row>
 
        </v-container>

    </section>
</template>

<script setup>
const {data: contact} =await useFetch("https://dmcdharan.com/api/school-profile");
  
const postMessage = ref({
    "name" : "sajal",
    "email" : "sajal.np@gmail.com",
    "subject" : "Hello World",
    "message" : "this is demo message from Code IT"
})
</script>