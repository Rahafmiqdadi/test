import React, { Component } from 'react';
import './App.css';
import Menu from './Componant/Menu/Menu';
import Bill from './Componant/Bill/Bill';
import Axios from 'axios';
//import Loadingbutton from './Load';
import AddItem from './Componant/AddItem/AddItem';


class App extends Component {

  state = {
    items: [

      // { id :0 ,name :"pasta",price :3.50},
      // { id :1 ,name :"shawerma",price :1.50},

    ],
    billArray: [],

    sumation: 0,
  }

  postData = () => {
    let Data = { }
    this.state.billArray.map((item, index) => {
      Data = {
        orderUserName: "Rahaf",
        orderItemId: item[0].itemId,
        orderPrice: item[0].itemPrice,
        
      }
    });

    console.log(Data);
    Axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/post/menu', Data)
      .then(response => {
        console.log(response)
      })
     
  }


  componentDidMount() {
    Axios.get('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu')
      .then(response => {
        const list = response.data
        const updateList = list.map((item) => {
          return { ...item }
        });
        this.setState({ items: updateList })
      })
  }


  


  deleteItem = (id) => {
    const items = [...this.state.items];
    //let i=items.findIndex(item =>item.id===id)
    const deleted = items.splice(id, 1);
    console.log(deleted)
    this.state.billArray.push(deleted);
    console.log(this.state.billArray);

    this.setState({ items: items })

  }

  sumfun = () => {
    let sumarr = []
    this.state.billArray.map((item) => {
      return (

        sumarr.push(item[0].itemPrice)

      )
    })
    let sumation = 0;
    for (let i = 0; i < sumarr.length; i++) {
      sumation = sumation + sumarr[i];
    }
    this.setState({ sumation: sumation })


  }

  render() {
   

    return (
      <div>
        <div className="App1"> 
          <h3> Menu </h3> <br/>

        
         <br/> <Menu items={this.state.items} deleteItem={this.deleteItem} /> <br/>

        </div>


        
        <div className="bill" >
        <h2 > Bill </h2>
          <Bill billArray={this.state.billArray} />
          <input  type="text" value={this.state.sumation} ></input>

          <button className ="button"onClick={this.sumfun}  > calculate</button> 
        <button className="button" onClick={this.postData} > Submit </button></div>
 </div>     

    );
  }
}
export default App;
