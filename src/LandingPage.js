/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import {
  
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'

import { Link } from 'react-router-dom';

import {CloudDownloadIcon,GiftIcon,DocumentTextIcon,DatabaseIcon} from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/solid'
import MoralisLogo from './images/moralis.png'
import AlchemyLogo from './images/alchemy.png'
import ChainlinkLogo from './images/chainlink.png'
import PolygonLogo from './images/polygon.png'
import Web3StorageLogo from './images/web3.png'
const solutions = [
  {
    name: 'Youtube Channel',
    description: 'Backup your Youtbube channel to IPFS.',
    href: '#',
    icon: CloudDownloadIcon,
  },
  {
    name: 'Smart Contract Integration',
    description: 'Integrate Youtube data in your smart contracts.',
    href: '#',
    icon: DocumentTextIcon,
  },
  { name: 'API', description: "API to integrate our data with your apps.", href: '#'
  , icon: DatabaseIcon },
  {
    name: 'Prizes',
    description: "Random prize drawing from your Youtube comments.",
    href: '#',
    icon: GiftIcon,
  },
]
const navigation = [
  { name: 'Pricing', href: '/pricing' },
  {name:'Developers',href:"/developers"}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LandingPage(props) {
 

 
  return (
    <div className="bg-white">
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1 ">
              <Link to="/">
                <span className="sr-only fill-current text-red-700">Workflow</span>
                <svg     viewBox="0 0 837 230"                   
                      className="h-14 w-auto  fill-current text-red-700">
<path d="m105.5 52.9-39 22.6v93l39.4 22.7c23.2 13.4 40.1 22.6 41 22.3.9-.3 18.9-10.5 40.1-22.8l38.5-22.3V75.6l-39.4-22.8c-21.7-12.5-39.9-22.8-40.5-22.7-.6.1-18.6 10.3-40.1 22.8zm71.9 8.1c16.8 9.6 30.6 17.7 30.6 18 0 .9-60.3 35.4-61.9 35.4-1.7.1-62.1-34.4-62.1-35.3.1-.8 61.3-36.1 62.2-35.8.4.1 14.5 8.1 31.2 17.7zm-31.6 67.5c48.2 27.8 61.9 36.2 60.9 37.1-.6.6-14.6 8.9-31 18.3l-29.8 17.2-34.2-19.8-34.2-19.8-.3-36.3-.2-36.3 3.3 1.8c1.9 1 31.3 18 65.5 37.8zM214 122c0 17.6-.3 32-.6 32-1 0-55.3-31.4-55.3-32 0-.6 54-31.9 55.2-31.9.4-.1.7 14.3.7 31.9zM263 122v92h6V30h-6v92zM498.8 52.7l.3 15.3H524v94l17.3-.2 17.2-.3.3-46.8.2-46.7h25V38l-42.7-.2-42.8-.3.3 15.2zM319 100v62h34V38h-34v62zM374.2 99.7l.3 61.8 16.8.3 16.7.2v-34.5c0-19 .3-34.5.8-34.5.4 0 9.8 15.4 20.9 34.3l20.1 34.2 17.1.3 17.1.2V38h-34l-.2 34.9-.3 34.9-19.6-34.7-19.6-34.6-18.2-.3L374 38l.2 61.7zM598 100v62h70v-31h-35v-17h29V84h-29V68h34V38h-69v62zM686 99.9V162h35v-44.1l3.6.3 3.6.3 10.3 21.5 10.2 21.5 18.6.3c12.1.1 18.7-.1 18.7-.8 0-.5-6.1-12.3-13.6-26l-13.6-25.1 3.9-3.4c2.2-1.8 5.3-6 7-9.2 10-18.8 4.9-43.3-10.9-52.6-9.4-5.5-13.1-6-44-6.5l-28.8-.4v62.1zm48-31.1c6.8 3.3 7.2 13.8.8 18.5-1.7 1.2-4.9 2.2-8.3 2.5l-5.5.4V67h4.8c2.6 0 6.3.8 8.2 1.8zM319.2 196.7c.1 5.4.3 7.9.5 5.7.4-3.7.7-4.2 3.5-4.8 1.7-.3 3.7-1.1 4.5-1.7 3.4-2.9-.5-8.9-5.7-8.9h-3l.2 9.7zm7.3-4.2c0 2.7-.4 3-3.2 3.3-3.2.3-3.3.2-3.3-3.3s.1-3.6 3.3-3.3c2.8.3 3.2.6 3.2 3.3zM345 196.5v9.5h4.5c2.5 0 4.5-.5 4.5-1 0-.6-1.6-1-3.5-1H347v-8.5c0-5-.4-8.5-1-8.5s-1 3.8-1 9.5zM375.3 188.7c-.3 1-1.9 5.2-3.5 9.3-3.2 8.5-3.1 8-1.9 8 .4 0 1.2-1.5 1.7-3.3.9-2.9 1.3-3.2 4.9-3.2 3.6 0 4.2.4 5.7 3.5 2.7 5.6 2.1 1.9-1.3-7.4-3.2-8.6-4.4-10.1-5.6-6.9zm2.6 2.5c2.5 6.6 2.4 6.8-.8 6.8-3.5 0-3.5.1-1.9-5.1 1.3-4.5 1.6-4.7 2.7-1.7zM403.2 196.7c.2 9.7.2 9.7.5 2 .2-4.2.7-7.7 1.1-7.7.4 0 2.9 3.4 5.6 7.5 2.7 4.1 5.2 7.5 5.7 7.5s.9-4.3.9-9.5c0-11.4-1.8-12.9-2.2-1.8l-.3 7.7-5-7.7c-2.7-4.2-5.3-7.7-5.7-7.7-.5 0-.7 4.4-.6 9.7zM436 196.5v9.5h4.5c2.5 0 4.5-.5 4.5-1 0-.6-1.6-1-3.5-1-3.3 0-3.5-.2-3.5-3.4 0-3 .4-3.5 2.8-3.9l2.7-.4-2.7-.2c-2.5-.1-2.8-.5-2.8-3.6 0-3.2.2-3.5 3-3.5 1.7 0 3-.5 3-1 0-.6-1.8-1-4-1h-4v9.5zM460 188c0 .5 1.1 1 2.5 1 2.5 0 2.5.1 2.5 8.5 0 5 .4 8.5 1 8.5s1-3.5 1-8.5c0-8.4 0-8.5 2.5-8.5 1.4 0 2.5-.5 2.5-1 0-.6-2.7-1-6-1s-6 .4-6 1zM489.1 195.6c-3.5 9.7-4 12.7-1 7.1 1.7-3.2 2.4-3.7 5.4-3.7 3.1 0 3.7.4 5 3.7.8 2 1.8 3.4 2 3.1.8-.7-6-18.1-7.2-18.5-.6-.2-2.4 3.5-4.2 8.3zm4.8 2.2c-1.7.2-3.3.1-3.6-.1-.2-.3.3-2.2 1.3-4.3l1.6-3.9 1.9 4 1.8 4-3 .3zM519.2 196.7c.1 5.4.3 7.7.5 5 .5-6.2 2.9-6.3 6.2-.2 3.1 5.8 4.7 5.9 1.9.1-2-4.1-2-4.5-.5-6.1 1-.9 1.7-2.3 1.7-3.1 0-2.4-3.8-5.4-7-5.4h-3l.2 9.7zm7.5-6.1c.9 2.4-1 4.9-4.1 5.2-2.4.3-2.6 0-2.6-3.2 0-3.3.2-3.6 3-3.6 1.9 0 3.3.6 3.7 1.6zM547.9 192.4c2 3.5 3.1 6.9 3.2 9.7l.2 4.4.6-5c.3-2.8 1.9-7.1 3.4-9.8 1.5-2.6 2.3-4.7 1.8-4.7-.6 0-2 1.8-3.1 4s-2.2 4-2.5 4c-.3 0-1.4-1.8-2.5-4s-2.5-4-3.1-4c-.6 0 .3 2.4 2 5.4zM592.2 196.7c.1 5.4.3 7.7.5 5 .4-4.5.5-4.7 3.6-4.8l3.2-.1-3-.7c-2.5-.5-3.1-1.2-3.3-3.9-.3-3.1-.2-3.2 3.2-3.2 2 0 3.6-.5 3.6-1 0-.6-1.8-1-4-1h-4l.2 9.7zM618.2 196.7c.1 7.1.3 8.5.7 5.3.8-6.3 3.4-6.6 6.3-.6 2.2 4.6 3.2 5.4 4.3 3.6.3-.6.2-1-.4-1-.6 0-1.8-1.4-2.6-3-1.4-2.8-1.4-3.3 0-5.2.8-1.3 1.5-3 1.5-4 0-2.3-3.8-4.8-7.2-4.8H618l.2 9.7zm7.6-4.8c.4 2.6-1.2 4.1-4.5 4.1-2 0-2.3-.5-2.3-3.6 0-3.4.1-3.5 3.3-3.2 2.5.2 3.3.8 3.5 2.7zM646 196.5v9.5h4c2.2 0 4-.5 4-1 0-.6-1.6-1-3.5-1-3.3 0-3.5-.2-3.5-3.5s.2-3.5 3.3-3.6l3.2-.1-3-.7c-2.5-.5-3.1-1.2-3.3-3.9-.3-3.1-.2-3.2 3.2-3.2 2 0 3.6-.5 3.6-1 0-.6-1.8-1-4-1h-4v9.5zM671 196.5v9.5h4.5c2.5 0 4.5-.5 4.5-1 0-.6-1.6-1-3.5-1-3.3 0-3.5-.2-3.5-3.4 0-3.2.3-3.5 3.3-3.9l3.2-.4-3.2-.1c-3.1-.2-3.3-.5-3.3-3.7 0-3.3.2-3.5 3.5-3.5 1.9 0 3.5-.5 3.5-1 0-.6-2-1-4.5-1H671v9.5zM698 196.6v9.6l4.3-.7c5.9-1 8.7-3.8 8.7-8.9-.1-5-1.7-7.4-6.1-8.6-6.9-2-6.9-2-6.9 8.6zm9.5-5.6c4.2 4.6 1.1 13-4.7 13H700v-15h2.8c1.6 0 3.7.9 4.7 2zM733.9 188.5c-6.6 3.6-5.3 14.4 2 16.6 4.8 1.4 8.5-.1 10.6-4.2 4.5-8.6-4.1-17-12.6-12.4zm8 1c3.2 1.6 4.1 3.3 4.1 7.6 0 6.6-8.8 9.5-12.9 4.3-4.2-5.4-1.6-11.4 5.7-13.3.2-.1 1.6.6 3.1 1.4zM768 195.9c0 11.2 1.8 13.2 2.2 2.4l.3-7.8 3.2 6.7c1.8 3.8 3.6 6.8 4.1 6.8.4 0 2.3-3.3 4.2-7.3l3.4-7.2.6 8.5.6 8.5.2-9.8c.1-6.2-.2-9.7-.8-9.7-.6 0-2.7 3.5-4.7 7.7l-3.7 7.6-3.4-7.6c-4.7-10.5-6.2-10.2-6.2 1.2z"/>                     
        </svg>      </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-600 text-white sm:h-12 sm:w-12">
                                  <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {navigation.map((item) => (
                <Link key={item.name} to={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </Link>
              ))}
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              
              <button
              type="button"
              onClick={props.handleConnect}

                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
              >
                Connect Wallet
              </button>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <svg         viewBox="0 0 837 230"                 
                      className="h-14 w-auto  fill-current text-red-700">
<path d="m105.5 52.9-39 22.6v93l39.4 22.7c23.2 13.4 40.1 22.6 41 22.3.9-.3 18.9-10.5 40.1-22.8l38.5-22.3V75.6l-39.4-22.8c-21.7-12.5-39.9-22.8-40.5-22.7-.6.1-18.6 10.3-40.1 22.8zm71.9 8.1c16.8 9.6 30.6 17.7 30.6 18 0 .9-60.3 35.4-61.9 35.4-1.7.1-62.1-34.4-62.1-35.3.1-.8 61.3-36.1 62.2-35.8.4.1 14.5 8.1 31.2 17.7zm-31.6 67.5c48.2 27.8 61.9 36.2 60.9 37.1-.6.6-14.6 8.9-31 18.3l-29.8 17.2-34.2-19.8-34.2-19.8-.3-36.3-.2-36.3 3.3 1.8c1.9 1 31.3 18 65.5 37.8zM214 122c0 17.6-.3 32-.6 32-1 0-55.3-31.4-55.3-32 0-.6 54-31.9 55.2-31.9.4-.1.7 14.3.7 31.9zM263 122v92h6V30h-6v92zM498.8 52.7l.3 15.3H524v94l17.3-.2 17.2-.3.3-46.8.2-46.7h25V38l-42.7-.2-42.8-.3.3 15.2zM319 100v62h34V38h-34v62zM374.2 99.7l.3 61.8 16.8.3 16.7.2v-34.5c0-19 .3-34.5.8-34.5.4 0 9.8 15.4 20.9 34.3l20.1 34.2 17.1.3 17.1.2V38h-34l-.2 34.9-.3 34.9-19.6-34.7-19.6-34.6-18.2-.3L374 38l.2 61.7zM598 100v62h70v-31h-35v-17h29V84h-29V68h34V38h-69v62zM686 99.9V162h35v-44.1l3.6.3 3.6.3 10.3 21.5 10.2 21.5 18.6.3c12.1.1 18.7-.1 18.7-.8 0-.5-6.1-12.3-13.6-26l-13.6-25.1 3.9-3.4c2.2-1.8 5.3-6 7-9.2 10-18.8 4.9-43.3-10.9-52.6-9.4-5.5-13.1-6-44-6.5l-28.8-.4v62.1zm48-31.1c6.8 3.3 7.2 13.8.8 18.5-1.7 1.2-4.9 2.2-8.3 2.5l-5.5.4V67h4.8c2.6 0 6.3.8 8.2 1.8zM319.2 196.7c.1 5.4.3 7.9.5 5.7.4-3.7.7-4.2 3.5-4.8 1.7-.3 3.7-1.1 4.5-1.7 3.4-2.9-.5-8.9-5.7-8.9h-3l.2 9.7zm7.3-4.2c0 2.7-.4 3-3.2 3.3-3.2.3-3.3.2-3.3-3.3s.1-3.6 3.3-3.3c2.8.3 3.2.6 3.2 3.3zM345 196.5v9.5h4.5c2.5 0 4.5-.5 4.5-1 0-.6-1.6-1-3.5-1H347v-8.5c0-5-.4-8.5-1-8.5s-1 3.8-1 9.5zM375.3 188.7c-.3 1-1.9 5.2-3.5 9.3-3.2 8.5-3.1 8-1.9 8 .4 0 1.2-1.5 1.7-3.3.9-2.9 1.3-3.2 4.9-3.2 3.6 0 4.2.4 5.7 3.5 2.7 5.6 2.1 1.9-1.3-7.4-3.2-8.6-4.4-10.1-5.6-6.9zm2.6 2.5c2.5 6.6 2.4 6.8-.8 6.8-3.5 0-3.5.1-1.9-5.1 1.3-4.5 1.6-4.7 2.7-1.7zM403.2 196.7c.2 9.7.2 9.7.5 2 .2-4.2.7-7.7 1.1-7.7.4 0 2.9 3.4 5.6 7.5 2.7 4.1 5.2 7.5 5.7 7.5s.9-4.3.9-9.5c0-11.4-1.8-12.9-2.2-1.8l-.3 7.7-5-7.7c-2.7-4.2-5.3-7.7-5.7-7.7-.5 0-.7 4.4-.6 9.7zM436 196.5v9.5h4.5c2.5 0 4.5-.5 4.5-1 0-.6-1.6-1-3.5-1-3.3 0-3.5-.2-3.5-3.4 0-3 .4-3.5 2.8-3.9l2.7-.4-2.7-.2c-2.5-.1-2.8-.5-2.8-3.6 0-3.2.2-3.5 3-3.5 1.7 0 3-.5 3-1 0-.6-1.8-1-4-1h-4v9.5zM460 188c0 .5 1.1 1 2.5 1 2.5 0 2.5.1 2.5 8.5 0 5 .4 8.5 1 8.5s1-3.5 1-8.5c0-8.4 0-8.5 2.5-8.5 1.4 0 2.5-.5 2.5-1 0-.6-2.7-1-6-1s-6 .4-6 1zM489.1 195.6c-3.5 9.7-4 12.7-1 7.1 1.7-3.2 2.4-3.7 5.4-3.7 3.1 0 3.7.4 5 3.7.8 2 1.8 3.4 2 3.1.8-.7-6-18.1-7.2-18.5-.6-.2-2.4 3.5-4.2 8.3zm4.8 2.2c-1.7.2-3.3.1-3.6-.1-.2-.3.3-2.2 1.3-4.3l1.6-3.9 1.9 4 1.8 4-3 .3zM519.2 196.7c.1 5.4.3 7.7.5 5 .5-6.2 2.9-6.3 6.2-.2 3.1 5.8 4.7 5.9 1.9.1-2-4.1-2-4.5-.5-6.1 1-.9 1.7-2.3 1.7-3.1 0-2.4-3.8-5.4-7-5.4h-3l.2 9.7zm7.5-6.1c.9 2.4-1 4.9-4.1 5.2-2.4.3-2.6 0-2.6-3.2 0-3.3.2-3.6 3-3.6 1.9 0 3.3.6 3.7 1.6zM547.9 192.4c2 3.5 3.1 6.9 3.2 9.7l.2 4.4.6-5c.3-2.8 1.9-7.1 3.4-9.8 1.5-2.6 2.3-4.7 1.8-4.7-.6 0-2 1.8-3.1 4s-2.2 4-2.5 4c-.3 0-1.4-1.8-2.5-4s-2.5-4-3.1-4c-.6 0 .3 2.4 2 5.4zM592.2 196.7c.1 5.4.3 7.7.5 5 .4-4.5.5-4.7 3.6-4.8l3.2-.1-3-.7c-2.5-.5-3.1-1.2-3.3-3.9-.3-3.1-.2-3.2 3.2-3.2 2 0 3.6-.5 3.6-1 0-.6-1.8-1-4-1h-4l.2 9.7zM618.2 196.7c.1 7.1.3 8.5.7 5.3.8-6.3 3.4-6.6 6.3-.6 2.2 4.6 3.2 5.4 4.3 3.6.3-.6.2-1-.4-1-.6 0-1.8-1.4-2.6-3-1.4-2.8-1.4-3.3 0-5.2.8-1.3 1.5-3 1.5-4 0-2.3-3.8-4.8-7.2-4.8H618l.2 9.7zm7.6-4.8c.4 2.6-1.2 4.1-4.5 4.1-2 0-2.3-.5-2.3-3.6 0-3.4.1-3.5 3.3-3.2 2.5.2 3.3.8 3.5 2.7zM646 196.5v9.5h4c2.2 0 4-.5 4-1 0-.6-1.6-1-3.5-1-3.3 0-3.5-.2-3.5-3.5s.2-3.5 3.3-3.6l3.2-.1-3-.7c-2.5-.5-3.1-1.2-3.3-3.9-.3-3.1-.2-3.2 3.2-3.2 2 0 3.6-.5 3.6-1 0-.6-1.8-1-4-1h-4v9.5zM671 196.5v9.5h4.5c2.5 0 4.5-.5 4.5-1 0-.6-1.6-1-3.5-1-3.3 0-3.5-.2-3.5-3.4 0-3.2.3-3.5 3.3-3.9l3.2-.4-3.2-.1c-3.1-.2-3.3-.5-3.3-3.7 0-3.3.2-3.5 3.5-3.5 1.9 0 3.5-.5 3.5-1 0-.6-2-1-4.5-1H671v9.5zM698 196.6v9.6l4.3-.7c5.9-1 8.7-3.8 8.7-8.9-.1-5-1.7-7.4-6.1-8.6-6.9-2-6.9-2-6.9 8.6zm9.5-5.6c4.2 4.6 1.1 13-4.7 13H700v-15h2.8c1.6 0 3.7.9 4.7 2zM733.9 188.5c-6.6 3.6-5.3 14.4 2 16.6 4.8 1.4 8.5-.1 10.6-4.2 4.5-8.6-4.1-17-12.6-12.4zm8 1c3.2 1.6 4.1 3.3 4.1 7.6 0 6.6-8.8 9.5-12.9 4.3-4.2-5.4-1.6-11.4 5.7-13.3.2-.1 1.6.6 3.1 1.4zM768 195.9c0 11.2 1.8 13.2 2.2 2.4l.3-7.8 3.2 6.7c1.8 3.8 3.6 6.8 4.1 6.8.4 0 2.3-3.3 4.2-7.3l3.4-7.2.6 8.5.6 8.5.2-9.8c.1-6.2-.2-9.7-.8-9.7-.6 0-2.7 3.5-4.7 7.7l-3.7 7.6-3.4-7.6c-4.7-10.5-6.2-10.2-6.2 1.2z"/>                      </svg>  
                     
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-red-600 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={props.handleConnect}

                      type="button"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                    >
                      Connect Wallet
                    </button>
                   
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          {props.children}
          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Powered by Web3 and the following
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src={MoralisLogo} alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-14" src={AlchemyLogo} alt="Alchemy" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-16"
                    src={ChainlinkLogo}
                    alt="Chain Link"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-16"
                    src={PolygonLogo}
                    alt="Polygon"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-16"
                    src={Web3StorageLogo}
                    alt="Web3 Storage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}
