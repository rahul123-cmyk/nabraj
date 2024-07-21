<template>
    <section>
        <v-container>
            <div>
<h1>{{ alumni.data.title }}</h1>
            </div>
            <div v-html="alumni.data.description">
       
            </div>
        </v-container>

        <v-container>
            <div v-for="batch in batches.data" :key="batch.id" class="py-10 g">
                <div>
            <h1> {{ batch.title }}</h1>
                </div> 
               <div class="grid grid-cols-3 gap-3 ">
                <div v-for="student in batch.students" :key="student.id" class="border flex flex-col  gap-3  ">
      
            <div>
                      <v-img :src="student.photo" ></v-img>
                  </div>
                    <h1 class="text-center">
                        {{ student.name }}
                    </h1>
                 <div v-html="student.description"></div>
        </div>

                </div>

               </div>

        </v-container>

    </section>
</template>

<script setup>
const {data: alumni} = await useFetch("https://dmcdharan.com/api/alumni");
const {data: batches} = await useFetch("https://dmcdharan.com/api/batches");


</script>