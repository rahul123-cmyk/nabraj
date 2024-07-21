import axios from "axios";
import { defineStore } from "pinia";
export const  useprofileStore = defineStore ('profile',{
    state: () =>{
        return{
            school:null,
            loading:false
        }
    },
    actions:{
        async getSchoolprofile(){
            this.loading = true;
            try{
   const response = await axios.get("https://dmcdharan.com/api/school-profile");
   if(response.status==200){
    this.school=response.data.data;
}
            }catch{
                console.log(e)

            }finally{
this.loading=false;
            }
        }
    }
});