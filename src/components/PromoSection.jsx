import "../App.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
export default function Example() {
  return (
    <div className="relative overflow-hidden bg-white mt-12 mb-16">
      <div className="pb-72 sm:pb-40 sm:pt-24 lg:pb-24 lg:pt-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-20">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-normal tracking-tight text-gray-900 sm:text-6xl capitalize">
              <div className="mb-3">Summer styles are</div>
              <div>finally here</div>
            </h1>
            <p className="mt-6 text-lg text-gray-500 ">
              Endüstriyel tedarikte çözüm arayanları mutlu eden yer! Tadını
              çıkarın.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-5xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-8 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-indigo-950">
                        <img
                          alt=""
                          src="select_havlu.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="cleaning2.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="cleaning2.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="cleaning1.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="select_havlu.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="select_havlu2.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="select_havlu.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#view"
                className="inline-block rounded-md border border-transparent bg-blue-950 px-8 py-3 text-center font-medium text-white hover:bg-indigo-950"
              >
                Mağazayı İncele
              </a>
              <div className="block sm:hidden w-1/2 text-center mt-6">
                <KeyboardDoubleArrowDownIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
