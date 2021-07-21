const handleUserRouter = (req, res)  => {
    const method = req.method // GET POST
    const url = req.url
    const path = url.split('?')[0]

    // Login
    if ( method ==='POST' && req.path === '/api/user/login'){
        return {
            msg: 'hier ist Login'
        }
    }
}

module.exports = handleUserRouter