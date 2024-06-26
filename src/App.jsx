import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Homepage from './Pages/Homepage'
import JobsPage from './Pages/JobsPage'
import JobPage, {jobLoader} from './Pages/JobPage'
import AddJobPage from './Pages/AddJobPage'
import EditJobPage from './Pages/EditJobPage'


const App = () => {
  // ADD NEW JOB
  const addJob = async (newJob) => {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  })
  return
  }

    //DELETE JOB
    const deleteJob = async (id) => {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      })
      return
      }

      //UPDATE JOB
      const updateJob = async (job) => {
        const res = await fetch(`/api/jobs/${job.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(job)
        })
        return
        }
      




  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route 
          path='/edit-job/:id' 
          element={<EditJobPage updateJobSubmit={updateJob} />} 
          loader={jobLoader} />
        <Route 
          path='jobs/:id' 
          element={<JobPage deleteJob={ deleteJob } />} 
          loader={jobLoader} />
        <Route path='add-job' element={<AddJobPage addJobSubmit={addJob} />}  />
        
      </Route>
    )
  )
  
  return <RouterProvider router={router} />
}

export default App
