import express from 'express'; //imortante debe nunca faltar
import router from './routes/index.js'; //imortante debe nunca faltar
import db from './config/db.js';  


const app = express(); //imortante debe nunca faltar

//Conectar a la base de datos

db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch(error => console.log(error));


//Definir puerto
const port = process.env.PORT || 4000; //imortante debe nunca faltar

//Habilitar PUG
app.set('view engine', 'pug'); //imortante debe nunca faltar para habiliar pug

// obtener el año actual
app.use((req, res, next)=>{
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
});

// Agregar body parser para leer los datos del formulario (importante para los formularios)
app.use(express.urlencoded({extended:true}));

//Definir la carpeta publica
app.use(express.static('public'));

//agreagar Router, nos sirver para agregar las rutas que vamos definiendo
app.use('/', router); //imortante debe nunca faltar


app.listen(port, ()=>{
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});
