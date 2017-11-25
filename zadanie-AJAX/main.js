function getDataFromAPI(urlEnd) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && (xhr.status >= 200 || xhr.status < 300)) {
                const data = JSON.parse(xhr.responseText)
                resolve(data)
            }
        }
        xhr.open('POST', `http://api.wunderground.com/api/4af47e77859b009e/conditions/q/CA/${urlEnd}.json`, true)
        xhr.send()
    })
}

function parseDataFromAPI(data) {
    const {
        current_observation: {
            display_location: {
                city
            },
            feelslike_c,
            icon_url
        }
    } = data

    return {
        city,
        temperature: feelslike_c,
        icon: icon_url
    }
}

const CreateWeatherForSite = (() => {
    const mainDiv = document.querySelector('.wrapper')
    return (city, temperature, icon) => {
        const weatherWrapper = document.createElement('div')
        weatherWrapper.classList.add('weather')
        weatherWrapper.innerHTML =
            `
        <p>${city}</p>
        <p>${temperature}</p>
        <img src = ${icon} />
        `
        mainDiv.appendChild(weatherWrapper)
    }
})()

function ShowDataOnSite(urlEnd) {
    getDataFromAPI(urlEnd)
        .then((data) => {
            const {
                city,
                temperature,
                icon
            } = parseDataFromAPI(data)
            CreateWeatherForSite(city, temperature, icon)
        })
        .catch((error) => {
            console.log('error', error)
        })
}

function main(...rest) {
    rest.map((item) => ShowDataOnSite(item))
}

main('Los_Angeles', 'Washington', 'San_Francisco')