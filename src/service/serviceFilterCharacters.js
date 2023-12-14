import axios from "axios";
import { ref } from "vue";
const APIURL = 'https://rickandmortyapi.com/api/character/?'

export async function getFilteredCharacters(filterCondition){
    try {
        const filteredCharacters =ref([]);
        const response = await axios.get(new URL(APIURL + filterCondition));
        if(response.status >= 200 && response.status < 300){
            filteredCharacters.value = response.data;
            return filteredCharacters.value;
        }
        else{
            console.log(response.status);
        }

    } catch (error) {
      console.log(error);  
    }
}