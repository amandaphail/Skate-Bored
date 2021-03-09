// https://data.cityofnewyork.us/resource/8knb-zsb6.json


const locationDD = document.querySelector('.location')
const option = document.querySelector('option')


async function getSkateParks(){

    try{
        const response = await axios.get('https://data.cityofnewyork.us/resource/8knb-zsb6.json')

        console.log(response)
        // console.log(response.data[0].borough)

        setLocation(response.data)
        setFeature(response.data)
                                  

    } catch(err){
        console.log(err)
        console.log(err.message)
    }
}

getSkateParks()



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

function setFeature(data){
    for (i = 0; i < data.length; i++){
        let feature = data[i].features_2
        let name = feature
        let featOption = option.value
        // console.log(borough)
        if (feature.includes(featOption)){
            console.log(name)
        }
     }
}


// function removeResults (){

//     // while we have first child (aka parent isnt empty) - remove first child
//     while(picContainer.firstChild){
//         picContainer.removeChild(picContainer.firstChild)
//     }
// }

