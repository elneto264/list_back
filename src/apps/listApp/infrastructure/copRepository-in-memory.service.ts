import { CosaOpersona } from '../domain/cop.interface';
import { CosaOpersonaRepository } from '../domain/copRepository';


type CoPId = string;

export default class copRepositoryInMemory implements CosaOpersonaRepository {

    public memory = new Map<CoPId, CosaOpersona[]>();

    async readResponses(copId: string){
        return this.memory.get(copId) || [];
    }

    async createCop(cop: CosaOpersona){
        if(!this.memory.has(cop.id)){
            this.memory.set(cop.id,[])
        }
        this.memory.set(cop.id, [...this.memory.get(cop.id)!, cop]);
    }


}