import { useContext } from "react";
import BookContext from '../context/MyContext';


function useBooksContext(){

    return useContext(BookContext)

};

export default useBooksContext;