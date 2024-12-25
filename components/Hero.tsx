import Link from '@/components/Link'

export default function Hero() {
  return (
    <>
      <div className="relative overflow-hidden py-2 md:py-8">
        <div className="relative flex items-center">
          <div className="container relative flex flex-col justify-between py-4">
            <div className="flex flex-col">
              <h1 className="max-w-4xl py-2 text-left text-3xl font-bold text-gray-800 dark:text-white md:text-6xl">
                Hi, I&#x27;m Astik 👋
              </h1>
              <p className="my-6 w-full text-left text-xl dark:text-white md:w-3/4 md:text-3xl">
                I'm a computer science enthusiast, doing machine learning, natural language processing and creating human centered designs.
              </p>
              <div className="mb-12 mt-8">
                <Link
                  href={`/about`}
                  className="text-md my-2 border-2 border-gray-800 bg-transparent px-4 py-2 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-gray-300 dark:text-white hover:dark:bg-white hover:dark:text-gray-800 md:mt-16"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
