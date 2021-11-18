import Dashboard from "./Dashboard";
import { Link ,useHistory} from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import {useEffect,useState} from 'react'

import { VideoCameraIcon, 
CogIcon } from '@heroicons/react/solid'

export default function Channels(){
   const {user,Moralis} =  useMoralis();
   const [channels,setChannels] = useState([]);
   const history = useHistory();

   useEffect(()=>{
    if(user)
    {
       Moralis.Cloud.run('getChannels',{userId:user.id}).then((result)=>{
         console.log(result);
         let chan = [];
         result.forEach(element => {
          let thumbnails = JSON.parse(element.get("thumbnails"));
          let image = thumbnails.high.url;
            chan.push({
              id:element.id,
              imageUrl:image,
              title:element.get("title"),
              description:element.get("description")
            })
         });
         setChannels(chan);
       })
    }
   },[user])
        return (
           <Dashboard>
               <div className="ml-6 mt-2 mb-2 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                  onClick={()=> history.push("/addchannel")}
                    className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                  >
                    Add Channel
                  </button>
                </div>
            
              </div>
               <ul role="list" className="m-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
           {channels.map((channel) => (
             <li
               key={channel.id}
               className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
             >
               <div className="flex-1 flex flex-col p-8">
                 <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={channel.imageUrl} alt="" />
                 <h3 className="mt-6 text-gray-900 text-sm font-medium">{channel.title}</h3>
                 
               </div>
               <div>
                   
                 <div className="-mt-px flex divide-x divide-gray-200">
                   <div className="w-0 flex-1 flex">
                     <Link
                       to={`/view/${channel.id}`}
                       className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                     >
                       <VideoCameraIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                       <span className="ml-3">View</span>
                     </Link>
                   </div>
                   
                   <div className="-ml-px w-0 flex-1 flex">
                     <Link
                       to={`/info/${channel.id}`}
                       className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                     >
                       <CogIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                       <span className="ml-3">Details</span>
                     </Link>
                   </div>
                 </div>
               </div>
             </li>
           ))}
         </ul></Dashboard>
        )
    
}
