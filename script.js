const wishlist = {
    "5-20": [
        {
            type: "item",
            name: "нож бабочка",
            description: "хочу научиться крутить его",
            image: "images/btfly.jpg",
            price: 10,
            link: "https://wallapop.com/item/herramienta-mariposa-jkr-1288841783?utm_medium=AppShare&utm_source=ShareItem"
        },

        {
            type: "category",
            name: "фигурки",
            description: "эт мой любимый перс; для коллекции. в комплекте все",

            items: [
                {
                    name: "Loki 2242, 376, 895, 898",
                    image: "images/локи1.jpg",
                    price: "хуй знает, надо у продавца узнать. Все четыре)",
                    link: "https://wallapop.com/item/funko-pop-loki-marvel-studios-1254193852?utm_medium=AppShare&utm_source=ShareItem"
                },

                {
                    name: "Loki 1066",
                    image: "images/локи2.jpg",
                    price: 15,
                    link: "https://wallapop.com/item/funko-pop-loki-1066-edicion-limitada-invierno-1254543623?utm_medium=AppShare&utm_source=ShareItem"
                },

                {
                    name: "Lady Loki 1029, еще можно 615, но он дороже стоит, так что как хочешь",
                    image: "images/локи3.jpg",
                    price: 10,
                    link: "https://wallapop.com/item/funko-pop-marvel-loki-precios-en-la-descripcion-1261585168?utm_medium=AppShare&utm_source=ShareItem"
                }
            ]
        },

        {
            type: "category",
            name: "декор для комнаты",
            description: "тут с сатанизмом связано; не обязательно все",

            items: [
                {
                    name: "башка козла",
                    image: "images/ghead.jpg",
                    price: 15,
                    link: "https://wallapop.com/item/scultura-testa-capra-baphomet-1274853312?utm_medium=AppShare&utm_source=ShareItem"
                },

                {
                    name: "башка козла, но серебряная",
                    image: "images/shead.jpg",
                    price: 14,
                    link: "https://wallapop.com/item/scultura-baphomet-pentagramma-bavar-gotico-1273563576?utm_medium=AppShare&utm_source=ShareItem"
                },

                {
                    name: "бафомет",
                    image: "images/бафомет.jpg",
                    price: 5,
                    link: "https://wallapop.com/item/figura-baphomet-1230653550?utm_medium=AppShare&utm_source=ShareItem"
                },

                {
                    name: "бафомет, но другой",
                    image: "images/baphomet2.jpg",
                    price: 12,
                    link: "https://wallapop.com/item/figura-baphomet-resina-artesanal-1290133352?utm_medium=AppShare&utm_source=ShareItem"
                },

                {
                    name: "еще хуйня на стену",
                    image: "images/wallthig.jpg",
                    price: 15,
                    link: "https://wallapop.com/item/posacenere-stella-capra-diavolo-1200009220?utm_medium=AppShare&utm_source=ShareItem"
                }
            ]
        },

        {
            type: "item",
            name: "скорпион",
            description: "хуй знаю, но прикольно",
            image: "images/scorpio.jpg",
            price: 5,
            link: "https://wallapop.com/item/escorpion-de-metal-plateado-1206702084?utm_medium=AppShare&utm_source=ShareItem"
        }
    ],

    "20-50": [
        {
            type: "category",
            name: "декор для комнаты",
            description: "еще с сатанизмом связано",

            items: [
                {
                    name: "тетя какая-то",
                    image: "images/awoman.jpg",
                    price: 49,
                    link: "https://wallapop.com/item/scultura-hecate-gotica-1271435599?utm_medium=AppShare&utm_source=ShareItem"
                },

                {
                    name: "прост хуйня",
                    image: "images/dunno.jpg",
                    price: 29,
                    link: "https://wallapop.com/item/set-pz-2-gothic-esoteric-home-1202467226?utm_medium=AppShare&utm_source=ShareItem"
                }
            ]
        }
    ],

    "50-100": [
        {
            type: "category",
            name: "пс",
            description: "если хочешь его брать, то две игры еще плс",

            items: [
                {
                    name: "rayman + еще 5",
                    image: "images/rayman.jpg",
                    price: "5 (вроде)",
                    link: "https://wallapop.com/item/juegos-ps4-5-unidad-1268247303?utm_medium=AppShare&utm_source=ShareItem"
                },

                {
                    name: "hogwarts legacy",
                    image: "images/hogwarts.jpg",
                    price: 10,
                    link: "https://wallapop.com/item/hogwarts-legacy-ps4-1290758473?utm_medium=AppShare&utm_source=ShareItem"
                },

                {
                    name: "ну и сам пс",
                    image: "images/pc.jpg",
                    price: 80,
                    link: "https://wallapop.com/item/consola-ps4-playstation-4-negra-1290899462?utm_medium=AppShare&utm_source=ShareItem"
                }
            ]
        }
    ]
};


