let count = 0;
let totalValue = 0;

function renderCards(lists) {
  let productsList = document.querySelector(".products-list");

  // Limpa a lista de produtos antes de renderizar novos produtos
  productsList.innerHTML = '';

  for (let i = 0; i < lists.length; i++) {
    let isData = lists[i]; // abstração

    // Criação dos elementos
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let nameItem = document.createElement("h2");
    let description = document.createElement("p");
    let value = document.createElement("p");
    let addCart = document.createElement("button");
    let tag = document.createElement("p");

    // Configuração dos elementos
    li.id = `_${isData.id}`;
    li.classList.add("cardProduct");

    img.src = isData.img;
    div.classList.add("card");
    nameItem.innerText = isData.nameItem;

    description.innerHTML = isData.description;
    description.classList.add("description");

    value.innerHTML = `R$ ${isData.value},00`;
    value.classList.add("value");

    tag.innerHTML = isData.tag;
    tag.classList.add("tag");

    // Configuração do botão
    addCart.id = `ida_${isData.id}`;
    addCart.innerHTML = "Adicionar ao carrinho";
    addCart.classList.add("productButton");

    // Evento do botão de adicionar ao carrinho
    addCart.addEventListener("click", function (e) {
      let idElemento = e.target.id;
      let id = parseInt(idElemento.substring(4));
      let object = searchCard(id);
      let elementObject = createCard(object);
      document.querySelector(".cart-products").appendChild(elementObject);

      count++;
      totalValue += object.value;

      updateCartDetails();

      if (document.querySelector(".cart-empty")) {
        document.querySelector(".cart-empty").remove();
      }
    });

    // Hierarquia dos elementos
    li.appendChild(img);
    li.appendChild(div);
    div.appendChild(tag);
    div.appendChild(nameItem);
    div.appendChild(description);
    div.appendChild(value);
    div.appendChild(addCart);

    // Inserindo os elementos na lista de produtos
    productsList.appendChild(li);
  }
}

function searchCard(id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }
}

function createCard(isData) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let divItem = document.createElement("div");
  let nameItems = document.createElement("h2");
  let p = document.createElement("p");
  let removeBtn = document.createElement("button");

  li.id = `fin_${isData.id}`;
  li.classList.add("item");
  nameItems.innerHTML = `${isData.nameItem}`;
  img.src = isData.img;
  p.innerHTML = `R$ ${isData.value},00`;
  p.classList.add("value");

  removeBtn.innerHTML = "Remover";
  removeBtn.id = `fip_${isData.id}`;
  removeBtn.classList.add("removeButton");

  removeBtn.addEventListener('click', function (event) {
    let idElemento = event.target.id;
    let id = parseInt(idElemento.substring(4));
    let product = searchCard(id);

    if (product) {
      totalValue -= product.value;
      count--;
    }
    
    let listItem = document.getElementById(`fin_${id}`);
    if (listItem) {
      listItem.remove();
    }

    updateCartDetails();
  })

  li.appendChild(img);
  li.appendChild(divItem);
  divItem.appendChild(nameItems);
  divItem.appendChild(p);
  divItem.appendChild(removeBtn);

  return li;
}

function updateCartDetails() {
  document.querySelector(".countProduct").innerText = count;
  document.querySelector(".countValue").innerText = `R$${totalValue.toFixed(2)}`;

  const cartProducts = document.querySelector(".cart-products");
  if (count === 0) {
    if (!cartProducts.querySelector(".cart-empty")) {
      let emptyMessage = document.createElement("p");
      emptyMessage.innerText = "Seu carrinho está vazio.";
      emptyMessage.classList.add("cart-empty");
      cartProducts.appendChild(emptyMessage);
    }
  } else {
    let emptyMessage = cartProducts.querySelector(".cart-empty");
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }
}

// Função de pesquisa
function searchProducts(query) {
  let filteredData = data.filter(product => product.nameItem.toLowerCase().includes(query.toLowerCase()));
  renderCards(filteredData);
}

// Evento do botão de pesquisa
document.querySelector(".search-button").addEventListener("click", function() {
  let query = document.querySelector(".search-input").value;
  searchProducts(query);
});

// Renderiza os cartões iniciais
renderCards(data);
