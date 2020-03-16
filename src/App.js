import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita'

function App() {


  // citas en el localStorage

  let initialCitas = JSON.parse(localStorage.getItem('citas'));
  if(!initialCitas) {
    initialCitas = []
  }

  //Arreglo citas
  const [citas, setCitas] = useState(initialCitas);

  //Funcion que tome las citas y agregue una nueva

  const crearCita = cita =>{
    setCitas([
      ...citas,
      cita
    ])
  }

  // UseEffect
  useEffect( () => {
    if(initialCitas) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas]);

  //funcion para eliminar cita

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas)
  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <div className="App">
      <h1>administrador de Pacientes</h1>
      <div className='container'>
        <div className = 'row'>
          <div className='one-half column'>
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
