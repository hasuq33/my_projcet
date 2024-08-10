import { View, PerspectiveCamera, Html, OrbitControls } from "@react-three/drei";
import Lights from "./Ligthts";
import { Suspense } from "react";
import { IPhone } from "./IPhone";
import * as THREE from 'three';
import Loader from "./Loader";

const ModelView = ({ index, groupRef, gsapType, controllRef, setRotationState, item, size }) => {
    return (
        <View index={index} id={gsapType} className={` w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}>
            {/* ambient Ligth */}
            <ambientLight intensity={0.3} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />

            {/* Here OrbitControls Help me to Rotate the threed */}
            <OrbitControls 
             makeDefault
             ref={controllRef}
             enablePan={false}
             enableZoom={false}
             rotateSpeed={0.4}
             target={ new THREE.Vector3(0,0,0)}
             onEnd={()=> setRotationState(controllRef.current.getAzimuthalAngle())}
            />

            <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0,0,0]}>
                <Suspense fallback={<Loader/>}>
                    <IPhone 
                    scale={index === 1 ? [15,15,15] : [17,17,17 ]} 
                    item={item}
                    size={size}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelView;