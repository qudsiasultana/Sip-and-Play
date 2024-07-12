document.addEventListener('DOMContentLoaded', function() {
  const menuItemsData = {
    coffee: [
      { name: 'Latte', price: '$4.75 (H)/$5.25 (C)' },
      { name: 'Cortado', price: '$4.25 (H)/$4.75 (C)' },
      { name: 'Drip Coffee', price: 'Small: $3 (H)/$3.50 (C), Medium: $3.50 (H), Large: $4 (H)/$4.25 (C)' },
      { name: 'Cafe Au Lait', price: '$3.25 (H)' },
      { name: 'Cappuccino', price: '$4.50 (H)' },
      { name: 'Mocha', price: '$5.75 (H)/$6.25 (C)' },
      { name: 'Red Eye', price: '$4.50 (H)/$4.75 (C)' },
      { name: 'Americano', price: '$3.75 (H)/$4.25 (C)' }
    ],
    'specialty-drinks': [
      { name: 'Matcha Latte', price: '$5.25 (H)/$5.75 (C)' },
      { name: 'Hot Chocolate', price: '$4.50 (H), S\'mores: $5.50' },
      { name: 'Nutella Latte', price: '$5.75 (H)/$6.25 (C)' },
      { name: 'Chai', price: '$5.00 (H)/$5.50 (C)' },
      { name: 'Dirty Chai', price: '$6.25 (H)/$6.75 (C)' },
      { name: 'Lavender Latte', price: '$5.75 (H)/$6.25 (C)' },
      { name: 'Rose Latte', price: '$5.75 (H)/$6.25 (C)' },
      { name: 'Brown Sugar Latte', price: '$5.75 (H)/$6.25 (C)' },
      { name: 'Bumblebee Latte', price: '$6.25 (H)/$6.75 (C)' }
    ],
    boba: [
      { name: 'The OG', price: 'Medium: $4.25, Large: $5.25, Hot: $5.25' },
      { name: 'Brown Sugar Boba', price: 'Medium: $4.75, Large: $5.75, Hot: $5.75' },
      { name: 'Taro Boba', price: 'Medium: $4.25, Large: $5.25, Hot: $5.25' },
      { name: 'Coconut Boba', price: 'Medium: $4.25, Large: $5.25, Hot: $5.25' },
      { name: 'Fruit Green/Black Tea', price: 'Medium: $4.25, Large: $5.25' },
      { name: 'Jasmine Milk Tea', price: 'Medium: $4.25, Large: $5.25, Hot: $5.25' },
      { name: 'Wintermelon Milk Tea', price: 'Medium: $4.25, Large: $5.25, Hot: $5.25' },
      { name: 'Toppings', price: '+$0.50 - Tapioca pearls, Lychee jelly, Mixed jelly, Grass jelly, Pop strawberry, Pop passionfruit, Mango stars' }
    ],
    'hot-bites': [
      { name: 'Chicken Poppers', price: '$6.00' },
      { name: 'Mozz Sticks', price: '$7.00' },
      { name: 'Pigs in a Blanket', price: '$7.00' },
      { name: 'Tater Tots', price: '$5.00' },
      { name: 'Chicken Tenders', price: '$8.00' },
      { name: 'Onion Rings', price: '$5.00' },
      { name: 'Fries', price: '$5.00' },
      { name: 'Sweet Potato Fries', price: '$6.00' }
    ],
    'sandwiches-salads': [
      { name: 'Beyond Bussin Sandwich', price: '$15.00', description: 'SHEEEESH Our new VEGAN sandwich highlighting the beyond burger and our house-made vegan chipotle aioli alongside lettuce, onion and avocado. Comes with a side of our house made chipotle aioli and chips.' },
      { name: 'Spicy Chicken Sandwich', price: '$13.00', description: 'Spicy mayo, grilled chicken, crispy bacon and avocado on Italian herb focaccia. Comes with chips.' },
      { name: 'Italian Panini', price: '$11.00', description: 'Prosciutto, pesto, and mozzarella in between herb focaccia and pressed til golden brown and crispy (pesto contains pine nuts). Comes with chips.' },
      { name: 'Tuna Melt', price: '$11.00', description: 'House-made tuna salad with American cheese on Italian herb focaccia pressed to perfection (can be spicy on request). Comes with chips.' },
      { name: 'Zesto Chicken Sandwich', price: '$13.00', description: 'Basil pesto, grilled chicken, fresh mozzarella and lemon zest on Italian herb focaccia (pesto contains pine nuts). Comes with chips.' },
      { name: 'Turkey Club', price: '$11.00', description: 'Roast turkey, lettuce, tomato, crispy bacon and American cheese on sourdough. Comes with chips.' },
      { name: 'Grilled Cheese', price: '$6.50', description: 'Comes with chips. +bacon/tomato/turkey: $1.50' },
      { name: 'Mixed Green Salad', price: '$6.50', description: 'w/tomato, vegan +smoked salmon: $5.00 +boiled egg: $1.00 +avocado: $1.50' },
      { name: 'Cobb Salad', price: '$10.00', description: 'Romaine lettuce, bacon, egg, chicken, tomato, and avocado tossed with ranch.' },
      { name: 'Pizza Panini', price: '$11.00', description: 'Pepperoni, fresh mozzarella, marinara and olive oil on Italian herb focaccia and pressed to perfection! Comes with chips.' },
      { name: 'Smoked Salmon Tartine', price: '$11.00', description: 'Lemon zest infused cream cheese on toasted heritage wheat. Piled high with smoked salmon and topped with pickled red onion. Comes with a side salad.' },
      { name: 'Avocado Toast', price: '$10.00', description: 'Avocado mashed with salt, pepper, lemon juice and olive oil on toasted heritage wheat. Comes with a side salad. +egg: $1' }
    ],
    all: [] // This will be populated with all items
  };

  // Populate the 'all' category with all items
  Object.keys(menuItemsData).forEach(category => {
    if (category !== 'all') {
      menuItemsData[category].forEach(item => menuItemsData.all.push(item));
    }
  });

  const menuItemsContainer = document.getElementById('menu-items');
  const categoryLinks = document.querySelectorAll('.category-link');

  function displayMenuItems(category) {
    menuItemsContainer.innerHTML = '';
    menuItemsData[category].forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p><div class="menu-item-description"><p>${item.description || ''}</p></div>`;
      menuItem.addEventListener('click', function() {
        this.classList.toggle('active');
      });
      menuItemsContainer.appendChild(menuItem);
    });
  }

  categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      categoryLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
      const category = this.getAttribute('data-category');
      displayMenuItems(category);
    });
  });

  // Initially display all items
  displayMenuItems('all');
});

document.addEventListener('DOMContentLoaded', function() {
  const games = [
    "13 Days", "20 second showdown", "221B Baker Street", "5 Second Rule", "5 Second Rule: Jr.",
    "5 Second Rule: Uncensored", "5-Minute Dungeon", "5-Minute MARVEL", "7 Wonders", "7 Wonders: Duel",
    "8 Minute Empire: Legends", "8 Minute Empire: Lost Lands", "A Game of Thrones: The Board Game", "Above and Below",
    "Acquire", "Agricola", "Apples to Apples", "Ascension Deck Building Game", "Attack of the killer kittens",
    "Attack of the killer kittens (NSFW)", "Axis & Allies: Pacific", "Azul: Stained glass of Sintra", "Badmoji",
    "Bananagrams", "Bang!", "Bang! Dice Expansion: Old Saloon", "Bang! The Dice Game", "Barenpark",
    "Battle for the island", "Battleline", "Battleship", "Betrayal at House on the Hill", "Big Boggle",
    "Blockbuster", "Blokus", "Blood Rage", "Boggle", "Brain Games", "Broom Service", "CAH Expansions 1-4,6",
    "Camel Cup", "Captain Sonar", "Carcassonne", "Cards Against Humanity", "Cash 'n Guns", "Castle Panic",
    "Catan Expansion: Seafarers", "Catan Junior", "Chameleon", "Cheating Moth", "Checkers", "Cheer up!", "Chess",
    "Chicago Express", "Chinese Checkers", "Chronoauts", "Chronology", "Chutes & Ladders", "Citadels", "City of London",
    "Clank! A Deck-building adventure", "Classic Go", "Clue", "Clue: Bob's Burger", "Cockroach Poker",
    "Codenames Deep Undercover", "Codenames Duet", "Codenames Pictures", "Codenames: Disney", "Codenames: Harry Potter",
    "Codenames: The Simpsons", "Codenmames", "Color Brain: Disney Edition", "Colt Express", "Concept", "Connect 4",
    "Coup", "Coup Reformation", "Cranium", "Crystal Clans", "Cube Quest", "Cyclades", "Dead of Winter", "Deadwood 1876",
    "Decrypto", "Descent: Journeys in the Dark", "Dice Forge", "Dice Throne Season 2 - Cursed Pirate vs Artificer",
    "Dice Throne Season 2 - Gunslinger vs Samurai", "Dominion", "Dominion 2nd Edition", "Dominion: Intrigue",
    "Dominoes", "Don't Break the Ice", "Down Force", "Dungeon Run", "Echo of time (Entropy Expansion)", "Elder Sign",
    "Elysium", "Entropy", "Everdell", "Exoplanets", "Exploding Kittens", "Exploding Kittens NSFW Pack",
    "Exploding Kittens Party Pack", "Five Tribes", "Flamme Rouge", "Flash Point: Fire Rescue", "Forbidden Desert",
    "Forbidden Island", "Formula D", "Fort Sumter", "Founders of Gloomhaven", "Gaia Project", "Get bit!", "Ghost Blitz",
    "Ghost Blitz 5 to 12", "Ghost Blitz Junior", "Gizmos", "Gobblet Gobblers", "Gravwell", "Guess Who?", "Guillotine",
    "Haiclue", "Hail Hydra", "Hamsterrolle", "Hanabi", "Head Hackers", "Hey, that's my fish!", "Hive", "Hive Carbon",
    "ICECOOL", "Illimat", "Imhotep: The Duel", "Incohearant", "Istanbul", "Jaipur", "Jamaica", "Jaws", "Kahuna 2-Player Game",
    "Keyflower", "Killer Bunnies", "King of New York", "King of Tokyo", "King of Tokyo: Dark Edition", "Lanterns",
    "Le Havre", "Legendary: A Marvel Deck-building game", "Lewis & Clark", "LINKEE", "Lords of Vegas", "Lords of Waterdeep",
    "Love letter", "Machi Koro", "Mage Wars", "Magic Maze", "Mancala", "Mansions of Madness", "Marvel Champions: The Card Game",
    "Mascarade", "Maskarades", "Mastermind", "Memoir 44", "Mice and Mystics", "Mille Bornes", "Mint Delivery", "Mint Works",
    "Monikers", "Monopoly", "Monopoly Deal", "Monopoly: California, Here we come!", "Monopoly: Doctor Who", "Monopoly: Frozen II",
    "Monopoly: Gamer", "Monopoly: The America", "Monopoly: The Walking Dead", "Monopoly for Milennials", "Munchkin",
    "Munchkin Fu", "Munchkin Fu", "Munchkin Quest", "Munchkin: Rick and Morty", "Mysterium", "Mythotopia", "New York Slice",
    "No Thanks!", "OK", "One Deck Dungeon", "One Night Ultimate Werewolf", "Operation", "Othello", "Out of the Woods",
    "Pagoda", "Pandemic", "Parcheesi: Royal edition", "Partners", "Patchwork", "Pictionary", "Pirate Fluxx", "PIT",
    "Point Salad", "Power Grid", "Puerto Rico", "Quacks of Quedlinburg", "Queendomino", "Quiddler", "Qwirkle", "Race for the Galaxy",
    "Ramen Fury", "Raptor", "Rhino Hero", "Rick and Morty: Total Rickall", "Rising Sun", "Risk", "Risk", "Risk Godstorm",
    "Rock & Roll Party Game", "Roll for the Galaxy", "Root", "Rummikub", "Sagrada", "Samurai Spirit", "San Juan", "Santorini",
    "Say Anything", "Say Anything", "Scattergories", "Schmovie", "Scotland Yard", "Scrabble", "Seasons", "Secret Hitler",
    "Sentinels of the Multiverse", "Sequence", "SET", "Settlers of Catan", "Sheriff of Nottingham", "Sketchy Stories",
    "Skull", "Small World", "Smart Ass", "Smash Up", "Sorry!", "Spank the Yeti", "Spank the Yeti: Geek Pack", "Spirit Island",
    "Splendor", "Spot it!", "Spot it!: Frozen II", "Spyfall", "Spyfall 2", "Star Fluxx", "Star Traders", "Star Trek Panic",
    "Stone Age", "Stop Thief!", "Stratego", "Super Hazard Quest", "Survive: Escape from Atlantis", "Sushi Go", "Taboo",
    "Takenoko", "Tara", "Telestrations", "Telestrations: After Dark", "Terraforming Mars", "Thanos Rising", "The Fox in The Forest",
    "The Game of Life", "The Great Heartland", "The Metagame", "The Mind", "The Mind: Extreme", "The Resistance", "The Resistance: Avalon",
    "The Werewolves of Millers Hollow", "The Game of Wolf", "Through the Desert", "Ticket to Ride", "Ticket to Ride Expansion: USA 1910",
    "Ticket to Ride: Europe", "Ticket to Ride: Nordic Countries", "Ticket to Ride: The Dice Expansion", "Timeline", "Timeline Americana",
    "Tokyo Metro", "Trapwords", "Treason in the Tower", "Trivial Pursuit", "Trouble", "Tsuro", "Twilight Struggle", "Unexploded cow",
    "Unlock Adventures!", "Uno", "UNO Flip", "UNO Frozen 2", "Unstable Unicorns", "Vault of Dragons", "Via Nebula", "Viceroy",
    "Villainous", "Villainous: Evil Comes Prepared", "Villainous: Wicked to the Core", "Visitor", "Weird Things Humans Search For",
    "Welcome to the Dungeon", "What Came First", "Wildlands", "Wits & Wagers", "Wu Wei: Journey of the Changing Path", "Yahtzee",
    "You Bet-Cha!", "Zombie Dice", "Zombicide"
  ];

  const gamesContainer = document.getElementById('games-container');

  games.forEach(game => {
    const gameButton = document.createElement('button');
    gameButton.classList.add('game-button');
    gameButton.textContent = game;
    gameButton.addEventListener('click', () => {
      alert(`You selected ${game}`);
    });
    gamesContainer.appendChild(gameButton);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector(".contact-form");
  
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    contactForm.reset();
  });
});

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});