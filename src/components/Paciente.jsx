
const Paciente = () => {
  return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Gabriel</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">gabo@gmail.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">05 de Mayo 2023</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore nihil debitis fugiat maxime qui ea saepe incidunt eius, sunt velit officiis eos, animi consectetur nobis voluptas! Deleniti, laboriosam quod?</span>
            </p>
        </div>
  )
}

export default Paciente