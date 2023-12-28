import { FaFacebook, FaGithubSquare, FaLinkedin} from 'react-icons/fa';
const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Aleksandar</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Front-End Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
          <a href='https://github.com/aleksandar-stotka'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/aleksandar-angelevski-776152212/'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.facebook.com/aleksandar.angelevski.5'>
              <FaFacebook className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block rounded-3xl'>
          <img className='rounded-tl-lg rounded-br-md' src="https://www.codeimmersives.com/wp-content/uploads/2021/04/term1.png" alt="hero" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
