import { v4 as uuidv4 } from 'uuid'

class Item {


    constructor(text){
        this.id = uuidv4()
        this.text = text
        this.done = false
    }

}


export default Item