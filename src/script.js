const dailyBtn = document.querySelector('.daily')
const weeklyBtn = document.querySelector('.weekly')
const monthlyBtn = document.querySelector('.monthly')
const contentWrapper = document.querySelector('.container')

let newData;

const getData = async function() {
  const res = await fetch("data.json");
  const data = await res.json();
  newData = data
  loadCards()
}

getData()

function loadCards() {
  newData.map((data) => {
    const cardBack = document.createElement('div')
    const cardBottom = document.createElement('div')
    const cardHeader = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const cardDots = document.createElement('i')
    const cardStats = document.createElement('div')
    const currentTime = document.createElement('p')
    const prevTime = document.createElement('p')
    
    const cardName = data.title.split(' ').join('-').toLowerCase()


    cardBack.className = `card card-back ${cardName}`
    cardBottom.className = 'card-bottom'
    cardHeader.className = 'card-header'
    cardDots.className = 'dots'
    cardStats.className = 'stats'
    currentTime.className = 'current-time'
    prevTime.className = 'prev-time'


    cardTitle.innerHTML = data.title 
    currentTime.innerHTML = `${data.timeframes.daily.current}hrs`
    prevTime.innerHTML = `Last Week - ${data.timeframes.daily.previous}hrs`

    contentWrapper.append(cardBack)
    cardBack.append(cardBottom)
    cardBottom.append(cardHeader)
    cardBottom.append(cardStats)
    cardHeader.append(cardTitle, cardDots)
    cardStats.append(currentTime, prevTime)


  })
}


