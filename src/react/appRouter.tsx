import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Landing } from "./Pages/Landing"
import { Error } from "./Pages/Error"
import routes from "./config/routes"
import { Join } from "./Pages/Join"


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Landing /> } />
        <Route path={ routes.join } element={ <Join /> } /> 
        <Route path={ routes.about } element={ <></> } />
        <Route path={ routes.terms } element={ <></> } />
        <Route path={ routes.contact } element={ <></> } />
        {/* Requires to be authenticated */}
        <Route path={ routes.profile } element={ <></> } />
        <Route path={ routes.dashboard } element={ <></> } />
        <Route path={ routes.env.normal } element={ <></> } />
        <Route path={ routes.env.admin } element={ <></> } />
        <Route path={ routes.admin } element={ <></> } />
        <Route path={ routes.download } element={ <></> } />

        <Route path="*" element={ <Error /> } />       
      </Routes>
    </BrowserRouter>
  )
}
