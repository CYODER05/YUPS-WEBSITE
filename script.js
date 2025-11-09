const header = document.getElementById("page-header");
const main = document.getElementById("page-main");
const footer = document.getElementById("page-footer");

// Function for creating elements
const createElement = (tag, className = '', textContent = '', id = '') => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    if (id) element.id = id;
    return element;
};

// Array for sidebar and main navigation page links & text
const links = [
    { text: "MENU", href: "menu.html" },
    { text: "CONTACT", href: "index.html" },
    { text: "JOBS", href: "jobs.html" }
];

// Header content & elements
const createHeader = () => {
    const logoContainer = createElement("div", "logoContainer width100 height100 flex flexColumn leftRightPadding2 fontSize1 bold");
    const logo = createElement("a", "logoAnchor link black", "YUP'S");
    logo.href = "index.html";
    logoContainer.appendChild(logo);
    header.appendChild(logoContainer);

    const nav = createElement("nav", "navigation flex flexColumn absolute width100 displayNone");
    const list = createElement("ul", "flex gap2");
    const sidebarContainer = createElement("div", "sidebarContainer height100 flex bkgBlack", '', "sidebarContainer");
    const closeSidebar = createElement("a", "closeBtn leftRightPadding2 topPadding1", "×", "closeBtn");
    sidebarContainer.appendChild(closeSidebar);

    // Element creation for page links
    links.forEach(link => {
        const HdPageLinks = createElement("div", "HdPageLinks black flex flexColumn bold pointer" + " " + `${link.text.toLowerCase()}`, link.text);
        HdPageLinks.type = "button";
        list.appendChild(HdPageLinks);

        const sideBarLink = createElement("div", "sideBarLinks link white width100 leftRightPadding2 fontSize1 bold" + " " + `${link.text.toLowerCase()}`, link.text);
        sideBarLink.type = "button";
        sidebarContainer.appendChild(sideBarLink);        
    });

    nav.appendChild(list);
    header.appendChild(nav);
    header.appendChild(sidebarContainer);

    const navBars = createElement("div", "navBars absolute pointer leftRightPadding2", '', "navBars");
    const icon = createElement("i", "fa-solid fa-bars fontSize05 noOverflowY");
    navBars.appendChild(icon);
    header.appendChild(navBars);

    navBars.addEventListener("click", () => {
        sidebarContainer.style.width = "100vw";
    });

    closeSidebar.addEventListener("click", () => {
        sidebarContainer.style.width = "0";
    });
};

