import React from 'react'
import BookShow from './BookShow'


export default function BookList( {BookData , RemoveFun , onEdit} ) {


    // RenderFunction to Render The Book
    // const Render = BookData.map((data)=>{
    //     return <BookShow key={data.id} BookData={data} />
    // });
  return (
    <>

<div className="container">
<div className="row">

{BookData.map((Bookdata,index)=>{
  return (
    <div key={index} className="col-md-4 "  >
      <BookShow  key={index}  BookData={Bookdata} RemoveFun={RemoveFun} onEdit={onEdit} />
    </div>
  )
})}

</div>

</div>
    
    </>
  )
}
