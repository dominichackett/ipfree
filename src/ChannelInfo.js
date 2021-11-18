import {React,useState,useEffect} from 'react'
import Dashboard from './Dashboard'
import ReactPaginate from 'react-paginate';
import { useMoralis } from 'react-moralis';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import { FilmIcon, UsersIcon,CloudUploadIcon } from '@heroicons/react/outline'
import NumberFormat from 'react-number-format';
const people = [
    { name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' },
    { name: 'Cody Fisher', title: 'Product Directives Officer', role: 'Owner', email: 'cody.fisher@example.com' },
    // More people...
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function ChannelInfo() {
    const [coverPic,setCoverPic] = useState( 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    const {user,Moralis} =  useMoralis();
    const [subscribers,setSubscribers]  = useState(0);
    const [videoCount,setVideoCount] = useState(0);
    const [backedup,setBackedup] = useState(0);
    const {id} = useParams();

    useEffect(()=>{
      if(user)
      {
         Moralis.Cloud.run('getChannel',{userId:user.id,id:id}).then((result)=>{
           setCoverPic(result.get("banner"));
           setSubscribers(result.get("subscriberCount"));
           setVideoCount(result.get("videoCount"));
           setBackedup(result.get("backedup"));
           console.log(result)
         })
      }
     },[user])
     
    return (
        <Dashboard> <>
        <div>
        <img className="h-32 w-full object-cover lg:h-32" src={coverPic} alt="" />
        <div className="m-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Channel Information</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
       
       
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
            key={1}
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
                  <Link to={`/view/${id}`} className="font-medium text-red-600 hover:text-red-500">
                    {' '}
                    View all
                  </Link>
                </div>
              </div>
            </dd>
       
       
          </div>
  
       </dl>
  
      </div>
       
       
  </div>
      
  
  <div className="m-6 mt-2 flex flex-col">
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
    <div>      
        
    <ReactPaginate className="sm:rounded-lg mb-6 ml-6 mr-6 bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={10}
        pageCount={10}
        previousLabel="< previous"
        previousClassName={classNames("relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        )}
        nextClassName={classNames("ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        )}
        pageClassName={classNames("bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        )}
        activeClassName={classNames("z-10 bg-red-50 border-red-500 text-red-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        )}
        renderOnZeroPageCount={null}
      />
       </div>
      </>
  </Dashboard>
    )
}
