// https://data.cityofnewyork.us/resource/8knb-zsb6.json


const locationDD = document.querySelector('.location')
const option = document.querySelector('option')


async function getSkates(){

    try{
        const response = await axios.get('https://data.cityofnewyork.us/resource/8knb-zsb6.json')

        console.log(response)
        // console.log(response.data[0].borough)

        setLocation(response.data)
                                  

    } catch(err){
        console.log(err)
        console.log(err.message)
    }
}

getSkates()



function setLocation (data){        
    // let data = response.data
    
    for (i = 0; i < data.length; i++){
        let borough = data[i].borough
        let name = data[i].name
        let locOption = option.value
        // console.log(borough)
        if (borough.includes(locOption)){
            console.log(name)
        }
     }
    }


// function setLocationValues(location){
//     location.forEach((borough) => {
//         let option = document.createElement('option')
//         option.value = borough
//         option.textContent = borough
//         locationDD.appendChild(borough)
//     })
// }

