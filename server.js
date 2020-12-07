import dotenv from 'dotenv'
import chalk from 'chalk'
import mongoose from "mongoose"
import app from'./app.js'

dotenv.config({ path: './.env'});

// Defining the PORT
const PORT = process.env.PORT

const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD)

// Connect with the database
const connections = () => {
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex:true
      })
      .then(() => {
        console.log(chalk.bold.dim('Databse connected successfully ' + process.env.DATABASE));
      })

      app.listen(PORT, () => {
        console.log(chalk.bold.bgMagenta(`Server started on port ${PORT}`));
      });
}

connections()

process.on('unhandledRejection', error => {
    console.log('ERROR! SERVER CRASHED')
    console.log(error.message)
    server.close(() => {
        process.exit(1)
    })
})
