const albums = [
    {
        id: 1,
        title: "Midnights",
        artist: "Taylor Swift",
        genre: "Pop",
        year: 2022,
        tracks: 13,
        duration: "44:32",
        rating: 4.8,
        cover: "https://cdn.hmv.com/r/w-640/hmv/files/a0/a0bd8bc6-ddf8-41d6-877e-c25dc96fb5f8.png",
        description: "Dziesiąty studyjny album Taylor Swift, eksplorujący tematy bezsenności i refleksji nocnych.",
        streamingLinks: {
            spotify: "https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3",
            appleMusic: "https://music.apple.com/us/album/midnights/1649434004",
            youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_kqnYt6b_116Fv1EoAquGLDB-PQoK_J8Wg",
            soundcloud: "https://soundcloud.com/taylorswiftofficial/sets/midnights-5"
        }
    },
    {
        id: 2,
        title: "After Hours",
        artist: "The Weeknd",
        genre: "R&B",
        year: 2020,
        tracks: 14,
        duration: "56:17",
        rating: 4.7,
        cover: "https://m.media-amazon.com/images/I/71re8Bu5qVL.jpg",
        description: "Czwarty studyjny album The Weeknd, łączący elementy R&B, pop i synthwave.",
        streamingLinks: {
            spotify: "https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj",
            appleMusic: "https://music.apple.com/us/album/after-hours/1499378108",
            youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_l1x-JAx0w53suECoCI40SWvWKxPMJFJo0",
            soundcloud: "https://theweeknd.co/afterhours"
        }
    },
    {
        id: 3,
        title: "Future Nostalgia",
        artist: "Dua Lipa",
        genre: "Pop",
        year: 2020,
        tracks: 11,
        duration: "37:12",
        rating: 4.6,
        cover: "https://bfb.ua/Media/gbg-03/muzika/dua-lipa---future-nostalgia-z43466_main.jpg",
        description: "Drugi studyjny album Dua Lipy, inspirowany disco i dance-popem lat 80.",
        streamingLinks: {
            spotify: "https://open.spotify.com/album/5lKlFlReHOLShQKyRv6AL9",
            appleMusic: "https://music.apple.com/us/album/future-nostalgia/1538003494",
            youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_l7K2QVWwZ8c6M1ZSHUR1-tBNTR4FE-B-Q",
            soundcloud: "https://soundcloud.com/dualipa/sets/future-nostalgia"
        }
    },
    {
        id: 4,
        title: "Certified Lover Boy",
        artist: "Drake",
        genre: "Hip-Hop",
        year: 2021,
        tracks: 21,
        duration: "86:02",
        rating: 4.3,
        cover: "https://24posters.co/cdn/shop/files/d6578ec2-6ccd-46d6-b211-b36fb320fb91.png?v=1691101380&width=1946",
        description: "Szósty studyjny album Drake'a, eksplorujący tematy miłości i relacji.",
        streamingLinks: {
            spotify: "https://open.spotify.com/album/3SpBlxme9WbeQdI9kx7KAV",
            appleMusic: "https://music.apple.com/us/album/certified-lover-boy/1584281467",
            youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_kFnY2E8d4PvMrAE6TNCOA7SH8XKUEqPzs",
            soundcloud: "https://soundcloud.com/octobersveryown/sets/certified-lover-boy"
        }
    },
    {
        id: 5,
        title: "Happier Than Ever",
        artist: "Billie Eilish",
        genre: "Pop",
        year: 2021,
        tracks: 16,
        duration: "56:47",
        rating: 4.5,
        cover: "https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg",
        description: "Drugi studyjny album Billie Eilish, pokazujący jej ewolucję artystyczną.",
        streamingLinks: {
            spotify: "https://open.spotify.com/album/0JGOiO34nwfUdDrD612dOp",
            appleMusic: "https://music.apple.com/us/album/happier-than-ever/1574004502",
            youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_kTX_tbdLECVdTABnKHYHOmPGJ8fQx5jdg",
            soundcloud: "https://soundcloud.com/billieeilish/sets/happier-than-ever"
        }
    },
    {
        id: 6,
        title: "÷ (Divide)",
        artist: "Ed Sheeran",
        genre: "Pop",
        year: 2017,
        tracks: 16,
        duration: "59:14",
        rating: 4.4,
        cover: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
        description: "Trzeci studyjny album Ed Sheerana, zawierający hity jak 'Shape of You' i 'Perfect'.",
        streamingLinks: {
            spotify: "https://open.spotify.com/album/3T4tUhGYeRNVUGevb0wThu",
            appleMusic: "https://music.apple.com/us/album/1193701079",
            youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_lLjTXzNO2aNAe9fUP4OSvEfsJctaJgUaA",
            soundcloud: "https://sheeran.lnk.to/DivideFA"
        }
    },
    {
        id: 7,
        title: "Evolve",
        artist: "Imagine Dragons",
        genre: "Rock",
        year: 2017,
        tracks: 11,
        duration: "38:28",
        rating: 4.2,
        cover: "https://fonoteka.com.ua/content/images/47/1000x1000l80nn0/imagine-dragons-evolve-vinyl-lp-82244846210008.jpg",
        description: "Trzeci studyjny album Imagine Dragons z hitami 'Thunder' i 'Believer'.",
        streamingLinks: {
            spotify: "https://open.spotify.com/album/51s30K7a36ORx6AAaPBRRY",
            appleMusic: "https://music.apple.com/us/album/evolve/1440857781",
            youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_mHOkScCGsQcGdYXA_kp3F-qlxH_V_Eo-s",
            soundcloud: "https://imaginedragons.lnk.to/EvolveFP/officialartiststore"
        }
    },
    {
        id: 8,
        title: "Thank U, Next",
        artist: "Ariana Grande",
        genre: "Pop",
        year: 2019,
        tracks: 12,
        duration: "41:07",
        rating: 4.6,
        cover: "https://media.pitchfork.com/photos/659eeae17d0116424c2fda2a/master/pass/Ariana-Grande-Thank-U-Next.jpg",
        description: "Piąty studyjny album Ariany Grande, osobisty i emocjonalny.",
        streamingLinks: {
            spotify: "https://open.spotify.com/album/2fYhqwDWXjbpjaIJPEfKFw",
            appleMusic: "https://music.apple.com/us/album/thank-u-next/1450330588",
            youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_lNjaMM6qNaQAGSHybSHdmdBcEnx8VEMfE",
            soundcloud: "https://soundcloud.com/arithankunext"
        }
    },
    {
        id: 9,
        title: "Hollywood's Bleeding",
        artist: "Post Malone",
        genre: "Hip-Hop",
        year: 2019,
        tracks: 17,
        duration: "51:05",
        rating: 4.4,
        cover: "https://thesoundofvinyl.us/cdn/shop/products/Hollywood_sBleeding.jpg?v=1592839235",
        description: "Trzeci studyjny album Post Malone z hitami 'Circles' i 'Sunflower'.",
        streamingLinks: {
            spotify: "https://open.spotify.com/album/4g1ZRSobMefqF6nelkgibi",
            appleMusic: "https://music.apple.com/us/album/hollywoods-bleeding/1477880265",
            youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_kqnYt6b_116Fv1EoAquGLDB-PQoK_J8Wg",
            soundcloud: "https://soundcloud.com/postmalone/sets/hollywoods-bleeding-1"
        }
    },
    {
        id: 10,
        title: "Everyday Life",
        artist: "Coldplay",
        genre: "Rock",
        year: 2019,
        tracks: 16,
        duration: "53:23",
        rating: 4.0,
        cover: "https://upload.wikimedia.org/wikipedia/ru/thumb/1/12/Everyay_Life.jpg/330px-Everyay_Life.jpg",
        description: "Ósmy studyjny album Coldplay, podwójny album eksplorujący różne style.",
        streamingLinks: {
            spotify: "https://open.spotify.com/album/2FeyIYDDAQqcOJKOKhvHdr",
            appleMusic: "https://music.apple.com/us/album/everyday-life/1484143590",
            youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_lNjaMM6qNaQAGSHybSHdmdBcEnx8VEMfE",
            soundcloud: "https://soundcloud.com/user-7235302/sets/coldplay-everyday-life-album"
        }
    }
];

