import React from 'react'

const Paciente = ({paciente,setPaciente, eliminarPaciente}) => {


    const { nombre,
        propietario,
        email,
        fecha,
        sintomas,
        id } = paciente

        const handleEliminar = () => {
            console.log("eliminando")
            const respuesta = confirm (`Desea eliminar el paciente ${nombre} ?`)
                if ( respuesta) {
                    eliminarPaciente(id)
                }
        }

   
    return (
    <div className="m-5 bg-white shadow-md p-5 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}
    <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
    <span className="font-normal normal-case">{propietario}</span>
    </p>
    
    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}
    <span className="font-normal normal-case">{email}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Alta Mascota: {" "}
    <span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {" "}
    <span className="font-normal normal-case">{sintomas}</span>
    </p>

    <div className="flex justify-between mt-5">

        <button 
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700
         text-white font-bold uppercase rounded-lg" onClick={()=> setPaciente(paciente)}>
            Editar
        </button>
        
        <button className="py-2 px-10 bg-red-600 hover:bg-red-700
         text-white font-bold uppercase rounded-lg" onClick={handleEliminar}>
            Eliminar
        </button>
    </div>



  </div>

  )
}

export default Paciente
