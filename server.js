const express = require('express')
const app = express()
// const port = process.env.PORT || 5000
const port = 5000
const dbConnection = require('./db')
app.use(express.json())




// const path = require('path')

// if(process.env.NODE_ENV==='production')
// {

//     app.use('/' , express.static('client/build'))

//     app.get('*' , (req , res)=>{

//           res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

//     })

// }

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, (error)=>{
    error?
    console.log(error)
    :console.log(`server is runnig on PORT ${port}`)
  })

  app.use('/api/cars/' , require('./routes/carsRoute'))
  app.use('/api/users/' , require('./routes/usersRoute'))
  app.use('/api/bookings/' , require('./routes/bookingsRoute'))

app.use('/', (req, res) => res.send('Api is runnig'))
 


// app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))