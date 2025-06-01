const services = [
    {
        id: 1,
        name: "Spotify",
        url: "https://www.spotify.com/",
        type: "Streaming",
        users: "456 mln",
        price: "9.99 €",
        audioQuality: "320 kbps",
        offline: true,
        rating: 4.8,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/480px-Spotify_logo_without_text.svg.png",
        description: "Najpopularniejszy serwis streamingowy na świecie z ogromną biblioteką muzyki i podcastów.",
        features: ["Personalizowane playlisty", "Discover Weekly", "Spotify Connect", "Podcasty"],
        countries: "180+ krajów",
        founded: 2006
    },
    {
        id: 2,
        name: "Apple Music",
        url: "https://music.apple.com/",
        type: "Streaming",
        users: "88 mln",
        price: "9.99 €",
        audioQuality: "256 kbps AAC",
        offline: true,
        rating: 4.5,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/1200px-Apple_Music_icon.svg.png",
        description: "Serwis streamingowy Apple z integracją z ekosystemem iOS i wysoką jakością dźwięku.",
        features: ["Spatial Audio", "Lossless Audio", "Apple Radio", "Integracja z iOS"],
        countries: "167 krajów",
        founded: 2015
    },
    {
        id: 3,
        name: "YouTube Music",
        url: "https://music.youtube.com/",
        type: "Streaming",
        users: "80 mln",
        price: "9.99 €",
        audioQuality: "256 kbps",
        offline: true,
        rating: 4.2,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png",
        description: "Serwis muzyczny Google z dostępem do oficjalnych utworów i teledysków YouTube.",
        features: ["Teledyski", "YouTube Premium", "Smart downloads", "Miksy"],
        countries: "100+ krajów",
        founded: 2015
    },
    {
        id: 4,
        name: "SoundCloud",
        url: "https://soundcloud.com/",
        type: "Social",
        users: "175 mln",
        price: "Darmowy/4.99 €",
        audioQuality: "128 kbps",
        offline: false,
        rating: 4.2,
        logo: "https://cdn-icons-png.flaticon.com/512/145/145809.png",
        description: "Platforma społecznościowa dla muzyków i słuchaczy z niezależną muzyką.",
        features: ["Upload music", "Community", "Discover new artists", "Comments"],
        countries: "Globalnie",
        founded: 2007
    }
];

let filteredServices = [...services];

function renderServices(servicesToRender) {
    const grid = document.getElementById('servicesGrid');
    
    if (servicesToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">Nie znaleziono serwisów</h4>
                <p class="text-muted">Spróbuj zmienić kryteria wyszukiwania</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = servicesToRender.map(service => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card service-card h-100">
                <div class="card-body d-flex flex-column">
                    <div class="text-center mb-3">
                        <img src="${service.logo}" class="service-logo mb-3" alt="${service.name}">
                        <h5 class="card-title">${service.name}</h5>
                        <span class="badge bg-primary">${service.type}</span>
                    </div>
                    
                    <p class="card-text text-muted small flex-grow-1">${service.description}</p>
                    
                    <div class="mt-auto">
                        <div class="row text-center mb-3">
                            <div class="col-4">
                                <div class="text-primary fw-bold">${service.users}</div>
                                <small class="text-muted">Użytkowników</small>
                            </div>
                            <div class="col-4">
                                <div class="text-success fw-bold">${service.price}</div>
                                <small class="text-muted">Miesięcznie</small>
                            </div>
                            <div class="col-4">
                                <div class="text-warning">
                                    ${generateStars(service.rating)}
                                </div>
                                <small class="text-muted">${service.rating}/5</small>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <small class="text-muted">Jakość audio:</small>
                                <small class="text-dark">${service.audioQuality}</small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <small class="text-muted">Tryb offline:</small>
                                <small class="text-dark">
                                    ${service.offline ? 
                                        '<i class="fas fa-check text-success"></i> Tak' : 
                                        '<i class="fas fa-times text-danger"></i> Nie'
                                    }
                                </small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">Dostępność:</small>
                                <small class="text-dark">${service.countries}</small>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <small class="text-muted d-block mb-2">Główne funkcje:</small>
                            <div class="d-flex flex-wrap">
                                ${service.features.slice(0, 2).map(feature => 
                                    `<span class="badge bg-dark me-1 mb-1">${feature}</span>`
                                ).join('')}
                                ${service.features.length > 2 ? 
                                    `<span class="badge bg-dark">+${service.features.length - 2}</span>` : 
                                    ''
                                }
                            </div>
                        </div>
                        
                        <button class="btn btn-primary w-100" onClick="window.open('${service.url}', '_blank')">
                            <i class="fas fa-external-link-alt me-2"></i>Odwiedź serwis
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderComparisonTable() {
    const table = document.getElementById('comparisonTable');
    const topServices = services.filter(s => s.type === 'Streaming').slice(0, 6);
    
    table.innerHTML = topServices.map(service => `
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <img src="${service.logo}" width="30" height="30" class="me-2 rounded" alt="${service.name}">
                    <strong>${service.name}</strong>
                </div>
            </td>
            <td class="text-primary">${service.users}</td>
            <td class="text-success">${service.price}</td>
            <td class="text-muted">${service.audioQuality}</td>
            <td>
                ${service.offline ? 
                    '<i class="fas fa-check text-success"></i>' : 
                    '<i class="fas fa-times text-danger"></i>'
                }
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <div class="text-warning me-2">
                        ${generateStars(service.rating)}
                    </div>
                    <span class="text-muted">${service.rating}</span>
                </div>
            </td>
        </tr>
    `).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function searchServices() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    filteredServices = services.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchTerm) ||
                            service.description.toLowerCase().includes(searchTerm) ||
                            service.type.toLowerCase().includes(searchTerm);
        const matchesType = !typeFilter || service.type === typeFilter;
        
        return matchesSearch && matchesType;
    });

    filteredServices.sort((a, b) => {
        switch(sortBy) {
            case 'users':
                const usersA = parseInt(a.users.replace(/[^\d]/g, ''));
                const usersB = parseInt(b.users.replace(/[^\d]/g, ''));
                return usersB - usersA;
            case 'price':
                const priceA = parseFloat(a.price.replace(/[^\d.]/g, '')) || 0;
                const priceB = parseFloat(b.price.replace(/[^\d.]/g, '')) || 0;
                return priceA - priceB;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    renderServices(filteredServices);
}

document.addEventListener('DOMContentLoaded', function() {
    renderServices(services);
    renderComparisonTable();

    document.getElementById('searchInput').addEventListener('input', searchServices);
    document.getElementById('typeFilter').addEventListener('change', searchServices);
    document.getElementById('sortBy').addEventListener('change', searchServices);
}); 