import {React,useState} from 'react'
import Dashboard from './Dashboard'
import { format } from 'timeago.js';
import {GiftIcon} from '@heroicons/react/solid'
import { Link,useHistory } from 'react-router-dom';

const files = [
    {
      title: 'IMG_4985.HEIC',
      size: new  Date(),
      source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'IMG_4985.HEIC',
        size: new Date(),
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        title: 'IMG_4985.HEIC',
        size: new Date(),
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        title: 'IMG_4985.HEIC',
        size: new Date(),
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        title: 'IMG_4985.HEIC',
        size: new Date(),
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        title: 'IMG_4985.HEIC',
        size: new Date(),
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
      {
        title: 'IMG_4985.HEIC',
        size: new Date(),
        source:
          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      },
    // More files...
  ]
  
export default function Videos() {
    const [coverPic,setCoverPic] = useState( 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    const history = useHistory();
    return (
        <Dashboard><div>
        <img className="h-32 w-full object-cover lg:h-32" src={coverPic} alt="" />
      </div>
       <ul role="list" className="m-6  grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.source} className="relative  shadow-lg rounded-lg">
            <div onClick={() => history.push(`/video/1`)} className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-red-500 overflow-hidden">
             
              <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
              
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="mt-4 ml-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>
            <p className="ml-2 mb-2 block text-sm font-medium text-gray-500 pointer-events-none">1,000 views &#183;  {format(file.size)}</p>
            <p className="ml-2 mb-2 block text-sm font-medium text-gray-500 ">                   <div className=" flex-1 flex">
            <Link
                       to={`/giveaways/1`}
                       className="relative w-0 flex-1 inline-flex  py-2 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-red-500"
                     >
<GiftIcon  className="w-5 h-5 text-gray-400 hover:text-red-500" aria-hidden="true" /><span className="ml-3">Draw Prizes</span></Link></div>
</p>

          </li>
        ))}
      </ul></Dashboard>
            
    
    )
}
