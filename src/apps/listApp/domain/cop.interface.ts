


export interface CosaOpersona {
    id:string;
    name: string;
    weight:number;
    price:number;
    quantity: number;
    country:string;
    creationDate:string;
    languages: {
        [language:string]: string;
    };
    email:string;
    image:string;
    url: string;
    description:string;
}