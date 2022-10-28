import { CosaOpersona } from "./cop.interface";

export interface CosaOpersonaRepository {
    createCop(cop:CosaOpersona):Promise<void>;
    readResponses(copId:string):Promise<CosaOpersona[]>;
}