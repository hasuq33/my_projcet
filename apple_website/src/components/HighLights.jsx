import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousal from "./VideoCarousal";

const HighLights = () =>{
    useGSAP(()=>{
        gsap.to('#title',{
            opacity:1, 
            y:0
        })

        gsap.to('.link',{
            opacity:1 ,
             y:0,
             duration:1, 
             stagger:0.25,
            });
    },[])
    return(
        <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full flex  items-center justify-between">
                    <h1 id="title" className="section-heading">Get the Highlights</h1>
                    <div className="flex flex-wrap items-end gap-5">
                        <p className="link">
                            Watch the film
                            <img src={watchImg} className="ml-2" alt="Watch"/>
                        </p>
                        <p className="link">
                            Watch the event
                            <img src={rightImg} className="ml-2" alt="Right"/>
                        </p>
                    </div>
                </div>
                    <VideoCarousal/>
            </div>
        </section>
    )
}

export default HighLights;