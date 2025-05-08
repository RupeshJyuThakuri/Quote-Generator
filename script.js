const quotes = [
  {
    text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    author: "Albert Einstein",
    category: "science"
  },
  {
    text: "Science is a way of thinking much more than it is a body of knowledge.",
    author: "Carl Sagan",
    category: "science"
  },
  {
    text: "The good thing about science is that it's true whether or not you believe in it.",
    author: "Neil deGrasse Tyson",
    category: "science"
  },
  {
    text: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.",
    author: "Louis Pasteur",
    category: "science"
  },
  {
    text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.",
    author: "Edwin Hubble",
    category: "science"
    },
  {
    text: "Injustice anywhere is a threat to justice everywhere.",
    author: "Martin Luther King Jr.",
    category: "social"
  },
  {
    text: "The first duty of society is justice.",
    author: "Alexander Hamilton",
    category: "social"
  },
  {
    text: "A nation's greatness is measured by how it treats its weakest members.",
    author: "Mahatma Gandhi",
    category: "social"
  },
  {
    text: "The most violent element in society is ignorance.",
    author: "Emma Goldman",
    category: "social"
  },
  {
    text: "Social progress can be measured by the social position of the female sex.",
    author: "Karl Marx",
    category: "social"
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    category: "famous"
  },
  {
    text: "I think, therefore I am.",
    author: "René Descartes",
    category: "famous"
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
    category: "famous"
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    category: "famous"
  },
  {
    text: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
    category: "famous"
  }
]

let currentIndex = 0;
let currentCategory = "all";
let fontSize = 2;

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author")
const selectedCategory = document.getElementById("category");
const prevBtn = document.querySelector("#prev-btn")
const randBtn = document.querySelector("#rand-btn");
const nextBtn = document.querySelector("#next-btn");
const themeToggle = document.querySelector("#theme-toggle");
const decreaseFont = document.getElementById("decrease-font");
const increaseFont = document.getElementById("increase-font");

const filteredQuotes = () => {
  if (currentCategory === "all") {
    return quotes;
  } else {
    return quotes.filter((q) => q.category === currentCategory);
  }
}

function displayQuote(index) {
  const filtered = filteredQuotes();
  if (filtered.length === 0) {
    quoteText.textContent = "No quotes in this category.";
    quoteAuthor.textContent = "i'll be hired.";
    return;
  }
  const quote = filtered[index];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
}

selectedCategory.addEventListener("change", () => {
  currentCategory = selectedCategory.value;
  currentIndex = 0;
  displayQuote(currentIndex);
});

prevBtn.addEventListener("click", () => {
    const filtered = filteredQuotes();
    currentIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    displayQuote(currentIndex);
})
randBtn.addEventListener("click", () => {
    const filtered = filteredQuotes();
    currentIndex = Math.floor(Math.random() * filtered.length);
    displayQuote(currentIndex);
})
nextBtn.addEventListener("click", () => {
    const filtered = filteredQuotes();
    currentIndex = (currentIndex + 1) % filtered.length;   
    displayQuote(currentIndex);
})

increaseFont.addEventListener("click", () => {
  fontSize += 0.1;
  document.documentElement.style.setProperty("--quote-font-size", `${fontSize}rem`);   
});
decreaseFont.addEventListener("click", () => {
  fontSize -= 0.1;
  document.documentElement.style.setProperty("--quote-font-size", `${fontSize}rem`);   
});

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeToggle.checked);
});



displayQuote(currentIndex);