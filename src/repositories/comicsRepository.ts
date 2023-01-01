import axios from "axios"
import md5 from 'js-md5';
import type { comicsInterface } from "../interfaces/comicsInterface.ts";
import type { seriesInterface } from "../interfaces/seriesInterface.ts"
import type { storyInterface } from  "../interfaces/storyInterface.ts"
import type { characterInterface } from "../interfaces/characterInterface.ts"


const publicKey = "006af7c5817f2c8a183b467d79c7cd4d"
const privateKey ="2ac4c9b6cfae259374b5bb56e9a9dc692b4c2435"
const ts = Date.now()


const intance = axios.create({
    baseURL: 'http://gateway.marvel.com/',
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    }
})


export class comicsRepository  {
    getComics(comicsAmout?: number) {
        const hash = md5.create()
        hash.update(ts + privateKey + publicKey)
        return intance.get<comicsInterface[] | null>(`/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash.hex()}&limit=${comicsAmout}`)
        console.log(getComics)
    }
    getSeries() {
        const hash = md5.create()
        hash.update(ts + privateKey + publicKey)
        return intance.get<seriesInterface[] | null>(`/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash.hex()}&limit=5`)
    }
    getStories() {
        const hash = md5.create()
        hash.update(ts + privateKey + publicKey)
        return intance.get<storyInterface[] | null>(`/v1/public/stories?ts=${ts}&apikey=${publicKey}&hash=${hash.hex()}&limit=6`)
    }
    getCharacters() {
        const hash = md5.create()
        hash.update(ts + privateKey + publicKey)
        return intance.get<characterInterface | null>(`/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash.hex()}&limit=20`)
    }
}

export default new comicsRepository()