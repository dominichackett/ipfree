import Dashboard from "./Dashboard";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { useMoralis } from 'react-moralis';

  import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
  import { FilmIcon, UsersIcon,ViewGridAddIcon ,CloudUploadIcon,ViewGridIcon} from '@heroicons/react/outline'
import { useState,useEffect } from "react";
  const stats = [
    { id: 1, name: 'Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
    { id: 2, name: 'Channels', stat: '58.16%', icon: ViewGridAddIcon, change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'Videos', stat: '24.57%', icon: FilmIcon, change: '3.2%', changeType: 'decrease' },
  ]
  const transactions = [
    {
      id: 1,
      name: 'Payment to Molly Sanders',
      href: '#',
      amount: '$20,000',
      currency: 'USD',
      status: 'success',
      date: 'July 11, 2020',
      datetime: '2020-07-11',
    },
    // More transactions...
  ]

  const people = [
    { name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' },
    { name: 'Cody Fisher', title: 'Product Directives Officer', role: 'Owner', email: 'cody.fisher@example.com' },
    // More people...
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export default function Home(){
  const [subscribers,setSubscribers]  = useState(0);
  const [videoCount,setVideoCount] = useState(0);
  const [backedup,setBackedup] = useState(0);
  const [channelCount,setChannelCount]  = useState(0);
  const {user,Moralis} =  useMoralis();
  useEffect(()=>{
    if(user)
    {
       Moralis.Cloud.run('getCounts',{userId:user.id}).then((result)=>{
         console.log(result.length)
       if(result.length > 0)
       {  
         setSubscribers(result[0].subscriberCount);
         setVideoCount(result[0].videoCount);
         setBackedup(result[0].backedup);
         setChannelCount(result[0].channelCount);
       }
       })
    }
   },[user])
        return (
           <Dashboard>
           <div className="m-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Channel Information</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
       
       
          <div
            key={1}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-red-500 rounded-md p-3">
                <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">Subscribers</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900"><NumberFormat thousandSeparator={true} value={subscribers} displayType={'text'} />
</p>
              <p
                className={
                  
                  'ml-2 flex items-baseline text-sm font-semibold'
                }
              >
               
                </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                 
                </div>
              </div>
            </dd>
       
       
          </div>
          <div
            key={2}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-red-500 rounded-md p-3">
                <ViewGridAddIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">Channels</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900"><NumberFormat thousandSeparator={true} value={channelCount} displayType={'text'} />
</p>
              <p
                className={
                  
                  'ml-2 flex items-baseline text-sm font-semibold'
                }
              >
               
                </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                <Link to={`/channels`} className="font-medium text-red-600 hover:text-red-500">
                    {' '}
                    View all
                  </Link>
                </div>
              </div>
            </dd>
       
       
          </div>
          <div
            key={3}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-red-500 rounded-md p-3">
                <FilmIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">Videos</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900"><NumberFormat thousandSeparator={true} value={videoCount} displayType={'text'} /></p>
              <p
                className={
                  
                  'ml-2 flex items-baseline text-sm font-semibold'
                }
              >
               
                </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">

                </div>
              </div>
            </dd>
       
       
          </div>
          <div
            key={4}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-red-500 rounded-md p-3">
                <CloudUploadIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">Backed Up</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900"><NumberFormat thousandSeparator={true} value={backedup} displayType={'text'} /></p>
              <p
                className={
                  
                  'ml-2 flex items-baseline text-sm font-semibold'
                }
              >
               
                </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                 
                </div>
              </div>
            </dd>
       
       
          </div>
  
       </dl>
  
      </div>  

    <div className="m-6 flex flex-col">
    <h3 className="mb-6 text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-red-500">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Channel
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
{person.role}</span></td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
           </Dashboard>
        )
    
}
