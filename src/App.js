import { useEffect, useState} from 'react';
import './App.css';
import MyDropdown from './components/MyDropdown'
import MyModeToggle from './components/MyModeToggle'
import BasicCountryView from './components/BasicCountryView'
import MySearch from './components/MySearch';
import DetailedCountryView from './components/DetailedCountryView';
const App = () => {
  
  const [darkMode, setDarkmode] = useState(false)
  const [singleCountryView, setsingleCountryView] = useState(false)
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [searchedCountries, setSearchedCountries] = useState([])
  const [countryCode, setCountryCode] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data =>{
      console.log(data[0])
      setCountries(data)
      setSearchedCountries(data)
      setFilteredCountries(data)})
  },[])
  
  const HandleCountryView= (countryCode) => {
    setsingleCountryView(!singleCountryView)
    setCountryCode(countryCode)
    setSearchedCountries(countries)

  }
  
  const HandleCountrySearch= (countriesSearched) => {
    setSearchedCountries(countriesSearched)

  }
  const HandleFilterState = (regionCountries) => {
    setFilteredCountries(regionCountries)
    setSearchedCountries(regionCountries)
  }
  const HandleDarkmodeState = (currentMode) =>{
    setDarkmode(currentMode)
  }
  
  return (
    <div className={darkMode ? 'app backgroundDark' : 'app backgroundLight'}>
      <MyModeToggle HandleDarkmodeState ={HandleDarkmodeState}/>
      {singleCountryView ? <DetailedCountryView  darkMode={darkMode} countries={countries} countryCode={countryCode}
      HandleCountryView={HandleCountryView}/> :
      <main className={darkMode ? 'backgroundDark' : 'backgroundLight'}>
        <div className= 'filter' >
        <MySearch HandleCountrySearch={HandleCountrySearch} darkMode={darkMode} filteredCountries={filteredCountries}/>
        <MyDropdown countries={countries} darkMode={darkMode} HandleFilterState={HandleFilterState}/>  
        </div> 
        <ul >
            { searchedCountries.map(country =>
          <BasicCountryView HandleCountryView={HandleCountryView}key={country.cca3}
            country={country} darkMode={darkMode}/>)}
        </ul>
      </main>
  }
    </div>
    )
  }


export default App;
