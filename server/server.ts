import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app: Application = express()
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
})

const PORT = process.env.PORT || 5002

app.listen(PORT, () => {
    console.log(`Server running in PORT:${PORT}`)
})
