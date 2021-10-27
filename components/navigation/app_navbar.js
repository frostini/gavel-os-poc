import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
import DropdownMenuSelect from './dropdown_menu_select';
import navigationMap from './navigation_map';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ user, loading, logout }) {
  const [open, setOpen] = useState(false)

  const AuthNav = () => (
    user && <a
      href="#"
      onClick={logout}
      className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    >
      Sign Out
    </a>
  )
  const NewSession = () => (
    !user && <>
      <Link href="/sign-in">
        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Sign in
        </a>
      </Link>
      <Link href="/sign-up">
        <a
          className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign up
        </a>
      </Link>
    </>
  )
  
  return (
    <div className="bg-white sticky top-0 z-10">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigationMap.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigationMap.categories.map((category) => (
                    <Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                        {category.featured.map((item) => (
                          <div key={item.name} className="group relative">
                            <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                            </div>
                            <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                              <span className="absolute z-10 inset-0" aria-hidden="true" />
                              {item.name}
                            </a>
                            <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>


      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-center sm:px-6 lg:px-8">
              <div className="flex items-center space-x-6">
                <a href="#" className="underline text-sm font-medium text-white hover:text-gray-100">
                  Click here to test drive demo mode
                </a>
              </div>              
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">

                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <Image
                              src="/gavel_os_logo.svg"
                              alt="Picture of the author"
                              width={150}
                              height={70}
                      />
                    </a>
                  </div>
                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="px-4 bottom-0 inset-x-0">
                      <div className="h-full flex justify-center space-x-8">
                        {/* <DropdownMenuSelect /> */}
                        { navigationMap.categories.map( ({featured, name}) => (
                          < DropdownMenuSelect 
                            key={name}
                            data={featured}
                            title={name} 
                          />
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu */}
                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Workflow</span>
                      <Image
                        src={"/gavel_os_logo_text_greyscale.svg"}
                        alt="Picture of the author"
                        width={80}
                        height={50}
                      />
                    </a>
                  </div>
                  <div className="flex-2 md:flex-1 flex items-center justify-end">
                    <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                      <AuthNav />
                      <NewSession/>
                    </div>
                    {/* Mobile menu */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}