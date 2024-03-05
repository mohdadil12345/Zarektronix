import { useState } from "react";

const useOnlinestatus = () => {

    const [isUserOnline, setonline] = useState(navigator.onLine)


    if (navigator.onLine) {
        console.log("online");
    } else {
        console.log("offline");
    }




    window.addEventListener("offline", (e) => {
        // console.log("offline");
        setonline(false)
    });

    window.addEventListener("online", (e) => {
        // console.log("online");
        setonline(true)
    });

    return isUserOnline

};

export default useOnlinestatus;




