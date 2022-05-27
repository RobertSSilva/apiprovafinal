import { dobro, somar, media, temperatura} from './services.js'
import { Router } from 'express'


const server = Router();

server.get('/ping', (req, resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero', (req, resp) => {  
    let numero = Number(req.params.numero);
    
    const d = dobro (numero); 
    
    resp.send({dobro: d});

})

server.get ('/somar', (req, resp) => {  // query
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    const x = somar (a,b);

    resp.send({
        somar: x
    })
})

   

server.post('/somar', (req, resp) =>{
    try{
    let a = req.body.a;
    let b = req.body.b;
  
    const x = somar(a,b);
       resp.send({
        somar: x
    })
}
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/media', (req, resp) =>{
    try{
   let {n1,n2,n3} = req.body;
  
    const x = media(n1,n2,n3);
       resp.send({
        media: x
    })
}
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/temperatura', (req, resp) =>{
    try{
  let temp = Number(req.query.temp);   

 const x = temperatura(temp);
 resp.send({
  media: x
})

}
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

 export default server;