import { ref } from "vue";
import axios from "axios";
const APIURL = 'https://rickandmortyapi.com/api/character/'
export async function getSingleCharacter(id){
    try {
        const characterInfo = ref([]);
        const response = await axios.get(new URL(APIURL + id));
        if(response.status >= 200 && response.status < 300){
            characterInfo.value = response.data;
            return characterInfo.value;
        }
    } 
    catch (error) {
        console.log(error);    
    }
}