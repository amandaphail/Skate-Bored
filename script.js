
const locationDD = document.querySelector('.location')
const featuresDD = document.querySelector('.features')
const searchResults = document.querySelector('#sr-main')
const resultsPage = document.querySelector('#search-results')
let submit = document.querySelector(".form")
let main = document.querySelector('main')
let srHeader = document.querySelector('#sr-header')
let button = document.querySelector(".randomPark")
let body = document.querySelector('body')

removeSearchResultsPage()
async function getSkateParks(event) {
  event.preventDefault()

  try {
    const response = await axios.get('https://data.cityofnewyork.us/resource/8knb-zsb6.json')


    if (event.type === "submit") {
      if (locationDD.value !== "null" && featuresDD.value === "null") {
        setLocation(response.data)
      } else if (locationDD.value === "null" && featuresDD.value !== "null") {
        setFeature(response.data)
      } else if (locationDD.value === "null" && featuresDD.value == "null") {
        alert("Nothing is selected!")
      } else if (locationDD.value !== "null" && featuresDD.value !== "null") {
        getBoth(response.data)
      }
    }


    return response.data
  } catch (err) {

  }
}



async function getRandomParks(event) {
  // https://css-tricks.com/snippets/javascript/select-random-item-array/
  const parksArray = await getSkateParks(event)
  console.log(parksArray)
  const randomPark = parksArray[Math.floor(Math.random() * parksArray.length)]

  displaySetUp()
  displayResults(randomPark)
}



button.addEventListener('click', getRandomParks)


function setLocation(data) {
  displaySetUp()
  for (i = 0; i < data.length; i++) {
    let borough = data[i].borough
    let value = data[i]
    let locOption = locationDD.value


    if (featuresDD.value === "null" && borough.includes(locOption)) {

      displayResults(value)
    }

  }
}

function setFeature(data) {

  displaySetUp()
  for (i = 0; i < data.length; i++) {
    let feature1 = data[i].features_1
    let feature2 = data[i].features_2
    let feature3 = data[i].features_3
    let value = data[i]
    let featOption = featuresDD.value

    if (locationDD.value === "null" && (feature1.includes(featOption) || feature2.includes(featOption) || feature3.includes(featOption))) {

      displayResults(value)
    }


  }
}


// function getBoth(data) {

//   for (i = 0; i < data.length; i++) {
//     let borough = data[i].borough
//     let locOption = locationDD.value
//     let feature1 = data[i].features_1
//     let feature2 = data[i].features_2
//     let feature3 = data[i].features_3
//     let featOption = featuresDD.value
//     let value = data[i]

//     if (borough.includes(locOption) && (feature1.includes(featOption) || feature2.includes(featOption) || feature3.includes(featOption))) {
//       displaySetUp()
//       displayResults(value)
//     } else if (borough.includes(locOption) && (!feature1.includes(featOption) && !feature2.includes(featOption) && !feature3.includes(featOption))) {
//       alert("This park does not exist!")
//       console.log("why")

//       //alert pops up 3 or 4 or 5 times - for each feature?

//     }
//   }
// }

let alert = false

function getBoth(data) {

  displaySetUp()
  for (i = 0; i < data.length; i++) {
    let borough = data[i].borough
    let locOption = locationDD.value
    let feature1 = data[i].features_1
    let feature2 = data[i].features_2
    let feature3 = data[i].features_3
    let featOption = featuresDD.value
    let value = data[i]

    if (borough.includes(locOption) && (feature1.includes(featOption) || feature2.includes(featOption) || feature3.includes(featOption))) {
      alert = true
      displayResults(value)
      // console.log("print")
    }
  }
  if (alert === false) {

    // console.log("nope")
    // console.log(data[i])
    let none = document.createElement('p')
    none.classList.add('no-park')
    none.innerText = "This park does not exist!"
    searchResults.appendChild(none)

    alert = true
  }

  alert = false
}


submit.addEventListener('submit', getSkateParks)



function createResultHeader() {

  removeHeader()
  let titles = document.createElement('div')
  titles.classList.add('left-div')
  let title = document.createElement('div')
  title.innerText = "Skate Bored"
  title.classList.add('results-h1')
  titles.appendChild(title)


  let subtitle = document.createElement('div')
  subtitle.innerText = "Where are we Going?"
  subtitle.classList.add('results-h2')
  titles.appendChild(subtitle)

  srHeader.appendChild(titles)


  let nav = document.createElement('div')
  nav.classList.add('right-div')
  nav.appendChild(submit)
  submit.classList.add('formSR')

  nav.appendChild(button)
  srHeader.appendChild(nav)


}



function displaySetUp() {
  removeResults()
  removeHomePage()
  createResultHeader()
  let pageTitle = document.createElement('div')
  pageTitle.innerText = "The Spot:"
  pageTitle.classList.add('skate-here')
  searchResults.appendChild(pageTitle)
}



function displayResults(value) {

  let leftDIV = document.createElement('div')
  leftDIV.classList.add('leftDIV')
  let rightDIV = document.createElement('div')
  rightDIV.classList.add('rightDIV')
  let result = document.createElement('div')
  result.classList.add('result')

  let resultName = document.createElement('p')
  resultName.classList.add('result-name')
  resultName.innerText = value.name

  let resultLocation = document.createElement('p')
  resultLocation.classList.add('result-location')
  resultLocation.innerText = `Location: ${value.borough}`


  let resultFeat1 = document.createElement('p')
  resultFeat1.classList.add('result-feat')
  resultFeat1.innerText = `Feature 1: ${value.features_1}`

  let resultFeat2 = document.createElement('p')
  resultFeat2.classList.add('result-feat')
  resultFeat2.innerText = `Feature 2: ${value.features_2}`

  let resultFeat3 = document.createElement('p')
  resultFeat3.classList.add('result-feat')
  resultFeat3.innerText = `Feature 3: ${value.features_3}`


  leftDIV.appendChild(resultName)
  leftDIV.appendChild(resultLocation)
  result.appendChild(leftDIV)

  rightDIV.appendChild(resultFeat1)
  rightDIV.appendChild(resultFeat2)
  rightDIV.appendChild(resultFeat3)
  result.appendChild(rightDIV)

  searchResults.appendChild(result)

}



function removeResults() {

  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild)
  }
}


function removeHomePage() {
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
}

function removeHeader() {
  while (srHeader.firstChild) {
    srHeader.removeChild(srHeader.firstChild)
  }
}

function removeSearchResultsPage() {
  body.removeChild(body.lastChild)

}


