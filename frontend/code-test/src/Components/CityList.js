import React from 'react'

import axios from 'axios'

export default class CityList extends React.Component{

    state = {
        cities: []
    }
    
    componentDidMount(){
        axios.get('localhost:9000/api/route').then(res => {
            const cities = res.data
            this.setState ({cities})
        })
    }
    render(){
        return(
            <ul>
                {this.state.cities.map(cities => <li>cities</li>)}
            </ul>
        )
    }
}