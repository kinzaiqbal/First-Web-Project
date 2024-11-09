import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <section className="min-h-screen flex flex-col items-center justify-center bg-blue-100 py-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to our online teaching platform, where learning meets flexibility. 
            Our mission is to provide personalized education through expert instructors, 
            helping students achieve their academic and professional goals from anywhere, at any time.
          </p>
          <p className="text-lg text-gray-600">
            Whether you're preparing for exams or learning a new skill, we offer courses designed to fit 
            your needs and schedule. Join us today to start your learning journey!
          </p>
        </div>
      </section>
    </>
  )
}
