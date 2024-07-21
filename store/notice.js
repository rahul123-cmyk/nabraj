import axios from "axios";
import { defineStore } from "pinia";
export const  usenoticesStore = defineStore ('notice',{
    state: () =>{
        return{
            notices:null,
            loading:false,
            dialog:false,
            notice:null
        }
    },
    actions:{
        async getnotices(){
            this.loading = true;
            try{
   const response = await axios.get("https://dmcdharan.com/api/notices");
   if(response.status==200){
    this.notices=response.data.data;
    if(this.notices.length > 0){
        this.dialog=true;
    }
}
            }catch{
                console.log(e)

            }finally{
this.loading=false;
            }
        },

        async getlatestnotice() {
            this.loading = true;
            try {
              const response = await axios.get("https://dmcdharan.com/api/notice");
              if (response.status == 200) {
                this.notice= response.data.data;
               
              }
            } catch (e) {
              console.log(e);
            } finally {
              this.loading = false;
            }
          },
      
          click(){
            this.dialog=false;
          }
      
      


    }

   





});