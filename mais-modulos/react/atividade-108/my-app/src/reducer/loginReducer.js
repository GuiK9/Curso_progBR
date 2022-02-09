export default function loginReducer(state = false, action) {
    
    switch (action.type) {
        
        case "LOGIN":
            return true
        case "LOGOUT":
            return false
        case 'teste':console.log(action)
            return false
        default:
            return state
    }
}