import Box from './components/Box'
import { useState } from 'react'
import './App.css'


function App() {
  const [Ism, setIsm] = useState('');
  const [Fam, setFam] = useState('');
  const [Yosh, setYosh] = useState('');
  const [Users, setUsers] = useState([]);

  function handleIsm(event){
    setIsm(event.target.value)
  }

  function handleFam(event){
    setFam(event.target.value)
  }

  function handleYosh(event){
    setYosh(event.target.value)
  }

  function Btnpush(event){
    event.preventDefault();
if(!Ism){
  return(
    alert ('ism kiriting')
  );
}
if(!Fam){
  return(
    alert ('familya kiriting')
    
  );
}
if(!Yosh){
  return(
    alert ('Yosh kiriting')

  );
}
    const malumot = {
      ism: Ism,
      fam: Fam,
      yosh: Yosh,
      id: Date.now(),
    }
    
    setIsm('');
    setFam('');
    setYosh('');
    const copy = [...Users];
    copy.push(malumot);
    setUsers(copy);

  }

  return (
    <>
    <div className='form'>
         <div className="block">
            <label>Ism</label>
            <input onChange={handleIsm} value={Ism} type="text" style={{color:'white'}}   className='input' placeholder='Ismingizni kiriting' />
          </div>
          <div className="block">
            <label>Familya</label>
            <input type="text" onChange={handleFam} value={Fam} style={{color:'white'}}   className='input' placeholder='Familyangizni kiriting' />
          </div>
          <div className="block">
            <label>Yosh</label>
            <input type="date" onChange={handleYosh} value={Yosh} style={{color:'white'}}   className='input' />
          </div>
          <button onClick={Btnpush} className='btn'>Qo`shish</button>
    </div>
    
    <div className='card'>
    {
      Users.length > 0 && Users.map(function(value,index){
        return(
          <Box yosh = {value.yosh} fam = {value.fam} ism={value.ism} id={value.id}/>
        )
      })
    }
    </div>
    </>
  )
}

export default App;
