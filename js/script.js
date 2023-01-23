const cn = fetch('https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/india-popular-city.json')
cn.then((response)=>response.json())
.then((data) => {
    const dropdown = document.getElementById('city');
    const firstOpt = document.createElement('option');
    firstOpt.innerHTML = `Select Place`
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
    let wthUrl = 'http://api.weatherapi.com/v1/current.json?key=b6fc5e1797d24830baf44824232301&q=';
    let urlCity = selected;
    let endofUrl = '&aqi=no';
    const wth = fetch(wthUrl+urlCity+endofUrl);
    wth.then((response)=>response.json())
    .then((data)=>{
        let temp;
        if(selected=='Select Place'){
            temp = '';
        }
        else{
            temp = data.current.temp_c+'&#176;';
        }
        document.getElementById('temperature').innerHTML=temp;
    })
}

const grid = fetch('https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/make-your-trip-package.json')
grid.then((response)=>response.json())
.then((data)=>{
    const gridDiv = document.getElementById('trip');
    for(let i=0;i<data.length;i++){
        const div = document.createElement('div');
        div.textContent = data[i].cityName;
        gridDiv.append(div);
    }
})