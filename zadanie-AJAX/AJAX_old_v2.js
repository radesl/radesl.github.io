function fetchData(urlEnding) {
    //Promise
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.onreadystatechange = function() {
            if (this.readyState == 4 && ((this.status >= 200 || this.status < 300) || (this.status == 304))) {
                const data = JSON.parse(this.responseText);
                resolve(data)
            }
        };
        xml.open('POST', `http://api.wunderground.com/api/4af47e77859b009e/conditions/q/CA/${urlEnding}.json`, true);
        xml.send();
    })
}

function parseData(data) {
    //destructing
    const {
        current_observation: {
            feelslike_c,
            icon_url,
            display_location: {
                city
            }
        }
    } = data

    return {
        //JSON
        temperature: feelslike_c,
        icon: icon_url,
        city
    }
}

//closure
const presentData = (() => {
    const mainWrapper = document.querySelector('.wrapper')
    return (city, icon, temperature) => {
        const wrappingDiv = document.createElement('div')
        wrappingDiv.classList.add('weatherWrapper')
            //template string
        wrappingDiv.innerHTML = `
            <p>${city}</p>
            <img src='${icon}'/>
            <p>${temperature}</p>
        `
        mainWrapper.appendChild(wrappingDiv)
    }
})()

function fetchAndShow(urlEnding) {
    //Promise
    fetchData(urlEnding)
        .then((data) => {
            //destruction
            const {
                temperature,
                icon,
                city
            } = parseData(data);
            presentData(city, icon, temperature)
        })
        .catch((error) => {
            console.log('error', error)
        })
}

const main = () => {
    const inputData = [
        'San_Francisco',
        'Washington',
        'Los_Angeles'
    ];
    inputData.forEach((link) => fetchAndShow(link))
}

main();