import React from 'react'
import {useState, useEffect} from 'react'
import Error from './Error';


const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false)

  // Llevando datos de Paciente para Editar en Formulario
  useEffect(()=> {

          if(Object.keys(paciente).length > 0){
              setNombre(paciente.nombre)
              setPropietario(paciente.propietario)
              setEmail(paciente.email)
              setFecha(paciente.fecha)
              setSintomas(paciente.sintomas)
          }
}

, [paciente])


// Generar ID
  const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);

      return random + fecha

  }

  // Controlador Submit 
 
  const handleSubmit = (e) => {
      e.preventDefault();
      // Validacion formulario
      if (!nombre.trim() || !propietario.trim() || !email.trim() || !fecha.trim() || !sintomas.trim()) {
        console.log("Hay campos vacíos");
        setError(true);
        return;
      }
    
      setError(false);

      //Objeto Paciente

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      }

      // Condicional para ver si se edita o se crea un nuevo Paciente

      if(paciente.id){
        // Editando el registro paciente
         objetoPaciente.id = paciente.id
         console.log(paciente)
         console.log(objetoPaciente)

        const pacientesActualizados = pacientes.map(
          pacienteState => pacienteState.id === objetoPaciente.id ?
          objetoPaciente : pacienteState )

        setPacientes(pacientesActualizados)
        setPaciente({})


      }else{
        // Nuevo Registro paciente
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente])

      }

      // Volviendo los valores a vacios
      setNombre("")
      setPropietario("")
      setEmail("")
      setFecha("")
      setSintomas("")



    
  }

  return (
<div className="m:w-1/2 lg:w-2/5">
<h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="mt-5 text-center text-lg">
          Añade Pacientes y {" "}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form className="bg-white shadow-md mt-5 rounded-lg p-5 mb-10"
          onSubmit={handleSubmit}
        >
         
          {error && (

          <Error mensaje= {"Todos los campos son obligatorios"} />

          )}

          <div className="mb-5"> 
            <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">
                Nombre Mascota
            </label>
            <input id="mascota" type="text" placeholder="Nombre mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value= {nombre} 
            onChange={(e) => setNombre(e.target.value)}/>
          </div>


          <div className="mb-5"> 
            <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">
                Nombre Propietario
            </label>
            <input id="propietario" type="text" placeholder="Nombre propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value= {propietario} 
            onChange={(e) => setPropietario(e.target.value)}
            />
            
          </div>


          <div className="mb-5"> 
            <label htmlFor="email" className="block text-gray-700 font-bold uppercase">
                Email
            </label>
            <input id="email" type="email" placeholder="Email contacto" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value= {email} 
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div className="mb-5"> 
            <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">
                Alta Mascota
            </label>
            <input id="alta" type="date" placeholder="Nombre propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value= {fecha} 
            onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          

          <div className="mb-5"> 
            <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">
                Sintomas
            </label>
           <textarea id="sintomas" className="w-full mt-2 border-2 p-2 rounded-lg" 
           name="" cols="10" rows="10" placeholder="Escriba los sintomas"
           value= {sintomas} 
           onChange={(e) => setSintomas(e.target.value)}
           />        
             </div>


             <input type="submit" className="bg-indigo-600 w-full p-3
              text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer" 
             value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}/>

        </form>
</div>
  )
}

export default Formulario
