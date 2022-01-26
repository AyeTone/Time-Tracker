const dailyBtn = document.querySelector('.daily')
const weeklyBtn = document.querySelector('.weekly')
const monthlyBtn = document.querySelector('.monthly')
const contentWrapper = document.querySelector('.container')


const getData = async function() {
    const res = await fetch('data.json');
    const data = await res.json();
    console.log(data);
    loadCards(data)
}

getData()


const loadCards = function (array) {
    array.forEach(card =>{
      const div = document.createElement('div')
      div.className = `card card-back ${card.title.split(' ').join('-').toLowerCase()}`
      div.innerHTML = `
        <!-- ${card.title} -->

        <div class="card-bottom">
        <div class="title">
            <h2>
              ${card.title}
            </h2>
            <i class="dots">
            </i>
        </div>
      
      <article class="stats">
          <p class="current-time">
            ${card.timeframes.daily.current}hrs
          </p>
          <p class="prev-time">
            Previus - ${card.timeframes.daily.previous} hrs
          </p>
      </article>
      </div>
    `
    contentWrapper.append(div)
    })
}

weeklyBtn.addEventListener('click', function (array) {
  array.forEach(card =>{
    const div = document.createElement('div')
    div.className = `card card-back ${card.title.split(' ').join('-').toLowerCase()}`
    div.innerHTML = `
      <!-- ${card.title} -->

      <div class="card-bottom">
      <div class="title">
          <h2>
            ${card.title}
          </h2>
          <i class="dots">
          </i>
      </div>
    
    <article class="stats">
        <p class="current-time">
          ${card.timeframes.weekly.current}hrs
        </p>
        <p class="prev-time">
          Previous - ${card.timeframes.weekly.previous} hrs
        </p>
    </article>
    </div>
  `
  contentWrapper.append(div)
  })
})