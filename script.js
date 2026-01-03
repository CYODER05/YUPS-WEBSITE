// ===================================
// DOM REFERENCES
// ===================================
const header = document.getElementById("page-header");
const main = document.getElementById("page-main");
const footer = document.getElementById("page-footer");

// ===================================
// UTILITY FUNCTIONS
// ===================================

/**
 * Creates an HTML element with optional className, textContent, and id
 */
const createElement = (tag, className = '', textContent = '', id = '') => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    if (id) element.id = id;
    return element;
};

// ===================================
// NAVIGATION DATA
// ===================================
const NAVIGATION_LINKS = [
    { text: "MENU", href: "menu.html" },
    { text: "CONTACT", href: "/" },
    { text: "JOBS", href: "jobs.html" }
];

// ===================================
// HEADER CREATION
// ===================================
const createHeader = () => {
    // Logo
    const logoContainer = createElement("div", "logoContainer width100 height100 flex flexColumn leftRightPadding2 fontSize1 bold");
    const logo = createElement("a", "logoAnchor link black", "YUP'S");
    logo.href = "index.html";
    logoContainer.appendChild(logo);
    header.appendChild(logoContainer);

    // Navigation
    const nav = createElement("nav", "navigation flex flexColumn absolute width100 displayNone");
    const list = createElement("ul", "flex gap2");
    const sidebarContainer = createElement("div", "sidebarContainer height100 flex bkgBlack", '', "sidebarContainer");
    const closeSidebar = createElement("a", "closeBtn leftRightPadding2 topPadding1", "×", "closeBtn");
    sidebarContainer.appendChild(closeSidebar);

    // Create navigation links
    NAVIGATION_LINKS.forEach(link => {
        const headerLink = createElement("div", `HdPageLinks black flex flexColumn bold pointer ${link.text.toLowerCase()}`, link.text);
        headerLink.type = "button";
        list.appendChild(headerLink);

        const sideBarLink = createElement("div", `sideBarLinks link white width100 leftRightPadding2 fontSize1 bold ${link.text.toLowerCase()}`, link.text);
        sideBarLink.type = "button";
        sidebarContainer.appendChild(sideBarLink);
    });

    nav.appendChild(list);
    header.appendChild(nav);
    header.appendChild(sidebarContainer);

    // Mobile menu button
    const navBars = createElement("div", "navBars absolute pointer leftRightPadding2", '', "navBars");
    const icon = createElement("i", "fa-solid fa-bars fontSize05 noOverflowY");
    navBars.appendChild(icon);
    header.appendChild(navBars);

    // Event listeners
    navBars.addEventListener("click", () => {
        sidebarContainer.style.width = "100vw";
    });

    closeSidebar.addEventListener("click", () => {
        sidebarContainer.style.width = "0";
    });
};

