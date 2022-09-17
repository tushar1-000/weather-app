import axios from "axios";
const apiKey = "97380c917c2e953560d960ace0a06e0a"


const Form = ({ cityChanged ,  dataChanged  ,  inputCity}) =>{
    const getWeatherDetails = (cityName) => {
        if (!cityName) return
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
        axios.get(apiURL).then((res) => {
          console.log("response", res.data)
          dataChanged(res.data)
        }).catch((err) => {
          alert('WRONG CITY INPUT')
          console.log("err", err)
        })
      }
      
    return (
        <div className="d-grid gap-3 col-4 mt-4">
            <input type="text" className="form-control" value={inputCity} onChange = { (e) => cityChanged(e.target.value)}></input>
            <button className="btn btn-primary" type="buttorn" onClick={()=>getWeatherDetails(inputCity)}>Search</button>
        </div>
    )
}




export default Form;