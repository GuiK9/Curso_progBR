const Link = require('../models/Link.js')

const redirect = async (req, res, next) => {
    let title = req.params.title
    try {
        let doc = await Link.findOneAndUpdate({ title: title }, { $inc: { click: 1 } })
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
        res.redirect('/')
    } catch (err) {
        res.status(404).send(err)
    }
}

const loadLink = async (req, res) => {

    let id = req.params.id

    try {
        let doc = await Link.findById(id)
        res.render('edit', { err: false, body: doc })
    } catch (err) {
        res.status(404).send(err)
    }
}

let errorDate = false


const editLink = async (req, res) => {



    let link = {}
    link.title = req.body.title
    link.description = req.body.description
    link.url = req.body.url

    let valuesLink = Object.values(link)

    for (let i = 0; i < valuesLink.length; i++) {

        if( valuesLink[i] == ""){
            errorDate = true
        }
        
        
    }

    let id = req.params.id
    if (!id) {
        id = req.body.id

    }

    if (errorDate == false) {


        try {
            let doc = await Link.updateOne({ _id: id }, link)
            res.redirect('/')
        } catch (err) {
            res.render('edit', { err, body: doc })
        }
    } else {
        console.log("flag")
        let err = {}
        err.message = " check the data, it is not complete"
        res.render('edit', { err, body: req.body })
    }


    //seguinte ele continua perdendo os dados do form mas ve sobre o errordate dar sempre false na segunta tentativa de edit

}

const redirectEdit = async (req, res) => {
    res.send("aloha bitch")
}

module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink, redirectEdit }