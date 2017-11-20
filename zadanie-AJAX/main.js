function getWeather(site, city) {
    //jeśli urzywamy ie musimy ręcznie stworzyć obiekt XMLHttpRequest
    if (typeof XMLHttpRequest == 'undefined') {
        XMLHttpRequest = function() {
            //aby stworzyć obiekt musimy urzyć biblioteki ActiveX
            return new ActiveXObject(
                //IE5 urzywa innego obiektu XMLHTTP niż ie6 i wyrzsze
                navigator.userAgent.indexOf('MSIE 5') >= 0 ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP"
            );
        }
    }

    const xml = new XMLHttpRequest();
    xml.open('POST', site, true);
    //jeżeli stan dokumentu został zmieniony
    xml.onreadystatechange = function() {
        //status z przedziału 200 do 300 oznacza prawidłowo zwrócone dane
        //przy wartości 4 dane są gotowe do urzycia
        if (this.readyState == 4 && (this.status >= 200 && this.status < 300) ||
            //status 304 oznacza dane takie same jak w pamięci cache
            (this.status == 304) ||
            //w razie niezmienionych danych przeglądarka safari zwraca pusty ciąg znaków
            (navigator.userAgent.indexOf('Safari') >= 0 && typeof this.status == 'undefined')) {
            const data = JSON.parse(this.responseText);
            console.log(data);
            let node = document.createElement('div');
            node.classList.add('main-div');
            node.classList.add(city);
            document.querySelector('.wrapper').appendChild(node);

            let nodeCityName = document.createElement('div');
            nodeCityName.classList.add('main-localization');
            nodeCityName.classList.add('sub-' + city);
            document.querySelector('.' + city).appendChild(nodeCityName);
            document.querySelector('.sub-' + city).textContent = data['current_observation']['display_location']['full'];

            let nodeTemperature = document.createElement('div');
            nodeTemperature.classList.add('style-temperature');
            nodeTemperature.classList.add('temperature-' + city);
            document.querySelector('.' + city).appendChild(nodeTemperature);
            document.querySelector('.temperature-' + city).textContent = data['current_observation']['temp_c'] + 'C';

            let nodeWeather = document.createElement('div');
            nodeWeather.classList.add('weather-style');
            nodeWeather.classList.add('weather-' + city);
            document.querySelector('.' + city).appendChild(nodeWeather);
            document.querySelector('.weather-' + city).textContent = data['current_observation']['weather'];
            let weatherImage = document.createElement('img');
            weatherImage.src = data['current_observation']['icon_url'];
            document.querySelector('.weather-' + city).textContent = data['current_observation']['weather'];
            document.querySelector('.weather-' + city).appendChild(weatherImage);


        }
        //xml.ResponseXML zawiera zwrócony dokument xml
        //xml.responseTEXT zawiera zwrócony text
        //czyścimy obiekt dla zwolnienia pamięci
        xml == null;
    };
    xml.send();
}

getWeather('http://api.wunderground.com/api/4af47e77859b009e/conditions/q/CA/San_Francisco.json', 'San-Francisco');
getWeather('http://api.wunderground.com/api/4af47e77859b009e/conditions/q/CA/Washington.json', 'Washington');
getWeather('http://api.wunderground.com/api/4af47e77859b009e/conditions/q/CA/Los_Angeles.json', 'Los-Angeles');