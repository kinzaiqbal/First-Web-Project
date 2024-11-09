import Head from 'next/head'

export default function Assignments() {
  return (
    <>
      <Head>
        <title>Assignments</title>
      </Head>

      <section className="min-h-screen flex items-center justify-center bg-blue-100 py-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Assignments</h2>
          <p className="text-lg text-gray-600">
            Assignments will be uploaded soon! Stay tuned for more updates.
          </p>
        </div>
      </section>
    </>
  )
}
