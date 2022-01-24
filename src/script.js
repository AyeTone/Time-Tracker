const currentTime = document.querySelector('.current-time')
const prevTime = document.querySelector('.prev-time')
const dailyBtn = document.querySelector('.daily')
const weeklyBtn = document.querySelector('.weekly')
const monthyBtn = document.querySelector('.monthy')


const getData = async function () {
    const res = await fetch('data.json');
    const data = await res.json();
    /* console.log(data) */
}

getData()

dailyBtn.addEventListener("click", dailyStats)

function dailyStats() {
   currentTime.innerHTML = "" 
}