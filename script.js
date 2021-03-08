// https://data.cityofnewyork.us/resource/8knb-zsb6.json


let locationDD = document.querySelector('.location')


async function getSkates(){

    try{
        const response = await axios.get('https://data.cityofnewyork.us/resource/8knb-zsb6.json')

        console.log(response)
        // console.log(response.data[0].borough)

        
        let data = response.data
        for (i = 0; i < data.length; i++){
            let borough = data[i].borough
            let name = data[i].name
            // console.log(borough)
            if (borough.includes("Brooklyn")){
                console.log(name)
            }
         }
                                  

    } catch(err){
        console.log(err)
        console.log(err.message)
    }
}

getSkates()



// function setLocationValues(location){
//     location.forEach((borough) => {
//         let option = document.createElement('option')
//         option.value = borough
//         option.textContent = borough
//         locationDD.appendChild(borough)
//     })
// }

