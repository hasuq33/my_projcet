import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {

    useGSAP(() => {
        gsap.to('#text', {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
        });

        gsap.fromTo('.para', {
            opacity:0,
            y:20,
        },{
            opacity:1,
            y:0,
            delay:1,
            stagger:0.1,
        })
    }, []);

    return (
        <div>
            <h1 id="text" className="opacity-0 translate-y-10">Harshiv's First GSAP Text</h1>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur explicabo porro nihil odit qui culpa, nesciunt provident, unde laudantium vitae fugiat. Est voluptatem culpa amet odit. Quae, harum nesciunt!</p>
        </div>
    )
}

export default GsapText;