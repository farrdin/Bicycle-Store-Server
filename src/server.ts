import mongoose from 'mongoose'
import config from './app/config'
import app from './app'

async function Server() {
  try {
    await mongoose.connect(config.mongouri as string)
    app.listen(config.port, () => {
      console.log(`Bicycle app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
Server()
