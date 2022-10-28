import { randomUUID } from 'crypto';
//import { CosaOpersona } from '../domain/cop.interface';
import { Command } from './createCop';
import CommandHandler from './createCop';

describe('When creating a new item of the list',()=>{

    let command: Command;
    let commandHandle: CommandHandler;
    const idCop= randomUUID.toString();

    beforeEach(() => {


        command= {
            id:idCop,
            name:"item1",
            creationDate: new Date().toISOString(),
            description:'Ejemplo del primer item test',
        }
    })

    const item = {
        id:idCop,
        name:"item1",
        creationDate: new Date().toISOString,
        description:'Ejemplo del primer item test',
    }



    test('should exist', ()=>{
        expect(command.id).toBe(item.id);
    })

    describe('And the name is empty',()=>{

        beforeEach(() => {
            command.name=""
        })

        test('should fail',  ()=>{
            let error: Error | undefined;
            try {
                commandHandle.handle(command)
            }catch(err:unknown){
                 error= err as Error;
            }
            expect(error).toBeDefined
        })

    });
})