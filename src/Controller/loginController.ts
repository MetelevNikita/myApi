import Pool from "../database/db";
import jwt from  "jsonwebtoken";
import path from 'path'

//


const folder = path.join(__dirname,  '..',  '..',  'public',  '/main.html');

console.log(folder)



const postLogin = async (reg: any, res: any) => {

  try {
    const {email, password }  =  reg.body;

    if(!email && !password) {
      res.status(400).send({message: 'Missing fields'});
      return
    }

    const user = await Pool.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, [email, password]);

    if(!user.rows[0])  {
      res.status(400).send({message: 'Invalid credentials'});
      return
    }

    console.log(user.rows[0]);
    const token = jwt.sign(user.rows[0],  process.env.JWT_SECRET as string,  {expiresIn: '1d'})
    res.cookie('token', token, {httpOnly:  true,  maxAge:  86400,  sameSite: 'strict'});
    return res.redirect('/main')

  } catch (error) {

    res.status(500).send({message: 'Server Error' });
    console.log(error);

  }
}

export { postLogin }