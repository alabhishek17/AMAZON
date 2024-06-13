import { Fragment, useContext, useState } from "react";
import Mycontext from "../../context/mycontex";
import { Dialog, Transition } from '@headlessui/react';
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from "react-redux";

function NAVBAR() {
  const [open, setOpen] = useState(false);

  const context = useContext(Mycontext);
  const { toggleMode, mode } = context;

  const cart = useSelector(state => state.cart);

  return (
    <div className="bg-white sticky top-0 z-50">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link to='/allproducts' className="text-sm font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link to='/order' style={{ color: mode === 'dark' ? 'white' : '' }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div>

                  <div className="flow-root">
                    <Link to='/dashboard' className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                      Admin
                    </Link>
                  </div>

                  <div className="flow-root">
                    <a className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>
                      Logout
                    </a>
                  </div>
                  <div className="flow-root">
                    <Link to='/' className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov"
                      />
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop */}
      <header className="relative bg-gray-800">
        <p className="flex h-10 items-center justify-center bg-gray-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '' }}>
          Get free delivery on orders over ₹300
        </p>

        <nav aria-label="Top" className="bg-gray-800 px-4 sm:px-6 lg:px-8 shadow-xl" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
          <div>
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-100 lg:hidden"
                onClick={() => setOpen(true)}
                style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to='/' className='flex'>
                  <div className="flex">
                    <h1 className="text-2xl font-bold text-white px-2 py-1 rounded" style={{ color: mode === 'dark' ? 'white' : '' }}>E-AMAZON</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to='/allProducts.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    All Products
                  </Link>
                  <Link to='/amazonfresh.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Premium Beauty
                  </Link>
                  <Link to='/productphone.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Mobile
                  </Link>
                  <Link to='/computer.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Computer
                  </Link>
                  <Link to='/alexa.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Women Fashion
                  </Link>
                  <Link to='/fashion.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Fashion
                  </Link>
                  <Link to='/devices.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Amazon Devices
                  </Link>
                  <Link to='/primevideo.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Prime Video
                  </Link>
                  <Link to='/sports.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Sports
                  </Link>
                  <Link to='/musical.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Musical Instruments
                  </Link>
                  <Link to='/signin.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  SignIn
                  </Link>
                  <Link to='/signout.jsx' className="text-sm font-medium text-gray-100" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  SignOut
                  </Link>
                </div>

                {/* Dark Mode Toggle */}
                <div onClick={toggleMode} className="cursor-pointer mx-5 p-2 rounded-full border-2 border-gray-600 shadow-md">
                  {mode === 'dark' ? <FiSun className="text-yellow-300" /> : <BsFillCloudSunFill className="text-gray-100" />}
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to='/cart.jsx'>
                    <div className="group -m-2 flex items-center p-2">
                      <svg className="flex-shrink-0 h-6 w-6 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18l-1.59 9.65a4.5 4.5 0 01-4.36 3.85H8.95a4.5 4.5 0 01-4.36-3.85L3 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 16.5h7m-3.5 3v3" />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-100 group-hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>{cart.length}</span>
                      <span className="sr-only">items in cart, view cart</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NAVBAR;
