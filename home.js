const apiKey = "149f662a156008153168efa75f2aba91";
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=52.3&lon=4.89&exclude=hourly&appid=${apiKey}`

const cityCoords = {
    amsterdam: {
    lat: 52.37,
    long: 4.89
    },
    paris: {
    lat: 48.86,
    long: 2.35
    },
    stockholm: {
    lat: 59.33,
    long: 18.06
    }
    };
    
    // back tick setup
    let hashValue = "sadgfgadfg"
    let myURL = `https://robohash.org/${hashValue}`

function createUrl (lat, long, apiKey) {

    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${apiKey}`;

    return url;
}   

function getDataWithPromise() {
    console.log("-----------getting data with promises-------");
    fetch(url).then(function(response) {
        if (response.ok) {
            response = response.json()
            .then(function(res){
                console.log(res);
            }).catch(err => console.log(err))
        

        }
        else {
            console.log("GOT 400 TYPE ERROR");
        }
    }).catch(err => console.log(err))

    console.log("let me run ")
    console.log()
}

getDataWithPromise();

//fetch, api call  
async function getDataWithAsyncAwait() {
    console.log("GETTING DATA WITH ASYNC/AWAIT");

    try {
        var response = await fetch(url);
        if (response.ok) {
        console.log(response);
        response = await response.json()
        console.log(response)}
    }
    catch (err) {
        console.log(err);
    }    


}


getDataWithAsyncAwait();

function convertToCelsius(kel) {
    return kel - 272
}

async function getData(url) {
    try {
        var response = await fetch(url)
        if(response.ok) {
            response = await response.json()
        }
        else {
            alert("GOT A 400-TYPE ERROR!")
        }
    }

    catch(err) {
        console.log(err)
    }
    console.log(response);

    let uv = document.getElementById("uv-index");
    console.log(uv);
    uv.innerHTML = response["current"]["uvi"];

    let currTemp = document.getElementById("currTemp");

    currTemp.innerHTML = convertToCelsius(response["current"]["temp"]);


    for (let i=0;i < 5; i++) {
        let currID = i + "-uvi"
        let currDay = document.getElementById(currID);
        // currDay.innerHTML
        let daysTemp = i + "temp";
        currDay = document.getElementById(daysTemp);
        
        console.log(currDay);
    }
    let monData = document.getElementById("mon")
    monData.innerHTML = response["daily"][0]["uvi"]
}

function getCity() {
    let city = document.getElementById("citySearch");
    // console.log(city);

    city = city["value"].toLowerCase();
    console.log(city);

    // check if we have data on search city 
    if (cityCoords[city]) {
        let url = createUrl(cityCoords[city]["lat"], cityCoords[city]["long"], 
            apiKey);

            getData(url);
            document.getElementById("city").innerHTML = city
            
    }
    else {
        alert("No Data Found");
    }
};

function processData(url) {
    
    
    let promise = fetch(url) 
    console.log(promise) }

    let p = new Promise(function
        (resolved, rejected) {
            let a = 2;
            if (a==2) {
                resolved("CORRECT");
            
            } else {
                rejected("NOPE");
            }
        })

        p.then(function(result) {
            console.log(result);
        })
        .catch(function(err) {
            consol.log(err);
        })