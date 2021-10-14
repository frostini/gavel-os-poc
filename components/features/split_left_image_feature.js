import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';

const transferFeatures = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
];

const SplitLeftImageFeature = () => (
  <>
    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className="relative">
        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
          Transfer funds world-wide
        </h3>
        <p className="mt-3 text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
          officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
          Totam, velit.
        </p>
        <dl className="mt-10 space-y-10">
          {transferFeatures.map((item) => (
            <div key={item.id} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
        >
          <defs>
            <pattern
              id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
        </svg>
        <img
          className="relative mx-auto"
          width={490}
          src="https://tailwindui.com/img/features/feature-example-1.png"
          alt=""
        />
      </div>
    </div>
    <svg
      className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
    </svg>
  </>
);

export default SplitLeftImageFeature;