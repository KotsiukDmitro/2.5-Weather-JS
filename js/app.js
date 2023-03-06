document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn').addEventListener('click', function (event) {
        event.preventDefault()
        const city = document.querySelector('#search-city').value

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ea2e638e299558709181a842b8507203`)
            .then(response => response.json())
            .then(response => {
                document.querySelector('#temperature').innerHTML = Math.round(response.list[0].main.temp - 273) + '&degC'
                document.querySelector('#region').textContent = response.city.country + ',' + response.city.name
                document.querySelector('#description').textContent = response.list[0].weather[0].description
                document.querySelector('#icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${response.list[0].weather[0]['icon']}@2x.png">`

                const forecast = response.list.filter(elem => {
                    const date = new Date(elem.dt_txt)
                    return date.toDateString() !== new Date().toDateString() && date.getHours() === 12
                }).slice(0, 5)

                forecast.forEach((dayForecast, index) => {
                    const targetId = `#day-${index + 1}`
                    document.querySelector(`${targetId} .day`).textContent = getWeekDay(dayForecast.dt_txt)
                    const img = `<img src="https://openweathermap.org/img/wn/${dayForecast.weather[0].icon}@2x.png">`
                    document.querySelector(`${targetId} .icon`).innerHTML = img
                    document.querySelector(`${targetId} .description`).textContent = dayForecast.description
                    const maxTemp = Math.round(dayForecast.main.temp_max - 273) + '&degC'
                    document.querySelector(`${targetId} .temp-max`).innerHTML = maxTemp
                    const minTemp = Math.round(dayForecast.main.temp_min - 273) + '&degC'
                    document.querySelector(`${targetId} .temp-min`).innerHTML = minTemp
                })
            })
            .catch(err => console.error(err))
    })
})
function getWeekDay(date) {
    date = new Date(date)
    let days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sut']
    let day = date.getDay()
    return days[day]
}




