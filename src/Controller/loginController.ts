import Pool from "../database/db";
import jwt from  "jsonwebtoken";

//




const postLogin = async (reg: any, res: any) => {

  try {
    const {login, password }  =  reg.body;

    if(!login && !password) {
      res.status(400).send({message: 'Missing fields'});
      return
    }

    const user = await Pool.query(`SELECT * FROM users WHERE login = $1 AND password = $2`, [login, password]);

    if(!user.rows[0])  {
      res.status(400).send({message: 'Invalid credentials'});
      return
    }

    console.log(user.rows[0]);
    const token = jwt.sign(user.rows[0],  'sasd',  {expiresIn: '1d'})
    res.cookie('token', token, {httpOnly:  true,  maxAge:  86400,  sameSite: 'strict'});
    console.log(token);
    res.redirect('/main');
  } catch (error) {

    res.send(500).send({message: 'Server Error' });
    console.log(error);

  }
}

export { postLogin }