// Dependencies
import express from 'express'
import next from 'next'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import session from 'express-session'

// Config
import config from './config'

// Midlewares
import user, { isConnected } from './shared/lib/middlewares/user'

// Settings up Next App
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

// Running Next App
nextApp.prepare().then(() => {
  const app = express()

  // Public static
  app.use(express.static(path.join(__dirname, '../public')))

  // Middlewares
  app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: config.security.secretKey
    })
  )
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser(config.security.secretKey))
  app.use(cors({ credentials: true, origin: true }))
  app.use(user)

  // Routes
  app.get('/login', isConnected(false), (req: any, res: any) => {
    return nextApp.render(req, res, '/users/login', req.query)
  })

  app.get(
    '/dashboard',
    isConnected(
      true,
      ['god', 'admin', 'editor'],
      '/login?redirectTo=/dashboard'
    ),
    (req: any, res: any) => {
      return nextApp.render(req, res, '/dashboard', req.query)
    }
  )

  app.all('*', (req: any, res: any) => {
    return handle(req, res)
  })

  // Listening port 3000
  app.listen(config.server.port)
})
