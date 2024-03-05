import { useEffect, useRef, useState } from "react";

const useTimeout = (delay) => {

    const [ready, set_ready] = useState(false);


    let {current} = useRef()
    

 useEffect(() => {
 
   if(current){
     clearTimeout(current)
   }

   current = setTimeout(() => {
    set_ready(true)
   }, delay);

 }, [delay])
 
return {ready}

};

export default useTimeout;
