import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';

// components

import loginRouter from './Router/loginRouter';

//

dotenv.config();

//



const app = express();

// use

app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:  false}));
app.use(express.static(path.join(__dirname,  '..',  'public')));
app.use(cookieParser())
app.use(morgan('dev'));

// router

app.use('/api/v1', loginRouter);




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  '..',  'public/appLogin.html'));
})


app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname,   '..',  'public/main.html'));
})









// listen

const PORT = process.env.PORT || 9000;

const startServer = () => {
  try {
    app.listen(PORT, ()  =>  console.log(`Сервер стартовал с порта: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}


startServer()