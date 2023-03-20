//somar
//metodo include para pesquisa
//filtrar

let count = 0;

function renderCards(lists) {// lidas de produtos
  let productsList = document.querySelector(".products-list");

  for (let i = 0; i < lists.length; i++) {
    let isData = lists[i]; // abstração

    //elementos novos
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let nameItem = document.createElement("h2");
    let description = document.createElement("p");
    let value = document.createElement("p");
    let addCart = document.createElement("button");
    let tag = document.createElement("p");

    //configuração
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

    //botao add
    addCart.id = `ida_${isData.id}`;
    addCart.innerHTML = "Adicionar ao carrinho";
    addCart.classList.add("productButton");
    
    //evento do click
    addCart.addEventListener("click", function (e) {
      

      let idElemento = e.target.id;
      let id = parseInt(idElemento.substring(4));
      
      let object = searchCard(id);

      let elementObject = createCard(object);

      document.querySelector(".cart-products").appendChild(elementObject);

      count++
      document.querySelectorAll(".quantidade").innerText = ( ``);
      document.querySelector(".cart-empty").remove();
    });

    //herarquia dos elementos
    li.appendChild(img);
    li.appendChild(div);
    div.appendChild(tag);
    div.appendChild(nameItem);
    div.appendChild(description);
    div.appendChild(value);
    div.appendChild(addCart);

    //inserindo os elementos
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


//os cartões do carrinho
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

  removeBtn.addEventListener('click' , function(event){
    // let idElemento = event.target.id;
    //     let id = parseInt(idElemento.substring(4));

    //     let btn = document.querySelectorAll(`fin_${id}`).remove()
    let listPath = event.composedPath();
    listPath[1].remove()
    img.remove()
  })

  li.appendChild(img);
  li.appendChild(divItem);
  divItem.appendChild(nameItems);
  divItem.appendChild(p);
  divItem.appendChild(removeBtn);

  return li;
}

searchCard(data);

renderCards(data);
