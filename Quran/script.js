// Function to load the Quran page image
function loadPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    currentPage = pageNumber;
    quranPageImg.src = `https://www.mushaf.ma/fahres/page/images/muhammadi/page${currentPage + 2}.png`;
    updateNavigation();
    updatePageNumberDisplay();
}

// Function to update the navigation buttons
function updateNavigation() {
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

// Function to update the current page number display
function updatePageNumberDisplay() {
    const pageNumberDisplay = document.getElementById('pageNumberDisplay');
    if (pageNumberDisplay) {
        pageNumberDisplay.textContent = `الصفحة: ${currentPage}`;
    }
}

// Function to populate the Surah list
function populateSuraList() {
    quranData.Sura.forEach((sura, index) => {
        if (index === 0) return; // Skip the first empty entry
        const li = document.createElement('li');
        li.textContent = sura[0]; // Display the Surah name
        li.addEventListener('click', () => {
            // Find the starting page of the Surah
            const page = quranData.Page.findIndex(page => page[0] === index);
            if (page !== -1) {
                loadPage(page);
            }
        });
        suraList.appendChild(li);
    });
}

// Function to initialize the page number display
function initializePageNumberDisplay() {
    const pageNumberDisplay = document.createElement('div');
    pageNumberDisplay.id = 'pageNumberDisplay';
    pageNumberDisplay.textContent = `الصفحة: ${currentPage}`;
    document.querySelector('.navigation').appendChild(pageNumberDisplay);
}

// Event listeners for navigation buttons
prevPageBtn.addEventListener('click', () => {
    loadPage(currentPage - 1);
});

nextPageBtn.addEventListener('click', () => {
    loadPage(currentPage + 1);
});

// Initialize the app
function initializeApp() {
    loadPage(currentPage); // Load the first page
    updateNavigation(); // Update navigation buttons
    populateSuraList(); // Populate the Surah list
    initializePageNumberDisplay(); // Initialize the page number display
}

// Start the app
initializeApp();
