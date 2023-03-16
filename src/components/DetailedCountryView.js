import { useEffect, useState} from "react"


const DetailedCountryView = ({countries, countryCode, HandleCountryView, darkMode}) => {
    const[clickedCountry,setClickedCountry] = useState({})
    const[code,setcountryCode] = useState(countryCode)
    useEffect(() => {
        const currentCountry = countries.filter(country => country.cca3 === code)[0]
        setClickedCountry(currentCountry)
        console.log(Object.values(currentCountry.name.nativeName)[0].official)
        console.log(Object.values(currentCountry.currencies).map(currency=>currency.name).join(', '))
    },[code])
    const Back= () => {
        HandleCountryView([])
        console.log('fron')

    }
    const changeCountry = (event) => {
        console.log(event.target.value)
        setcountryCode(event.target.value)
    }
    
    return (
        
        <div className="detailedView">{Object.keys(clickedCountry).length > 0 &&
            <div className="view">
                <div>
                    <button className={darkMode ? 'back element dark' : ' back element light'} onClick={Back}>
                    <span>&larr;</span> <span style={{fontWeight:'300'}}>Back</span></button>
                </div>
                <div className="countryDetail" style={{display:'flex'}}>   
                    <div style={{display:'flex'}}>
                        <img src={clickedCountry.flags.png} alt={clickedCountry.flags.alt}></img>
                    </div>
                    <div className="rightView" style={{display:'flex'}}>
                        <div className="countryName">
                            <h2>{clickedCountry.name.official}</h2>
                        </div>
                        <div className="rightDetails" style={{display:'flex',justifyContent:'space-between', width:'100%'}}>
                            <div className="details" style={{}}>                    
                                <p><span>Native name: </span>{Object.values(clickedCountry.name.nativeName)[0].common}</p>
                                <p><span>Population: </span>{clickedCountry.population}</p>
                                <p><span>Region: </span>{clickedCountry.region}</p>
                                <p><span>Subregion: </span>{clickedCountry.subregion}</p>
                                <p><span>Capital: </span>{clickedCountry.capital.join()}</p>
                            </div>
                            <div className="details">
                                <p><span>Top Level Domain: </span>{clickedCountry.tld}</p>
                                <p><span>Currencies: </span>{Object.values(clickedCountry.currencies).map(currency=>currency.name).join(', ')}</p>
                                <p><span>Languages: </span>{Object.values(clickedCountry.languages).join(', ')}</p>
                            </div>
                        </div>
                        <div className="borderCountries">
                            <p><span>Border Countries: </span></p>{clickedCountry.borders ?
                            countries.filter(country =>clickedCountry.borders.includes(country.cca3)).
                            map(country=>
                            <button className={darkMode ? 'countryButton element dark' : 'countryButton element light'}
                            onClick={changeCountry} value={country.cca3} key={country.cca3}>{country.name.common}</button>):
                            ' No border countries'}
                        </div>
                    </div>
                </div>
            </div>}            
        </div>
       
    )
}

export default DetailedCountryView