import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) =>{
    
    return (
        <div className="w-1/2 lg:w-3/5 text-left h-screen overflow-y-auto">

            { pacientes && pacientes.length ? (
                <>
                 <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                 <p className="text-xl mt-5 mb-10 text-center">
                     Administra tus {''}
                     <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
                 </p>
                 { pacientes.map( paciente => ( 
                     <Paciente 
                     key={ paciente.id }
                     paciente={paciente} />
                 )) }
                 </>) : (
                    <>
                         <h2 className="font-black text-3xl text-center">No</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus {''}
                            <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
                        </p>
                    </>
                 )}

        
          
        </div>
    )
}

export default ListadoPacientes;