
// //1. Create a root by first importing the createRoot method
import { createRoot } from 'react-dom/client';
import App from './App'; 

// //Pass DOM node into createRoot
const root = createRoot(document.getElementById('root'));

// //2.Render some markup to the root
root.render(<App />);


