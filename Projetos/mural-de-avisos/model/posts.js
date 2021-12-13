module.exports = {
    posts: [{
        id: "lsdkfakjg",
        title: "teste title",
        description: "teste description"
    }],

    getAll() {
        return this.posts
    },

    newPost(title, description) {

        this.posts.push({
            id: generateID(),
            title,
            description
        })
    },

    deletPost(id) {
        this.posts.splice(this.selectPost(id))
    },

    selectPost(id) {
        let indexID 
        for (let i = 0; i < this.posts.length; i++) {
            if(this.posts[i].id === id){
                indexID = i
            }
        }
        return indexID
    }

}

function generateID() {
    return Math.random().toString(36).substring(2, 9)
}