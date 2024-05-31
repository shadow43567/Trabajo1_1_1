document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'falta api :v'; 
    function getCarData() {
        fetch('https://api.carsxe.com/vehicle-images?api_key=' + apiKey + '&make=chevrolet&model=equinox&year=2018&color=white&angle=side', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.images && data.images.length > 0) {
                displayCars(data.images);
            } else {
                console.error('No se encontraron datos de autos.');
            }
        })
        .catch(error => console.error('Error:', error));
    }

    function displayCars(images) {
        let carCards = document.getElementById('car-cards');
        carCards.innerHTML = '';  
        images.forEach(image => {
            let carCard = `
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card">
                        <img src="${image.link}" class="card-img-top" alt="Auto">
                        <div class="card-body">
                            <h5 class="card-title">${image.year} ${image.make} ${image.model}</h5>
                            <p class="card-text">Color: ${image.color}</p>
                            <a href="#" class="btn btn-primary">Más Información</a>
                        </div>
                    </div>
                </div>
            `;
            carCards.innerHTML += carCard;
        });
    }

    getCarData();
});
