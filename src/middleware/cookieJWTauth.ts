import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export const cookieJWTauth = (req: any, res: any, next: any) => {
  const token = req.cookies.token;


  try {

    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = user;
    console.log(user);
    next()

  } catch (error) {
    res.redirect('/login');

  }
}