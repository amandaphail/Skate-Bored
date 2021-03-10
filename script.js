// https://data.cityofnewyork.us/resource/8knb-zsb6.json


const locationDD = document.querySelector('.location')
const featuresDD =document.querySelector('.features')
// const option = document.querySelector('option')
const searchResults = document.querySelector('#sr-main')
let submit = document.querySelector(".form")
// let homepage = document.querySelector("#homepage")
let main = document.querySelector('main')
// let srHeader = document.querySelector('#sr-header')


async function getSkateParks(event){
    event.preventDefault()

    try{
        const response = await axios.get('https://data.cityofnewyork.us/resource/8knb-zsb6.json')

        console.log(response)
        // console.log(response.data[0].borough)
        
        // if (locationDD.value === "null" || featuresDD.value === "null"){
        //     removeResults()
        //     console.log("one selector is null")

        // } else 
        if (locationDD.value !== "null" && featuresDD.value === "null"){
            setLocation(response.data)
        } else if(locationDD.value === "null" && featuresDD.value !== "null"){
            setFeature(response.data)
        } else {
            getBoth(response.data)
        }
        
                                  

    } catch(err){
        console.log(err)
        console.log(err.message)
    }
}





function setLocation (data){        
    displaySetUp()
    for (i = 0; i < data.length; i++){
        let borough = data[i].borough
        let name = data[i].name
        let locOption = locationDD.value
        

        if (featuresDD.value === "null" && borough.includes(locOption)){
        // if (borough.includes(locOption)){
            // console.log(name)
            // displayLocation(name)
            displayResults(name)
        } 
        // else {
        //     // getBoth(data)
        // }
     }
}

function setFeature(data){
    
    displaySetUp()
    for (i = 0; i < data.length; i++){
        let feature1 = data[i].features_1
        let feature2 = data[i].features_2
        let feature3 = data[i].features_3
        let name = data[i].name
        let featOption = featuresDD.value
        // console.log(borough)
        
        if(locationDD.value === "null" && (feature1.includes(featOption) || feature2.includes(featOption) || feature3.includes(featOption))){
            // console.log("location null and feature selected")
            // displayFeatures(name)
            displayResults(name)
            console.log(data[i].borough)
        }  
        // else {
        //     //  getBoth(data)
        //  }
        // if (feature1.includes(featOption) || feature2.includes(featOption) || feature3.includes(featOption)){
        //     getFeatures(name)
        //     console.log(data[i].borough)
        // }

     }
}

function getBoth(data){
    
    displaySetUp()
    for(i= 0; i < data.length; i++){
        let borough = data[i].borough
        let locOption = locationDD.value
        let feature1 = data[i].features_1
        let feature2 = data[i].features_2
        let feature3 = data[i].features_3
        let featOption = featuresDD.value
        let name = data[i].name

        if(borough.includes(locOption) && (feature1.includes(featOption) || feature2.includes(featOption) || feature3.includes(featOption))){
            displayResults(name)
            // displayBoth(name)
            // console.log(name)
        }
    }
}

// function getLocation(event){
//     console.log(event)
    
//     displayLocation(event)
// }

// function getFeatures(event){
//     console.log(event)
    
//     displayFeatures(event)
// }

// locationDD.addEventListener('change', getSkateParks)
// featuresDD.addEventListener('change', getSkateParks)





submit.addEventListener('submit', getSkateParks)

// form.onsubmit = function submit(){
//     return false;
    //keeps page from refreshing when hit submit
// }
// https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit 
// https://www.w3schools.com/jsref/event_onsubmit.asp


function displaySetUp(){
    removeResults()
    removeHomePage()
    createResultHeader()
}

function displayResults(value){
    let result = document.createElement('p')
    result.innerText = value
    result.classList.add('result')
    searchResults.appendChild(result)
    console.log(value)
}

// function displayLocation(location){
//     let result = document.createElement('p')
//     result.innerText = location
//     result.classList.add('result')
//     searchResults.appendChild(result)
//     console.log(location)

// }

// function displayFeatures(feature){
//     let result = document.createElement('p')
//     result.innerText = feature
//     result.classList.add('result')
//     searchResults.appendChild(result)
//     console.log(feature)
// }

// function displayBoth(both){
//     let result = document.createElement('p')
//     result.innerText = both
//     result.classList.add('result')
//     searchResults.appendChild(result)
//     console.log(both)
// }

let srHeader = document.querySelector('#sr-header')

function createResultHeader(){
    let header = document.createElement('div')
    let title = document.createElement('div')
    title.innerText = "Skate Bored"
    title.classList.add('results-h1')
    header.appendChild(title)
    srHeader.appendChild(header)
    
}


function removeResults (){

    // while we have first child (aka parent isnt empty) - remove first child
    while(searchResults.firstChild){
        searchResults.removeChild(searchResults.firstChild)
    }
}


function removeHomePage(){
    while(main.firstChild){
        main.removeChild(main.firstChild)
    }
}

//random park generate - math methods?