const homePage = document.getElementById("home-page");
const itemsPage = document.getElementById("items-page");
const categoryPage = document.getElementById("category-page");
const itemPage = document.getElementById("item-page");

const priceRanges = document.getElementById("price-ranges");
const itemsList = document.getElementById("items-list");
const rangeTitle = document.getElementById("range-title");

const categoryName = document.getElementById("category-name");
const categoryDescription = document.getElementById("category-description");
const categoryItemsList = document.getElementById("category-items-list");

const itemName = document.getElementById("item-name");
const itemPrice = document.getElementById("item-price");
const itemImage = document.getElementById("item-image");
const itemDescription = document.getElementById("item-description");

const backToRanges = document.getElementById("back-to-ranges");
const backToItems = document.getElementById("back-to-items");
const backToCategory = document.getElementById("back-to-category");


function hideAllPages() {
    homePage.classList.add("hidden");
    itemsPage.classList.add("hidden");
    categoryPage.classList.add("hidden");
    itemPage.classList.add("hidden");
}


function showPriceRanges() {
    hideAllPages();

    homePage.classList.remove("hidden");

    priceRanges.innerHTML = "";

    for (const range in wishlist) {
        const button = document.createElement("button");

        button.className = "price-button";
        button.textContent = `${range} €`;

        button.addEventListener("click", function () {
            showItems(range);
        });

        priceRanges.appendChild(button);
    }
}


function showItems(range) {
    hideAllPages();

    itemsPage.classList.remove("hidden");

    rangeTitle.textContent = `${range} €`;

    itemsList.innerHTML = "";

    wishlist[range].forEach(function (item, index) {
        const button = document.createElement("button");

        button.className = "item-button";
        button.textContent = item.name;

        button.addEventListener("click", function () {
            if (item.type === "item") {
                showItem(range, index);
            }

            if (item.type === "category") {
                showCategory(range, index);
            }
        });

        itemsList.appendChild(button);
    });
}


function showCategory(range, index) {
    hideAllPages();

    categoryPage.classList.remove("hidden");

    const category = wishlist[range][index];

    categoryName.textContent = category.name;
    categoryDescription.textContent = category.description;

    categoryItemsList.innerHTML = "";

    category.items.forEach(function (item, itemIndex) {
        const button = document.createElement("button");

        button.className = "item-button";
        button.textContent = item.name;

        button.addEventListener("click", function () {
            showCategoryItem(range, index, itemIndex);
        });

        categoryItemsList.appendChild(button);
    });

    categoryPage.dataset.range = range;
    categoryPage.dataset.index = index;
}


function showItem(range, index) {
    hideAllPages();

    itemPage.classList.remove("hidden");

    const item = wishlist[range][index];

    itemName.textContent = item.name;
    itemPrice.textContent = item.price;
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemDescription.textContent = item.description;

    itemPage.dataset.returnPage = "items";
}


function showCategoryItem(range, categoryIndex, itemIndex) {
    hideAllPages();

    itemPage.classList.remove("hidden");

    const category = wishlist[range][categoryIndex];
    const item = category.items[itemIndex];

    itemName.textContent = item.name;
    itemPrice.textContent = item.price;
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemDescription.textContent = item.description;

    itemPage.dataset.returnPage = "category";
    itemPage.dataset.range = range;
    itemPage.dataset.categoryIndex = categoryIndex;
}


backToRanges.addEventListener("click", function () {
    showPriceRanges();
});


backToItems.addEventListener("click", function () {
    const range = categoryPage.dataset.range;

    if (range !== undefined) {
        showItems(range);
    } else {
        showPriceRanges();
    }
});


backToCategory.addEventListener("click", function () {
    if (itemPage.dataset.returnPage === "category") {
        showCategory(
            itemPage.dataset.range,
            Number(itemPage.dataset.categoryIndex)
        );
    } else {
        showPriceRanges();
    }
});


showPriceRanges();