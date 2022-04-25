import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {BrowserRouter} from "react-router-dom"
import { AuthContextProvider } from './Contexts/AuthContext'
import { TotalNewContextProvider } from './Contexts/Totalnew'
import { TotalPromotedContextProvider } from './Contexts/Totalpromoted'
import { TotalTerminatedContextProvider } from './Contexts/Totalterminated'
import { TotalContextProvider } from './Contexts/TotalContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <AuthContextProvider>
     <TotalNewContextProvider>
       <TotalPromotedContextProvider>
         <TotalTerminatedContextProvider>
           <TotalContextProvider>
           <App />
           </TotalContextProvider>
         </TotalTerminatedContextProvider>
       </TotalPromotedContextProvider>
     </TotalNewContextProvider>
   </AuthContextProvider>


  
   </BrowserRouter> 

   
   </React.StrictMode>
)