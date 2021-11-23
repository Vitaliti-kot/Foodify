import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Favourites extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount()
    {
        let data =[]
        for(let i=0;i<localStorage.length;i++)
        {
            data.push(JSON.parse(localStorage.getItem(i.toString())));
            console.log(JSON.parse(localStorage.getItem(i.toString())));
        }
        this.setState({
            isLoaded: true,
            items:data
        });
    }
    render(){
        const {error, isLoaded, items}=this.state;
        if(error){
            return <p>Error {error.message}</p>
        }else if(!isLoaded){
            return <p>Loading...</p>
        }else{
    return(
        <>
            {
                items.length>0?
                items.map(i=>(
                    i.map(dish=>(
                        <div className="favouriteCard">
                        <Card>
                    <Card.Img variant="top" src={dish.strMealThumb} alt="dish" />
                    <Card.Body>
                        <Card.Title>{dish.strMeal}</Card.Title>
                        <Card.Text>
                        {dish.strInstructions}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </div>
                    ))
                )):<p>You don`t have liked dishes.</p>
            }
        </>
    );
}
}


}