import React, { useState } from 'react'

export default function BookEdit({ BookData , onHide , onEdit }) {
    const [value ,setvalue]=useState(BookData.title)



    // function on submit
    const handleOnSubmit = (e)=>{
e.preventDefault()
onEdit(BookData.id , value)
onHide()

    };
    // Function on Change
    const handleonChange = (e)=>{
setvalue(e.target.value)
    };






  return (
    <>



<div className="card"   style={{width:'18rem'}} >
<img src={`https://source.unsplash.com/300x200/?${BookData.title}`} className="card-img-top" alt="Images"/>
  <div className="card-body">




   <form onSubmit={handleOnSubmit } >

 <center> <input style={{textAlign:'center' , width:'100% '}} onChange={handleonChange} type="text" value={value || ''} />  </center> <br />
 <center> <button  className=' btn btn-primary px-5' >Add</button> </center>

   </form>





  </div>
</div>





    </>
  )
}
