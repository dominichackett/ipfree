import React from 'react'
import Dashboard from './Dashboard'
import { ThumbDownIcon, ThumbUpIcon,CloudDownloadIcon } from '@heroicons/react/outline'
import { format } from 'timeago.js';

export default function Video() {
    return (
        <Dashboard><div className="mt-10 flex flex-col items-center "><div><video width="640" height="480" controls>
        
        Your browser does not support the video tag.
      </video>
      <p className="mt-2  block text-sm font-normal text-xl text-gray-900 truncate pointer-events-none">Hello by Kes</p>
      <div className="flex flex-row justify-between mb-2 text-sm font-medium text-gray-500 ">    <span>       {new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(1000)}
 <span className="ml-2">views</span> &#183; {format(new Date())}</span>
         <div className="flex flex-row">
           <ThumbUpIcon  className="ml-2 mr-2 w-5 h-5 text-black"  /> 
           {new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(10000)}
           <ThumbDownIcon  className="ml-2 mr-2 w-5 h-5 text-black"/>
         {new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(10000000)}

           <a  
           href="#"
          // this attribute sets the filename
          //download={filenames[index]}
          // link to the download URL
          //href={downloadLinks[index]}
          //target="_blank"
          className="hover:text-red-500 flex flex-row"

        >
          <CloudDownloadIcon className="ml-2 mb-2 w-5 h-5 text-black"/> <span className="ml-2">Download</span>

        </a>
        </div>
         
       </div>
       </div>  
      </div></Dashboard>    )
}