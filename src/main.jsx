
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Contextapi from './context/Contextapi.jsx'

createRoot(document.getElementById('root')).render(
 <Contextapi>
 <App />
 </Contextapi>

)
