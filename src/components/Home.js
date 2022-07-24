import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";
import { getList } from "../services/apiCalls";


function Home(){
    const[apod , setApod] = useState({});

    useEffect(() => {
        let mounted = true;
        getList()
            .then(items => {
            if(mounted) {
                setApod(items)
            }
            })
        return () => mounted = false;
    },[])

    const apodImage = apod.url;
    const apodDes = apod.explanation;

    return(
    <>
        <img src={apodImage} alt="apod Image" />
        <p>
            {apodDes}
        </p>
    </>
    );
}

export default Home