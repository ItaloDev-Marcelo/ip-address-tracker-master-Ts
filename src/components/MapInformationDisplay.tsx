import type { Data } from "./types/Data"

const MapInformationDisplay = ({data}:Data) => {

  const { ip,city,utc,region_code,isp,asn} = data 

  return (
   <div className='z-[1000] absolute top-[12rem] tb:top-[10rem] lg:top-[10.5rem]  w-[325px]  
   tb:w-[70%]  lg:w-[65%] h-auto '>
      <div className="bg-white p-5 lg:p-10 shadow-2xl rounded-[15px] text-center
     flex flex-col tb:flex tb:flex-row lg:justify-around  lg:left-[18%] z-[1999] text-gray-600 mapInfo-st">
       <div className=" mx-1 tb:text-left">
          <h2 className="text-[1.2em] font-semibold ">Ip Address</h2>
          <p className="text-[1.3em] pb-2 font-bold">{ip}</p>
       </div>   
       <hr   />
       <div  className=" mx-2 block-map tb:text-left">
          <h2 className="text-[1.2em] font-semibold ">Location</h2>
          <p className="text-[1.3em] pb-2 font-bold">{city}  {region_code}  {asn}</p>
       </div>   
       <hr />
       <div  className=" mx-2 block-map tb:text-left">
          <h2 className="text-[1.2em] font-semibold ">TimeZone</h2>
          <p className="text-[1.3em] pb-2 font-bold">UTC{utc}</p>
       </div>   
       <hr  />
       <div  className=" mx-1 tb:text-left">
          <h2 className="text-[1.2em] font-semibold ">Isp</h2>
          <p className="text-[1.3em] pb-2 font-bold">{isp}</p>
       </div>   
    </div></div>
    
  )
}

export default MapInformationDisplay