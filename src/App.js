import './App.css';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

function App() {
  const text="Dirty mind is far better than having a dirty heart!"
  const [src, setSrc]=useState('')

  useEffect(()=>{
    QRCode.toDataURL(text)
          .then((data)=>{
            setSrc(data);
          });
  },[])
  return (
    <div className="App">
     {/*   <img src={src}/> */}
    </div>
  );
}

export default App;
