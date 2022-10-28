import express from 'express'


export default class Server {
   app;
   port;
   
    constructor(){
        this.app = express();
        this.port = '8080'
    }


    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server en puerto', this.port)
        })
    }

}

module.exports = Server;