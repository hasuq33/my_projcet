import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const GsapTo = () =>{
    const boxRef = useRef();

    useGSAP(()=>{
        gsap.to(boxRef.current,{
            x:250, 
            repeat:-1, 
            yoyo:true,
            rotation: 360, 
            duration:2, 
            ease:'elastic',
        })
    },[])

    return (
        <div id="blue-box" className="box w-20 h-20 bg-blue-500 rounded-lg" ref={boxRef}></div>
    )
}

export default GsapTo;