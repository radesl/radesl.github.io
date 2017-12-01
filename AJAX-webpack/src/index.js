import './style.scss'

const getDataFromAPI = ((urlEnding) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == '4' && (xhr.status >= 200 || xhr.status < 300)) {
                const data = JSON.parse(xhr.responseText)
                resolve(data)
            }
        }
        xhr.open('POST', `http://api.wunderground.com/api/4af47e77859b009e/conditions/q/CA/${urlEnding}.json`, true)
        xhr.send()
    })
})

const parseDataFromAPI = ((data) => {
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
})

const createElementForSite = (() => {
    const mainDiv = document.querySelector('.wrapper')
    return ((city, temperature, icon) => {
        const weather = document.createElement('div')
        weather.classList.add('weather-city')
        weather.innerHTML = `
            <p>${city}</p>
            <p>${temperature}</p>
            <img src='${icon}' />
        `
        mainDiv.appendChild(weather)
    })
})()

const showElementOnSite = ((urlEnding) => {
    getDataFromAPI(urlEnding)
        .then((data) => {
            const {
                city,
                temperature,
                icon
            } = parseDataFromAPI(data)
            createElementForSite(city, temperature, icon)

        })
        .catch((error) => {
            console.log('error', error)
        })
})

const main = ((...rest) => {
    rest.forEach((item) => showElementOnSite(item))
})

main('San_Francisco', 'Washington', 'Los_Angeles')