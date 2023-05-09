import React, { useState } from 'react'
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/UseBookContext';


export default function BookShow({BookData}) {
  const [edit,setEdit]=useState(false)
const {removeBook } = useBooksContext()




// function to edit
const handleOnHide = ()=>{
setEdit(edit===false)  
};

// Function to delete
const handleonDelete = ()=>{
  removeBook(BookData.id)
}




  return (
    <>
{edit?<BookEdit BookData={BookData}     onHide={handleOnHide} />:

<div className="card"   style={{width:'18rem'}} >
  <img src={`https://source.unsplash.com/300x200/?${BookData.title}`} className="card-img-top" alt="Images"/>

  <div className="card-body">
   <center> <h1 className="card-title">{BookData.title}</h1> </center>
  </div>

</div>
}


<div className='container'>
   <button onClick={handleOnHide} style={{padding:'8px' , position:'relative' , bottom:'60px', marginLeft:'10px', borderRadius:'50%' , backgroundColor:'transparent' , border:'solid 1px gray'}}  type="button" >&#9999;&#65039;</button>

   <button onClick={handleonDelete} type="button" style={{padding:'8px 15px' , position:'relative' , bottom:'60px', marginLeft:'160px' , borderRadius:'50%' , backgroundColor:'transparent' , border:'solid 1px gray'}} >X</button>
   </div>


{/* <div className='container mx-3 my-3'></div> */}







    </>
  )
}
