import express from "express";
const Routes = express.Router();

Routes.get('/', (req, res) => {
    res.status = 200 ?
    res.send(`API root listen`) :
    `Error bad routes`;
})

Routes.get('/Users', (req, res) => {
    res.send([{
        "Marcos": "Estudiante",
        "Erick": "Programador",
        "Kevin": "Web developer"
    }]);
})

export default Routes;