// https://data.cityofnewyork.us/resource/8knb-zsb6.json


const locationDD = document.querySelector('.location')
const featuresDD =document.querySelector('.features')
// const option = document.querySelector('option')
const searchResults = document.querySelector('#sr-main')

async function getSkateParks(){

    try{
        const response = await axios.get('https://data.cityofnewyork.us/resource/8knb-zsb6.json')

        console.log(response)
        // console.log(response.data[0].borough)
        
        if (locationDD.value !== "null"){
        setLocation(response.data)
        } else {
            console.log("location null")
        }

        //setFeature(response.data)
                                  

    } catch(err){
        console.log(err)
        console.log(err.message)
    }
}

// getSkateParks()



function setLocation (data){        
    // let data = response.data
    removeResults()
    for (i = 0; i < data.length; i++){
        let borough = data[i].borough
        let name = data[i].name
        let locOption = locationDD.value
        
        if (borough.includes(locOption)){
            // console.log(name)
            getLocation(name)
        }
     }
}

function setFeature(data){
    for (i = 0; i < data.length; i++){
        let feature = data[i].features_2
        let name = feature
        let featOption = locationDD.value
        // console.log(borough)
        if (feature.includes(featOption)){
            console.log(name)
        }
     }
}



function getLocation(event){
    console.log(event)
    
    displayLocation(event)
}


locationDD.addEventListener('change', getSkateParks)
featuresDD.addEventListener('change', getSkateParks)



function displayLocation(location){

    let result = document.createElement('p')
    result.innerText = location
    result.classList.add('result')
    searchResults.appendChild(result)

}



function removeResults (){

    // while we have first child (aka parent isnt empty) - remove first child
    while(searchResults.firstChild){
        searchResults.removeChild(searchResults.firstChild)
    }
}



//random park generate - math methods?