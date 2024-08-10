import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () =>{
    const timeline = gsap.timeline({
        repeat:-1, repeatDelay:1, yoyo: true,
    })

    useGSAP(()=>{
        timeline.to('#yellow-box',{
            x:250, 
            rotation: 360, 
            borderRadius: '50%', 
            duration:2, 
            ease: 'back.inOut'
        });

        timeline.to('#yellow-box',{
            y:200, 
            scale:2, 
            rotation:720, 
            borderRadius: '100%',
            duration:2, 
            ease: 'back.inOut'
        })

        timeline.to('#yellow-box',{
            x:500, 
            y:0,
            scale:1, 
            rotation:360, 
            borderRadius:'8px', 
            duration:2, 
            ease:'back.inOut'
        })
    },[])
    return(
        <div className="h-96">
            <h1>Gsap TimeLine</h1>
            <button className="bg-purple-500 focus:border-2 focus:border-rose-500" onClick={()=>{
                if(timeline.paused()){
                    timeline.play();
                }else{
                    timeline.pause();
                }
            }}>Play / pause</button>
            <div id="yellow-box" className="h-20 mt-16 w-20 bg-yellow-500 rounded-lg"></div>
        </div>
    )
}

export default GsapTimeline;