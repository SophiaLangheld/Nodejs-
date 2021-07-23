const { getList, getDetail } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require("../model/resModel")

const handleBlogRouter = (req, res) => {
    const method = req.method // GET Post

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
        const id = req.query.id
        const data = getDetail(id)
        return new SuccessModel(data)
    }

    // Neu Blog
    if (method === 'GET' && req.path === '/api/blog/new'){
        return{
            msg: ' hier ist new Blog'
        }
    }

    // Update Blog
    if (method === 'GET' && req.path === '/api/blog/update'){
        return{
            msg: 'update Blog'
        }
    }

    //delete Blog
    if (method === 'GET' && req.path === '/api/blog/del'){
        return{
            msg: 'delete Blog'
        }
    }
}

module.exports = handleBlogRouter