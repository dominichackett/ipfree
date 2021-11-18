import {React,useState} from 'react'
import Dashboard from './Dashboard'
import MyNotification from './MyNotification';
import {useForm  } from "react-hook-form";
import { XCircleIcon } from '@heroicons/react/solid'
import { useMoralis } from 'react-moralis';
import { useHistory } from 'react-router-dom';

export default function AddChannel() {
  const [openNotification,setOpenNotification]  = useState(false);
  const [notificationHeader,setNotificationHeader]  = useState("");
  const [notificationBody,setNotificationBody]  = useState("");
  const [notificationType,setNotificationType]  = useState();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {user,Moralis} =  useMoralis();
  const history = useHistory();
  const handleCloseNotification = () =>
  {
     setOpenNotification(false);
  }

  

const _handleSubmit = async (data,e) => {
  alert(JSON.stringify(data))
  const channel = await Moralis.Cloud.run('addChannel',{userId:user.id,channelId:data.channel});
  
  if(channel == 200)
  {
    history.push("/channels");
  }
  
  if(channel== 100)
  {
     setNotificationBody("CHANNEL ERROR");
     setNotificationHeader("Youtube channel not found.");
     setNotificationType(2);
     setOpenNotification(true);
  }
  
  if(channel== 300)
  {
     setNotificationBody("CHANNEL ERROR");
     setNotificationHeader("Error saving channel data.");
     setNotificationType(2);
     setOpenNotification(true);
  }

  if(channel== 400)
  {
     setNotificationBody("CHANNEL ERROR");
     setNotificationHeader("Channel already in database.");
     setNotificationType(2);
     setOpenNotification(true);
  }
}
    return (
        <Dashboard>
             <div className="m-10 mt-2 flex flex-col">
    <h3 className="mb-6 text-lg leading-6 font-medium text-gray-900">Add Channel</h3>
       
    <div className="mt-5 md:mt-0 md:col-span-2">
    <div  hidden={errors.channel || errors.email || errors.password ? false:true } className="rounded-md bg-red-50 p-4 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">There were  errors with your submission</h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc pl-5 space-y-1">
            
              {errors.channel?.type === 'required' && <li >Channel is required</li>}
              {errors.password?.type === 'required' && <li >Password is required</li>}
              {errors.email?.type === 'required' && <li >Email address is required</li>}
              {errors.email?.type === 'pattern' && <li >Invalid email address</li>}

            </ul>
          </div>
        </div>
      </div>
    </div>
              <form noValidate onSubmit={handleSubmit(_handleSubmit)}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="col-span-2 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Channel Id
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                         
                          <input
                            type="text"
                            name="channel"
                            id="company-website"
                            className="focus:ring-red-500 focus:border-red-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                            placeholder="Enter Youtube  channel id here"
                            {...register("channel", { required: true })} 

                          />

                      </div>
                  

                      </div>
                      <div className="col-span-1 sm:col-span-1">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Email Adddress
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                         
                        <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    {...register("email", {  required: true , pattern:  /\S+@\S+.\S+/})}

                  />
               
                  </div>
                      </div>
                      <div className="col-span-1 sm:col-span-1">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                         
                        <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password", { required: true })} 

                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />       
               
                  </div>
                      </div>
                    </div>
                    
                 
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
  
 </div>
 <MyNotification type={notificationType} header={notificationHeader} body={notificationBody} open={openNotification} handleClose={handleCloseNotification}/>

        </Dashboard>
    )
}
