const artists = [
    {
        id: 1,
        name: "Taylor Swift",
        genre: "Pop",
        country: "USA",
        albums: 10,
        popularity: 95,
        image: "https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjEzMzAyMDk5MjU2MDI2OTcz/taylor-swift-kylie-kelce-comments.jpg",
        description: "Amerykańska piosenkarka i autorka tekstów, jedna z najlepiej sprzedających się artystek wszech czasów."
    },
    {
        id: 2,
        name: "The Weeknd",
        genre: "R&B",
        country: "Kanada",
        albums: 5,
        popularity: 92,
        image: "https://assets.gq.ru/photos/606ab44846145e905d3ecf33/4:3/w_1999,h_1499,c_limit/GettyImages-1231050791.jpg",
        description: "Kanadyjski piosenkarz, autor tekstów i producent muzyczny znany z unikalnego stylu R&B."
    },
    {
        id: 3,
        name: "Dua Lipa",
        genre: "Pop",
        country: "Wielka Brytania",
        albums: 3,
        popularity: 88,
        image: "https://media.allure.com/photos/646cd466cc4b77b13fe785af/1:1/w_3481,h_3481,c_limit/dua%20lipa%20super%20long%20bangs%20hero.jpg",
        description: "Brytyjska piosenkarka i autorka tekstów, zdobywczyni nagród Grammy."
    },
    {
        id: 4,
        name: "Drake",
        genre: "Hip-Hop",
        country: "Kanada",
        albums: 8,
        popularity: 94,
        image: "https://media.cnn.com/api/v1/images/stellar/prod/201025172820-drake-2019-file.jpg?q=w_3000,h_2142,x_0,y_0,c_fill",
        description: "Kanadyjski raper, piosenkarz i aktor, jeden z najlepiej sprzedających się artystów hip-hopowych."
    },
    {
        id: 5,
        name: "Billie Eilish",
        genre: "Pop",
        country: "USA",
        albums: 2,
        popularity: 90,
        image: "https://www.rollingstone.com/wp-content/uploads/2022/07/billie-eilish-2022-cr-Mason-Poole-1800.jpg?w=1581&h=1054&crop=1",
        description: "Amerykańska piosenkarka i autorka tekstów, najmłodsza zdobywczyni głównych nagród Grammy."
    },
    {
        id: 6,
        name: "Ed Sheeran",
        genre: "Pop",
        country: "Wielka Brytania",
        albums: 5,
        popularity: 89,
        image: "https://songlyrics.com.ua/images/singer_photos/ed-sheeran.jpg",
        description: "Brytyjski piosenkarz, autor tekstów i gitarzysta, znany z hitów na całym świecie."
    },
    {
        id: 7,
        name: "Imagine Dragons",
        genre: "Rock",
        country: "USA",
        albums: 6,
        popularity: 85,
        image: "https://jam-media.com.ua/content/uploads/images/interesnye-fakty-pro-gruppu.jpg",
        description: "Amerykański zespół rockowy znany z energetycznych występów i hitów radiowych."
    },
    {
        id: 8,
        name: "Ariana Grande",
        genre: "Pop",
        country: "USA",
        albums: 6,
        popularity: 91,
        image: "https://cdn.britannica.com/92/211792-050-E764F875/American-singer-Ariana-Grande-2018.jpg",
        description: "Amerykańska piosenkarka i aktorka z potężnym głosem i szerokim zasięgiem wokalnym."
    },
    {
        id: 9,
        name: "Post Malone",
        genre: "Hip-Hop",
        country: "USA",
        albums: 4,
        popularity: 87,
        image: "https://m.media-amazon.com/images/M/MV5BN2VmNDI3OWUtMGEyYS00Njg5LTlkNDUtOTI1MDk5MjdmYmExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "Amerykański raper, piosenkarz i autor tekstów znany z melodyjnego stylu hip-hopu."
    },
    {
        id: 10,
        name: "Coldplay",
        genre: "Rock",
        country: "Wielka Brytania",
        albums: 9,
        popularity: 86,
        image: "https://go.zvuk.com/thumb/600x0/filters:quality(75)/imgs/2024/10/04/12/6614922/3ba2ef0ae446819f1b1498a3b726720221135ef3.jpg",
        description: "Brytyjski zespół rockowy znany z emocjonalnych ballad i spektakularnych koncertów."
    }
];

let filteredArtists = [...artists];

function renderArtists(artistsToRender) {
    const grid = document.getElementById('artistsGrid');
    
    if (artistsToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">Nie znaleziono artystów</h4>
                <p class="text-muted">Spróbuj zmienić kryteria wyszukiwania</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = artistsToRender.map(artist => `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card artist-card h-100">
                <img src="${artist.image}" class="card-img-top artist-image" alt="${artist.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${artist.name}</h5>
                    <div class="mb-2">
                        <span class="genre-badge">${artist.genre}</span>
                    </div>
                    <p class="card-text text-muted small flex-grow-1">${artist.description}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <small class="text-muted">
                                <i class="fas fa-flag me-1"></i>${artist.country}
                            </small>
                            <small class="text-muted">
                                <i class="fas fa-compact-disc me-1"></i>${artist.albums} albumów
                            </small>
                        </div>
                        <div class="progress mb-2" style="height: 6px;">
                            <div class="progress-bar bg-primary" role="progressbar" 
                                 style="width: ${artist.popularity}%" 
                                 aria-valuenow="${artist.popularity}" 
                                 aria-valuemin="0" 
                                 aria-valuemax="100">
                            </div>
                        </div>
                        <small class="text-muted">Popularność: ${artist.popularity}%</small>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function searchArtists() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    filteredArtists = artists.filter(artist => {
        const matchesSearch = artist.name.toLowerCase().includes(searchTerm) ||
                            artist.genre.toLowerCase().includes(searchTerm) ||
                            artist.country.toLowerCase().includes(searchTerm);
        const matchesGenre = !genreFilter || artist.genre === genreFilter;
        
        return matchesSearch && matchesGenre;
    });

    filteredArtists.sort((a, b) => {
        switch(sortBy) {
            case 'popularity':
                return b.popularity - a.popularity;
            case 'albums':
                return b.albums - a.albums;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    renderArtists(filteredArtists);
}

document.addEventListener('DOMContentLoaded', function() {
    renderArtists(artists);

    document.getElementById('searchInput').addEventListener('input', searchArtists);
    document.getElementById('genreFilter').addEventListener('change', searchArtists);
    document.getElementById('sortBy').addEventListener('change', searchArtists);
}); 