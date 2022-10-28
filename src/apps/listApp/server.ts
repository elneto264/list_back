import express from 'express'


export default class Server {
   app;
   port;
   path;
   
    constructor(){
        this.app = express();
        this.port = '8080';

        this.path = {
            cop:'/api/v1/cop'
        }
    }


    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server en puerto', this.port)
        })
    }

}

module.exports = Server;