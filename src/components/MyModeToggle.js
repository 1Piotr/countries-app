import { useState} from 'react'


const MyModeToggle = ({HandleDarkmodeState} ) => {
    
    const [darkMode, setDarkmode] = useState(false)

    const handleMode = () => {
        setDarkmode(!darkMode)
        HandleDarkmodeState(!darkMode)
        
    }
   
    
    
    return (
        <div className={darkMode ? 'myToggle element dark' : 'myToggle element light'}>
            <h3>Where in the World</h3>
            <div  onClick={handleMode}>
            {darkMode ? <><span >&#x263C;</span> Light Mode</>:
            <><span>&#9790;</span> Dark Mode</>}
            </div>
        </div>
    )
}

export default MyModeToggle