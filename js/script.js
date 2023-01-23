const cn = fetch('https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/india-popular-city.json')
cn.then((response)=>response.json())
.then((data) => {
    const dropdown = document.getElementById('city');
    const firstOpt = document.createElement('option');
    firstOpt.innerHTML = `All Places`
    dropdown.append(firstOpt);
    for(let i=0;i<data.city.length;i++){
        const optVal = data.city[i].name;
        const opt = document.createElement('option');
        opt.textContent = optVal;
        opt.value = optVal;
        dropdown.append(opt);
    }
})

function selectCity(){
    var selected = document.getElementById('city').value;
    let wthUrl = 'https://api.weatherapi.com/v1/current.json?key=b6fc5e1797d24830baf44824232301&q=';
    let urlCity = selected;
    let endofUrl = '&aqi=no';
    const wth = fetch(wthUrl+urlCity+endofUrl);
    const img = document.getElementById('img');
    const inText = document.getElementById('in');
    wth.then((response)=>response.json())
    .then((data)=>{
        let temp;
        if(selected=='All Places'){
            temp = '';
            document.getElementById('cityName').innerHTML='';
            img.setAttribute('src', '');
            inText.innerHTML='';
        }
        else{
            let imgUrl = data.current.condition.icon;
            img.setAttribute('src', imgUrl);
            temp = data.current.temp_c+'&#176;';
            
            document.getElementById('cityName').innerHTML=urlCity;
            inText.innerHTML='IN';
        }
        document.getElementById('temperature').innerHTML=temp;
    })
}

const grid = fetch('https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/make-your-trip-package.json')
grid.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    const gridDiv = document.getElementById('trip');
    for(let i=0;i<data.length;i++){

        const insideDiv = document.createElement('div');
        const category = data[i].category;
        const cityName = data[i].cityName;
        const price = data[i].price;
        const imageUrl = data[i].cityImg;
        const tourDate = data[i].tourDate;
        const tmpr = data[i].temp;

        insideDiv.innerHTML=`<div class="contain"><div class="bookmark">
        <div class="detail">
            <p class="pDiv" style="font-size: 20px;">${cityName}</p>
            <p class="pDiv" style="font-size: 14px;">${tourDate}</p>
            <p class="pDiv" style="font-size: 12px;">${category}</p>
        </div>
        <p>&#xf097;</p>
        </div>
        <br>
        <p>Average Temperature</p>
        <p>+ ${tmpr}&#176;C</p>
        <div>
            <img src="${imageUrl}" height="200fr" width="100%" alt="">
        </div>
        
        <div class="priceExplore">
            <div class="totalprice">
                <p>Total Price:</p>
                <p>${price}</p>
            </div>

            <button>Explore</button>
        </div></div>`
        gridDiv.append(insideDiv);
    }
})