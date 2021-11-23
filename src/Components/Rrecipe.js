import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";


export default class Rrecipe extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

componentDidMount(){
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res=>res.json())
    .then(
        (result)=>{
            this.setState({
                isLoaded: true,
                items:result.meals
            });
        },
        (error)=>{
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
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
            <div className="homePageContent">
                {items.map(item=>(
                <Card className="card">
                    <Card.Img variant="top" className="img" src={item.strMealThumb} />
                    <Card.Body>
                        <Card.Title className="cadrTitle">{item.strMeal}</Card.Title>
                        <Card.Text>
                            {item.strInstructions}
                        </Card.Text>
                    </Card.Body>
                    
                        
                </Card>))}
                <Row className="btnsRow">
                        <Button as={Col} className="btnSkip" variant="primary" onClick={()=>{
                            this.setState({
                                    error: null,
                                    isLoaded: false,
                                    items: []
                            });
                            this.componentDidMount();
                        }}>Skip</Button>
                        <div className="btn"></div>
                        <Button as={Col} className="btnLike" variant="primary" onClick={()=>{
                            let data = JSON.stringify(items);
                            localStorage.setItem(localStorage.length,data);
                            console.log(localStorage.getItem(localStorage.length-1));
                        }}>Like</Button>
                </Row>
            </div>
            </>
        );
    }
}


}