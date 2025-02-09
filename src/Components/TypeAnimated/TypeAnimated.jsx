import { TypeAnimation } from 'react-type-animation';

const TypeAnimated = () => {
  return (
   <div className='text-orange-400'>
     <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'I am :  React Developar🔥',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'I am : Front-End Developar🔥',
      1000,
      'I am : Mern-Stack Developar🔥',
      1000,
      'I am : learning Python and ML🔥',
      1000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '1.5em', display: 'inline-block' }}
    repeat={Infinity}
    />
   </div>
  )
}

export default TypeAnimated