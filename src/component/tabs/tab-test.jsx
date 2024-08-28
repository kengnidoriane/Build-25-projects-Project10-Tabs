import React from 'react'
import Tabs from './tabs'
import './style.css'


function RandomComponent() {
    return <h1>Some random content</h1>
}

export default function TabTest() {

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is content for Tab 1</div>
        },  
        {
            label: 'Tab 2',
            content: <div>This is content for Tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        },
        {
            label: 'Home',
            content: 'this is the home section'
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
        
    }
  return (
    <Tabs tabsContent={tabs} onChange={handleChange}/>
  )
}
