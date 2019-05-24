import React,{Component} from 'react'
import Axios from 'axios'




class AddItem extends Component{
 state = {
   itemDesc: '',
   itemPrice: '',
   itemImage: '',
 submittedData:false
}

onChangeDesc=(event)=>
{

this.setState({itemDesc: event.target.value})
}

onChangePrice=(event)=>
{

this.setState({itemPrice: event.target.value})
}
onChangeimage=(event)=>
{

this.setState({itemImage: event.target.value})
}

postData=()=>{
 
    let  Data={
   "itemDesc":this.state.itemDesc,
   "ItemPrice":this.state.itemPrice,
   "itemImage":this.state.itemImage
 }

   Axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/postmenu',Data)
   .then(response=>{
    console.log(response)
    })
   .catch(error=>{
       console.log(error)

   });
 }
render ()
{
return (
<div  className="form">
<form  name="my newForm"  >
<h1 className="head">Add new item </h1>

<div className="font">Item Name: <input   type="text" name="name"   placeHolder="input item name" value={this.state.ItemDesc}
onChange={this.onChangeDesc}
/> </div>

<div className="font">Item price: <input  type="number" name="price" placeHolder="input item price" value={this.state.Price}
onChange={this.onChangePrice}
/>
</div>

<div className="font">"url" image:<input className="input"  type="text" name="photo" placeHolder="input image  address  "  value={this.state.ItemImage}
onChange={this.onChangeimage}/></div>

 <button className="submite"  onClick={this.postData}>Add Item</button>

</form>
</div>
)
}
}
export default AddItem ;