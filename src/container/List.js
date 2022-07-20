import React from "react";

import Card from '../components/Card/Card'

class List extends React.Component{

    constructor(){
        super();
        this.state = {
            data: []
        }
    }

   async componentDidMount(){
      const res = await fetch(__dirname+'./assets/data.json');
      const resJSON = await res.json();
      this.setState({data: resJSON});
    }

    render(){
        return this.state.data.map()
    }
}

export default List;