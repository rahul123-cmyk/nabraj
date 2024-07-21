import axios from "axios";
import { defineStore } from "pinia";
export const  useCarouselStore = defineStore ('carousel',{
    state: () =>{
        return{
            slides:null,
            loading:false
        }
    },
    actions:{
        async getslides(){
            this.loading = true;
            try{
   const response = await axios.get("https://dmcdharan.com/api/slides");
   if(response.status==200){
    this.slides=response.data.data;
}
            }catch{
                console.log(e)

            }finally{
this.loading=false;
            }
        }
    }
});