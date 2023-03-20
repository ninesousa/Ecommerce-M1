function renderCards(lists) {
  let productsList = document.querySelector(".products-list");

  for (let i = 0; i < lists.length; i++) {
    let isData = lists[i];

    //elementos novos
    let liData = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let nameItem = document.createElement("h2");
    let description = document.createElement("p");
    let value = document.createElement("p");
    let addCart = document.createElement("button");
    let tag = document.createElement("p");

    //configuração
    liData.id = `ini_${isData.id}`;
    liData.classList.add("cardProduct");

    img.src = isData.img;
    div.classList.add("card");
    nameItem.innerHTML = isData.nameItem;

    description.innerHTML = isData.description;
    description.classList.add("description");

    value.innerHTML = `R$ ${isData.value},00`;
    value.classList.add("value");

    tag.innerHTML = isData.tag;
    tag.classList.add("tag");

    //botao add
    addCart.id = `inp_${isData.id}`;
    addCart.innerHTML = "Adicionar ao carrinho";
    addCart.classList.add("productButton");
    addCart.addEventListener("click", function () {
      let idElement = isData.id;
      let id = parseInt(idElement);

      let object = searchCard(id);
      let elementObject = createCard(object);

      document.querySelector(".cart-products").appendChild(elementObject);
      let hide = document.querySelector(".cart-empty").remove();
    });

    //herarquia dos elementos
    liData.appendChild(img);
    liData.appendChild(div);
    div.appendChild(tag);
    div.appendChild(nameItem);
    div.appendChild(description);
    div.appendChild(value);
    div.appendChild(addCart);

    //inserindo os elementos
    productsList.append(liData);
  }

  // selecionar e voltar com o resultado

  let headerMenu = document.querySelector(".header-menu");
  headerMenu.addEventListener("click", function () {

    let usersFiltereds = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].tag === tag || data[i].nameItem) {
        usersFiltereds.push(data[i]); // incluir na  lista

        return data[i];
      }
    }
    return usersFiltereds;
  });
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
  let nameItems = document.createElement("nameItem");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let removeBtn = document.createElement("button");

  const count = 0;
  for (let i = 0; i < isData.length; i++) {
    count = count + i;
  }

  li.id = `fin_${isData.id}`;
  li.classList.add("item");
  nameItems.innerHTML = `${isData.nameItem}`;
  img.src = isData.img;
  p.innerHTML = `R$ ${isData.value},00`;
  p.classList.add("value");

  removeBtn.innerHTML = "Remover";
  removeBtn.id = `fip_${isData.id}`;
  removeBtn.classList.add("removeButton");

  li.appendChild(img);
  li.appendChild(nameItems);
  li.appendChild(p);
  li.appendChild(removeBtn);

  return li;
}

searchCard(data);
renderCards(data);
