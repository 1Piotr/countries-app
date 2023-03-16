

const BasicCountryView = ({country, darkMode, HandleCountryView}) => {

    const HandleCountryCode = (country) => {
        console.log(country.cca3)
        HandleCountryView(country.cca3)
    }
    
    return (
        <li onClick={()=>HandleCountryCode(country)} className={darkMode ? 'basicCountryView element dark' : 'basicCountryView element light'}>
            <img src={country.flags.png} alt={`${country.name.official} flag`}/>
            <h3>{country.name.official}</h3>
            <p><strong>Population: </strong>{country.population}</p>
            <p><strong>Region: </strong>{country.region}</p>
            <p><strong>Capital: </strong>{country.capital}</p>

        </li>
    )
}

export default BasicCountryView