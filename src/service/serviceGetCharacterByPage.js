import axios from 'axios'
import { ref } from 'vue'
const APIURL = 'https://rickandmortyapi.com/api/character/?page='
export async function getCharacterByPage(currentPage) {
    try {
        const charactersOnPage = ref([])
        const response = await axios.get(new URL(APIURL + currentPage))
        if(response.status >= 200 && response.status < 300){
            charactersOnPage.value = response.data;
            return charactersOnPage.value; 
        }
        else{
            console.log(response.status);
        }
    } catch (error) {
        console.log(error)
    }
}
