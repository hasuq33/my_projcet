import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const GSapFromTo = () =>{

    useGSAP(()=>{
        gsap.fromTo('#box-red',{
            x:0, 
            rotation:0, 
            borderRadius:'0%', 
        },{
            x:250, 
            repeat:-1, 
            yoyo:true,
            rotation: 360, 
            duration:2,
            borderRadius:'100%',  
            ease:'bounce.out',
        })
    },[])

    return <div id="box-red" className="w-20 h-20 bg-red-500 rounded-lg"></div>
}

export default GSapFromTo