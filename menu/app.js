const menu = [
  {
    id: 1,
    title: "Jollof Rice",
    category: "lunch",
    price: "8,500",
    img: "./food/nigerian-food-party-jollof-rice-fried-chicken-wings-close-nigerian-food-party-jollof-rice-fried-chicken-wings-close-up-112895117.jpg",
    desc: `Savoury west african classic, aromatic basmati rice cooked with seasoned chicken, onions, tomatoes and peppers. Served with plantains and coleslaw.`,
    buy: "https://paystack.com/buy/tasty-jollof-rice",
    btc: "https://www.blockonomics.co/pay-url/3b7ccb0fcf4946ac"
  },
  {
    id: 2,
    title: "Suya",
    category: "lunch",
    price: "3,000",
    img: "./food/suya.jpg",
    desc: `Spicy grilled meat skewers originating from west africa, typically made with beef, chicken or goat , and served with onions and peppers.`,
    buy: "https://paystack.com/buy/suya",
    btc: "https://www.blockonomics.co/pay-url/4e8d05afc42b4a06"
  },
  {
    id: 3,
    title: "Yam and Egg Sauce",
    category: "breakfast",
    price: "4,200",
    img: "./food/yam-fried-egg-sauce-yam-fried-egg-sauce-served.jpg",
    desc: `A delicious combination of sauted yam cubes and scrambled eggs in a savory tomato and pepper sauce. Perfect for breakfast or brunch.`,
    buy: "https://paystack.com/buy/yam-and-egg-sauce ",
    btc: "https://www.pay.com "
  },
  {
    id: 4,
    title: "Pounded Yam & Egusi soup",
    category: "lunch",
    price: "6,500",
    img: "./food/pounded-yam-garri-eba-served-egusi-soup-pounded-yam-garri-eba-served-egusi-soup-ready-to-eat-242067261.jpg",
    desc: `Traditional nigerian dish of smooth, fluffy pounded yam served with hearty egusi soup made from ground melon seeds and vegetables.`,
    buy: "https://paystack.com/buy/pounded-yam--egusi-soup",
    btc: "https://www.pay.com "
  },
  {
    id: 5,
    title: "jollof rice & plantain",
    category: "lunch",
    price: "8,000",
    img: "./food/jollof-rice-west-african-cuisine-chicken-fried-plantain-86976048.jpg",
    desc: `Savor the traditional flavor of west african cuisine with our delectable jollof rice served with sweet and savory plantains.`,
    buy: "https://paystack.com/buy/jollof-rice--plantain",
    btc: "https://www.pay.com "
  },
  {
    id: 6,
    title: "Eba & Oha soup",
    category: "dinner",
    price: "7,500",
    img: "./food/white-bowl-nigerian-dish-garri-eba-oha-soup-cooked-assorted-meat-beef-dried-fish-cow-belly-shaki-decorated-green-191916788.jpg",
    desc: `A classic nigerian dish featuring smooth cassava paste served with a delicious soup containing cocoyam and ora leaves.`,
    buy: "https://paystack.com/buy/eba--oha-soup ",
    btc: "https://www.pay.com "
  },
  {
    id: 7,
    title: "Akara & Custard",
    category: "breakfast",
    price: "2,000",
    img: "./food/nigerian-deep-fried-akara-beancake-served-custard-breakfast-221092985.jpg",
    desc: `Delicious west african fritters made with black-eyed peas served alongside creamy vanilla custard - the perfect sweet and savory combo. `,
    buy: "https://paystack.com/buy/akara--custard",
    btc: "https://www.pay.com "
  },
  {
    id: 8,
    title: "Goat meat pepper soup",
    category: "dinner",
    price: "4,500",
    img: "./food/tasty-nigerian-goat-meat-pepper-soup-garnished-sliced-white-bowl-193486301.jpg",
    desc: `tasty goat meat pepper soup garnished in a richly flavored broth with aromatic spices and fresh herbs. Perfect comfort food.`,
    buy: "https://paystack.com/buy/goat-meat-pepper-soup ",
    btc: "https://www.pay.com "
  },
  {
    id: 9,
    title: "Rice & Chicken",
    category: "breakfast",
    price: "7,500",
    img: "./food/regional-african-food-white-plate-wooden-background-156594464.jpg",
    desc: `Savory combination of tender chicken and fluffy rice, seasoned to perfection for a satisfying and flavorful meal.`,
    buy: "https://paystack.com/buy/rice--chicken ",
    btc: "https://www.pay.com "
  },
  {
    id: 10,
    title: "roasted fish & fried plantain",
    category: "dinner",
    price: "6,500",
    img: "./food/nigerian-food-delicious-roasted-fish-fried-plantain-chilli-pepper-source-black-tray-nigerian-food-delicious-roasted-185024883.jpg",
    desc: `Deliciously tender roasted fish paired with gloden plantain slices, a delightful combination of flavors and textures.`,
    buy: "https://paystack.com/buy/roasted-fish--fried-plantain",
    btc: "https://www.pay.com "
  },
  {
    id: 11,
    title: "Roasted Turkey Strips",
    category: "lunch",
    price: "9,000",
    img: "./food/Roasted-Turkey-Strips-seasoned-with-Delicate-Suya-Spice.jpg.webp",
    desc: `Roasted Turkey Strips seasoned with Delicate Suya Spice served with a side of your choice. A delicious protein-packed option! `,
    buy: "https://paystack.com/buy/roasted-turkey-strips",
    btc: "https://www.pay.com "
  },
  {
    id: 12,
    title: "rice and spicy chicken",
    category: "dinner",
    price: "8,500",
    img: "./food/spicy-chicken-curry-rice-dish-33990542.jpg",
    desc: `Savory rice paired with tender, succulent spicy chicken, a perfect harmony of flavors that will tantalize your taste buds. `,
    buy: "https://paystack.com/buy/rice-and-spicy-chicken",
    btc: "https://www.pay.com "
  },
  {
    id: 13,
    title: "spicy Suya",
    category: "breakfast",
    price: "5,500",
    img: "./food/african-food-spicy-suya-kebab-skewers-fresh-vegetable-s-african-food-spicy-suya-kebab-skewers-fresh-vegetable-125581653.jpg",
    desc: `Savory grilled skewers bursting with african flavors, marinated in fiery spices for an irresistible kick. `,
    buy: "https://paystack.com/buy/spicy-suya",
    btc: "https://www.pay.com "
  },
  {
    id: 14,
    title: "spaghetti",
    category: "dinner",
    price: "3,500",
    img: "./food/spaghetti-bolognese-cheese-basil-43039406.jpg",
    desc: `Classic italian pasta dish featuring long, thin noodles tossed in a savory tomato sauce, topped with grated cheese.`,
    buy: "https://paystack.com/buy/spaghetti",
    btc: "https://www.pay.com "
  },
  {
    id: 15,
    title: "Plantain and spicy chicken",
    category: "dinner",
    price: "5,500",
    img: "./food/regional-african-food-white-plate-wooden-background-156594174.jpg",
    desc: `Delicious plantain paired with tender, spicy chicken, a perfect combination of flavors that will tantalize your taste buds. `,
    buy: "https://paystack.com/buy/plantain-and-spicy-chicken",
    btc: "https://www.pay.com "
  },
  {
    id: 16,
    title: "Pork bbq ribs",
    category: "lunch",
    price: "4,500",
    img: "./food/pork-spare-ribs-bbq-sauce-white-plate-salad-drink-background-39324425.jpg",
    desc: `Delicious tender pork BBQ ribs, slow-cooked to perfection and coated in a finger-licking BBQ sauce. A mouthwatering indulgence.`,
    buy: "https://paystack.com/buy/pork-bbq-ribs",
    btc: "https://www.pay.com "
  },
  {
    id: 17,
    title: "Fried Plantain gizzard",
    category: "lunch",
    price: "7,000",
    img: "./food/fried-plantains-gizzard-stew-fresh-tomatoes-nigerian-food-delicacy-lettuce-white-plate-136371512.jpg",
    desc: `Crispy fried plantains paired with tender gizzards, a delightful combination of textures and flavors. perfectly satisfying and delicious.`,
    buy: "https://paystack.com/buy/fried-plantain-gizzard",
    btc: "https://www.pay.com "
  },
  {
    id: 18,
    title: "barbeque ribs",
    category: "dinner",
    price: "8,500",
    img: "./food/pork-ribs-barbeque-sauce-parsley-bread-main-dish-39463820.jpg",
    desc: `Tender, succulent BBQ ribs slow-cooked to perfection, coated in a smoky sauce that will leave you craving more. `,
    buy: "https://paystack.com/buy/barbeque-ribs",
    btc: "https://www.pay.com "
  },
  {
    id: 19,
    title: "steak french fries",
    category: "breakfast",
    price: "5,500",
    img: "./food/grilled-steak-french-fries-vegetables-plate-white-background-43561526.jpg",
    desc: `steak french fries vegetables, a classic and satisfying combination that will tantalize your buds.`,
    buy: "https://paystack.com/buy/steak-french-fries",
    btc: "https://www.pay.com "
  },
  {
    id: 20,
    title: "grilled meat sausages",
    category: "breakfast",
    price: "3,500",
    img: "./food/grilled-meat-sausages-16190298.jpg",
    desc: `Juicy grilled meat sausages bursting with flavors, served with a side of tangy condiments. A meat lover's delight!`,
    buy: "https://paystack.com/buy/grilled-meat-sausages",
    btc: "https://www.pay.com "
  },
  {
    id: 21,
    title: "burger",
    category: "dinner",
    price: "6,000",
    img: "./food/pulled-pork-bbq-sauce-blue-plate-shot-selective-focus-40956184.jpg",
    desc: `Juicy beef patty, melted cheese, crisp lettuce, and tangy sauce nestled in a toasted bun. Pure burger perfection! `,
    buy: "https://paystack.com/buy/two-burgers",
    btc: "https://www.pay.com "
  },
  {
    id: 22,
    title: "roasted chicken",
    category: "lunch",
    price: "8,000",
    img: "./food/roast-chicken-5469759.jpg",
    desc: `Succulent, gloden-brown roasted chicken, seasoned to perfection, offering a mouthwatering blend of flavors and juicy tenderness.`,
    buy: "https://paystack.com/buy/roasted-chicken",
    btc: "https://www.pay.com "
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <!-- <h4 class="price">$${item.price}</h4> -->
              <h4><a class="price" href="${item.buy}">NGN${item.price}</a></h4>
            </header>
            <p class="item-text">
              ${item.desc}
              <p class="pay">
              <!-- <a class="btc" id="btc" href="${item.btc}">Pay with Bitcoin <i class="fa-brands fa-bitcoin  fa-lg" style="color: #ffffff; padding-left: 2px;"></i> </a> -->
              <a class="buy" id="buy" href="${item.buy}">Buy now</a>
              </p>
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
