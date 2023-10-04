import Header from '../Header'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import './index.css'

const Home = () => (
    <>
    <Header/>
    <div className='home-container'>
        <h1 className='home-heading'>Plan Your Trip Where You Want To Go.</h1>
        <p className='home-paragraph'>There is so much to see in this world, my friend, sit down and make time for it. To plan where you want to go...</p>
        <Link to ="/trips"><button type = "button" className='trip-btn'>Plan Your Trip</button></Link>
    </div>
    </>
)

export default Home