// ===================================
// PAGE RENDERING FUNCTIONS
// ===================================
const section = document.querySelector("main");
const mainFunctions = {
    "main": () => {
        // Hero image
        const mainImg = createElement("div", "mainImg width100");
        main.appendChild(mainImg);

        // Map
        const mapContainer = createElement("div", "mapContainer width100 flex");
        const map = createElement("iframe", "map width100");
        Object.assign(map, {
            style: "border:0",
            loading: "lazy",
            title: "map",
            allowfullscreen: '',
            src: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxXJq6X35FogR_ipzTYqKniA&key=AIzaSyCBDcEd_DOvHh7b6ZksPi-gVKBup_SwP-o"
        });
        mapContainer.appendChild(map);
        main.appendChild(mapContainer);
    },

    "menu": () => {
        section.replaceChildren();
        section.scrollTop = 0;

        // Menu hero section
        const menuHero = createElement("div", "staticMenuHero flex flexColumn", "", "menuHero");
        menuHero.innerHTML = `
            <h1 class="menuTitle">YUP'S DAIRYLAND</h1>
            <p class="menuAddress">53018 STATE ROAD 13, MIDDLEBURY, IN 46540</p>
            <p class="menuPhone">574-370-5813</p>
        `;
        main.appendChild(menuHero);

        // Static Menu Container
        const staticMenuContainer = createElement("div", "staticMenuContainer");
        staticMenuContainer.innerHTML = `
            <!-- Ice Cream Section -->
            <div class="menuSection">
                <table class="menuTable">
                    <thead>
                        <tr>
                            <th class="itemColumn"></th>
                            <th class="priceColumn">SOFT-SERVE</th>
                            <th class="priceColumn">YOGURT</th>
                            <th class="priceColumn">HAND-DIPPED</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="itemName">CONE / CUP<br><span class="sizes">SMALL - MED - LARGE</span></td>
                            <td class="prices">2.55 - 3.80 - 4.55</td>
                            <td class="prices">3.10 - 4.35 - 5.35</td>
                            <td class="prices">2.80 - 4.30 - 5.35</td>
                        </tr>
                        <tr>
                            <td class="itemName">WAFFLE CONE<br><span class="sizes">8 OZ - 12 OZ - 16 OZ</span></td>
                            <td class="prices">4.60</td>
                            <td class="prices">5.00</td>
                            <td class="prices">4.90 - 5.45 - 5.90</td>
                        </tr>
                        <tr>
                            <td class="itemName">SUGAR CONE<br><span class="sizes">8 OZ - 12 OZ - 16 OZ</span></td>
                            <td class="prices">2.60</td>
                            <td class="prices">2.80</td>
                            <td class="prices">2.80 - 3.35 - 3.90</td>
                        </tr>
                        <tr>
                            <td class="itemName">BABY CONE / CUP<br><span class="sizes">2 OZ CONE/CUP | 4 OZ CUP</span></td>
                            <td class="prices">0.80 - 1.60</td>
                            <td class="prices">0.90 - 1.80</td>
                            <td class="prices">0.90 - 1.80</td>
                        </tr>
                        <tr>
                            <td class="itemName">SUNDAES<br><span class="sizes">SMALL - LARGE</span></td>
                            <td class="prices">2.80 - 4.30 - 5.35</td>
                            <td class="prices">3.40 - 4.90 - 5.90</td>
                            <td class="prices">3.40 - 4.90 - 5.90</td>
                        </tr>
                        <tr class="specialty">
                            <td class="itemName specialty-item">SPECIALTY SUNDAES<br><span class="sizes">TURTLES - NUT DIP - BUTTER PECAN - TIN ROOF</span></td>
                            <td class="prices">4.85 - 5.85</td>
                            <td class="prices">5.35 - 6.35</td>
                            <td class="prices">5.35 - 6.35</td>
                        </tr>
                        <tr>
                            <td class="itemName">TOPSY TURVEY<br><span class="sizes">12 OZ - 16 OZ - 24 OZ</span></td>
                            <td class="prices">4.60 - 5.60 - 6.70</td>
                            <td class="prices">4.85 - 5.90 - 6.90</td>
                            <td class="prices">4.85 - 5.90 - 6.90</td>
                        </tr>
                        <tr>
                            <td class="itemName">BANANA SPLIT<br><span class="sizes">SINGLE - DOUBLE</span></td>
                            <td class="prices">4.10 - 5.10 - 6.10</td>
                            <td class="prices">4.35 - 5.35 - 6.35</td>
                            <td class="prices">—</td>
                        </tr>
                        <tr>
                            <td class="itemName">SHAKES<br><span class="sizes">12 OZ - 16 OZ - 24 OZ</span></td>
                            <td class="prices">4.20 - 5.30 - 6.45</td>
                            <td class="prices">4.50 - 5.60 - 6.75</td>
                            <td class="prices">—</td>
                        </tr>
                        <tr>
                            <td class="itemName">MALTS<br><span class="sizes">16 OZ - 24 OZ</span></td>
                            <td class="prices">4.80 - 5.80</td>
                            <td class="prices">5.35 - 6.35</td>
                            <td class="prices">—</td>
                        </tr>
                        <tr>
                            <td class="itemName">FREEZE<br><span class="sizes">12 OZ - 16 OZ - 24 OZ</span></td>
                            <td class="prices">4.60 - 5.60 - 6.60</td>
                            <td class="prices">4.85 - 5.85 - 6.85</td>
                            <td class="prices">—</td>
                        </tr>
                        <tr>
                            <td class="itemName">FLURRY<br><span class="sizes">12 OZ - 16 OZ</span></td>
                            <td class="prices">4.10 - 5.10</td>
                            <td class="prices">4.60 - 5.60</td>
                            <td class="prices">4.60 - 5.60</td>
                        </tr>
                        <tr>
                            <td class="itemName">BOSTON COOLER OR FLOAT<br><span class="sizes">16 OZ - 24 OZ</span></td>
                            <td class="prices">4.85 - 5.85</td>
                            <td class="prices">5.35 - 6.35</td>
                            <td class="prices">5.35 - 6.35</td>
                        </tr>
                        <tr>
                            <td class="itemName">HOT FUDGE BROWNIE DELIGHT<br>STRAWBERRY SHORTCAKE<br><span class="sizes">PINT - QUART</span></td>
                            <td class="prices">4.85 - 8.25</td>
                            <td class="prices">5.60 - 8.60</td>
                            <td class="prices">5.60 - 8.60</td>
                        </tr>
                        <tr>
                            <td class="itemName">LG. QUANTITY<br><span class="sizes">PINT - QUART</span></td>
                            <td class="prices">4.55 - 7.10</td>
                            <td class="prices">5.35 - 7.60</td>
                            <td class="prices">5.35 - 7.60</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Novelties & Toppings Section -->
            <div class="menuSection twoColumn">
                <div class="leftColumn">
                    <h3 class="sectionTitle">NOVELTIES</h3>
                    <div class="menuItem">
                        <span class="itemNameSimple">ICE CREAM SANDWICHES</span>
                        <span class="priceSimple">1.80 EACH OR 11 FOR 18.00</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">ROCKETS</span>
                        <span class="priceSimple">1.90 EACH OR 11 FOR 19.00</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">BEACHY BARS</span>
                        <span class="priceSimple">2.90 EACH OR 11 FOR 29.00</span>
                    </div>
                </div>
                <div class="rightColumn">
                    <h3 class="sectionTitle">TOPPINGS</h3>
                    <div class="menuItem">
                        <span class="itemNameSimple">SPRINKLES</span>
                        <span class="priceSimple">FREE</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">TOASTED COCONUT</span>
                        <span class="priceSimple">0.95</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">EXTRA NUTS OR CANDY</span>
                        <span class="priceSimple">0.95</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">WHIPPED CREAM</span>
                        <span class="priceSimple">FREE</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">DIP COAT</span>
                        <span class="priceSimple">0.95</span>
                    </div>
                </div>
            </div>

            <!-- Hot Food Section -->
            <div class="menuSection twoColumn">
                <div class="leftColumn">
                    <h3 class="sectionTitle">BURGERS & MORE</h3>
                    <div class="menuItem">
                        <span class="itemNameSimple">HAMBURGER</span>
                        <span class="priceSimple">5.60</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">DBL BURGER</span>
                        <span class="priceSimple">7.20</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">CHEESEBURGER</span>
                        <span class="priceSimple">6.35</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">DBL CHEESEBURGER</span>
                        <span class="priceSimple">7.85</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">BACON CHEESEBURGER</span>
                        <span class="priceSimple">7.85</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">DBL BCN CHEESEBURGER</span>
                        <span class="priceSimple">8.95</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">B.B.Q</span>
                        <span class="priceSimple">6.80</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">BLT</span>
                        <span class="priceSimple">5.35</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">HAM & CHEESE</span>
                        <span class="priceSimple">5.35</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">HAM CLUB</span>
                        <span class="priceSimple">6.80</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">WALKING TACO</span>
                        <span class="priceSimple">2.85</span>
                    </div>
                </div>
                <div class="rightColumn">
                    <h3 class="sectionTitle">SANDWICHES & SIDES</h3>
                    <div class="menuItem">
                        <span class="itemNameSimple">HOT DOG</span>
                        <span class="priceSimple">2.80</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">CHILI DOG</span>
                        <span class="priceSimple">3.35</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">CHILI/CHEESE DOG</span>
                        <span class="priceSimple">3.55</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">CHICKEN FILLET</span>
                        <span class="priceSimple">6.80</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">NACHO/CHEESE</span>
                        <span class="priceSimple">3.85</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">NACHO/CHILI/CHEESE</span>
                        <span class="priceSimple">4.40</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">PRETZEL W/CHEESE</span>
                        <span class="priceSimple">3.60</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">EXTRA CHEESE</span>
                        <span class="priceSimple">0.95</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">LAY'S CHIPS</span>
                        <span class="priceSimple">1.30</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">MISS VIKI'S CHIPS</span>
                        <span class="priceSimple">1.30</span>
                    </div>
                    <div class="menuItem">
                        <span class="itemNameSimple">EXTRA BACON</span>
                        <span class="priceSimple">1.55</span>
                    </div>
                </div>
            </div>

            <!-- Drinks Section -->
            <div class="menuSection">
                <h3 class="sectionTitle centered">DRINKS / SLUSHIES</h3>
                <div class="drinksGrid">
                    <div class="drinkSizes">
                        <div class="menuItem">
                            <span class="itemNameSimple">12 OZ</span>
                            <span class="priceSimple">1.85</span>
                        </div>
                        <div class="menuItem">
                            <span class="itemNameSimple">16 OZ</span>
                            <span class="priceSimple">2.10</span>
                        </div>
                        <div class="menuItem">
                            <span class="itemNameSimple">24 OZ</span>
                            <span class="priceSimple">2.35</span>
                        </div>
                        <div class="menuItem">
                            <span class="itemNameSimple">WATER</span>
                            <span class="priceSimple">1.50</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        main.appendChild(staticMenuContainer);
    },

    "about": () => {
        section.replaceChildren();
        const container = createElement("div", "container width100 height100 flex flexColumn", "ABOUT");
        main.appendChild(container);
    },

    "contact": () => {
        section.replaceChildren();
        const contactContainer = createElement("a", "contactContainer width100 height100 flex flexColumn link menuStyleMid staatliches centerText");
        contactContainer.href = "tel:574-370-5813";
        contactContainer.innerHTML = "PHONE NUMBER: <br> +1 (574) 370 - 5813";
        main.appendChild(contactContainer);
    },

    "jobs": () => {
        section.replaceChildren();
        const jobsContainer = createElement("a", "jobsContainer width100 height100 flex flexColumn gap2 fontSize1 leftRightPadding2 centerText", "APPLICATIONS NOW BEING ACCEPTED! Click Here To Apply!");
        jobsContainer.href = "https://docs.google.com/forms/d/e/1FAIpQLSfSDX5tzPkqxAaEt3HtiteYJxs1rlwFL3JABfepkDt0C1NH9Q/viewform?usp=header";
        jobsContainer.target = "_blank";
        jobsContainer.style.color = "black";
        jobsContainer.style.textDecoration = "none";
        main.appendChild(jobsContainer);
    }
};

// ===================================
// FOOTER CREATION
// ===================================
const createFooter = () => {
    const footerMenu = createElement("div", "footerMenu width100 flex flexColumn gap2 topPadding2 bottomPadding2 bkgBlack");

    NAVIGATION_LINKS.forEach(link => {
        const pageLink = createElement("div", `link white bold pointer ${link.text.toLowerCase()}`, link.text);
        footerMenu.appendChild(pageLink);
    });

    const footerSocial = createElement("div", "footerSocial white topPadding2 flex flexColumn gap2", "Find Us On Facebook!");
    footerMenu.appendChild(footerSocial);

    const socialLink = createElement("a", "socialLink");
    socialLink.href = "https://www.facebook.com/yupsdairyland";
    socialLink.target = "_blank";
    footerSocial.appendChild(socialLink);

    const socialIcon = createElement("i", "socialIcon fa-brands fa-facebook white fontSize1 noOverflowY");
    socialLink.appendChild(socialIcon);

    const footerCopyright = createElement("div", "footerCopyright white paddingLeftRight centerText", "© 2026 Yup's Dairyland Inc. All rights reserved.");
    footerMenu.appendChild(footerCopyright);

    footer.appendChild(footerMenu);
};

// ===================================
// INITIALIZATION
// ===================================
const init = () => {
    createHeader();

    if (main) {
        mainFunctions["main"]();
    }

    createFooter();

    // Setup navigation event listeners
    const classNames = NAVIGATION_LINKS.map(link => link.text.toLowerCase());

    classNames.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
            element.addEventListener("click", () => {
                mainFunctions[className]();
                const sidebarContainer = document.getElementById("sidebarContainer");
                if (sidebarContainer) {
                    sidebarContainer.style.width = "0";
                }
            });
        });
    });
};

// Start the application when page loads
window.onload = init;