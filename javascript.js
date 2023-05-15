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

const quoteRadio = document.querySelector("#quote");
const proverbRadio = document.querySelector("#proverb");
const addMessageBtn = document.querySelector(".addBtn");
let messageContainer = document.querySelector(".insert");
const referenceNode = document.querySelector(".btn-container");
const displayMsgForm = document.querySelector("#display-msg-form");
const submitDisplayMsgFormBtn = document.querySelector(
  "#display-msg-form .submitBtn"
);
const addToFavoritesBtn = document.querySelector(".addFavBtn");
const displayFavoriteBtn = document.querySelector(".displayFavBtn");
submitDisplayMsgFormBtn.disabled = true;

const resetButton = document.querySelector(".resetBtn");

const addMsgForm = document.getElementById("add-msg-form");
addMsgForm.style.display = "none";

const addMsgInput = document.createElement("input");
addMsgInput.className = "addInsert";
addMsgInput.style.marginTop = "2em";

// Nice idea, but you could have had one function with a parameter 
/*
  const getRandomMsg = (type) => {
    const filteredData = data.filter((elmt) => elmt.type === type);
    return filteredData[Math.floor(Math.random() * filteredData.length)].message;
  }
  and then use it like so :
  getRandomMsg("quote");
*/
const getRandomQuote = () => {
  const quoteData = data.filter((elmt) => elmt.type === "quote");
  return quoteData[Math.floor(Math.random() * quoteData.length)].message;
};

const getRandomProverb = () => {
  const proverbData = data.filter((elmt) => elmt.type === "proverb");
  return proverbData[Math.floor(Math.random() * proverbData.length)].message;
};

quoteRadio.addEventListener(
  "change",
  () => (submitDisplayMsgFormBtn.disabled = false)
);
proverbRadio.addEventListener(
  "change",
  () => (submitDisplayMsgFormBtn.disabled = false)
);

displayMsgForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (proverbRadio.checked) {
    messageContainer.innerText = getRandomProverb();
    messageContainer.disabled = true;
    document.body.querySelector("#display-msg-form").appendChild(resetButton);
  } else if (quoteRadio.checked) {
    messageContainer.innerText = getRandomQuote();
    messageContainer.disabled = true;
    document.body.querySelector("#display-msg-form").appendChild(resetButton);
  } else {
    // Yes display error msg ;) code missing
    // display error msg
  }
  submitDisplayMsgFormBtn.disabled = true;
  quoteRadio.disabled = true;
  proverbRadio.disabled = true;
  resetButton.disabled = false;
});

resetButton.addEventListener("click", function () {
  messageContainer.innerText = "?";

  addMessageBtn.disabled = false;
  quoteRadio.disabled = false;
  proverbRadio.disabled = false;
  submitDisplayMsgFormBtn.disabled = false;
  resetButton.disabled = true;
});

addMessageBtn.addEventListener("click", () => {
  addMsgForm.style.display = "flex";
  addMsgForm.style.flexDirection = "column";
});

addMsgForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // the second condition is weird ? If you want to check on an empty string you can use
  // if (addMsgForm.querySelector("#message").value == null) {...}
  if (
    !addMsgForm.querySelector("#message").value ||
    !addMsgForm.querySelector("#message").value.replace(/\s/g, "").length
  ) {
    alert("Add a message");
    addMsgForm.style.display = "none";
  } else {
    const newMessage = {
      type: addMsgForm.querySelector("#type").value.toLowerCase(),
      message: addMsgForm.querySelector("#message").value,
      id: Math.max(...data.map((msg) => msg.id)) + 1,
    };
    messageContainer.innerText = newMessage.message;
    data.push(newMessage);
    addMsgForm.style.display = "none";
  }
});

// An array is normally not reassigned, so use const. Pushing is not reassgning ;)
let favorites = [];

addToFavoritesBtn.addEventListener("click", () => {
  if (localStorage.getItem("favorites") !== null) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  }

  if (messageContainer.innerText !== "?") {
    const newFavorite = {
      message: messageContainer.innerText,
    };

    favorites.push(newFavorite);

    localStorage.setItem("favorites", JSON.stringify(favorites));
    messageContainer.innerText = "?";
  }
});

displayFavoriteBtn.addEventListener("click", () => {
  window.location = "./favorites.html";
});
