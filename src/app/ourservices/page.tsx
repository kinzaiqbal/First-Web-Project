import Head from 'next/head'

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services</title>
      </Head>

      <section className="min-h-screen flex flex-col items-center justify-center bg-blue-100 py-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Services</h2>
          
          <p className="text-lg text-gray-600">
            Our online teaching platform offers personalized learning experiences designed to meet the unique needs of every student. With a team of expert instructors, we provide high-quality lessons across a range of subjects, ensuring that each learner receives the support and guidance they need to succeed. 
            <br /><br />
            Whether you're a beginner or looking to deepen your knowledge, our flexible scheduling options allow you to learn at your own pace and on your own time. Access live and recorded sessions from anywhere, and enjoy the convenience of learning whenever it fits into your schedule. 
            <br /><br />
            Join us today and take the first step towards achieving your educational goals!
          </p>
        </div>
      </section>
    </>
  )
}