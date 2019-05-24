import React from 'react';
import './Menu.css'
const Menu = (props) => {
    const { items  , deleteItem} = props;

return (
 props. items.map((item,index ) => {

        return (
       
<div class="container" >


<div >
<button className="button" onClick={() => deleteItem(index)}>
          { item.itemDesc}   <br/>
    {item.itemPrice} </button></div>
    
   </div>
   
   );}))
   
 
         }      
export default Menu;



   