import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Temples extends Component{

    state = {data:[]}

    componentDidMount(){
        this.getTemplaData()
    }

    getTemplaData = async () => {
        const apiUrl = 'http://localhost:3001/gettemples'
        const options = {
            method: 'GET'
        }

        const response = await fetch(apiUrl,options)
        console.log(response.json())
    }
  
    render(){

        return(
            <Header />
        )
    }
}

export default Temples