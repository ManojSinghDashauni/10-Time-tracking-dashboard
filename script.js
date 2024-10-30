import data from './data.json' assert { type: 'json' };
const container = document.getElementById('container');

const daily = document.getElementById('Daily');
const weekly = document.getElementById('Weekly');
const monthly = document.getElementById('Monthly');

daily.addEventListener('click', function(){
    if('daily'==this.timeframes.daily){
        
    }
    if('weekly'==this.timeframes.weekly){}
    if('monthly'==this.timeframes.monthly){}
})


const appendItem = (item) => {
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const section = document.createElement('section');
    h3.innerText =`${item.title}`;
    h2.innerText=`${item.timeframes.daily.current}`;
    p.innerText=`${item.timeframes.daily.previous}`;
    section.appendChild(h2);
    section.appendChild(h3);
    section.appendChild(p);
    container.appendChild(section);
  };

// const appendItem = (item) => {
//   // add the markup for each item to the DOM
// };

// with a forEach loop
data.forEach((item) => {
	appendItem(item);
});


<section>
    <h3>Work</h3> title
    <h2>32Hrs</h2> /current
    <p>Last Week - 36hrs</p> previuos
</section>