let api_key = typeof API_KEY !== 'undefined' ? API_KEY : ''
let difKelvin = 273.15
let urlBase = 'http://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const city = document.getElementById('ciudadEntrada').value
    if (city) {
        fetchDatosClima(city)
    }
})

function fetchDatosClima(city) {
    fetch(`${urlBase}?q=${city}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    // console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad = data.main.humidity
    const icono = data.weather[0].icon


    const urlIcono = 'https://openweathermap.org/img/wn/{icon_code}@2x.png'
    // Crear elementos para los atributos que se mostrarán
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C`

    const humedadInfo = document.createElement('h3')
    humedadInfo.textContent = `Humedad 👉 ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `Descripción meteorológica es: ${descripcion}`


    // Agregando al DIV que mostrará la información. El orden de cómo lo pongas ojo
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(humedadInfo)
}


