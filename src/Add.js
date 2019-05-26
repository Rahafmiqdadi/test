import React,{Component} from 'react';
import Axios from 'axios';

class Add extends Component{
 

 state = {
   itemDesc: '',
   itemPrice: '',
   itemImage: ''
}

 Changehandler=(event)=>
{
    console.log('hiiiii');
     this.setState({itemDesc: event.target.value})
        this.setState({itemPrice: event.target.value})
        this.setState({itemImage: event.target.value})


        let  Data={
            "itemDesc":this.state.itemDesc,
            "ItemPrice":this.state.itemPrice,
            "itemImage":this.state.itemImage,
             }
console.log(this.state.itemDesc);
             console.log(Data);
             Axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/post/menu',Data)
             .then(response=>{
              console.log(response)
              })
             .catch(error=>{
                 console.log(error)
          
             });

}


// onChangeDesc=(event)=>
// {

// this.setState({itemDesc: event.target.value})
// }

// onChangePrice=(event)=>
// {

// this.setState({itemPrice: event.target.value})
// }
// onChangeimage=(event)=>
// {

// this.setState({itemImage: event.target.value})
// }

// postData=()=>{
 
//     let  Data={
//    "itemDesc":this.state.itemDesc,
//    "ItemPrice":this.state.itemPrice,
//    "itemImage":this.state.itemImage,
//     }
   
 
//    Axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/post/menu',)
//    .then(response=>{
//     console.log(response)
//     })
//    .catch(error=>{
//        console.log(error)

//    });
//  }

render ()
{

    
return (

<form className="form">
<h3> Add New Item</h3>
<label className="label" >Item Name:  <input   type="text"  name="name"   value={this.state.ItemDesc} 
/> </label><br/>

<label className="label">Item Price:  <input  type="number" name="price"  value={this.state.ItemPrice}

/> </label><br/>

 <button className="button1" type="submit"  onClick={ () => this.Changehandler( window.event)}> Add </button>

</form>

)
}
}
export default Add ;