function getData1() {
    var req = new XMLHttpRequest()
    req.open("GET", "https://restcountries.com/v3.1/name/india")
    req.send()

    req.addEventListener('load', function () {
        var [data] = JSON.parse(this.responseText)
        console.log(data);
        document.getElementById('name').innerHTML = data.name.official
        document.getElementById('capital').innerHTML = data.capital
        document.getElementById('borders').innerHTML = data.borders
        document.getElementById('flags').src = data.flags.svg
        document.getElementById('population').innerHTML = data.population
        document.getElementById('region').innerHTML = data.region
        document.getElementById('timezones').innerHTML = data.timezones
        document.getElementById('subregion').innerHTML = data.subregion
       
    })
}
getData1()

function getData2() {
    var cname = document.getElementById("cname").value
    var req = new XMLHttpRequest()
    req.open("GET", "https://restcountries.com/v3.1/name/" + cname)
    req.send()

    req.addEventListener('load', function () {
        var [data] = JSON.parse(this.responseText)
        console.log(data);
        document.getElementById('name').innerHTML = data.name.official
        document.getElementById('capital').innerHTML = data.capital
        document.getElementById('borders').innerHTML = data.borders
        document.getElementById('flags').src = data.flags.svg
        document.getElementById('population').innerHTML = data.population
        document.getElementById('region').innerHTML = data.region
        document.getElementById('timezones').innerHTML = data.timezones[0]
        document.getElementById('subregion').innerHTML = data.subregion
      
    })
}
getData2()