document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const location = document.getElementById('locationInput').value;
    const apiKey = '70cce75073604108b59190330252801';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;
        const locationName = data.location.name;
        const iconUrl = data.current.condition.icon;
  
        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('condition').textContent = condition;
        document.getElementById('locationName').textContent = locationName;
        document.getElementById('icon').src = `https:${iconUrl}`;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('temperature').textContent = '--°C';
        document.getElementById('condition').textContent = 'Failed to fetch weather data.';
        document.getElementById('locationName').textContent = '--';
        document.getElementById('icon').src = '';
      });
  });