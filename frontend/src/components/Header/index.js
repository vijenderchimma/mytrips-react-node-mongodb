import {Link,withRouter} from 'react-router-dom'

import './index.css'

const Header = () =>(
    <nav className='nav-container'>
        <img src="https://i.ibb.co/5jZrCq7/mytrips-black-logo.png" className='website-logo' alt = "website logo"/>     
        <ul className='links-container'>
            <li><Link to = "/" className='nav-link'>Home</Link></li>
            <li><Link to ="/waterfalls" className='nav-link'>Waterfalls</Link></li>
            <li><Link to ="/temples" className='nav-link'>Temples</Link></li>
            <li><Link to ="/About" className='nav-link'>About</Link></li>
            <li><Link to ="/contact" className='nav-link'>ContactUs</Link></li>
        </ul>
    </nav>
)

export default withRouter(Header)