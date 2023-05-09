import React, { useEffect } from 'react'
import BookShow from './BookShow'
import useBooksContext from '../hooks/UseBookContext'


export default function BookList( ) {

  const {book} = useBooksContext()

    // RenderFunction to Render The Book
    // const Render = BookData.map((data)=>{
    //     return <BookShow key={data.id} BookData={data} />
    // });



  return (
    <>

<div className="container">
<div className="row">

{book.map((data,index)=>{
  return (
    <div key={index} className="col-md-4 "  >
      <BookShow  key={index}  BookData={data}  />
    </div>
  )
})}

</div>

</div>
    
    </>
  )
}
