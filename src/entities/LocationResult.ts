export interface LocationsFetchReponseObject{
    type: string;
    features: LocationResult[];
}

export interface LocationResult{
    type: string;
    properties: LocationProperties;
}

interface LocationProperties{
    name: string;
    country: string;
    city: string;
}