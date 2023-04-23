import React from "react";
import {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls, OrbitControls} from "@react-three/drei";
import { Link } from "react-router-dom";
import routes from "../config/routes";

function Rat(props:any) {
  const {scene} = useGLTF("/rat.glb")
  return <primitive object={scene} {...props}/>
} 

export const Error = () => {
  return (
    <div className="h-screen bg-scheme-900 text-white font-poppins">
      <Canvas camera={{ position: [-0.5, 1, 2] }} className="">
        <directionalLight position={[-3, 1, 5]} intensity={1} />
        <ambientLight />
        <OrbitControls autoRotate enableRotate={false} autoRotateSpeed={8} enableZoom={false}/>
        <Rat scale={0.5} className={""}/>
      </Canvas>
      
      <div className="absolute top-0 w-screen text-center h-2/4 flex items-center justify-center flex-col">
        <h1 className="text-5xl uppercase font-semibold">no page here</h1>
        <h2 className="text-3xl uppercase">only spinning rat!</h2>
      </div>
      <div className="absolute top-2/4 h-2/4 flex items-center justify-center w-screen">
        <Link to={ routes.home } className="py-3 px-8 backdrop-blur-2xl border rounded-md">Back to safety</Link>
      </div>


      {/* <div className="border absolute w-screen text-center h-2/4 flex justify-center items-center text-5xl font-bold">
          NO PAGE HERE. ONLY SPINNING RAT!
        </div>
        <div className="border absolute top-2/4 h-2/4 flex justify-center items-center w-screen">
          <Link to={routes.home} className="outline py-3 px-8 rounded-md">Back to safety</Link>
        </div>
        */}
    </div>
  );
}
