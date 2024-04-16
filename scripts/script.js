const URL = `https://opensheet.elk.sh/1yJkAYiUl8FwYNtFX6Y16CVk00pMTn5I3PlBViw4WrK8/`;
const skincareIndex = 1;
const products = [];
const productTypesSet = new Set();

async function fetchData(pageIndex) {
  try {
    const response = await fetch(URL + pageIndex);
    const data = await response.json();
    console.log("Fetched!");

    for (const product of data) {
      if (
        product.PRODUCTNAME &&
        product.PRODUCTNAME.trim() !== "" &&
        product.TYPE &&
        product.TYPE.trim() !== ""
      ) {
        const newProduct = {
          name: replaceNewlinesAndTabs(product.PRODUCTNAME),
          type: replaceNewlinesAndTabs(product.TYPE),
          retailPrice: product.RETAILPRICE,
          salePrice: product.SALEPRICE,
          discount: product.DISCOUNT,
          imageUrls: product.IMAGEURLS,
          saleType: "",
          description: product.DESCRIPTION,
        };
        products.push(newProduct);
        productTypesSet.add(product.TYPE.trim().toLowerCase());
      }
    }
    console.log("Size sản phẩm: " + products.length);
    console.log("Size loại sản phẩm: " + productTypesSet.size);
    renderProducts("", products);
    addTabFilterType(Array.from(productTypesSet));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData(skincareIndex);

function removeDiacritics(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function replaceNewlinesAndTabs(inputString) {
  return inputString.replace(/\n/g, " ").replace(/\t/g, " ");
}

function escapeCharacters(inputString) {
  return inputString
    .replace(/'/g, "\\'")
    .replace(/\n/g, "<br>")
    .replace(/\t/g, "&emsp;")
    .replace(/\r/g, "\\r");
}

function renderProducts(searchQuery, products) {
  const productsContainer = document.getElementById("productitems");
  productsContainer.innerHTML = "";
  products.forEach((product, index) => {
    const normalizedSearchQuery = removeDiacritics(searchQuery.toLowerCase());
    const normalizedProductName = removeDiacritics(product.name.toLowerCase());
    const normalizedProductType = removeDiacritics(product.type.toLowerCase());
    const normalizedProductSaleType = removeDiacritics(
      product.saleType.toLowerCase()
    );
    if (
      normalizedProductName.includes(normalizedSearchQuery) ||
      normalizedProductType.includes(normalizedSearchQuery) ||
      normalizedProductSaleType.includes(normalizedSearchQuery)
    ) {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
          <div class="product-content">
            <div class="product-img">
              <div class="slideshow-container" id="slideshow_${index}">
                ${(product.imageUrls == undefined ? "" : product.imageUrls)
                  .split(",")
                  .map(
                    (imageUrl, index) =>
                      `<div class="slide ${
                        index === 0 ? "active" : ""
                      }"><img src="${imageUrl}" alt="${
                        product.name
                      }" onclick="enlargeImage('${imageUrl}', '${
                        product.salePrice
                      }đ', '${escapeCharacters(product.description)}')"></div>`
                  )
                  .join("")}
                  </div>
                <a class="prev" onclick="changeSlide(${index}, -1)">&#10094;</a>
                <a class="next" onclick="changeSlide(${index}, 1)">&#10095;</a>
              </div>
            </div>

            <div class="product-info">
              <a class="product-name">${product.name}</a>
              <p class="product-price" style="font-size:10px">${
                product.retailPrice
              }</p>
              <p class="product-price" style="color: var(--carribean-green);font-weight:bold;font-size:1.1rem">${
                product.salePrice
              }đ</p>
              <p class="product-price" style="font-size:10px;text-transform: uppercase;">${
                product.type
              }</p>
            </div>

            <div class="off-info">
              <p class="sm-title">-${product.discount}%</p>
            </div>
          </div>
        `;
      const saleInfo = productElement.querySelector(".sm-title");
      if (product.discount >= 50) {
        product.saleType = "BIGSALE";
        saleInfo.textContent = "BIG SALE";
        saleInfo.style.backgroundColor = "#fe5200";
        saleInfo.style.fontWeight = "bold";
      } else if (product.discount === 0) {
        saleInfo.parentElement.remove();
      }
      productsContainer.appendChild(productElement);
    }
  });
}

function changeSlide(index, direction) {
  const slides = document.querySelectorAll(`#slideshow_${index} .slide`);
  const totalSlides = slides.length;

  let currentSlideIndex = 0;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      currentSlideIndex = i;
      slides[i].classList.remove("active");
      break;
    }
  }

  let newSlideIndex = currentSlideIndex + direction;
  if (newSlideIndex < 0) {
    newSlideIndex = totalSlides - 1;
  } else if (newSlideIndex >= totalSlides) {
    newSlideIndex = 0;
  }

  slides[currentSlideIndex].style.opacity = 0;
  slides[newSlideIndex].style.opacity = 1;
  slides[newSlideIndex].classList.add("active");
  slides[newSlideIndex].classList.add("fade");
}

document
  .getElementById("searchInput")
  .addEventListener("input", function (event) {
    uncheckCheckbox();
    renderProducts(event.target.value, products);
  });

function enlargeImage(imageUrl, productPrice, prdDescription) {
  var modal = document.getElementById("zoomImg");
  var modalImg = document.getElementById("zoom-img");
  var captionText = document.getElementById("zoom-caption");
  var descriptionText = document.querySelector("#zoom-description p");
  modal.style.display = "block";
  modalImg.src = imageUrl;
  captionText.innerHTML = "SALE: " + productPrice;
  console.log(prdDescription);
  descriptionText.innerHTML = prdDescription == undefined ? "" : prdDescription;
  var span = document.getElementsByClassName("zoomClose")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
}

function uncheckCheckbox() {
  const checkboxes = document.querySelectorAll(
    '#filter-group input[type="checkbox"]'
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

//Big sale
function renderBigSale() {
  var checkBox = document.querySelector('#ckb-big-sale input[type="checkbox"]');
  if (checkBox.checked) {
    renderProducts("BIGSALE", products);
  } else {
    renderProducts("", products);
  }
}

//Tang dan
function renderIncreasePrice() {
  var queryStr = "";
  var checkBigSale = document.querySelector(
    '#ckb-big-sale input[type="checkbox"]'
  );
  if (checkBigSale.checked) {
    queryStr = "BIGSALE";
  }

  document.querySelector('#ckb-max input[type="checkbox"]').checked = false;
  var checkBox = document.querySelector('#ckb-min input[type="checkbox"]');
  if (checkBox.checked) {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const salePriceA = parseFloat(a.salePrice);
      const salePriceB = parseFloat(b.salePrice);
      if (salePriceA < salePriceB) {
        return -1;
      } else if (salePriceA > salePriceB) {
        return 1;
      } else {
        return 0;
      }
    });
    renderProducts(queryStr, sortedProducts);
  } else {
    renderProducts(queryStr, products);
  }
}

//Giam dan
function renderDecreasePrice() {
  var queryStr = "";
  var checkBigSale = document.querySelector(
    '#ckb-big-sale input[type="checkbox"]'
  );
  if (checkBigSale.checked) {
    queryStr = "BIGSALE";
  }

  document.querySelector('#ckb-min input[type="checkbox"]').checked = false;
  var checkBox = document.querySelector('#ckb-max input[type="checkbox"]');
  if (checkBox.checked) {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const salePriceA = parseFloat(a.salePrice);
      const salePriceB = parseFloat(b.salePrice);
      if (salePriceA > salePriceB) {
        return -1;
      } else if (salePriceA < salePriceB) {
        return 1;
      } else {
        return 0;
      }
    });
    renderProducts(queryStr, sortedProducts);
  } else {
    renderProducts(queryStr, products);
  }
}

function findOffset(element) {
  var top = 0,
    left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left,
  };
}

window.onload = function () {
  var stickyHeader = document.getElementById("sticky-scroll");
  var headerOffset = findOffset(stickyHeader);

  window.onscroll = function () {
    var bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (bodyScrollTop > headerOffset.top) {
      stickyHeader.classList.add("sticky");
    } else {
      stickyHeader.classList.remove("sticky");
    }
  };
};

const button = document.querySelector(".scroll-to-top");

const displayButton = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

displayButton();
scrollToTop();

function addTabFilterType(productTypesArray) {
  const tabGroup = document.getElementById("tab-group");
  const allBtn = document.createElement("div");
  allBtn.classList.add("filter-btn");
  const button = document.createElement("button");
  button.innerHTML = '<i class="fas fa-list"></i> Tất cả';
  button.style.color = "#4a90e2";
  button.addEventListener("click", () => filterByType("ALL"));
  allBtn.appendChild(button);
  tabGroup.append(allBtn);

  productTypesArray.forEach((type) => {
    const filterBtn = document.createElement("div");
    filterBtn.classList.add("filter-btn");
    const button = document.createElement("button");
    button.textContent = type;
    button.addEventListener("click", () => filterByType(type));
    filterBtn.appendChild(button);
    tabGroup.append(filterBtn);
  });
}

function filterByType(type) {
  switch (type) {
    case "ALL":
      break;
    default:
      break;
  }
}
