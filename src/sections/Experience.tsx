import CanvasLoader from '@/components/CanvasLoader';
import Developer from '@/components/Developer';
import DustParticles from '@/components/DustParticals';
import LightRay from '@/components/LightRay';
import { workExperiences } from '@/constants'
import { Float, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Experience = () => {
    const [animationName, setAnimationName] = React.useState('standup');
  return (
    <section className="c-space my-20" id="skills">
        <div className='w-full text-white-600'>
            <h3 className='head-text'>My Experience</h3>
            <div className='work-container'>
                <div className='work-canvas bg-transparent'>
                    <LightRay
                          bgColor="#00000000"
                          lightRay1="#0000ff3c"
                          lightRay2="#0c80fc70"
                          lightRay3="#0000ff3c"
                        >
                          <Canvas>
                            <ambientLight intensity={7}/>
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={1}/>
                            <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>

                            <React.Suspense fallback={<CanvasLoader/>}>
                            <Float floatIntensity={0.02}>
                              <DustParticles floatIntensity={2} size={0.1} color='blue'/>
                              <DustParticles floatIntensity={3} size={0.1} color='white'/>
                                <Developer position-y={-3} scale={3} position-z={-1} animationName={animationName}/>
                            </Float>
                            </React.Suspense>
                        </Canvas>
                    </LightRay>
                </div>
                <div className="work-content relative">
                    <LightRay
                      bgColor="#00000000"
                      lightRay1="#0000ff3c"
                      lightRay2="#0c80fc70"
                      lightRay3="#0000ff3c"
                    >
                      <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {workExperiences.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => setAnimationName(item.animation.toLowerCase())}
                            onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                            onPointerOut={() => setAnimationName('happy_idle')}
                            className="work-content_container group">
                            <div className="flex flex-col h-full justify-start items-center py-2">
                              <div className="work-content_logo">
                                <img className="w-full h-full" src={item.icon} alt="" />
                              </div>

                              <div className="work-content_bar" />
                            </div>

                            <div className="sm:p-5 px-2.5 py-5">
                              <p className="font-bold text-white-800">{item.name}</p>
                              <p className="text-sm mb-5">
                                {item.pos} -- <span>{item.duration}</span>
                              </p>
                              <p className="group-hover:text-white transition-all ease-in-out duration-500">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                  </LightRay>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
