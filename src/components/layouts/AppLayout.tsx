import { Outlet } from "react-router"

function AppLayout () {
  return(
    <div className="flex flex-col min-h-screen">
      <
      <Outlet /> 
      <Footer />
    </div>
  )
}

export default AppLayout