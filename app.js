let tblCountries = document.getElementById("tbl-countries");
let tblSearchedCountries = document.getElementById("tbl-countries-searched");

let tblBody = `<tr>
                    <th style="background-color: black;">#</th>
                    <th style="background-color: black;">Countries</th>
                    <th style="background-color: black;">Flags</th>
                    <th style="background-color: black;">Capital</th>
                </tr>`;

let tblBody2 = ``;

fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            tblBody += `<tr>
                        <td>•</td>
                        <td style="display: flex; flex-direction: column; gap: 2rem;" class="bg-dark">
                            <div class="fs-2" style="font-family: 'Varela Round', sans-serif;">
                                ${element.name.common}
                            </div>
                            <div class="fs-6 mainCell" style="font-family: 'Varela Round', sans-serif;">
                                <A>Official Name : ${element.name.official}</A>
                                <b>Area          : ${element.area}</b>
                                <c>Capital : ${element.capital}</c>
                                <d><button type="button" class="btn btn-primary" href="${element.maps.openStreetMaps}">Visit on Maps</button></d>
                            </div>
                        </td>
                        <td><img style="border-radius: 10px; scale: 0.7" src="${element.flags.png}"></td>
                        <td>${element.capital}</td>
                    </tr>`

            tblCountries.innerHTML = tblBody
        });
    })

function app() {
    let searchedName = document.getElementById('searchedName').value

    // fetch("https://restcountries.com/v3.1/name/" + searchedName)
    //     .then(res => res.json())
    //     .then(data => {
    //         data.forEach(element => {
    //             document.getElementById('cardImg').src = element.flags.png;
    //             document.getElementById('countryName').innerText = element.name.common
    //             document.getElementById('li-1').innerText = "Offical Name : " + element.name.official
    //             document.getElementById('li-2').innerText = "Population : " + element.population
    //             document.getElementById('li-3').innerText = "Continents : " + element.continents
    //         })
    //     })

    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        let count = 0;
        data.forEach(element => {
            if (element.name.common == searchedName) {
                count =+ 1;
            }
        })
        
        if (count == 0) {
            alert("Your Search Result is Negetive")
        }
    })

    fetch("https://restcountries.com/v3.1/name/" + searchedName)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                tblBody2 = `
                    <tr>
                        <td style="font-family: 'Varela Round', sans-serif;">Search Results about ${element.name.common}</td>
                    </tr>
                    
                    <tr>
                        <td>•</td>
                        <td style="display: flex; flex-direction: column; gap: 2rem;">
                            <div class="fs-2" style="font-family: 'Varela Round', sans-serif;">
                                ${element.name.common}
                            </div>
                            <div class="fs-6 mainCell" style="font-family: 'Varela Round', sans-serif;">
                                <A>Official Name : ${element.name.official}</A>
                                <b>Area          : ${element.area}</b>
                                <c>Capital : ${element.capital}</c>
                                <d><button type="button" class="btn btn-primary">Visit on Maps</button></d>
                            </div>
                        </td>
                        <td><img style="border-radius: 10px; scale: 0.7" src="${element.flags.png}"></td>
                        <td>${element.capital}</td>
                    </tr>`

                tblSearchedCountries.innerHTML = tblBody2
            });
        })
}