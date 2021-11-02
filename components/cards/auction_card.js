import { HeartIcon, MailIcon, PhoneIcon,PlusSmIcon as PlusSmIconSolid, MinusSmIcon as MinusSmIconSolid } from '@heroicons/react/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ item }) {

return (
<li key={item.email} className="col-span-1 bg-white rounded-2xl shadow-xl overflow-hidden">
<div className="w-full flex justify-between p-6 space-x-6">
  <div className="flex-1 truncate">
    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
      {item.role}
    </span>
    <div className="flex items-center space-x-3">
      <h3 className="text-gray-900 text-lg font-medium truncate">{item.name}</h3>
    </div>
    <p className="mt-1 text-gray-500 text-sm truncate">{item.title}</p>
    <p className="mt-1 text-gray-500 text-sm truncate">{"ending in 4 days"}</p>
  </div>
  {/* <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={item.imageUrl} alt="" /> */}
  <div className="">
    <button
      type="button"
      className=" items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <HeartIcon  className="h-5 w-5" aria-hidden="true" />
    </button>
  </div>
</div>
<div>
  <div className="-mt-px flex">
    <div className="flex-1 flex flex-col justify-between">
    <p className=" text-center mt-1 text-gray-500 text-sm truncate">{`50$`}</p>
    <p className=" text-centertext-gray-500 text-sm truncate">{"Current Bid"}</p>
    <a
      href={`mailto:${item.email}`}
      className="text-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
    >
      <span className="">View details</span>
    </a>
    </div>
    <div className="flex-1 flex flex-col bg-indigo-900">

    <div className="flex-1 flex">
    <div className="mt-1">
<input
type="email"
name="email"
id="email"
className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
placeholder="$200.00"
/>
</div>
</div>
      <div className="flex-1 flex">
      <button
type="button"
className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
<MinusSmIconSolid className="h-5 w-5" aria-hidden="true" />
</button>


        
        <button
type="button"
className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
<PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
</button>
      </div>
      <div className="flex-1 flex">
      <a
        href={`tel:${item.telephone}`}
        className="relative w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-white font-medium hover:text-gray-500"
      >
        {/* <PhoneIcon className="w-5 h-5 text-white" aria-hidden="true" /> */}
        <span className="">Bid</span>
      </a>
      </div>
    </div>
  </div>
</div>
</li>
)}