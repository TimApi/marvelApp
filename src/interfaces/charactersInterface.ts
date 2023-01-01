export interface characterInterface  {
    id: number;
    name: string;
    description: string | null;
    modified: Date;
    thumbnail: {
        path: string;
        extension: string;
    }
    resourceURI: string;
    comics: {
        available: number;
        collectionURI: string;
        items: [{
            resourceURI: string;
            name: string;
        }]
        returned: number;
    }
    series: {
        available: number;
        collectionURI: string;
        items: [{
            resourceURI: string;
            name: string;
        }]
        returned: number;
    }
    stories: {
        available: number;
        collectionURI: string;
        items:[{
            resourceURI: string;
            name: string;
            type: string;
        }]
    }
    events: {
        available: number;
        collectionURI: string;
        items: [{
            resourceURI: string;
            name: string;
        }]
        returned: number;
    }
    urls: [{
        type: string;
        url: string;
    }]
}