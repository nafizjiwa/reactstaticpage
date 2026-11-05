
// //1. Create a root by first importing the createRoot method
import { createRoot } from 'react-dom/client';
import App from './App'; 

// //Pass DOM node into createRoot
const root = createRoot(document.getElementById('root'));

// //2.Render some markup to the root
root.render(<App />);
// root.render(
//     <>
//     <h1>Hello</h1>
//     <ul>
//         <li>Super popular JS Library</li>
//         <li>Will help me be even more employable</li>
//         <li>React has a pretty cool logo</li>
//     </ul>
//     </>
// );

