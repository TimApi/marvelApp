export interface seriesInterface {
    id: number;
    title: string;
    description: string | null;
    resourceURI: string | null;
    urls: [{
        type: string;
        url: string;
    }]
    startYear: number;
    endYear: number;
    rating: numer | null;
    type: string;
    modified: date;
    thumbnail: {
        path: string;
        extension: string;
    }
    creators: {
        available: number;
        collectionURI: string;
        items: [{
            resourceURI: string;
            name: string;
            role: string;
        }]
        returned: number;
    }
    creators: {
        available: number;
        collectionURI: string;
        items: [{
            resourceURI: string;
            name: string;
            role: string;
        }]
        returned: number;
    }
    characters: {
        available: number;
        collectionURI: string;
        items: [];
        returned: number;
    }
    stories: {
        available: number;
        collectionURI: string;
        items: [{
            resourceURI: string;
            name: string;
            type: string;
        },
        {
            resourceURI: string;
            name: string;
            type: string;
        }]
    }
    comics: {
        available: number;
        collectionURI: stirng;
        items: [
            {
                resourceURI: string;
                name: string;
            }
        ];
        returned: number;
    }
    events: {
        available: number;
        collectionURI: string;
        items: [];
        returned: number;
    },{
        next: null
        previous: null;
    }
}