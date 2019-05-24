import React from 'react';
const Bill = (props) => {
    return (

        props.billArray.map((item) => {

            return (




<table>
<tbody>
<tr>

<th>  {item[0].itemDesc}  </th>
<th>   {item[0].itemPrice}   </th>



</tr>




</tbody>




</table>
                
               
                    
                             
                             
            )
        }
        )



    )







}
export default Bill;