// Keep track of which image is currently showing
let currentIndex = 0;
let currentImages = [];

function renderGrid() {
    items.sort((a, b) => (a.sold === b.sold) ? 0 : a.sold ? 1 : -1);
    const grid = document.getElementById('landing-page');
    grid.innerHTML = items.map(item => `
        <div class="thumbnail-card" 
             style="${item.sold ? 'opacity: 0.6; cursor: default;' : ''}" 
             onclick="${item.sold ? '' : `showItem(${item.id})`}">
            ${item.sold ? '<div class="sold-badge">Sold</div>' : ''}
            <img src="${item.images[0]}" alt="${item.title}">
            <div class="info">
                <span class="item-name">${item.title}</span>
                <span class="item-price">${item.price}</span>
            </div>
        </div>
    `).join('');
}

function showItem(id) {
    const item = items.find(i => i.id === id);
    
    // Store current item info for the arrows
    currentImages = item.images;
    currentIndex = 0;

    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('main-header').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';

    document.getElementById('item-title').innerText = item.title;
    document.getElementById('detail-price').innerText = item.price;
    document.getElementById('item-description').innerHTML = item.description;
    
    // Set the first image
    document.getElementById('item-image').src = item.images[0];
    
    // --- UPDATED ARROW LOGIC ---
    const container = document.querySelector('.main-image-wrapper') || document.querySelector('.gallery-container');
    
    // Clean out old arrows to prevent duplicates
    document.querySelectorAll('.nav-arrow').forEach(a => a.remove());
    
    // Only add arrows if there is more than one image
    if (item.images.length > 1) {
        container.insertAdjacentHTML('afterbegin', `
            <button class="nav-arrow prev-arrow" onclick="moveImage(event, -1)">&#10094;</button>
        `);
        container.insertAdjacentHTML('beforeend', `
            <button class="nav-arrow next-arrow" onclick="moveImage(event, 1)">&#10095;</button>
        `);
    }
    
    const thumbRow = document.getElementById('thumbnail-row');
    thumbRow.innerHTML = '';
    item.images.forEach((src, idx) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'thumb-nav' + (idx === 0 ? ' active' : '');
        img.onclick = (e) => {
            e.stopPropagation();
            currentIndex = idx; 
            changeImage(src, img);
        };
        thumbRow.appendChild(img);
    });

    document.getElementById('email-subject').value = "Garage Sale: " + item.title;
    document.getElementById('message-body').value = `Hi, I'm interested in the ${item.title}. Is it still available?`;
    
    window.scrollTo(0,0);
}

// Updated Move function with Event handling
function moveImage(event, direction) {
    if (event) event.stopPropagation(); // Prevents the Lightbox from opening when clicking arrows
    
    currentIndex += direction;
    
    // Loop around logic
    if (currentIndex >= currentImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentImages.length - 1;
    
    const newSrc = currentImages[currentIndex];
    const allThumbs = document.querySelectorAll('.thumb-nav');
    
    // Update the main image and the active thumbnail state
    changeImage(newSrc, allThumbs[currentIndex]);
}

function changeImage(src, el) {
    document.getElementById('item-image').src = src;
    document.querySelectorAll('.thumb-nav').forEach(t => t.classList.remove('active'));
    if(el) {
        el.classList.add('active');
        // Scroll thumbnail into view if there are many
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

function openLightbox() {
    const src = document.getElementById('item-image').src;
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function showHome() {
    document.getElementById('landing-page').style.display = 'grid';
    document.getElementById('main-header').style.display = 'block';
    document.getElementById('detail-view').style.display = 'none';
    window.scrollTo(0,0);
}

// Initial boot
renderGrid();