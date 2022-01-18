import React from 'react'

function Menu(props) {

    const listLinks = props.links.map((link, index) => <li key={index}>{link}</li>)

    
    return (<ul className='menu'>
        {listLinks}
    </ul>)
}

//consigo passar valores do pai pro filho mas ainda não consigo passar do filho pro pai 

export default Menu