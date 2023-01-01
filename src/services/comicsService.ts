import comicsRepository from "@/repositories/comicsRepository"

export class comicsService {
    getComics(comicsAmout?: number) {
        return comicsRepository.getComics(comicsAmout)
    }
    getSeries() {
        return comicsRepository.getSeries()
    }
    getStories() {
        return comicsRepository.getStories()
    }
    getCharacters() {
        return comicsRepository.getCharacters()
    }
}


export default new comicsService()