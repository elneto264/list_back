import { randomUUID } from 'crypto';
//import { CosaOpersona } from '../domain/cop.interface';

describe('When creating a new item of the list',()=>{

    
    const item = {
        id:randomUUID.toString,
        name:"item1",
        creationDate: new Date().toISOString,
        description:'Ejemplo del primer item test',
    }



    test('should exist', ()=>{
        expect(item).toBe(item);
    })
})