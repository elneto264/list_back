import { CosaOpersonaRepository } from '../domain/copRepository';

type ISODateString = string;


export interface Command {
    id:string;
    name: string;
    weight?:number;
    price?:number;
    quantity?: number;
    country?:string;
    creationDate:ISODateString;
    languages?: {
        [language:string]: string;
    };
    email?:string;
    image?:{
        content:string,
        description:string
    };
    url?: string;
    description:string;
}

export default class CommandHandler{

    constructor(private repository: CosaOpersonaRepository){}

    public async handle(command: Command): Promise<void>{

        if(command.name === ''){
            throw new Error();
        }

        this.repository.createCop({
            id:command.id,
            name: command.name,
            creationDate: new Date(command.creationDate).toISOString(),
            description:command.description,
        })
    }

}