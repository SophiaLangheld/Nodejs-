const getList = (author, keyword) => {
    //先返回假数据， 但格式是正确的
    return[
        {
          id:1,
          title:"titleA",
          content:"contentA",
          createTime:1626859561843,
          author:'leo'
        },
        {
            id:2,
            title:"titleB",
            content:"contentB",
            createTime:1626859677545,
            author:'mia'
        }
    ]  
}

module.exports = {
    getList
}