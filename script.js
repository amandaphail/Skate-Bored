// https://data.cityofnewyork.us/resource/8knb-zsb6.json


async function getSkates(){

    try{
        const response = await axios.get('https://data.cityofnewyork.us/resource/8knb-zsb6.json')

        console.log(response)
        console.log(response.data[0].borough)

    } catch(err){
        console.log(err)
        console.log(err.message)
    }
}

getSkates()