// Main content & elements
const section = document.querySelector("main");
const mainFunctions = {
    "main": () => {
        const mainImg = createElement("div", "mainImg width100");
        main.appendChild(mainImg);
    
        const mapContainer = createElement("div", "mapContainer width100 flex");
        const map = createElement("iframe", "map width100", '', '');
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

        const menuHero = createElement("div", "menuHero flex", "MENU", "menuHero");
        main.appendChild(menuHero);      
        
        const menu = {
            items: [
                { name: "cone / cup", id: 1 },
                { name: "waffle cone", id: 2 },
                { name: "sugar cone", id: 3 },
                { name: "baby cone / cup", id: 4},
                { name: "sundaes", id: 5 },
                { name: "specialty sundaes", id: 6 },
                { name: "topsy turvey", id: 7 },
                { name: "banana split", id: 8 },
                { name: "shakes", id: 9 },
                { name: "malts", id: 10 },
                { name: "freeze", id: 11 },
                { name: "flurry", id: 12 },
                { name: "rootbeer float / boston cooler", id: 13 },
                { name: "hfbd / strawberry shortcake", id: 14 },
                { name: "Pint / Quart", id: 15 },
                { name: "Ice Cream Sandwiches", id: 16},
                { name: "Rockets", id: 17},
                { name: "Beachy Bars", id: 18}
            ],
        
            type1: ["soft serve", "yogurt"],
            ssySizes: ["small", "medium", "large"],
            type2: ["hand dip"],
            hdSizes: ["1 scoop", "2 scoops", "3 scoops"],
            novSizes: ["each or 11 for"],
        
            prices1: ["$2.50", "$3.75", "$4.50"],
            prices2: ["$3.00", "$4.25", "$5.25"],
            prices3: ["$4.50"],
            prices4: ["$4.95"],
            prices5: ["$4.75", "$5.25", "$5.75"],
            prices6: ["$2.50"],
            prices7: ["$2.75"],
            prices8: ["$2.75", "$3.25", "$3.75"],
            prices9: ["$0.75", "$1.25"],
            prices10: ["$0.85", "$1.50"],
            prices11: ["$2.75", "$4.25", "$5.25"],
            prices12: ["$3.25", "$4.75", "$5.75"],
            prices13: ["$4.75", "$5.75"],
            prices14: ["$5.25", "$6.25"],
            prices15: ["$4.50", "$5.50", "$6.50"],
            prices16: ["$4.75", "$5.75", "$6.75"],
            prices17: ["$4.75", "$5.75"],
            prices18: ["$5.25", "$6.25"],
            prices19: ["$4.50", "$5.00", "$6.00"],
            prices20: ["$4.25", "$5.25", "$6.25"],
            prices21: ["$4.15", "$5.25", "$6.40"],
            prices22: ["$4.40", "$5.50", "$6.65"],
            prices23: ["$4.75", "$5.75"],
            prices24: ["$5.25", "$6.25"],
            prices25: ["$4.50", "$5.50", "$6.50"],
            prices26: ["$4.75", "$5.75", "$6.75"],
            prices27: ["$4.00", "$5.00"],
            prices28: ["$4.50", "$5.50"],
            prices29: ["$4.75", "$8.00"],
            prices30: ["$5.50", "$8.50"],
            prices31: ["$4.50", "$7.00"],
            prices32: ["$5.25", "$7.50"],
            prices33: ["$1.75", "$17.50"],
            prices34: ["$1.80", "$18.00"],
            prices35: ["$2.75", "$27.00"]
        };
        
        const createTypeContainer = (type, sizes, isSundae) => {
            const typeContainer = createElement("div", type);
            const typeSize = createElement("div", "typeSize");
            const typeName = createElement("div", "typeName staatliches", type);
            typeSize.appendChild(typeName);
            
            const sizeContent = isSundae ? menu.ssySizes.join(" - ") : sizes.join(" - ");
            typeSize.appendChild(createElement("div", "sizes", sizeContent));
            
            typeContainer.appendChild(typeSize);
            return typeContainer;
        };
        
        const createProductCard = (item) => {
            const productCard = createElement("div", `${item.name}Container itemContainer flex gap2`, "", item.name.replace(/\s+/g, ""));
            productCard.appendChild(createElement("div", `productName staatliches bold ${item.name}`, item.name));
            
            const isSundae = ["sundaes", "topsy turvey"].includes(item.name);
            const isNovelty = ["Ice Cream Sandwiches", "Rockets", "Beachy Bars"].includes(item.name);
            
            menu.type1.forEach(type => productCard.appendChild(createTypeContainer(type, menu.ssySizes, isSundae)));
            menu.type2.forEach(type => productCard.appendChild(createTypeContainer(type, menu.hdSizes, isSundae)));
            
            return productCard;
        };
        
        
        const iceCreamMenuContainer = createElement("div", "menuContainer flex");
        
        menu.items.forEach(item => {
            const productCard = createProductCard(item);
            iceCreamMenuContainer.appendChild(productCard);
        });
        
        main.appendChild(iceCreamMenuContainer);
               

        const amounts = (prices, type, n) => {
            const amountContainer = createElement("div", "amountContainer");    
            prices.forEach(price => amountContainer.appendChild(createElement("div", "price bold", price)));
            document.getElementsByClassName(type)[n - 1].appendChild(amountContainer);
        };

        amounts(menu.prices1, "soft", 1);
        amounts(menu.prices2, "yogurt", 1);
        amounts(menu.prices2, "hand", 1);
        amounts(menu.prices3, "soft", 2);
        amounts(menu.prices4, "yogurt", 2);
        amounts(menu.prices5, "hand", 2);
        amounts(menu.prices6, "soft", 3);
        amounts(menu.prices7, "yogurt", 3);
        amounts(menu.prices8, "hand", 3);
        amounts(menu.prices9, "soft", 4);
        amounts(menu.prices10, "yogurt", 4);
        amounts(menu.prices10, "hand", 4);
        amounts(menu.prices11, "soft", 5);
        amounts(menu.prices12, "yogurt", 5);
        amounts(menu.prices12, "hand", 5);
        amounts(menu.prices13, "soft", 6);
        amounts(menu.prices14, "yogurt", 6);
        amounts(menu.prices14, "hand", 6);
        amounts(menu.prices15, "soft", 7);
        amounts(menu.prices16, "yogurt", 7);
        amounts(menu.prices16, "hand", 7);
        amounts(menu.prices17, "soft", 8);
        amounts(menu.prices18, "yogurt", 8);
        amounts(menu.prices19, "soft", 9);
        amounts(menu.prices20, "yogurt", 9);
        amounts(menu.prices21, "soft", 10);
        amounts(menu.prices22, "yogurt", 10);
        amounts(menu.prices23, "soft", 11);
        amounts(menu.prices24, "yogurt", 11);
        amounts(menu.prices25, "soft", 12);
        amounts(menu.prices26, "yogurt", 12);
        amounts(menu.prices26, "hand", 12);
        amounts(menu.prices27, "soft", 13);
        amounts(menu.prices28, "yogurt", 13);
        amounts(menu.prices28, "hand", 13);
        amounts(menu.prices29, "soft", 14);
        amounts(menu.prices30, "yogurt", 14);
        amounts(menu.prices30, "hand", 14);
        amounts(menu.prices31, "soft", 15);
        amounts(menu.prices32, "yogurt", 15);
        amounts(menu.prices32, "hand", 15);


        const deleteSizes = document.getElementsByClassName("sizes");
        const sizeUpdates = {
            clear: [3, 4, 6, 7],
            babyCone: [9, 10, 11],
            medium: [15, 16, 17, 21, 22, 23, 30, 31, 32, 36, 37, 38, 39, 40, 41],
            large: [42, 43, 44]
        };
        
        sizeUpdates.clear.forEach(index => {
            deleteSizes[index].innerHTML = "";
        });
        
        sizeUpdates.babyCone.forEach(index => {
            deleteSizes[index].innerHTML = "2oz cone/cup - 4oz cup";
        });
        
        sizeUpdates.medium.forEach(index => {
            deleteSizes[index].innerText = "small - large";
        });
        
        sizeUpdates.large.forEach(index => {
            deleteSizes[index].innerHTML = "pint - quart";
        });


        const cleanUpElements = (selectors, indexes) => {
            indexes.forEach(index => document.getElementsByClassName(selectors)[index]?.remove());
        };

        cleanUpElements("soft", [17, 16, 15]);
        cleanUpElements("yogurt", [17, 16, 15]);
        cleanUpElements("hand", [17, 16, 15, 11, 10, 9, 8]);

        const novAmounts = (prices, typeId) => {
            const element = document.getElementById(typeId);
            if (element) {
                element.appendChild(createElement("div", "novAmount menuStyleMid staatliches", `${prices[0]} for each or 11 for ${prices[1]}`));
            }
        };

        novAmounts(menu.prices33, "IceCreamSandwiches", 1);
        novAmounts(menu.prices34, "Rockets", 1);
        novAmounts(menu.prices35, "BeachyBars", 1);

        if (document.getElementsByClassName("specialty")) {
            const product = document.getElementsByClassName("specialty")[1];
            const details = createElement("details", "sundaeDetails");
            const summary = createElement("summary", "specialtySummary", "TYPES");
            details.appendChild(summary);
            const info = createElement("p", "sundaeInfo", "Turtles / Nut Dip / Butter Pecan / Tin Roof");
            details.appendChild(info);
            product.appendChild(details);
        }; 

        const hotFoodMenuContainer = createElement("div", "menuContainer displayNone");

        const menu2 = {
            items: [
                { name: "Hamburger", id: 1 },
                { name: "Doubule Hamburger", id: 2 },
                { name: "Cheeseburger", id: 3 },
                { name: "Double Cheeseburger", id: 4},
                { name: "Bacon Cheeseburger", id: 5 },
                { name: "Double Bacon Cheeseburger", id: 6 },
                { name: "BBQ", id: 7 },
                { name: "BLT", id: 8 },
                { name: "Ham Club", id: 9 },
                { name: "Ham & Cheese", id: 10 },
                { name: "Chicken Fillet", id: 11 },
                { name: "Hot Dog", id: 12 },
                { name: "Chili Dog", id: 13 },
                { name: "Chili/Cheese Dog", id: 14 },
                { name: "Walking Taco", id: 15 },
                { name: "Nachos & Cheese", id: 16 },
                { name: "Chili & Cheese Nachos", id: 17 },
                { name: "Soft Pretzel", id: 18 }
            ],

            prices: ["$5.50", "$7.00", "$6.25", "$7.25", "$7.25", "$8.75", "$6.50", "$5.25", "$6.50", "$5.25", "$6.50", "$2.75", "$3.25", "$3.50", "$2.75", "$3.75", "$4.25", "$3.50"]
        };

        const createProductCard2 = (item) => {
            const productCard = createElement("div", `${item.name}Container itemContainer flex gap2`, "", `${item.name.split(" ").join("").toLowerCase()}`);
            const productName = createElement("div", `productName staatliches bold ${item.name}`, `${item.name}`);
            productCard.appendChild(productName);

            const price = createElement("div", "menuStyleMid staatliches", `${menu2.prices[item.id - 1]}`);
            productCard.appendChild(price);
        
            return productCard;
        }; 

        menu2.items.forEach(item => {
            const productCard = createProductCard2(item);
            hotFoodMenuContainer.appendChild(productCard);
        });

        main.appendChild(hotFoodMenuContainer);


        const drinksMenuContainer = createElement("div", "drinksMenuContainer menuContainer displayNone");

        const menu3 = {
            items: [
                { name: "Drinks & Slushies", id: 1 },
                { name: "Soft Drinks", id: 2 },
                { name: "Slushies", id: 3 },
                { name: "Yup's Cup", id: 4 }
            ],
            flavors: {
                sdFlavors: ["Coke", "Diet Coke", "Cherry Coke", "Root Beer", "Mtn Dew", "Orange Fanta", "Lemonade"],
                slFlavors: ["Blue Raspberry", "Green Dragon", "Strawberry Kiwi", "Lime", "Cherry", "Grape", "Strawberry", "Orange", "Lemon", "Lemon Lime", "Watermelon"],
                yupsCup: ["$5.00", "$1.00 limitless Refills"],
                sizes: ["12oz - $1.75", "16oz - $2.00", "24oz - $2.25"],
            }
        };

        const createProductCard3 = (item) => {
            const productCard = createElement("div", `${item.name}Container itemContainer flex gap2`, "", `${item.name.split(" ").join("").toLowerCase()}`, `${item.name}Container`);
            const productName = createElement("div", `productName staatliches bold ${item.name}`, `${item.name}`);
            productCard.appendChild(productName);
        
            const assignFlavor = (flavorType) => {
                flavorType.forEach(flavor => {
                    const flavorHeader = createElement("div", "menuStyleMid staatliches", flavor);
                    productCard.appendChild(flavorHeader);
                });
            };

            const flavorMapping = {
                "Drinks & Slushies": menu3.flavors.sizes,
                "Soft Drinks": menu3.flavors.sdFlavors,
                "Slushies": menu3.flavors.slFlavors,
                "Yup's Cup": menu3.flavors.yupsCup
            };

            assignFlavor(flavorMapping[item.name]);

            return productCard;
        };

        menu3.items.forEach(item => {
            const product = createProductCard3(item);
            drinksMenuContainer.appendChild(product);
        });

        main.appendChild(drinksMenuContainer);



        const menuButtonContainer1 = createElement("div", "menuButtonContainer sticky bottom flex", "", "menuButtonContainer");
        main.appendChild(menuButtonContainer1);

        // Menu option buttons:
        let menuOptions = ["Ice Cream", "Hot Food", "Drinks"];
        const menuButtonContainer = document.getElementById("menuButtonContainer");

        drinksMenuContainer.style.display = "none";
        hotFoodMenuContainer.style.display = "none";
        iceCreamMenuContainer.style.display = "flex";
        
        const updateMenuOptions = (scrollPos) => {
            if (scrollPos < 100) {
                return ["Ice Cream", "Hot Food", "Drinks"];
            } else if (scrollPos >= document.documentElement.scrollHeight - window.innerHeight - 450) {
                return ["Ice Cream", "Hot Food", "Drinks"];
            } else if (iceCreamMenuContainer.style.display === "flex") {
                return ["Cone/Cup", "Sundaes", "Shakes", "rootbeerfloat/bostoncooler"];
            } else if (hotFoodMenuContainer.style.display === "flex") {
                return ["Hamburger", "BBQ", "Walking Taco"];
            } else {
                return ["Soft Drinks", "Slushies"];
            }
        };
        
        const renderMenuButtons = (options) => {
            // Clear existing buttons
            menuButtonContainer.innerHTML = '';
            
            options.forEach((option) => {
                const button = createElement("button", "menuButton bold", `${option.replace("/Cup", "s").replace("rootbeerfloat/bostoncooler", "Floats").replace("Hamburger", "Burgers").replace("BBQ", "Sandwiches").replace("Walking Taco", "Snakcs & Sides")}`);
                const id = document.getElementById(option.split(" ").join("").toLowerCase());
                menuButtonContainer.appendChild(button);
                button.addEventListener("click", () => {
                    if (option === "Hot Food") {
                        iceCreamMenuContainer.style.display = "none";
                        drinksMenuContainer.style.display = "none";
                        hotFoodMenuContainer.style.display = "flex";
                        hotFoodMenuContainer.scrollIntoView({ behavior: 'smooth' });
                    } else if (option === "Drinks") {
                        iceCreamMenuContainer.style.display = "none";
                        hotFoodMenuContainer.style.display = "none";
                        drinksMenuContainer.style.display = "flex";
                        drinksMenuContainer.scrollIntoView({ behavior: 'smooth' });
                    } else if (option === "Ice Cream") {
                        hotFoodMenuContainer.style.display = "none";
                        drinksMenuContainer.style.display = "none";
                        iceCreamMenuContainer.style.display = "flex";
                        iceCreamMenuContainer.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        id.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        };
        
        document.addEventListener("scroll", () => {
            const scrollPos = window.scrollY;
            const newMenuOptions = updateMenuOptions(scrollPos);
            renderMenuButtons(newMenuOptions);
        });
        
        // Initial render
        renderMenuButtons(menuOptions);


        

    },
    "about": () => {
        section.replaceChildren();
        const container = createElement("div", "container width100 height100 flex flexColumn", "ABOUT");
        main.appendChild(container);
    },
    "contact": () => {
        section.replaceChildren();
        const contactContainer = createElement("a", "contactContainer width100 height100 flex flexColumn link menuStyleMid staatliches centerText");
        contactContainer.href = `tel:${574-370-5813}`;
        contactContainer.innerHTML = `PHONE NUMBER: <br> +1 (574) 370 - 5813`
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

// Footer content & elements
const createFooter = () => {
    const footerMenu = createElement("div", "footerMenu width100 flex flexColumn gap2 topPadding2 bottomPadding2 bkgBlack");
    
    links.forEach(link => {
        const pageLink = createElement("div", "link white bold pointer" + " " + `${link.text.toLowerCase()}`, link.text);
        footerMenu.appendChild(pageLink);
    });
    
    const footerSocial = createElement("div", "footerSocial white topPadding2 flex flexColumn gap2", "Find Us On Facebook!");
    footerMenu.appendChild(footerSocial);

    const socialLink = createElement("a", "socialLink", '', '');
    socialLink.href = "https://www.facebook.com/yupsdairyland";
    socialLink.target = "_blank";
    footerSocial.appendChild(socialLink);

    const socialIcon = createElement("i", "socialIcon fa-brands fa-facebook white fontSize1 noOverflowY");
    socialLink.appendChild(socialIcon);

    const footerCopyright = createElement("div", "footerCopyright white paddingLeftRight centerText", "© 2025 Yup's Dairyland Inc. All rights reserved.");
    footerMenu.appendChild(footerCopyright);

    footer.appendChild(footerMenu);
}

// Function to initiate page
const init = () => {
    createHeader();
    if (main) {
        mainFunctions["main"]();
    };
    
    createFooter();

    // Page selection
    const classNames = [];
    for (let i = 0; i < links.length; i++) {
        classNames.push(links[i].text.toLowerCase());
    };

    classNames.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
            element.addEventListener("click", () => {
                mainFunctions[element.classList[element.classList.length - 1]]();
                sidebarContainer.style.width = "0";
            });
        });
    });
};

window.onload = init;
