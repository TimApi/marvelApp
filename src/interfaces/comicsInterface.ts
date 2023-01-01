export interface comicsInterface  {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string | null;
    description: string | null;
    modified: Date;
    isbn: numer | null;
    upc: number;
    diamondCode: number | null;
    ean: sting | null;
    issn: string | null;
    format: string | null;
    pageCount: number;
    textObjects: [];
    resourceURI: string;
    urls: urls;
    series: {
        resourceURI: string;
        name: string;
    }
    variants: variants;
    collections: [];
    collectedIssues: [];
    dates: dates;
    prices: [{
        type: string;
        prices: number;
    }];
    thumbnail: {
        path: string;
        extension: string
    };
    images: [];
    creators: {
        available: number;
        collectionURI: string;
        items: [{
            resourceURI: string;
            name: string;
            role: string;
        }]
        returned: number
    };
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
        }]
    }
    events: {
        available: number;
        collectionURI: string;
        items: [];
        returned: number;
    }
}

interface urls { 
    type: string;
    url: string
}

interface variants {
    resourceURI: string;
    name: string
}

interface dates {
    type: string;
    date: date;
}