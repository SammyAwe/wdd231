document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = document.lastModified;
    
    const apiKey = 'b4104434e81750c6d6d0181b4fc5cb07';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=${apiKey}&units=metric`;
    
    const fetchWeather = async () => 
    {
        try {
            const response = await fetch(weatherUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch weather data:${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
document.getElementById('current-Weather').textContent = 'Error fetching weather data. Please try again later.';
console.error("Weather Fetch Error:", error);
        }
    };

    const displayWeather = (data) => 
    {
        const weatherDiv = document.getElementById('current-Weather');
        const { main, weather, wind } = data;
        const content = `
        <p><strong>Temperature:</strong> ${main.temp} Celsius</p>
        <p><strong>Condition:</strong> ${weather[0].description}</p>
        <p><strong>Humidity:</strong> ${main.humidity} %</p>
        <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>`;
        weatherDiv.innerHTML = content;
    };

    fetchWeather();

    const featuredMembers = [
        { name: 'Maxwell Consults', description: 'Leaders in consulting.', website: 'https://sammyawe.github.io/WDD231/chamber/directory.html' },
        { name: 'Leroy Corp', description: 'Pioneers in tech solutions.', website: 'https://sammyawe.github.io/WDD231/chamber/directory.html' },
        { name: 'Helraph Clinic', description: 'Your trusted health partner.', website: 'https://sammyawe.github.io/WDD231/chamber/directory.html' }
    ];
    const displaySpotlight = () => {
        const spotlightContainer = document.getElementById('spotlight-Container');
        if (!spotlightContainer) {
            console.error("Spotlight container not found in the DOM.");
            return;
        }
        spotlightContainer.innerHTML = "<p>Adding Featured Members...</p>";
        spotlightContainer.innerHTML = '';
        if (featuredMembers.length === 0) 
        {
            console.error("No featured members available.");
            spotlightContainer.innerHTML = "<p>No featured members to display.</p>";
            return;
        }
        console.log("Featured Members Array: ", featuredMembers);
        featuredMembers.forEach(member => {
            console.log("Processing member: ", member);
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');
            const content = `
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>`;
            memberDiv.innerHTML = content;
            spotlightContainer.appendChild(memberDiv);
        });
        console.log("Spotlight content added successfully");
    };
    displaySpotlight();
});