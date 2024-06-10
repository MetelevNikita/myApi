const getMain = (req: any, res: any) => {

  try {

    const token = req.cookies.token
    console.log(token)

    if(!token) {
      res.status(200).send({message:  'not authorized'  });
      return
    }

    res.status(200).send({message:  'Main Page' });

  } catch (error) {
    console.log(error)
    res.status(500).send({message: 'Server Error' });

  }
}


export { getMain }