const Link = require('../models/Link.js')

const redirect = async (req, res, next) => {
    let title = req.params.title
    try {
        let doc = await Link.findOne({ title })
        if (doc) {
            res.redirect(doc.url)
        } else {
            next()
        }
    } catch (err) {
        res.send(err)
    }
}

const addLink = async (req, res) => {
    let link = new Link(req.body)

    try {
        await link.save()
        res.redirect("/")
    } catch (err) {
        console.log(req.body)
        res.render('add', { err, body: req.body })
    }

}

const allLinks = async (req, res) => {

    try {
        let docs = await Link.find({})
        res.render('all', { links: docs })
    } catch (err) {
        res.send(err)
    }

}

const deleteLink = async (req, res) => {

    let id = req.params.id
    if (!id) {
        id = req.body.id
    
    }

    try {
        await Link.findByIdAndDelete(id)
        //res.send(id)
        res.redirect('/')
    } catch (err) {
        res.status(404).send(err)
    }
}

const loadLink = async (req, res) => {

    let id = req.params.id

    try {
        let doc = await Link.findByIdAndUpdate(id)
        res.render('edit', { err: false, body: doc })
    } catch (err) {
        res.status(404).send(err)
    }
}

const editLink = async (req, res) => {

    let link = {}
    link.title = req.body.title
    link.description = req.body.description
    link.url = req.body.url
  

    let id = req.params.id
    if (!id) {
        id = req.body.id
    
    }

    try {
        let doc = await Link.updateOne({_id:id}, link)
        console.log(doc)
        res.redirect('/')
    } catch (err) {
        res.render('edit', {error, boy: req.body})
    } 
}

module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink }