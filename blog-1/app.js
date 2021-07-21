const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandle = ((req, res) => {
    //return Datei JSON
    res.setHeader('Content-type', 'application/json')

    //get path
    const url = req.url
    req.path = url.split('?')[0]

    //query
    req.query = querystring.parse(url.split('?')[0])

    // handle Blog routing
    const blogData = handleBlogRouter(req, res)
    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    //handle User routing 
    const userData = handleUserRouter(req, res)
    if(userData){
        res.end(
            JSON.stringify(userData)
        )
        return
    }

    //Miss route , return 404
    res.writeHead(404, {"Content-type": "text/plain"})
    res.write("404 Not Found\n")
    res.end()
});

module.exports = serverHandle

// process.env.NODE_ENV