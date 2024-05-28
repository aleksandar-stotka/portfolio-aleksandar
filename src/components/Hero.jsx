import { FaFacebook, FaGithubSquare, FaLinkedin} from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8 px-6 md:px-12 lg:px-24'>
        <article>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider'>I'm Aleksandar</h1>
          <p className='mt-4 text-lg md:text-2xl text-slate-700 capitalize tracking-wide'>
            Front-End Developer
          </p>
          <p className='mt-2 text-base md:text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/aleksandar-stotka'>
              <FaGithubSquare className='h-8 w-8 md:h-10 md:w-10 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/aleksandar-angelevski-776152212/'>
              <FaLinkedin className='h-8 w-8 md:h-10 md:w-10 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.facebook.com/aleksandar.angelevski.5'>
              <FaFacebook className='h-8 w-8 md:h-10 md:w-10 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='rounded-3xl'>
          <img className='rounded-tl-lg rounded-br-md w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx74a_Vs44_RPo5XFL9nkQ5PTYYr9e2NMW-FM5KZn3ig&s" alt="hero" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
