export interface storyInterface {
    id: number;
    title: string;
    description: string | null;
    resourceURI: string;
    type: string;
    modified: Date;
    thumbnail: string | null;
    creators: {
        available: number;
        collectionURI: string;
        items: [];
        returned: number
    }
    characters: {
        available: number;
        collectionURI: string;
        items: [];
        returned: number;
    }
    series: {
        available: number;
        collectionURI: string;
        items: [{
            resourceURI: string;
            name: string
        }]
        returned: number;
    }
    comics: {
        available: number;
        collectionURI: string;
        items: [{
            resourceURI: string;
            name: string;
        }]
        returned: string;
    }
    events: {
        available: number;
        collectionURI: string;
        items: [];
        returned: number;
    }
    origanalIssue: {
        resourceURI: string;
        name: string;
    }
}