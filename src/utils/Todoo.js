//forhomePage_oG


import AppBar from "./AppBar";
import { MdOutlineInventory } from "react-icons/md";
import { FcAlarmClock, FcCalendar  } from "react-icons/fc";
import { BsTools } from "react-icons/bs";

const HomePage = () => {

      //TODO: framer animation for ezase-in-out elements or D3 animation

     return(
          <main className="">

              <div className="h-full w-screen mt-16 text-black bg-white">
                  {/*TODO: Upper section*/}
                  <div className="">
                      {/*TODO:Paragraph with image & text animation*/}
                       <span>
                          Take Control Of Your Inventory

                          {/* <img src={require('./images/Inventory.png')} />  gif image*/}

                          <p>anime: Track,Manage, optimize in-out</p>
                       </span>

                       <span className="">
                          <p>Inventory Platform helps you stay on top of your tasks and track your time effeciently</p>
                       </span>

                       {/*TODO: Border containeing gif image with animation*/}
                       <div className="flex border mt-4 px-4 py-6 bg-[#DCDFE8] rounded-md h-[70dvh] w-[650px]">

                       </div>
                        
                        {/*right & left*/}
                       <div className="flex">

                          <div className="flex flex-col mt-6">
                               {/*TODO: Animated text & icons gif img*/}
                               <span className="bg-black rounded-xl h-[43dvh] w-[380px]">
                                    {/* <img src={require('./images/chat.gif')} /> */}
                               </span>
                               <h1 className="text-3xl font-bold w-[380px]">Real-Time Chat for Saemless Collaboration</h1>
                               <p className="w-[380px]">Chat with your team, clients, and suppliers in real-time</p>
                          </div>


                          <div className="flex flex-col">
                              {/*TODO: Animated text & icons gif img*/}
                              <span className="bg-[#DCDFE8] rounded-xl h-[65dvh] w-[380px]">
                                    {/* <img src={require('./images/chat.gif')} /> */}
                               </span>
                               <h1 className="text-3xl font-medium w-[380px]">Stock Overview and Time Tracking</h1>
                               <p className="w-[380px]">Chat with your team, clients, and suppliers in real-time</p>
                          </div>
                       </div>

                       {/*opposite*/}
                       <div className="flex">

                         <div className="flex flex-col">
                              {/*TODO: Animated text & icons gif img*/}
                              <span className="bg-[#DCDFE8] rounded-xl h-[65dvh] w-[380px]">
                                    {/* <img src={require('./images/chat.gif')} /> */}
                               </span>
                               <h1 className="text-3xl font-medium w-[380px]">Stock Overview and Time Tracking</h1>
                               <p className="w-[380px]">Chat with your team, clients, and suppliers in real-time</p>
                          </div>

                          <div className="flex flex-col mt-6 justify-center items-center">
                               {/*TODO: Animated text & icons gif img*/}
                               <span className="bg-black rounded-xl h-[43dvh] w-[380px]">
                                    {/* <img src={require('./images/chat.gif')} /> */}
                               </span>
                               <h1 className="text-3xl font-bold w-[380px]">Real-Time Chat for Saemless Collaboration</h1>
                               <p className="w-[380px]">Chat with your team, clients, and suppliers in real-time</p>
                          </div>
                       </div>
                     </div>
                      

                       <span className="flex flex-col space-y-3 mt-9 justify-start ml-24 items-start">
                         <h1 className="text-4xl font-medium">Our Benefits</h1>
                         <p className="">
                         Chat with your team, 
                         clients, and suppliers in real-time
                         </p>
                      </span>

                      {/*TODO: cards */}
                       <div className="flex justify-center items-center space-x-5">
                           
                           <div id="card" className="flex flex-col space-y-1 rounded-lg w-[250px] h-full py-3 bg-[#F6F6F6] pb-4 my-11">
                             <span className="flex justify-center items-center  rounded-2xl ml-4 w-[50px] h-[50px] bg-[#6636F8] my-1">
                               <MdOutlineInventory className="text-white text-2xl"/>
                             </span>
                             <strong className="text-lg my-1">Stock management</strong>
                             <p className="text-sm font-light flex justify-start items-start">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             </p>
                             <p className="flex items-center justify-center w-[105px] ml-[25%] my-2 border border-black border-solid rounded-lg h-[30px] hover:bg-[#6636F8] hover:text-white">Learn More</p>
                           </div>

                           <div id="card" className="flex flex-col space-y-1 rounded-lg w-[250px] h-full py-3 bg-[#F6F6F6] pb-4 my-11">
                             <span className="flex justify-center items-center  rounded-2xl ml-4 w-[50px] h-[50px] bg-[#EC8441] my-1">
                             <FcAlarmClock className="text-2xl"/>
                             </span>
                             <strong className="text-lg my-1">Real-time Updates</strong>
                             <p  className="text-sm font-light flex justify-start items-start">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             </p>
                             <p className="flex items-center justify-center w-[105px] ml-[25%] my-2 border border-black border-solid rounded-lg h-[30px] hover:bg-[#EC8441] hover:text-white">Learn More</p>
                           </div>

                           <div id="card" className="flex flex-col space-y-1 rounded-lg w-[250px] h-full py-3 bg-[#F6F6F6] pb-4 my-11">
                             <span className="flex justify-center items-center  rounded-2xl ml-4 w-[50px] h-[50px] bg-[#6CC489] my-1">
                             <FcCalendar className="text-2xl"/>
                             </span>
                             <strong className="text-lg my-1">Time Tracking</strong>
                             <p className="text-sm font-light flex justify-start items-start">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             </p>
                             <p className="flex items-center justify-center w-[105px] ml-[25%] my-2 border border-black border-solid rounded-lg h-[30px] hover:bg-[#6CC489] hover:text-white">Learn More</p>
                           </div>

                           <div id="card" className="flex flex-col space-y-1 rounded-lg w-[250px] h-full py-3 bg-[#F6F6F6] pb-4 my-11">
                             <span className="flex justify-center items-center  rounded-2xl ml-4 w-[50px] h-[50px] bg-[#6D9EC4] my-1">
                             <BsTools className="text-white text-2xl"/>
                             </span>
                             <strong className="text-lg my-1">Collaboration Tools</strong>
                             <p  className="text-sm font-light flex justify-start items-start">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             </p>
                             <p className="flex items-center justify-center w-[105px] ml-[25%] my-2 border border-black border-solid rounded-lg h-[30px] hover:bg-[#6D9EC4] hover:text-white">Learn More</p>
                           </div>
                       </div>

                       {/*last but not least*/}
                       <div className="flex justify-center items-center my-4 lg:mx-32 rounded-2xl bg-[#DCDFE8] w-[80dvw] h-[40dvh] p-4">
                             <div id="left" className=""></div>
                             <div id="" className=""></div>
                          </div>



                  {/*TODO: Footer section*/}
                  <footer className="w-screen h-[38dvh] bg-[#F6F6F6]">

                  </footer>
              </div>
          </main>
     )
}

export default HomePage;