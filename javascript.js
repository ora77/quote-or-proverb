const data = [
  {
    id: 0,
    type: "quote",
    message: "A vaincre sans péril, on triomphe sans gloire",
  },
  {
    id: 1,
    type: "quote",
    message: "Tout est au mieux dans le meilleur des mondes",
  },
  {
    id: 2,
    type: "quote",
    message: "L'imagination est plus importante que le savoir",
  },
  {
    id: 3,
    type: "quote",
    message: "Un problème sans solution est un problème mal posé",
  },
  {
    id: 4,
    type: "proverb",
    message: "Paix et tranquillité, voilà le bonheur.",
  },
  {
    id: 5,
    type: "proverb",
    message:
      "La patience est un arbre dont la racine est amère, et dont les fruits sont très doux.",
  },
  {
    id: 6,
    type: "proverb",
    message: "On apprend peu par la victoire, mais beaucoup par la défaite.",
  },
  {
    id: 7,
    type: "proverb",
    message: "Avec du temps et de la patience, on vient à bout de tout.",
  },
];

const quoteRadio = document.querySelector(".quote");
const proverbRadio = document.querySelector(".proverb");
const SeeMessageBtn = document.querySelector(".submitBtn");
const addMessageBtn = document.querySelector(".addBtn");
let insert = document.querySelector(".insert");
const referenceNode = document.querySelector(".btn-container");

insert.readOnly = true;
console.log(data);

function getRandomQuote() {
  const quoteData = data.filter((elmt) => elmt.type == "quote");
  return quoteData[Math.floor(Math.random() * quoteData.length)].message;
}

function getRandomProverb() {
  const proverbData = data.filter((elmt) => elmt.type == "proverb");
  return proverbData[Math.floor(Math.random() * proverbData.length)].message;
}

const resetButton = document.createElement("button");
resetButton.innerText = "Reset";

const confirmButton = document.createElement("button");
confirmButton.innerText = "Confirm";

const buttonArray = [resetButton, confirmButton];
for (let elmt of buttonArray) {
  elmt.className = "btn";
  elmt.style.margin = "2em 35% 0 35%";
  elmt.style.height = "2em";
  elmt.style.padding = "5px";
}

const addInsert = document.createElement("input");
addInsert.className = "addInsert";
addInsert.style.marginTop = "2em";

quoteRadio.addEventListener("click", function () {
  SeeMessageBtn.addEventListener("click", function () {
    insert.innerText = getRandomQuote();
    insert.disabled = true;
    document.body.appendChild(resetButton);
    SeeMessageBtn.disabled = true;
  });
});

proverbRadio.addEventListener("click", function () {
  SeeMessageBtn.addEventListener("click", function () {
    insert.innerText = getRandomProverb();
    insert.disabled = true;
    document.body.appendChild(resetButton);
    SeeMessageBtn.disabled = true;
  });
});

// faire une boucle sur un tableau de deux elements quoteRadio et proverbRadio

resetButton.addEventListener("click", function () {
  insert.innerText = "";
  insert.remove();
  resetButton.remove();
  addInsert.remove();
  confirmButton.remove();
  SeeMessageBtn.disabled = false;
  insert.disabled = false;
  referenceNode.parentNode.insertBefore(insert, referenceNode.nextSibling);
});

quoteRadio.addEventListener("click", function () {
  addMessageBtn.addEventListener("click", function () {
    insert.remove();
    document.body.appendChild(addInsert);
    document.body.appendChild(confirmButton);
    document.body.appendChild(resetButton);
  });
});

proverbRadio.addEventListener("click", function () {
  addMessageBtn.addEventListener("click", function () {
    insert.remove();
    document.body.appendChild(addInsert);
    document.body.appendChild(confirmButton);
    document.body.appendChild(resetButton);
  });
});

quoteRadio.addEventListener("click", function () {
  confirmButton.addEventListener("click", function () {
    /* if (addedMessage && !addedMessage.replace(/\s/g, "").length) {} */ // too bad it doesn't work

    const messageKey = `message`;

    localStorage.setItem(messageKey, addInsert.value);

    let newMessage = window.localStorage.getItem(messageKey);

    console.log(newMessage);

    data.push({
      type: "quote",
      message: newMessage,
    });

    addInsert.remove();
    confirmButton.remove();
    resetButton.remove();
    referenceNode.parentNode.insertBefore(insert, referenceNode.nextSibling);
  });
});