let filteredAlbums = [...albums];
let currentView = 'grid';

function renderAlbumsGrid(albumsToRender) {
    const grid = document.getElementById('albumsGrid');
    
    if (albumsToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">Nie znaleziono albumów</h4>
                <p class="text-muted">Spróbuj zmienić kryteria wyszukiwania</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = albumsToRender.map(album => `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card album-card h-100">
                <img src="${album.cover}" class="card-img-top album-cover" alt="${album.title}">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title">${album.title}</h6>
                    <p class="card-text text-primary small mb-2">${album.artist}</p>
                    <div class="mb-2">
                        <span class="genre-badge">${album.genre}</span>
                        <span class="badge bg-dark ms-1">${album.year}</span>
                    </div>
                    <p class="card-text text-muted small flex-grow-1">${album.description}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <small class="text-muted">
                                <i class="fas fa-music me-1"></i>${album.tracks} utworów
                            </small>
                            <small class="text-muted">
                                <i class="fas fa-clock me-1"></i>${album.duration}
                            </small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <div class="text-warning">
                                ${generateStars(album.rating)}
                            </div>
                            <small class="text-muted">${album.rating}/5</small>
                        </div>
                        <div class="streaming-links">
                            <small class="text-muted d-block mb-1">Słuchaj na:</small>
                            <div class="d-flex flex-wrap gap-1">
                                ${generateStreamingButtons(album.streamingLinks)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderAlbumsList(albumsToRender) {
    const grid = document.getElementById('albumsGrid');
    
    if (albumsToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">Nie znaleziono albumów</h4>
                <p class="text-muted">Spróbuj zmienić kryteria wyszukiwania</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = `
        <div class="col-12">
            <div class="card bg-secondary border-0">
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-dark table-hover mb-0">
                            <thead>
                                <tr>
                                    <th width="60"></th>
                                    <th>Tytuł</th>
                                    <th>Artysta</th>
                                    <th>Gatunek</th>
                                    <th>Rok</th>
                                    <th>Utwory</th>
                                    <th>Czas</th>
                                    <th>Ocena</th>
                                    <th>Streaming</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${albumsToRender.map(album => `
                                    <tr>
                                        <td>
                                            <img src="${album.cover}" class="rounded" width="40" height="40" alt="${album.title}">
                                        </td>
                                        <td class="text-light fw-bold">${album.title}</td>
                                        <td class="text-primary">${album.artist}</td>
                                        <td><span class="genre-badge">${album.genre}</span></td>
                                        <td class="text-muted">${album.year}</td>
                                        <td class="text-muted">${album.tracks}</td>
                                        <td class="text-muted">${album.duration}</td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="text-warning me-2">
                                                    ${generateStars(album.rating)}
                                                </div>
                                                <small class="text-muted">${album.rating}</small>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="d-flex gap-1">
                                                ${generateStreamingButtons(album.streamingLinks)}
                                            </div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
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

function generateStreamingButtons(streamingLinks) {
    if (!streamingLinks) return '';
    
    const platforms = [
        { key: 'spotify', name: 'Spotify', icon: 'fab fa-spotify', color: 'success' },
        { key: 'appleMusic', name: 'Apple Music', icon: 'fab fa-apple', color: 'dark' },
        { key: 'youtubeMusic', name: 'YouTube Music', icon: 'fab fa-youtube', color: 'danger' },
        { key: 'soundcloud', name: 'SoundCloud', icon: 'fab fa-soundcloud', color: 'warning' }
    ];
    
    return platforms
        .filter(platform => streamingLinks[platform.key])
        .map(platform => `
            <a href="${streamingLinks[platform.key]}" 
               target="_blank" 
               class="btn btn-outline-${platform.color} btn-sm" 
               title="${platform.name}"
               style="font-size: 0.75rem; padding: 0.25rem 0.5rem;">
                <i class="${platform.icon}"></i>
            </a>
        `).join('');
}

function renderAlbums(albumsToRender) {
    if (currentView === 'grid') {
        renderAlbumsGrid(albumsToRender);
    } else {
        renderAlbumsList(albumsToRender);
    }
}

function searchAlbums() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    filteredAlbums = albums.filter(album => {
        const matchesSearch = album.title.toLowerCase().includes(searchTerm) ||
                            album.artist.toLowerCase().includes(searchTerm) ||
                            album.genre.toLowerCase().includes(searchTerm);
        const matchesGenre = !genreFilter || album.genre === genreFilter;
        const matchesYear = !yearFilter || 
                          (yearFilter === 'older' ? album.year < 2020 : album.year.toString() === yearFilter);
        
        return matchesSearch && matchesGenre && matchesYear;
    });

    filteredAlbums.sort((a, b) => {
        switch(sortBy) {
            case 'artist':
                return a.artist.localeCompare(b.artist);
            case 'year':
                return b.year - a.year;
            case 'rating':
                return b.rating - a.rating;
            case 'title':
            default:
                return a.title.localeCompare(b.title);
        }
    });
    
    renderAlbums(filteredAlbums);
}

document.addEventListener('DOMContentLoaded', function() {
    renderAlbums(albums);

    document.getElementById('searchInput').addEventListener('input', searchAlbums);
    document.getElementById('genreFilter').addEventListener('change', searchAlbums);
    document.getElementById('yearFilter').addEventListener('change', searchAlbums);
    document.getElementById('sortBy').addEventListener('change', searchAlbums);

    document.getElementById('gridView').addEventListener('click', function() {
        currentView = 'grid';
        this.classList.add('active');
        document.getElementById('listView').classList.remove('active');
        renderAlbums(filteredAlbums);
    });
    
    document.getElementById('listView').addEventListener('click', function() {
        currentView = 'list';
        this.classList.add('active');
        document.getElementById('gridView').classList.remove('active');
        renderAlbums(filteredAlbums);
    });
}); 