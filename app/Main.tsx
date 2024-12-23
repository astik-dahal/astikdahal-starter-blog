import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Hero from '@/components/Hero'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <Hero />
        <div className="space-y-2 pb-4 pt-0 md:space-y-5">
          <div className="pt-4">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              Latest
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>          
          <div className="grid grid-cols-1 gap-6 pb-4 pt-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags, images } = post // Assuming `imageUrl` contains the image URL
              const headerImg = images[0] || 'https://placehold.co/320x180?text=No+Image+Found'
              console.log(images)
              return (
                <div
                  key={slug}
                  className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800 hover:drop-shadow-lg"
                >
                  {/* Single Link Component Wrapping Entire Card */}
                  <Link href={`/blog/${slug}`} className="block group">
                    {/* Image with 16:9 ratio */}
                    <div className="relative w-full bg-gray-200 pt-[56.25%] dark:bg-gray-700">
                      <img
                        src={headerImg}
                        alt={title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="mt-4">
                        <h2 className="text-lg font-bold leading-6 tracking-tight text-gray-900 group-hover:underline dark:text-gray-100">
                          {title}
                        </h2>
                        {/* Replace Nested Link with Span */}
                        <div className="mt-2 flex flex-wrap">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="mr-3 text-xs font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="prose mt-4 max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                  </Link>
                </div>



              )
            })}
          </div>
        </div>



        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
