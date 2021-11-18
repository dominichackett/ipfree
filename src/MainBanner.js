import YoutubeImage from './images/youtube.jpg'
import { Link } from 'react-router-dom'
export default function MainBanner(props) {

return(<div className="relative">
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
  <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
    <div className="absolute inset-0">
      <img
        className="h-full w-full object-cover"
        //src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
       // src ="https://source.unsplash.com/8LfE0Lywyak/"
       // alt="People working on laptops"
       src={YoutubeImage}
     />
      <div className="absolute inset-0 bg-red-700 mix-blend-multiply" />
    </div>
    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
      <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="block text-white">Take control of your</span>
        <span className="block text-red-200">Youtube Channel</span>
      </h1>
      <p className="mt-6 max-w-lg mx-auto text-center text-xl text-red-200 sm:max-w-3xl">
       Arbitrary Big Tech Censorship has affected many content creators in the past. Easily backup your Youtube content on IPFS to prevent data loss.
       Automatically backup your data in a decentralized way. Use our API to integrate our data in to your applications.
      </p>
      <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
          <button
            type="button"
            onClick={props.handleConnect}
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-700 bg-white hover:bg-red-50 sm:px-8"
          >
            Connect Wallet
          </button>
          <Link
            to="/pricing"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
          >
            Pricing
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
)
}