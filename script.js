// https://data.cityofnewyork.us/resource/8knb-zsb6.json


let locationDD = document.querySelector('.location')


async function getSkates(){

    try{
        const response = await axios.get('https://data.cityofnewyork.us/resource/8knb-zsb6.json')

        console.log(response)
        console.log(response.data[0].borough)

        let parkBorough = response.data[i].borough
        console.log(parkBorough)

    } catch(err){
        console.log(err)
        console.log(err.message)
    }
}

getSkates()

function setLocationValues(location){
    location.forEach((borough) => {
        let option = document.createElement('option')
        option.value = borough
        option.textContent = borough
        locationDD.appendChild(borough)
    })
}

setLocationValues(3)