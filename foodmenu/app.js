const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "../images/breackfast1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "../images/lunch3.jpeg",
    desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "../images/shakes1.jpeg",
    desc: `Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "../images/breackfast2.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "../images/lunch1.jpeg",
    desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "../images/shakes2.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "../images/breackfast3.jpeg",
    desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "../images/lunch2.jpeg",
    desc: `Tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "../images/shakes3.jpeg",
    desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const foodContainer = document.querySelector(".food-items");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  renderListItems(menu);
  createButtonList();
//   getListItems();
});

function createButtonList() {
  let menuButton = menu.reduce(
    (values, items) => {
      if (!values.includes(items.category)) {
        values.push(items.category);
      }
      return values;
    },
    ["All"]
  );

  const createTopBtn = menuButton.map((category) => {
    return `<button class="filter-button" data-name=${category}>${category}</button>`;
  });

  btnContainer.innerHTML = createTopBtn.join("");

  const filterButton = document.querySelectorAll(".filter-button");

  filterButton.forEach((btns) => {
    btns.addEventListener("click", function (e) {
      let target = e.currentTarget.dataset.name;
      let menuCategory = menu.filter((menuitems) => {
        if (menuitems.category == target) {
          return menuitems;
        }
      });

      if (target == "All") {
        renderListItems(menu);
      } else {
        renderListItems(menuCategory);
      }
    });
  });
}

function renderListItems(menu) {
  let itemList = menu.map((items) => {
    return `<div class="food-plate" data-id="${items.id}">
                 <img src="${items.img}" alt="">
                <span class="price">$${items.price}</span>
                 <div class="spacing">
                 <h4>${items.title}</h4>
            <p class="para">${items.desc}</p>
            </div>
            </div>`;
  });

  itemList = itemList.join("");
  foodContainer.innerHTML = itemList;
}

// function getListItems() {
//   const foodPlate = [...document.querySelectorAll(".food-plate")];

//   foodPlate.map((item) => {
//     item.addEventListener("click", function (e) {
//       let targetId = e.currentTarget.dataset.id;
//       let currenturl = window.location.href;
//       let newUrl = currenturl.slice(0, (currenturl.length - 1));
//       console.log(newUrl);
//       location.href = `${newUrl}?${targetId}`;
//     });
//   });
// }
