import React, { useState } from 'react'


export default function BookCreate({ CreateBook }) {
    const [title , settitle]=useState()


    //Function to get thevalue from the input
    const handleOnChange = (element)=>{
        settitle(element.target.value)
    };
    const handleOnSubmit = (element)=>{
        element.preventDefault()
        CreateBook(title)
        settitle('')
    };




  return (
    <>
      
<div className="jumbotron py-1  " style={{zIndex:'3' , width:'100%' , position:'sticky' , top:'0px'}}  >
 <center> <h2 className="display-5">Add Title</h2></center> 


  <form onSubmit={handleOnSubmit}>
       <div> <center> <input type="text" style={{width:'80%' , height:'40px' , padding:'5px' , fontSize:'20px'}}  onChange={handleOnChange} value={title || ''} /> </center> </div>

       <center> <button className="btn btn-primary btn-lg my-3" >Add Title</button> </center>
      </form>





</div>






    </>
  )
}
