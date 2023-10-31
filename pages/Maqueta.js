import { motion } from 'framer-motion';

const Input = ({ name, bol }) => {
  return (
    <div className={`flex flex-col ${bol ? 'col-span-2' : ''}`}>
      <label>{name}</label>
      <input className='rounded p-1'></input>
    </div>
  );
};
export default function Maqueta() {
  return (
    <div className='flex justify-center py-4'>
      <motion.div whileHover={{ paddingTop: 0 }} style={{ background: 'url(img/amusement.jpg)' }} className='h-[932px] w-[430px] rounded-2xl bg-black pt-40 flex flex-col'>
        <div className='w-full rounded-3xl bg-gray-500/50 backdrop-blur-sm  text-white flex-grow flex-col flex items-center pt-20 px-6 gap-y-4'>
          <h1 className='text-4xl capitalize'>Get started free</h1>
          <h2>Writing is clarifying!!</h2>
          <div className='mt-4 '>
            <form className='grid grid-cols-2 gap-2'>
              <Input name='Nombre'></Input>
              <Input name='Apellidos'></Input>
              <Input name='Dirección' bol></Input>
              <Input name='Degree' bol></Input>
              <Input name='Username'></Input>
              <Input name='Password'></Input>
              <Input name='Móvil' bol></Input>
            </form>
          </div>
          <button className=' rounded-xl p-3 from-violet-500 to-red-500 bg-gradient-to-r w-full'>Sign Up</button>
          <div className=' flex gap-x-2 justify-center items-center w-full text-sm'>
            <div className='flex-grow h-1 from-transparent to-red-400 bg-gradient-to-r'></div>
            <p className='w-fit'>Or sign up with</p>
            <div className='flex-grow h-1 from-transparent to-red-400 bg-gradient-to-l'></div>
          </div>
          <div className='flex gap-x-2'>
            <button className='p-2 rounded border'>Google</button>
            <button className='p-2 rounded border'>Apple</button>
            <button className='p-2 rounded border'>Facebook</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
