const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = ` select * from blogs where 1=1 `
    if (author) {
        sql += ` and author = '${author}' `
    }
    if (keyword) {
        sql += ` and title like '%${keyword}' `
    }
    sql += ` order by createtime desc;`

    // 返回 promise
    return exec(sql)
    
}

const getDetail = (id) => {
    //先返回假数据
    console.log(id);
    return{
        id:1,
        title:"titleA",
        content:"contentA",
        createTime:1626859561843,
        author:'leo'
    }
}

module.exports = {
    getList,
    getDetail
}