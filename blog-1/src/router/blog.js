const { getList, 
        getDetail, 
        newBlog, 
        updateBlog,
        delBlog
     } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require("../model/resModel")

// 统一的登录验证函数
const loginCheck = (req) => {
    if(!req.session.username){
        return Promise.resolve(
            new ErrorModel('尚未登录 noch nicht angemeldet')
        )
    }
}

const handleBlogRouter = (req, res) => {
    const method = req.method // GET Post
    const id = req.query.id

    // Blog List
    if (method === 'GET' && req.path === '/api/blog/list'){
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        //const listData = getList(author, keyword)
        //return new SuccessModel(listData)
        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    // Blog Detail
    if (method === 'GET' && req.path === '/api/blog/detail'){
        
        //const data = getDetail(id)
        //return new SuccessModel(data)
        const result = getDetail(id)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    // Neu Blog
    if (method === 'POST' && req.path === '/api/blog/new'){

        const loginCheckResult = loginCheck(req)
        if(loginCheckResult){
            //如果这里有值，说明尚未登录
            return loginCheck
        }

        //req.body.author = 'Jose' // 假数据， 待开发登录时再改成真实数据
        req.body.author = req.session.username
        const result = newBlog(req.body)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    // Update Blog
    if (method === 'POST' && req.path === '/api/blog/update'){

        const loginCheckResult = loginCheck(req)
        if(loginCheckResult){
            //如果这里有值，说明尚未登录
            return loginCheck
        }

        const result = updateBlog(id, req.body)
        return result.then(val =>{
            if(val){
                return new SuccessModel()
            } else{
                return new ErrorModel('Update Blog Error')
            }
        })
    }

    //delete Blog
    if (method === 'POST' && req.path === '/api/blog/del'){

        const loginCheckResult = loginCheck(req)
        if(loginCheckResult){
            //如果这里有值，说明尚未登录
            return loginCheck
        }

        //const author = 'Jose' // 假数据， 待开发登录时再改成真实数据
        const author = req.session.username
        const result = delBlog(id, author)
        return result.then(val => {
            if (val){
                return new SuccessModel()
            } else {
                return new ErrorModel('删除博客失败')
            }
        })

    }
}

module.exports = handleBlogRouter