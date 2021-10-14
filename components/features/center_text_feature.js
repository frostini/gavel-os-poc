const CenterTextFeature = () => (
  <>
    <svg
      className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
    </svg>
    <div className="relative">
      <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        A better way to send money
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in,
        accusamus quisquam.
      </p>
    </div>
  </>
);
export default CenterTextFeature;