import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// components

import loginRouter from './Router/loginRouter';
import mainRouter from './Router/mainRouter';

//

dotenv.config();

//

const app = express();

// use

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +  '/public'));
app.use(cookieParser())


// router

app.use('/api/v1', loginRouter);
app.use('/api/v1', mainRouter)






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