
// Exchange Rates API
const EXCHANGE_API = 'https://v6.exchangerate-api.com/v6/218cecb211e1bc44a6c74a6c/latest/USD';

         // Dark Mode Toggle Functionality
const darkModeButton = document.getElementById('darkModeToggle');
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

//cars object

 const cars = [
            { 
                make: "Toyota", 
                model: "Camry", 
                year: 2020, 
                price: 25000,
                mileage: 22000, 
                color: "Blue", 
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49w0BB-IxWpjj3plhAyFMtfDr4D4iEbXMQA&s", 
                engine: "2.5L I4", 
                transmission: "Automatic", 
                drivetrain: "FWD", 
                features: ["Leather Seats", "Navigation System", "Sunroof"] 
            },
            { 
                make: "Ford", 
                model: "Mustang", 
                year: 2021, 
                price: 35000, 
                mileage: 18000, 
                color: "Red", 
                image: "https://c4.wallpaperflare.com/wallpaper/901/649/295/ford-mustang-gta-gt350-grand-theft-auto-v-wallpaper-preview.jpg",
                engine: "5.0L V8", 
                transmission: "Manual", 
                drivetrain: "RWD", 
                features: ["Heated Seats", "Apple CarPlay", "Premium Sound System"] 
            },
            { 
                make: "Chevrolet", 
                model: "Equinox", 
                year: 2022, 
                price: 30000, 
                mileage: 15000, 
                image: "https://di-sitebuilder-assets.dealerinspire.com/GMimages/gmMLP/chevrolet/Equinox/2022/colors/SUMMIT+WHITE.jpg",
                color: "White", 
                engine: "2.0L Turbo I4", 
                transmission: "Automatic", 
                drivetrain: "AWD", 
                features: ["Android Auto", "Blind Spot Monitoring", "Wireless Charging"] 
            },
            { 
                make: "Honda", 
                model: "Civic", 
                year: 2019, 
                price: 20000, 
                mileage: 25000, 
                image: "https://c4.wallpaperflare.com/wallpaper/184/641/190/honda-honda-civic-sport-car-compact-car-silver-car-hd-wallpaper-preview.jpg",
                color: "Silver", 
                engine: "2.0L I4", 
                transmission: "Automatic", 
                drivetrain: "FWD", 
                features: ["Heated Seats", "Navigation System", "Sunroof"] 
            },
            { 
                make: "BMW", 
                model: "X5", 
                year: 2021, 
                price: 60000, 
                mileage: 20000, 
                image: "https://i.pinimg.com/736x/14/3e/01/143e01e765dd2b59bc0ca0577d4a2fb9.jpg",
                color: "Black", 
                engine: "3.0L Turbo V6", 
                transmission: "Automatic", 
                drivetrain: "AWD", 
                features: ["Leather Seats", "Adaptive Cruise Control", "Apple CarPlay"] 
            },
            
                {
                    "make": "Toyota",
                    "model": "Hilux Double Cab",
                    "year": 2020,
                    "price": 33000,
                    "mileage": "65,000 km",
                    "image": "https://imgs.search.brave.com/HztNBxUJWdtt_I4BPwsoh6omiC8FnEXHMgmbGuckbfY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nbG9i/YWwudG95b3RhL3Bh/Z2VzL25ld3MvaW1h/Z2VzLzIwMTUvMDUv/MjEvMTMzMF9oaWx1/eC8yMDE1MDUyMV8w/MV8wNl9zLmpwZw",
                    "color": "Gray",
                    "engine": "2.4L Turbo Diesel",
                    "transmission": "Manual",
                    "drivetrain": "4WD",
                    "features": ["Tow Package", "Alloy Wheels", "Touchscreen"]
                },
                {
                    "make": "Nissan",
                    "model": "X-Trail",
                    "year": 2019,
                    "price": 27000,
                    "mileage": "55,000 km",
                    "image": "https://imgs.search.brave.com/sZHXLDlnChy_cCkd9NTMA7Y7AQdv4zUfq-DVAT0Gk2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYXJz/YWxlcy5weGNydXNo/Lm5ldC9nZW5lcmFs/L2Nhci9jaWwvbnB0/bXhrdGJnbHgwcmJ5/eGVydnh1d3d3OC5q/cGc_d2lkdGg9NjE4/JmhlaWdodD00MTIm/d2F0ZXJtYXJrPTYz/ODg4NDQ5Mg",
                    "color": "Maroon",
                    "engine": "2.0L CVT",
                    "transmission": "Automatic",
                    "drivetrain": "FWD",
                    "features": ["360 Camera", "Panoramic Roof", "Heated Seats"]
                },
                {
                    "make": "Audi",
                    "model": "A4",
                    "year": 2022,
                    "price": 42000,
                    "mileage": "12,000 km",
                    "image": "https://imgs.search.brave.com/uE1EmBYl7X_tzlT_q7Xkhb788ozN2AzHzw5xubm28Vg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/LmtlbGxleWJsdWVi/b29raW1hZ2VzLmNv/bS9rYmIvYmFzZS9l/dm94L0NQLzE1NTY0/LzIwMjItQXVkaS1B/NC1mcm9udF8xNTU2/NF8wMzJfMTgyNHg3/NDNfMkQyRF9jcm9w/cGVkLnBuZz9kb3du/c2l6ZT0zOTE6Kg",
                    "color": "Navarra Blue",
                    "engine": "2.0L TFSI",
                    "transmission": "Automatic",
                    "drivetrain": "Quattro AWD",
                    "features": ["Virtual Cockpit", "Matrix LED", "Bang & Olufsen Sound"]
                },
                {
                    "make": "Mazda",
                    "model": "CX-5",
                    "year": 2021,
                    "price": 33000,
                    "mileage": "25,000 km",
                    "image": "https://imgs.search.brave.com/tJKBFhp0CUq7qy381VWTGi6Dz4MoieCrH8-Gj295b_c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGdtc2l0ZXMu/bmV0L2xyZy8yMDIx/LW1hemRhLWN4LTVf/MTAwNzY5MTc4X2wu/anBn",
                    "engine": "2.5L SkyActiv-G",
                    "transmission": "Automatic",
                    "drivetrain": "AWD",
                    "features": ["Heads-Up Display", "Power Tailgate", "Adaptive Headlights"]
                },
                {
                    "make": "Mercedes-Benz",
                    "model": "G-Wagon",
                    "year": 2018,
                    "price": 130000,
                    "mileage": "35,000 km",
                    "image": "https://imgs.search.brave.com/bJuhK34E9qd_Klj0NJg69t_Ls9DNRGX3fcuusTA4-5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzgxNC84MDAv/OTMyL2JyYWJ1cy1n/LWNsYXNzLW1lcmNl/ZGVzLWJlbnotd2Fs/bHBhcGVyLXByZXZp/ZXcuanBn",
                    "color": "Black",
                    "engine": "4.0L V8 Biturbo",
                    "transmission": "Automatic",
                    "drivetrain": "4WD",
                    "features": ["AMG Package", "Night Package", "Massage Seats"]
                },
                {
                    "make": "Subaru",
                    "model": "Forester",
                    "year": 2023,
                    "price": 35000,
                    "mileage": "8,000 km",
                    "image": "https://imgs.search.brave.com/Gwj_qyuljQ3Med5WZdFERVp2RW6eoaeQ6DOLaozhe2Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW90b3JiaXNjdWl0/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMC9Gcm9u/dC1hbmdsZS12aWV3/LW9mLW5ldy0yMDIz/LVN1YmFydS1Gb3Jl/c3Rlci1jcm9zc292/ZXItU1VWLXdpdGgt/Q2FzY2FkZS1HcmVl/bi1TaWxpY2EtZXh0/ZXJpb3ItcGFpbnQt/Y29sb3IuanBnP3c9/OTI1JnN0cmlwPWFs/bCZxdWFsaXR5PTg5",
                    "color": "Dark Green",
                    "engine": "2.5L Boxer",
                    "transmission": "CVT",
                    "drivetrain": "Symmetrical AWD",
                    "features": ["EyeSight Safety", "X-Mode", "Heated Steering Wheel"]
                },
                {
                    "make": "Volkswagen",
                    "model": "Tiguan",
                    "year": 2020,
                    "price": 33000,
                    "mileage": "40,000 km",
                    "image": "https://imgs.search.brave.com/aa8gkvFJgcFYoorukkznngIy9-VXVYmvXRKSm4OdQow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDI0/LXZvbGtzd2FnZW4t/aWQtNC0xMjMtNjVk/Zjc5ZTllMWIwOC5q/cGc_Y3JvcD0wLjUy/N3h3OjAuNDQ1eGg7/MC4yNDd4dywwLjMy/N3hoJnJlc2l6ZT03/MDA6Kg",
                    "color": "Red",
                    "engine": "2.0L TSI",
                    "transmission": "DSG",
                    "drivetrain": "4Motion AWD",
                    "features": ["Digital Dashboard", "App Connect", "Park Assist"]
                },
                {
                    "make": "Mitsubishi",
                    "model": "Pajero Sport",
                    "year": 2022,
                    "price": 40000,
                    "mileage": "18,000 km",
                    "image": "https://imgs.search.brave.com/GgZpKSbSEz4ZFhSA2K0t8mVdeSa90QzVe2PqAAkt4O8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU0L2M1/L2IyLzU0YzViMjUz/ZWEyMjg4MWZmYjI3/YTliZTAxZWVlNjFi/LmpwZw",
                    "color": "Graphite Gray",
                    "engine": "2.4L MIVEC Diesel",
                    "transmission": "Automatic",
                    "drivetrain": "Super Select 4WD-II",
                    "features": ["Multi Around Monitor", "Rockford Sound", "Dual Zone AC"]
                },
                {
                    "make": "BMW",
                    "model": "320i",
                    "year": 2023,
                    "price": 45000,
                    "mileage": "5,000 km",
                    "image": "https://imgs.search.brave.com/g0rLTN6hdU7HUw9-ATqf8W_zHA2hmPEG0XLFJMFD4Z0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/dHJhZGVyYXUtcmVz/LmNsb3VkaW5hcnku/Y29tL2ltYWdlL3Vw/bG9hZC90X2dsL3Yx/L2dsYXNzZXMveklE/VDJRRU0uanBn",
                    "engine": "2.0L TwinPower Turbo",
                    "transmission": "Automatic",
                    "drivetrain": "RWD",
                    "features": ["M Sport Package", "Harman Kardon", "Gesture Control"]
                },
                {
                    "make": "Isuzu",
                    "model": "D-Max",
                    "year": 2021,
                    "price": 29000,
                    "mileage": "50,000 km",
                    "image": "https://imgs.search.brave.com/0sS5FwUi2BD5qoUDWHxMS_me75dVAp3XJhSPTTXu_vw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYXJz/YWxlcy5weGNydXNo/Lm5ldC9jYXIvc3Bl/Yy9TMDAwODRZMS5q/cGc_cHhjX21ldGhv/ZD1HcmF2aXR5Rmls/bCZ3aWR0aD00ODAm/aGVpZ2h0PTMyMCZ3/YXRlcm1hcms9NjE0/NzAyMjk",
                    "color": "Onyx Black",
                    "engine": "3.0L Turbo Diesel",
                    "transmission": "Automatic",
                    "drivetrain": "4WD",
                    "features": ["Lane Departure Warning", "Android Auto", "Bed Liner"]
                },
                {
                    "make": "Suzuki",
                    "model": "Vitara Brezza",
                    "year": 2022,
                    "price": 21000,
                    "mileage": "15,000 km",
                    "image": "https://imgs.search.brave.com/Mat9z52put30PLFC_EP9riMB22ZMdNivp7OQ0Jg_UYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aWlt/Zy50aXN0YXRpYy5j/b20vZnAvMS8wMDcv/NzIxL2hlYXZ5LWR1/dHktYmx1ZS1jb2xv/ci1zZW1pLWF1dG9t/YXRpYy1tYXJ1dGkt/c3V6dWtpLXZpdGFy/YS1icmV6emEtY2Fy/LTg4NS5qcGc",
                    "color": "Nexa Blue",
                    "engine": "1.5L K15B",
                    "transmission": "Automatic",
                    "drivetrain": "FWD",
                    "features": ["Auto AC", "Smartplay Studio", "Rear Camera"]
                },
                {
                    "make": "Lexus",
                    "model": "LX 570",
                    "year": 2019,
                    "price": 80000,
                    "mileage": "45,000 km",
                    "image": "https://imgs.search.brave.com/Mt_bYEzTKr3PNabtrFegerAoBnJ-2GojMnPBI5LIuM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2FyZ3VydXMu/Y29tL2ltYWdlcy9m/b3JzYWxlLzIwMjQv/MTIvMjUvMDYvMTYv/MjAxOV9sZXh1c19s/eC1waWMtNzI3MDE2/NDY2NzYwMTQwMjgy/Ny0xMDI0eDc2OC5q/cGVnP2lvPXRydWUm/d2lkdGg9NjQwJmhl/aWdodD00ODAmZml0/PWJvdW5kcyZmb3Jt/YXQ9anBnJmF1dG89/d2VicA",
                    "color": "Atomic Silver",
                    "engine": "5.7L V8",
                    "transmission": "Automatic",
                    "drivetrain": "Full-Time 4WD",
                    "features": ["Mark Levinson Audio", "Rear Entertainment", "Cool Box"]
                },
                {
                    "make": "Honda",
                    "model": "CR-V",
                    "year": 2023,
                    "price": 35000,
                    "mileage": "7,500 km",
                    "image": "https://imgs.search.brave.com/ZDsh6A5Gj6fiqBL2qR8-BQUPVmCDGPdl-0NbzrkHdGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS5jc3RhdGlj/LWltYWdlcy5jb20v/eGxhcmdlL2luL3Yy/L3N0b2NrX3Bob3Rv/cy85YWMzZDVhNy01/ZjhiLTQzMTEtYjcx/Mi00NDEyMTVhYWFk/NWIvODUxZDM3MjAt/NmUyZC00YjBkLWFm/NTYtMzQ0NjU5NzBk/MDg3LnBuZw",
                    "color": "Modern Steel",
                    "engine": "1.5L Turbo",
                    "transmission": "CVT",
                    "drivetrain": "AWD",
                    "features": ["Honda Sensing", "Power Tailgate", "Wireless Charging"]
                },
                {
                    "make": "Audi",
                    "model": "Q7",
                    "year": 2022,
                    "price": 60000,
                    "mileage": "10,000 km",
                    "image": "https://c4.wallpaperflare.com/wallpaper/55/1000/62/audi-audi-q7-audi-sq7-tdi-black-car-wallpaper-preview.jpg",
                    "color": "Mythos Black",
                    "engine": "3.0L V6 TFSI",
                    "transmission": "Automatic",
                    "drivetrain": "AWD",
                    "features": ["Virtual Cockpit", "Massaging Seats", "Heads-Up Display"]
                }
            
            
            
            
        ];
        
        
        async function getExchangeRates() {
            try {
                const response = await fetch(EXCHANGE_API); // Replace with actual API endpoint
                const data = await response.json();
                exchangeRates = data.conversion_rates;
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        }
        
        function priceInThousands(price, currency) {
            if (!exchangeRates) return price;
            const convertedPrice = price * exchangeRates[currency];
            return convertedPrice.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
        
        function convertPrice(price, currency) {
            if (!exchangeRates) return price;
            const convertedPrice = price * exchangeRates[currency];
            return convertedPrice.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
        
        function createCarCard(car, currency) {
            const convertedPrice = priceInThousands(car.price, currency);
            return `
                <div class="car-card">
                    <img src="${car.image}" alt="${car.make} ${car.model}" class="car-image">
                    <div class="car-info">
                        <h2>${car.year} ${car.make} ${car.model}</h2>
                        <div class="car-price">${currency} ${convertedPrice}</div>
                        <div class="specs-grid">
                            <div class="spec-item">
                                <span>Engine:</span> ${car.engine}
                            </div>
                            <div class="spec-item">
                                <span>Transmission:</span> ${car.transmission}
                            </div>
                            <div class="spec-item">
                                <span>Drivetrain:</span> ${car.drivetrain}
                            </div>
                        </div>
                        <ul class="features-list">
                            ${car.features.map(feature => `<li class="feature-badge">${feature}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }
        
        function displayCars(filteredCars, currency) {
            const carsContainer = document.getElementById('carsContainer');
            carsContainer.innerHTML = ''; // Clear previous car cards
            
            filteredCars.forEach(car => {
                const carCard = createCarCard(car, currency); // Create car cards
                carsContainer.innerHTML += carCard;
            });
        }
        // Add form submission handler
document.getElementById('car-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const newCar = {
        id: cars.length + 1,
        make: document.getElementById('make').value.trim(),
        model: document.getElementById('model').value.trim(),
        year: parseInt(document.getElementById('year').value),
        price: parseFloat(document.getElementById('price').value),
        engine: document.getElementById('engine').value.trim(),
        transmission: document.getElementById('transmission').value.trim(),
        drivetrain: document.getElementById('drivetrain').value.trim(),
        features: document.getElementById('features').value.split(',').map(f => f.trim()),
        image: document.getElementById('image').value.trim(),
        mileage: "N/A",  // Default value since not in form
        color: "N/A"     // Default value since not in form
    };

    // Add to cars array
    cars.push(newCar);

    // Create and append new car card
    const currency = document.getElementById('currency').value;
    const carsContainer = document.getElementById('carsContainer');
    carsContainer.insertAdjacentHTML('afterbegin', createCarCard(newCar, currency));

    // Reset form
    this.reset();
});
        
        function updatePrices(currency) {
            const carCards = document.querySelectorAll('.car-card');
            carCards.forEach((card, index) => {
                const priceElement = card.querySelector('.car-price');
                const convertedPrice = convertPrice(cars[index].price, currency);
                priceElement.textContent = `${currency} ${convertedPrice}`;
            });
        }
        
        document.getElementById('search-btn').addEventListener('click', function() {
            const query = document.getElementById('searchBar').value.toLowerCase(); // Get the value from search input
            const filteredCars = cars.filter(car => 
                car.model.toLowerCase().includes(query) || car.make.toLowerCase().includes(query)
            ); // Filter based on model or make
            const currency = document.getElementById('currency').value; // Get current selected currency
            displayCars(filteredCars, currency); // Display filtered cars with updated currency
        });
        
        document.getElementById('searchBar').addEventListener('input', function() {
            const query = this.value.toLowerCase();
            if (query === '') {
                const currency = document.getElementById('currency').value; // Get current selected currency
                displayCars(cars, currency); // Display all cars if the search bar is empty
            } else {
                const makes = [...new Set(cars.map(car => car.make.toLowerCase()))]; // Get unique makes
                const matchingMakes = makes.filter(make => make.includes(query));
        
                if (matchingMakes.length === 1) { 
                    // If a unique make is found, filter cars by that make
                    const make = matchingMakes[0];
                    const carsByMake = cars.filter(car => car.make.toLowerCase() === make);
                    displayCars(carsByMake, 'USD'); // Display cars by make
                } else {
                    const filteredCars = cars.filter(car => 
                        car.model.toLowerCase().includes(query) || car.make.toLowerCase().includes(query)
                    );
                    displayCars(filteredCars, 'USD'); // Display cars filtered by make or model
                }
            }
        });
        
        document.getElementById('currency').addEventListener('change', (e) => {
            const currency = e.target.value; // Get the selected currency
            updatePrices(currency); // Update the prices of all car cards
        });
        
        async function initialize() {
            await getExchangeRates(); // Fetch exchange rates
        
            const currency = document.getElementById('currency').value || 'USD'; // Default to USD
            displayCars(cars, currency); // Initially display all cars with default currency
        }
        
        initialize();