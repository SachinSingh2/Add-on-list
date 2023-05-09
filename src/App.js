import React, { useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList';
import useBooksContext from './hooks/UseBookContext';


export default function App() {
 
  const {fetchData} = useBooksContext()

 // This is usestate and it runs whenever the page renders for the first time
 useEffect(()=>{
  fetchData()
},[])   // Here this empty array means we want it to render for only one time whenever the page renders for the first time 


  return (
    <>
    <BookCreate  />
    <BookList  />
    </>
  )
}
