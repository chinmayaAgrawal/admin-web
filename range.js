module.exports =(req,res ,next) => {
    res.header('Content-Range','post 0-30/30')
    next()
}