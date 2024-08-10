import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapFrom = () =>{
    useGSAP(()=>{
        gsap.from('#box-green',{
            x:250, 
            repeat:-1, 
            yoyo:true,
            rotation: 360, 
            duration:2, 
            ease:'elastic',
        })
    },[])

    return <div id="box-green" className="w-20 h-20 bg-green-500 rounded-lg"></div>
}

export default GsapFrom;