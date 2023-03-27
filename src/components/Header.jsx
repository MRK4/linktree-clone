import data from '../data.json';
import Avatar from '../assets/imgs/avatar.webp'

function Header() {
  console.log();
  return (
    <header className='flex flex-col items-center space-y-3'>
      <img className='w-auto h-24 rounded-full' src={Avatar} alt="" />
      <span className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold'>{data.name}</h1>
        <h2 className=''>Front-End Developer</h2>
      </span>
    </header>
  )
}

export default Header