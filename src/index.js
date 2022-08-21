//requerir las dependencias necesarias
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser= require('body-parser');
require('./database')

//configurar el puerto
//con process.env.PORT || 3000 garantizamos que tome el puerto que se le entrega o por defecto el 3000
app.set('Port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origen:'*'}));

app.use('/jefe',require('./routes/jefe.route'))
app.use('/empleado',require('./routes/empleado.route'))

app.listen(app.get('Port'),()=>{
    console.log("Servidor corriendo", app.get('Port'));
})