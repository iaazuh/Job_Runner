import { NavLink } from "react-router-dom"

const Navbar = () => {

    const Linkclass = ({isActive}) => isActive? 
    'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 
    'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'


  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto" 
                src="src\assets\Images\logo.png"
                alt="Job Runner"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Job Runner
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className= { Linkclass }>
                    Home</NavLink>
                <NavLink
                  to="/jobs"
                  className={ Linkclass }>
                    Jobs</NavLink>
                <NavLink
                  to="/add-job"
                  className={ Linkclass }>
                    Add Job</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar