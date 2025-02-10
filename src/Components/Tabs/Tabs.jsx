import React from 'react'
import Biography from './../Biography/Biography';
import Education from './../Education/Education';
import Skills from '../Skills/Skills';

const Tabs = () => {
  return (
    <div className='py-12'>
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center gap-8">
        <input type="radio" name="my_tabs_5" className="tab" aria-label="Biography" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Biography/>
        </div>

        <input type="radio" name="my_tabs_5" className="tab" aria-label="Education" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Education/>
        </div>

        <input type="radio" name="my_tabs_5" className="tab" aria-label="Skills" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Skills/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Tabs