import React from 'react'
import Biography from '../../Components/Biography/Biography'
import Education from '../../Components/Education/Education'

const Expertise = () => {
  return (
    <div className='container mx-auto lg:px-24'>
<div className="tabs tabs-border justify-center">

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Biography" />
  <div className="tab-content  shadow-2xl  bg-[#0f172a00] p-10">
    {/* Biography */}
    <Biography/>
    </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Education" defaultChecked />
  <div className="tab-content  shadow-2xl  bg-[#0f172a00] p-10">
    {/* Education */}

    <Education/>
    </div>

  <input type="radio" name="my_tabs_2" className="tab text-xl font-semibold" aria-label="Skills" />
  <div className="tab-content shadow-2xl  bg-[#0f172a00] p-10">
   {/* Skills */}
    </div>
</div>
    </div>
  )
}

export default Expertise