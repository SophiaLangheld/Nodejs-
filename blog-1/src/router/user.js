const {login} = require('../controller/user')
const {SuccessModel, ErrorModel} = require('../model/resModel')

 
const handleUserRouter = (req, res) => {
    const method = req.method //GET POST

    //Anmelden 登录
    /*if (method === 'POST' && req.path === '/api/user/login'){
        const { username, password} = req.body
        const result = login(username, password)
        return result.then(data => {
            if(data.username){
                return new SuccessModel()
            }
            return new ErrorModel('登录失败 anmelden error!')
        })
    }*/

    //Anmelden 登录  Zum Test bei GET
    if (method === 'POST' && req.path === '/api/user/login'){
        const { username, password} = req.body
        //const { username, password} = req.query // if (method === 'GET' && req.path === '/api/user/login'){
        const result = login(username, password)
        return result.then(data => {
            if(data.username){

                //设置 session
                req.session.username = data.username
                req.session.realname = data.realname

                console.log('req.session is', req.session)
                
                return new SuccessModel()
            }
            return new ErrorModel('登录失败 anmelden error!')
        })
    }

    //登录验证的测试  anmelden test
    /*if(method === 'GET' && req.path === '/api/user/login-test'){
        if(req.session.username){
            return Promise.resolve(
                new SuccessModel({
                    session:req.session
                })
            )
        }
        return Promise.resolve(
            new ErrorModel('尚未登录 noch nicht angemeldet')
        )
    }*/
}

module.exports = handleUserRouter
/*const handleUserRouter = (req, res)  => {
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

module.exports = handleUserRouter*/