import express from 'express';
const server = express();

server.get('/', (req, res)=>{
    res.send('App Funcionando!');
});

export default server;
export {express};
