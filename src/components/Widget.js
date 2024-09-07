import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Widget.css'; // Import the CSS file for transitions

const tabs = ['About Me', 'Experiences', 'Recommended'];

function Widget() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="h-[300px] bg-gray-800 shadow-md rounded-xl py-4 px-10">
      <div className="flex justify-between mb-4 bg-black rounded-full">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`flex-1 py-2 px-6 transition-all duration-300 ${activeTab === tab ? 'bg-gray-800 text-white rounded-full m-2' : 'bg-black text-gray-400 m-2'}`}
            onClick={() => setActiveTab(tab)}
          >
            <CSSTransition
              in={activeTab === tab}
              timeout={300}
              classNames="tab"
            >
              <span>{tab}</span>
            </CSSTransition>
          </button>
        ))}
      </div>
      <div>
        {activeTab === 'About Me' && <div>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</div>}
        {activeTab === 'Experiences' && <div>Experiences Content</div>}
        {activeTab === 'Recommended' && <div>Recommended Content</div>}
      </div>
    </div>
  );
}

export default Widget;
