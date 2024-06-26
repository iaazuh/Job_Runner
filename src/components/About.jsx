import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className='bg-hero bg-no-repeat bg-cover bg-center'>   
    <section className="bg-indigo-100 py-20 mb-4 opacity-50">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
            <h2
            className="text-2xl font-extrabold text-indigo-900 sm:text-3xl md:text-4xl">
            Join our professional <br /> community Today
          </h2>
          <p className="my-4 text-xl text-indigo-900">
            Find the perfect Job for you. Choose from our Job listings a job that best suits you and your skill set to begin building your career today.
          </p>
        </div>
      </div>
    </section>

    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md opacity-80">
          <h2 className="text-2xl font-bold">For Talent</h2>
            <p className="mt-2 mb-4">
              Browse our jobs and start your career today
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
              Browse Jobs
            </Link>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md opacity-80">
          <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect talent for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
              Add Job
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About