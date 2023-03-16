import { useEffect, useState } from "react";


const MySearch = ({darkMode,filteredCountries, HandleCountrySearch}) => {

    const [countrySearch,setCountrySearch] =useState('')
    
    
    const handleSearch = (event)=> {

        setCountrySearch()
        HandleCountrySearch(filteredCountries.filter(country => country.name.official.toLowerCase().includes(`${event.target.value}`)))
      
    }
   
    return (
        <div className={darkMode ? 'mySearch element dark' : 'mySearch element light'}>
            <button ><span className='searchIcon'>&#9906;</span></button>
            <input className={darkMode ? 'element dark' : 'element light'} type="text" autoFocus="false"
             placeholder="Search for a country..." onChange={handleSearch}></input>
        </div>

    )
    
}

export default MySearch