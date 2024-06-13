import Pool from "../database/db";


//



const postRegistrationUser = async (req: any, res: any) => {

  try {

    const {name, email, password, verifyPassword} = req.body

    if(!name  ||!email  ||!password)   {
      res.status(400).json({error:  "Поля не должны быть пустыми"})
      return
    }

    if(password !==  verifyPassword)  {
      res.status(400).json({error:  "Пароли не совпадают"})

    }

    console.log(name, email, password)

    const newUser = await Pool.query("INSERT INTO users (name, email, password, verifyPassword) VALUES ($1, $2, $3, $4) RETURNING *", [name, email, password, verifyPassword]);

    if(!newUser.rows[0]) {
      res.status(400).json({error: "Пользователь не создан"})
      return
    }

    res.status(200).send(newUser.rows[0])

  } catch (error) {
    console.log(error)
    res.status(500).send({error:  "Internal server error"})
  }
}


const getRegistrationUser = async  (req: any, res: any)  =>  {

  try {

    const allUsers = await Pool.query("SELECT * FROM users");
    if(allUsers.rows.length < 1)  {
      res.status(400).json({error: "No users found"})
      return
    }
    res.status(200).send(allUsers.rows)

  } catch (error) {
    console.log(error)
    res.status(500).send({error:  "Internal server error"})
  }
}


export {postRegistrationUser, getRegistrationUser}