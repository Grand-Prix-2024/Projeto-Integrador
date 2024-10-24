import express from 'express';

const app = express();
const porta = 5000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('API Hive funcionando :)')
});






app.listen(porta, ()=>{
    console.log(`API RODANDO NA PORTA: ${porta}`)
});