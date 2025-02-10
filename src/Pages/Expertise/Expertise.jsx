import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

const Expertise = () => {
  return (
    <div className='container mx-auto lg:px-24 py-12'>
     <div className='items-center justify-center flex flex-col space-y-2 mb-8'>
     <h1 className='text-2xl font-bold text-orange-500 tracking-wider'>MY EXPERTISE</h1>
     <h2 className='text-4xl font-bold tracking-wider'>What I DO</h2>

     </div>
     
     <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-3'>
            {/* front-end */}
            <div className='expertices px-5 py-5 space-y-2 shadow-md rounded-sm flex flex-col justify-center items-center text-center  border-t-1  border-b-1'>

            <FaReact className="text-4xl shadow-2xl  text-blue-600 animate-spin" />
            <h1 className="text-2xl font-bold  tracking-wider">ReactJs Front-End Developar</h1>
            <p className="text-[15px] tracking-wide leading-6">
            A skilled React.js Front-End Developer proficient in building dynamic and responsive user interfaces.  Experienced with modern JavaScript, HTML, CSS, and related front-end technologies. Focused on delivering clean, efficient, and maintainable code for optimal performance.

            </p>
            </div>

            {/* node js Back-end developar */}
            <div className='expertices px-5 py-5 space-y-2 shadow-md flex flex-col justify-center items-center text-center border-t-1  border-b-1'>
            <FaNodeJs className="text-4xl shadow-2xl  animate-pulse" />

                <h1 className="text-2xl font-bold tracking-wider">Node Js Back-end Developar</h1>
                <p className="text-[15px] tracking-wide leading-6">Node.js Backend Developer 
                A skilled Node.js Back-end Developer experienced in building robust and scalable server-side applications. Proficient in JavaScript, Node.js frameworks (e.g., Express), and database technologies. Focused on delivering clean, efficient, and well-documented code for optimal performance.
                </p>
            </div>

            {/* Mongodb database developar */}
            <div className='expertices px-5 py-5 space-y-2 shadow-md flex flex-col justify-center items-center text-center border-t-1  border-b-1'>
            <DiMongodb className="text-4xl shadow-2xl bg-green-500 animate-pulse text-white rounded-full w-9 p-2 h-9" />

                <h1 className="text-2xl font-bold  tracking-wider">
                    MongoDB Database Expert
                </h1>
                <p className="text-[15px] tracking-wide leading-6">
                
                A skilled MongoDB Database Expert proficient in designing, implementing, and managing MongoDB deployments.  Experienced with data modeling, query optimization, and performance tuning for NoSQL databases.  Focused on ensuring data integrity, availability, and security within MongoDB environments.
                    </p>
            </div>
        </div>
      
     
     </div>
  )
}

export default Expertise