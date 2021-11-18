import Dashboard from "./Dashboard";
import {useState} from 'react'

import ReactPaginate from 'react-paginate';
import { RadioGroup } from '@headlessui/react'
import { FilmIcon, ThumbUpIcon,ChatAlt2Icon } from '@heroicons/react/outline'

const settings = [
  { name: 'Likes', description: 'Draw prize from likes on this video' },
  { name: 'Comments', description: 'Draw prize form comments on this video' },
  { name: 'Both', description: 'Draw prize from both likes and comments' },
]
const people = [
    { name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' },
    { name: 'Cody Fisher', title: 'Product Directives Officer', role: 'Owner', email: 'cody.fisher@example.com' },
    // More people...
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function Giveaways(){
    const [coverPic,setCoverPic] = useState( 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    const [selected, setSelected] = useState(settings[0])

        return (
           <Dashboard>
                <div>
        <img className="h-32 w-full object-cover lg:h-32" src={coverPic} alt="" />
       
      <div className="m-6 mt-2 flex flex-col">
    <h3 className="mb-6 text-lg leading-6 font-medium text-gray-900">Draw Prize</h3>
    <dl className="mt-5 mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

    <div
            key={1}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-red-500 rounded-md p-3">
                <FilmIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">Video</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">How To Win Friends And Influence People</p>
              <p
                className={
                  
                  'ml-2 flex items-baseline text-sm font-semibold'
                }
              >
               
                </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-red-600 hover:text-red-500">
                    {' '}
                    View all<span className="sr-only"> 1000 stats</span>
                  </a>
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
                <ThumbUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">Likes</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">9,440</p>
              <p
                className={
                  
                  'ml-2 flex items-baseline text-sm font-semibold'
                }
              >
               
                </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-red-600 hover:text-red-500">
                    {' '}
                    View all<span className="sr-only"> 1000 stats</span>
                  </a>
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
                <ChatAlt2Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">Comments</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">9,440</p>
              <p
                className={
                  
                  'ml-2 flex items-baseline text-sm font-semibold'
                }
              >
               
                </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-red-600 hover:text-red-500">
                    {' '}
                    View all<span className="sr-only"> 1000 stats</span>
                  </a>
                </div>
              </div>
            </dd>
       
       
          </div>
     </dl>     
    <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Prize
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                         
                          <input
                            type="text"
                            name="company-website"
                            id="company-website"
                            className="focus:ring-red-500 focus:border-red-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                            placeholder="Enter prize here"
                          />
                        </div>
                      </div>
                    </div>
  
                    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
      <div className="bg-white rounded-md -space-y-px">
        {settings.map((setting, settingIdx) => (
          <RadioGroup.Option
            key={setting.name}
            value={setting}
            className={({ checked }) =>
              classNames(
                settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'bg-red-50 border-red-200 z-10' : 'border-gray-200',
                'relative border p-4 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked ? 'bg-red-600 border-transparent' : 'bg-white border-gray-300',
                    active ? 'ring-2 ring-offset-2 ring-red-500' : '',
                    'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <div className="ml-3 flex flex-col">
                  <RadioGroup.Label
                    as="span"
                    className={classNames(checked ? 'text-red-900' : 'text-gray-900', 'block text-sm font-medium')}
                  >
                    {setting.name}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={classNames(checked ? 'text-red-700' : 'text-gray-500', 'block text-sm')}
                  >
                    {setting.description}
                  </RadioGroup.Description>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
                 
                    
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Draw
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-6 mb-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Previous Draws</h3>
      </div>
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Prize
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
                    Type
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
                      <a href="#" className="text-red-600 hover:text-red-900">
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
           </Dashboard>
        )
    
}
