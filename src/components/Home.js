
import { useEffect, useState } from "react";
import { getList } from "../services/apiCalls";
import { Parallax } from 'react-parallax';
import '../styles/homeStyles.css';


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
        <Parallax
        bgImage={apodImage}
        strength={300}
        style={{
            height:"100vh"
        }}
        >
        <div style={{ 
            height: '250px',
            display: 'flex', 
            justifyContent: 'center' ,
            marginTop: '100px',
            }}>
            <svg viewBox="0 0 1320 300">
                <text x="50" y="50%" dy=".35em">
                    spaceExplorer
                </text>
            </svg>
        </div>
        </Parallax>
        <div style={{ height: 500 }}>
           {apodDes}
        </div>
    </>
    );
}

export default Home