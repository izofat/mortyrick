import { ref } from "vue";
import axios from "axios";
const APIURL = 'https://rickandmortyapi.com/api/episode/';

export async function getEpisodes(ids){
    try {
        const episodes = ref([]);
        const response = await axios.get(new URL(APIURL + ids));
        if(response.status >= 200 && response.status < 300){
            episodes.value = response.data;
            return episodes.value;
        } 
        else{
            console.log(response.status);
        }
    } 
    catch (error) {
        console.log(error);    
    }
}