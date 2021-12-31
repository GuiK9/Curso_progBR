const Link = require('../models/Link.js')

const redirect = async (req, res) => {
    let title = req.params.title
    try{

        let docs = await Link.findOne({title})
        console.log(docs)
        console.log(docs.url)
        res.redirect(docs.url)

    } catch(err) {

        res.send(err)
    }
}

module.exports = {redirect}