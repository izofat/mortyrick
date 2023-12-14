import { createStore } from 'vuex'
import charactersByPage from './modules/charactersByPage.js'
import filterCharacters from './modules/filterCharacters.js'
import character from './modules/character.js'
import episodes from './modules/episodes.js'


const store = createStore({
    
    modules: {
        charactersByPage,
        character,
        filterCharacters,
        episodes
    },
})

export default store
