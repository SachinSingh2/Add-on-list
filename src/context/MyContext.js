import { createContext , useEffect , useState } from "react";
import axios from 'axios';

const BookContext = createContext();



function MyProvider({ children }) {

 // Creating a usestate function to for an book array which will be empty initially .
 const [book , setbook]=useState([])


 // Creating a function and it will be run whenever our app will be rendered
 const fetchData = async ()=>{

   const response = await axios.get(`http://localhost:3001/Books`);
   setbook(response.data)

 };


 // This is usestate and it runs whenever the page renders for the first time
 useEffect(()=>{
   fetchData()
 },[])   // Here this empty array means we want it to render for only one time whenever the page renders for the first time 



 // First function this function is going to create and add books in the array
 const CreateBook = async (booksToAdd)=>{
   const response = await axios.post(`http://localhost:3001/Books`,{

   title:booksToAdd

   });
   console.log(response.data)

   const UpdateCreateBook = [
     ...book , response.data
   ]
   setbook(UpdateCreateBook)
   
 };


 // Writing a function to remove an element

 const removeBook = async (idToDelete)=>{

  const responseDelete = await axios.delete(`http://localhost:3001/Books/${idToDelete}`)
  console.log(responseDelete.data)

  const UpdatedBook = book.filter((data )=>{
    return data.id !== idToDelete
  });
  setbook(UpdatedBook)
};


 // Writing a function to edit.
 const editImage = async (idToEdit, bookToEdit)=>{
   const response = await axios.put(`http://localhost:3001/Books/${idToEdit}`,{
     title:bookToEdit
   });
   console.log(response.data)

   console.log(idToEdit)

   const UpdateEditImage = book.map((data)=>{

     if(data.id===idToEdit){
       return {...book , ...response.data}
     }else{
       return data
     }

   });


   console.log(bookToEdit)
   setbook(UpdateEditImage)

 }



const ValueToShare = {
  book:book,
  fetchData:fetchData,
  CreateBook:CreateBook,
  removeBook:removeBook,
  editImage:editImage



}

  return (
    <BookContext.Provider value={ValueToShare}>{children}</BookContext.Provider>
  );
}

export default BookContext;
export {MyProvider}
