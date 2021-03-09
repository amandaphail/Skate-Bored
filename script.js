// https://data.cityofnewyork.us/resource/8knb-zsb6.json


const locationDD = document.querySelector('.location')
const featuresDD =document.querySelector('.features')
// const option = document.querySelector('option')
const searchResults = document.querySelector('#sr-main')
const form = document.querySelector('.form')

async function getSkateParks(){

    try{
        const response = await axios.get('https://data.cityofnewyork.us/resource/8knb-zsb6.json')

        console.log(response)
        // console.log(response.data[0].borough)
        
        if (locationDD.value !== "null"){
            setLocation(response.data)
        } else {
            removeResults()
            console.log("location null")
        }
        
        if(featuresDD.value !== "null"){
            setFeature(response.data)
        } else {
            removeResults()
            console.log("features null")
        }
        
                                  

    } catch(err){
        console.log(err)
        console.log(err.message)
    }
}





function setLocation (data){        
    
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
        let feature1 = data[i].features_1
        let feature2 = data[i].features_2
        let feature3 = data[i].features_3
        let name = data[i].name
        let featOption = featuresDD.value
        // console.log(borough)
        
        if(locationDD.value === "null" && (feature1.includes(featOption) || feature2.includes(featOption) || feature3.includes(featOption))){
            console.log("location null and feature selected")
            getFeatures(name)
            console.log(data[i].borough)

        }

        // if (feature1.includes(featOption) || feature2.includes(featOption) || feature3.includes(featOption)){
        //     getFeatures(name)
        //     console.log(data[i].borough)
        // }

     }
}



function getLocation(event){
    console.log(event)
    
    displayLocation(event)
}

function getFeatures(event){
    console.log(event)
    
    displayFeatures(event)
}

locationDD.addEventListener('change', getSkateParks)
featuresDD.addEventListener('change', getSkateParks)

// document.getElementById("homepage-form").onsubmit = function() {myFunction()};

form.onsubmit = function submit(){
    return false;
    //keeps page from refreshing when hit submit
}
// https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit 
// https://www.w3schools.com/jsref/event_onsubmit.asp




function displayLocation(location){

    let result = document.createElement('p')
    result.innerText = location
    result.classList.add('result')
    searchResults.appendChild(result)

}

function displayFeatures(feature){
    let result = document.createElement('p')
    result.innerText = feature
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