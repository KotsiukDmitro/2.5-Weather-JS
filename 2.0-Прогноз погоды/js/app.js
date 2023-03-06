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

                document.querySelector('#day-1 .day').textContent = getWeekDay(response.list[1].dt_txt)
                document.querySelector('#day-1 .icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${response.list[1].weather[0]['icon']}@2x.png">`
                document.querySelector('#day-1 .description').textContent = response.list[1].weather[0].description
                document.querySelector('#day-1 .temp-max').innerHTML = Math.round(response.list[1].main.temp_max - 273) + '&degC'
                document.querySelector('#day-1 .temp-min').innerHTML = Math.round(response.list[1].main.temp_min - 273) + '&degC'

                document.querySelector('#day-2 .day').textContent = getWeekDay(response.list[2].dt_txt)
                document.querySelector('#day-2 .icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${response.list[1].weather[0]['icon']}@2x.png">`
                document.querySelector('#day-2 .description').textContent = response.list[2].weather[0].description
                document.querySelector('#day-2 .temp-max').innerHTML = Math.round(response.list[2].main.temp_max - 273) + '&degC'
                document.querySelector('#day-2 .temp-min').innerHTML = Math.round(response.list[2].main.temp_min - 273) + '&degC'

                document.querySelector('#day-3 .day').textContent = getWeekDay(response.list[3].dt_txt)
                document.querySelector('#day-3 .icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${response.list[1].weather[0]['icon']}@2x.png">`
                document.querySelector('#day-3 .description').textContent = response.list[3].weather[0].description
                document.querySelector('#day-3 .temp-max').innerHTML = Math.round(response.list[3].main.temp_max - 273) + '&degC'
                document.querySelector('#day-3 .temp-min').innerHTML = Math.round(response.list[3].main.temp_min - 273) + '&degC'

                document.querySelector('#day-4 .day').textContent = getWeekDay(response.list[4].dt_txt)
                document.querySelector('#day-4 .icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${response.list[1].weather[0]['icon']}@2x.png">`
                document.querySelector('#day-4 .description').textContent = response.list[4].weather[0].description
                document.querySelector('#day-4 .temp-max').innerHTML = Math.round(response.list[4].main.temp_max - 273) + '&degC'
                document.querySelector('#day-4 .temp-min').innerHTML = Math.round(response.list[4].main.temp_min - 273) + '&degC'

                document.querySelector('#day-5 .day').textContent = getWeekDay(response.list[5].dt_txt)
                document.querySelector('#day-5 .icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${response.list[1].weather[0]['icon']}@2x.png">`
                document.querySelector('#day-5 .description').textContent = response.list[5].weather[0].description
                document.querySelector('#day-5 .temp-max').innerHTML = Math.round(response.list[5].main.temp_max - 273) + '&degC'
                document.querySelector('#day-5 .temp-min').innerHTML = Math.round(response.list[5].main.temp_min - 273) + '&degC'
            })
            .catch(err => console.error(err))
    })
})

function getWeekDay(date) {
    //console.log(date)
    date = new Date(date)
    let days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sut']
    let day = date.getDay()
    return days[day]
}

let result = response.list[1 - 40].dt_txt.filter(function (elem) {

    elem === response.list[1 - 40].dt_txt('12:00:00')
    console.log(elem)
    return elem
})




