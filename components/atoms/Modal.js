import { motion } from 'framer-motion'
export default function Modal({ objeto, estado, setEstado }) {
    if (objeto.respuesta !== undefined) {
        return estado && <div className={"absolute p-2 bottom-0 rounded m-auto w-full sm:w-[90vw] z-50 flex items-center justify-center"}>
            <motion.div animate={{ scale: 1, y: 0 }} initial={{ scale: 0, y: -100 }} className="bg-gray-50 w-full h-full flex flex-row justify-around items-center border-2 border-black rounded px-2">
                <h3 className="text-xl my-8">{objeto.respuesta}</h3>
                <p onClick={() => { setEstado(false) }} className="cursor-pointer text-center font-bold border-black p-2 w-fit border-2 rounded text-sm">X <span>cerrar</span></p>
            </motion.div>
        </div>
    }
    return estado && <div className={"fixed top-0 left-0 text-black w-full h-full z-20 flex items-center justify-center"}>
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0.5 }} className="absolute w-full h-full sm:w-[90vw] sm:h-[90vh] m-auto rounded p-6 bg-white shadow-xl">
            <p onClick={() => { setEstado(false) }} className="cursor-pointer p-4 border-2 rounded text-2xl">X cerrar</p>
            <h1 className="text-4xl my-8">Qué incluye el <b>mantenimiento</b></h1>
            <ul className="space-y-6 text-xl">
                <li>Cuota de dominio</li>
                <li>Cuota de alojamiento</li>
                <li>Web 24hs activa</li>
                <li>Solución de posibles errores y fallos</li>
                <li>Comprobación periódica de enlaces rotos</li>
                <li>Atención 24hs</li>
            </ul>
        </motion.div>
    </div>

}