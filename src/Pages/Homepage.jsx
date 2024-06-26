import About from '../components/About'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs' 

const Homepage = () => {
  return (
    <>
        <About />
        <JobListings isHome={true} />
        <ViewAllJobs />
    </>
  )
}

export default Homepage