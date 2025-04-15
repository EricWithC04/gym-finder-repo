import express, { Application } from "express"
import { Server as HttpServer } from "http"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

export class Server {
    public app: Application
    private port: number
    private httpServer?: HttpServer

    constructor(port: number) {
        this.app = express()
        this.port = port
        this.configureMiddlewares()
    }

    private configureMiddlewares() {
        this.app.use(morgan("dev"))
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(express.json())
    }

    // En cada servicio se deben configurar las rutas mediante un callback
    public setRoutes(routes: (app: Application) => void) {
        routes(this.app)
    }

    public start() {
        this.httpServer = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}