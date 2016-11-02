import express from 'express'
import authentication from './authentication'
import user from './user'
import users from './users'
import profile from './profile'

const buildRoutes = (router, ...args) => {
    for (let i = 0; i < args.length; i++) {
        args[i](router)
    }
    return router
}

const index = (router) => router.get('/', (req, res) => res.render('index.ejs'))

export default (app) => {
    app.use('/', buildRoutes(express.Router(), index, authentication, profile));
    app.use('/user', buildRoutes(express.Router(), user));
    app.use('/users', buildRoutes(express.Router(), users));
}
