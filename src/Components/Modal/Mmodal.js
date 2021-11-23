import React, { useEffect, useState } from "react";
import "./modal.css";
import { useNavigate } from "react-router-dom";
import {Modal, Button, Form} from "react-bootstrap";

const nDish = {
    idMeal:"",
    strMeal:"",
    strMealThumb:"",
    strInstructions:"",
};
const MyModal =({active, setActive})=>{
    const[newDish,setNewDish]=useState(nDish);
    const navigate = useNavigate();
    const AddHandler=()=>{
        newDish.idMeal=localStorage.length;
        if(newDish.strMealThumb===""){
            newDish.strMealThumb="https://img.freepik.com/free-vector/_212889-1967.jpg?size=626&ext=jpg";
        }
        let data=[];
        if(document.getElementById("title").value!=="")
        {
            data.push("["+JSON.stringify(newDish)+"]");
            localStorage.setItem(localStorage.length,data);
        }
        
        
        document.getElementById("title").value="";
        document.getElementById("img").value="";
        document.getElementById("description").value="";

        setActive(false);
        navigate(0);
    }
    useEffect(()=>{},[newDish]);
    const onChange=(e)=>{
        const{name,value} = e.target;
        setNewDish({...newDish,[name]:value})
    }
    
        return(
            <div className={active?"modal active":"modal"} onClick={()=>setActive(false)}>
                <div className={active?"modal__content active":"modal__content"} onClick={e=>e.stopPropagation()}>
                
        <Modal.Header closeButton onClick={()=>setActive(false)}>
          <Modal.Title>Add custom dish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label></Form.Label>
            <Form.Control type="text" id="title" placeholder="Dish title" name="strMeal" defaultValue={newDish.strMeal} className="mb-3" onChange={onChange}></Form.Control>
            <Form.Control type="text" id="img" placeholder="Image url" name="strMealThumb" defaultValue={newDish.strMealThumb} className="mb-3" onChange={onChange}></Form.Control>
            <Form.Control as="textarea" id="description" rows={5} placeholder="Dish description..." defaultValue={newDish.strInstructions} onChange={onChange} name="strInstructions" className="mb-3" ></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={AddHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
                </div>
            </div>
        )
}

export default MyModal; 