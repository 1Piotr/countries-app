import { useState} from 'react'


const MyDropdown = ({countries, HandleFilterState, darkMode}) =>{
    const [selectedOption, setSelectedOption] = useState(null);
    const [isVisible, setIsvisible] = useState(false)
    const [regionFilter, setRegionfilter] = useState('')

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const visible = isVisible ? 'block' : 'none'
    const show = {
        display:visible
    }
    const showRegions = () => {

        setIsvisible(!isVisible)
    }
    const HandleRegionFilter = ( event) => {
        
        if (selectedOption === event.target.value) {
            // If the selected option is already the clicked option, uncheck it
            setSelectedOption(null);
          } else {
            // Otherwise, select the clicked option
            setSelectedOption(event.target.value);
          }
        const filterRegion = regionFilter.match(event.target.value) ? '': event.target.value
        
        setRegionfilter(filterRegion)
        HandleFilterState(countries.filter(country=> country.region.match(filterRegion)))
    }
    
 
    
    return (
        <div className='myDropdown'>
            <button className={darkMode ? ' element dark' : 'element light'} onClick={showRegions}>Filter by region <span style={{float:'right'}}>
                {isVisible ? <span><strong>&#8743;</strong></span> : <span><strong>&#8744;</strong></span>}</span></button>
            <form   className={darkMode ? 'element dark' : 'element light'} style = {show}>
            {regions.map(region => (
          <label key={region}>
            <input type="checkbox"
              value={region}
              checked={selectedOption === region}
              onChange={HandleRegionFilter}
            />
            {region}
          </label>
        ))}
                
            </form>
        </div>
    )

}

  
    

export default MyDropdown