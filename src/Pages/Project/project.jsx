import React from 'react'
import 'animate.css'; 

import project1 from '../../assets/images/project1.jpg'
import project2 from '../../assets/images/project2.jpg'
import project3 from '../../assets/images/project3.jpg'
import project4 from '../../assets/images/project4.jpg'
import project5 from '../../assets/images/project5.jpg'
import project6 from '../../assets/images/project6.jpg'

const project = () => {
  return (
    <div className='mx-auto container lg:px-24 px-3 py-16'>
        <div>
            <h1 className='text-center text-2xl font-semibold mb-5'>Portfolio</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-2'>
                {/* portfolio1 */}
                <div className='shadow-2xl'>
                    <img src={project1} alt="" />
                </div>

                {/* portfolio1 */}
                <div className='shadow-2xl'>
                    <img src={project2} alt="" />
                </div>

                {/* portfolio1 */}
                <div className='shadow-2xl'>
                    <img src={project3} alt="" />
                </div>
                {/* portfolio1 */}
                <div className='shadow-2xl'>
                    <img src={project4} alt="" />
                </div>
                {/* portfolio1 */}
                <div className='shadow-2xl'>
                    <img src={project5} alt="" />
                </div>
                {/* portfolio1 */}
                <div className='shadow-2xl'>
                    <img src={project6} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default project