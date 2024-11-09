import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Our Online Teaching Platform</title>
      </Head>

      <section className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Online Learning Platform</h1>
        <p className="text-lg text-gray-600 mb-6">
          Start learning today with expert instructors and flexible scheduling.
        </p>
        
        <Link href="/about">
          <p className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </p>
        </Link>
      </section>
    </>
  )
}
