import { TypeAnimation } from 'react-type-animation';

const TypeAnimated = () => {
  return (
   <div className='text-orange-400'>
     <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'I am : Digital Marketer🔥',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'I am : Google Adds Expert🔥',
      1000,
      'I am : Facebook Adds Expert🔥',
      1000,
      'I am : SEO Expert🔥',
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