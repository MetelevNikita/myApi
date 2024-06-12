import Pool from "../database/db";


//



const postRegistrationUser = async (req: any, res: any) => {

  try {

    const {name, email, password} = req.body

    console.log(name, email, password)

    const newUser = await Pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]);

    if(!newUser.rows[0]) {
      res.status(400).json({error: "User already exists"})
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