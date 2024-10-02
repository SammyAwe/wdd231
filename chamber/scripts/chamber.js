const apiKey = 'b283065f54de22dba351323e30566c78';
const city = 'Lagos';
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();
        const temp = Math.round(data.main.temp);
        const description = capitalizeWords(data.weather.map(w => w.description).join(', '));
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        document.getElementById('current-Weather').innerHTML = `
        <p>Temperature: ${temp}Celsius</p>
        <p>Condition: ${description}</p>`;
        
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData.list);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}
function displayForecast(forecast) {
    const forecastContainer = document.getElementById('forecast');
    let forecastHTML = '<h3>3-Day Forecast</h3>';
    for(let i = 0; i < forecast.length; i += 8) {
        const day = forecast[i];
        const date = new Date(day.dt * 1000).toLocaleDateString();
        forecastHTML += `<p>${date}:${Math.round(day.main.temp)}Celsius, ${capitalizeWords(day.weather.map(w => w.description).join(', '))}</p>`;
    }
    forecastContainer.innerHTML = forecastHTML;
}


async function fetchMembers() {
    try {
        const response = await fetch('scripts/members.json');
        const members = await response.json();
        displaySpotlights(members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

function displayMembers(members, viewType) {
    const container = document.getElementById('memberContainer');
    container.innerHTML = '';

    if (viewType === 'grid') {
        container.classList.remove('list-view');
        container.classList.add('grid-view');
        members.forEach(member =>
            {
                const card = `
                <div class="member-card">
                    <img src="images/${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>MembershipLevel: ${getMembershipLevel(member.getMembershipLevel)}</p>
                </div>`;
                container.innerHTML += card;
            }
        );
    } else if (viewType === 'list') {
        container.classList.remove('grid-view');
        container.classList.add('list-view');
        members.forEach(member => 
            {
                const listItem = ` 
                <div class="member-list-item">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                </div>`;
                container.innerHTML += listItem;
            }
        );
    }
}

async function fetchMembers() {
    try {
        const response = await fetch('scripts/members.json');
        const members = await response.json();
        displaySpotlights(members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

function displaySpotlights(members) {
    const spotlightContainer = document.getElementById('spotlight-Container');
    spotlightContainer.innerHTML = '';

    const eligibleMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
    const randomMembers = getRandomMembers(eligibleMembers, 3);
    randomMembers.forEach(member => {
        const spotlightCard = `
        <div class="spotLight-card">
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p>Membership Level:${getMembershipLevel(member.membershipLevel)}</p>
        </div>`;
        spotlightContainer.innerHTML += spotlightCard;
    });

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}


window.onload = () => {
    fetchWeather();
    fetchMembers();
};

document.getElementById('lastModified').textContent = document.lastModified;