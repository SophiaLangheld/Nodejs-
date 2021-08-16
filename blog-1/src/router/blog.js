const { getList, 
        getDetail, 
        newBlog, 
        updateBlog,
        delBlog
     } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require("../model/resModel")

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
        req.body.author = 'Jose' // 假数据， 待开发登录时再改成真实数据
        const result = newBlog(req.body)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    // Update Blog
    if (method === 'POST' && req.path === '/api/blog/update'){
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
        const author = 'Jose' // 假数据， 待开发登录时再改成真实数据
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