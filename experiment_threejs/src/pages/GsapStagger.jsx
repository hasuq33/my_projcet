import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const GsapStagger =()=>{
    useGSAP(()=>{
        gsap.to('.stagger-box',{
            y:250, 
            rotation:360, 
            borderRadius:'100%',
            repeat:-1, 
            yoyo: true, 
            // stagger:0.3,
            stagger:{
                amount:1.5,
                grid:[2,1],
                axis:'y',
                ease:'circ.inOut',
                from:'center'
            }
        })
    },[])
    return(
        <div className="flex gap-2">
            <div className="w-20 h-20 bg-indigo-50 rounded-lg stagger-box"/>
            <div className="w-20 h-20 bg-indigo-100 rounded-lg stagger-box"/>
            <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box"/>
            <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box"/>
            <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box"/>
            <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box"/>
            <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box"/>

        </div>
    )
}

export default GsapStagger;