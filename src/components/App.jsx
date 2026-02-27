import { useState } from 'react';
import Frame from './main_frame/Frame.jsx'
import Footer from './footer/Footer.jsx'
import Navbar from './navbar/navbar.jsx';

export default function App() {
  
  const [frame, setFrame] = useState('')

  return (
    <div className='root-grid'>
      {<Navbar setFrame={setFrame} curFrame={frame} />}
      {<Frame curFrame={frame} />}
      {<Footer />}
    </div>
  );
}
