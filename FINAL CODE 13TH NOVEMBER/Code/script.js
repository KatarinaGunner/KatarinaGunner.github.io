// S E L E C T O R S -----------------
const getActivityBtn = document.querySelector(".more-magic");
const activityTitle = document.querySelector("#title");
const activityDescription = document.querySelector ("#description");
let magicNumber = '';
/*const magicActivity = '';*/


function generateActivity(){
    magicNumber = Math.floor(Math.random() * (activityList.length - 0));
    activityTitle.innerHTML = activityList[magicNumber].title;
    activityDescription.innerHTML = activityList[magicNumber].description;
}

// getActivity
 




let activityList = [
    { title:"DANCE IN THE PARK", description: "Bring a bluetooth speaker to a park. Take turns choosing a song and dance to it. You can also create a short choreography to a part of the song. Follow each other's moves and take in the beauty of the park." },
    { title:"GO CAMPING IN NATURE", description: "Gather your friends and pick a date when you go to the nearest national park. Bring your outdoor clothes, sleeping bags and tents light a bonfire at night. Be one with nature and sleep under the stars." },
    { title:"JOIN A YOGA CLASSS", description: "Meet up on a weekday and take a yoga/meditation class together. Focus on your inner health together. Take a walk afterwards and reflect about the class together. " },
    { title:"SUNRISE WALK", description: "Meet at sunrise and walk in silence for 20 minutes. After your silent walk sit down and share how you are feeling."}, 
    { title:"THREE LOVELY THINGS", description: "Go out for a walk together and pick up or photograph three lovely things that you notice during the walk."},
    { title:"A DAY AT THE MUSEUM", description: "Explore a new museum with your friends that none of you have been to. It could be in your own city ot take a daytour and try a museum in another city!"},
    { title:"SUPPORT YOUR LOCAL ARTISTS!", description: "Go see an artist in your city or village to support them. It could be an artshow, a shop or maybe a lecture."},
    { title:"GO SEE ART!", description:"Go to an art gallery. See the art. Really see the art." },
    { title:"FOOD LETTER CHALLENGE", description:"Cook a meal based on a letter. Go to the grocery store and pick only ingredients of your chosen letter. See what you can improvise together based on the ingredients you chose."},
    { title:"FOOD COLOUR CHALLENGE", description:"Cook a meal based on a colour. Go to the grocery store and pick only ingredients of your chosen colour. See what you can improvise together based on those ingredients."},
    { title:"PLAYGROUND DATE", description: "Go to a playground and try out the swings. Then try to remember schoolyard games you enjoyed as a child. Take turns teaching the game and play it."},
    { title:"NATIONAL MUSEUM FACE HUNT", description:"Go to Nationalmuseum. Try to find paintings that has people who look like someone you know or a celebrity. Photograph the paintings and share with each other."},
    { title:"ADVENTURE CROQUET", description:"Bring a croquet set to your chosen outdoor space. Pick your starting point and goal point (it can be really far away or in a tricky location). Whoever reaches the goal in the fewest hits is the winner. Remember, winning is not important, it’s making the playing an adventure! Don’t have a croquet set? Bring any clubs and balls you have available and work it!"},
    { title:"ICE SKATING DREAM", description:"Go to the nearest ice skating rink where you can rent ice skates. Do an interpretive ice dance to Wuthering Heights by Kate Bush."},
    { title:"BEYONCÈ CHALLENGE", description:"Meet up and try to learn the choreography to Put A Ring On It from a Youtube-Tutorial."},
    { title:"BOOK STORE PARTY", description:"Go to a bookstore and buy each other a book. If you are more than two people, choose who’s buying for whom. Tell each other why you chose that book."},
    { title:"CELEBRITY LARP", description:"Dress up like a celebrity and join together for a live action role play hangout. Pretend you're that person and interact with the other celebrities. What will happen?"},
    { title:"WARDROBE SWAP PARTY", description:"Go through your wardrobe and sort out any clothes or accessories that you no longer love. Meet up at someone's house and display all items like you were in a shop. Now swap away and see what treasures you can find."},
    { title:"OUTDOOR BASKETBALL", description:"Shoot some hoops with your friends outdoors. You are a basketball star!" },
    { title:"CURLING CHAMPIONS", description:"Try out curling in your local ice rink." },
    { title:"CITY OF MY DREAMS WALK", description:"Look up some of the Stockholm locations mentioned in City Of My Dreams by P.A. Fogelström. Draw a rout on a map and go on a walk together in the historical footsteps of a worker in 1860.Imagine what the city would have looked like then and what their lives were like."},
    { title:"CRAFT WALK", description:"Go out on a walk together and gather materials for crafting. This could be sticks, flowers, leaves, pinecones, trash etc. Then sit together and create and craft a decoration. Complimentary materials to bring might be string, wire and scissors." },
    { title:"MYSTERY BOX COOKING", description:"Buy your friends ingredients for a meal of your choice. Then give them the bag and ask them to prepare the meal without telling them what it is. Let them be creative with your mystery ingredients."},
    { title:"BIKING BABES", description:"Put on your most fantastic clothes, get dressed up so that you feel extra fabulous. Then meet up on bikes and bike through the city. Either bring picnic things and stop in different places to snack, or stop at cafés/bars along the way that you haven't been to before." },
    { title:"PRETEND TO BE STRANGERS", description:"Go to a bar and pretend that you don't know each other. Observe each other and see how you can start to get to know each other. How do you make the first step? What questions do you ask? What happens to the other people in the place you are at? Is anyone noticing your interaction?"},
    { title:"CLOUD GAZING ARTISTS", description:"Lay down on a blanket outside and watch the clouds for 20 minutes. Watch their shapes, their colour, their opacity and how they change. When time is up, take out pens/watercolour/pencils/crayons and paper and start drawing/painting the impression the clouds left in your mind." },
    { title:"ANIMALS ARE MAGICAL CREATURES", description:"Go to a local farm, 4H-farm or Skansen and see if you can make some new animal friends. Remember to ask if you are allowed to pet them!" },
    { title:"DOG-SPOTTING WALK", description:"Go out for a walk together and as soon as you see a dog, ask the owner if you can say hello to it. Ask what for its name, how old it is and what it enjoys. Don't forget to say thank you to the owner and to tell the dog that it is a good boy/girl. Getting to know more dogs is a magical thing." },
    { title:"HORSES ARE LIKE UNICORNS", description:"Go to a local stable and meet some horses. Feel adventurous? Book a riding class." },
    { title:"SAUNA SERENITY", description:"Find a local sauna and bring some pampering products. Lotion, face masks, scrubs or just a nice piece of soap. Step into the warmth and relax together. This moment is for you all to relax and connect in the quiet." },
    { title:"PLAY RESTAURANT", description:"Invite your friends over to your restaurant. You and a couple of your friends can work in the kitchen and the rest of the friends are the guests. Prepare menus they can order from and make sure everyone in the kitchen has a role (chef, sous-chef, waiter). Next time swap roles so the kitchen team are the guests." },
    { title:"BOLD BOULDERING", description:"Try out bouldering at your local boulder center. It's SO COOL!" },
    { title:"OUTDOOR CINEMA", description:"Bring a fully charged laptop, blankets and snacks to a cosy outdoor area and watch a movie." },
    { title:"CUTTING SWAP PARTY", description:"Take some cuttings from your plants and meet up for a cutting swap. Share your care tips and find some new baby plants to love." },
    { title:"CITY EXPLORATION-CELEBRATION", description:"Visit a place in the part of the city you wouldn't normally go to and order something you wouldn't normally get. How does it feel? What conversations are you having? Never stop exploring." },
    { title:"MAGIC CARPET VIBEZ", description:"What vibez would you like to experience today? Seek objects in your home that could put you in that mode. Trust your intuition. Some inspo to manifest playful magical vibez: Colourful pens, a slinky, crystals, lego, inspiring books, tarot cards, candles, paper, playing cards, space stickers, seashells & stones. Set yourself free and explore your carpet!" },
    { title:"SPOTIFY SOUND CAVIAR Vol. 1", description:"Host a listening session and change your perceptions of music! Create a collaborative playlist on Spotify, share your link and let each attendee add a song that evokes a precious memory. 1. Introduce your song and share your beautiful memory. 2. Listen to the song together in silence. 3. Exchange your feelings and thoughts." },
    { title:"SKOGSKYRKOGÅRDEN BY DAY/NIGHT", description:"Soak in the beautiful statues, architecture & nature in the fresh daylight. Take a moment on a bench. Or why not visit the grave of legend Greta Garbo? Revisit during night time and see what you soak in then. Does it feel like the same place to you? Directions: https://skogskyrkogarden.stockholm.se/in-english/visiting/" },
    { title:"OFFLINE FOREST WALK", description:"Give your busy mind a break and your body a treat. Take yourselves out for a walk in the forest and leave your phone to rest at home. Note! Remember to google your directions before you leave the house! Inspiration on beautiful Stockholm locations: Nacka naturreservat, Årsta naturreservat, Bagarmossen's Söderbysjön, Hammarbybacken." },
    { title:"SUGAR PAINTING AKA EDIBLE ART DELUXE", description:"Recipe for 5-6 A4 Papers: 1dl sugar, 1/2 dl water - Mix sugar & water in a cooking pot until the sugar has dissolved. 1 wide + 1 soft paintbrush, watercolours, thick white paper - Paint your paper with the sugarwater using your wide paintbrush, now go wild and splash your watercolours onto the sweet paper. Voilà!" },
    { title:"BE A TOURIST IN YOUR OWN CITY", description:"Sometimes you forget what a beautiful city you live in.Take a day and explore your city just like a tourist would. Maybe you walked past these places many times without actually explore it yourself; like a café, restaurant, museum or another tourist attractions." },
    { title:"SEASONAL DECORATIONS", description:"It's seasonal decoration time! Maybe Christmas is around the corner? Or is it closer to easter? Get inspired together and decorate for the upcoming season! Get creative and explore being creative with food, sweets and desserts and other crafting according to season. Spend time together, create and have fun!" },
    { title:"DESTINATION UNKNOWN", description:"Take out a map, it could be offline or online. Locate yourself on the map and chose an area that is near you. Close your eyes and point on the map. open your eyes again and take a look at where you landed: Go to this spot with your friends and explore. Maybe it could be a roadtrip for one day, or if you want to explore even more; spend one night there and do fun activities together!" },
    { title:"CREATE ART", description:"Get your pencils and paint colors out, canvas, paintings or a piece of paper. Spend your day with a friend and start create a pattern together on the painting, after 1 minute; Flip the painting and continue color the pattern your friend started to do. Keep going until you have a mutual pattern and viola! You just created art together. :)" },
    { title:"SELF-CARE SUNDAY", description:"Prepare a nice bath for your feet. We stand on our feet everyday, let's take care of them and give them some extra love.Tap a bath with lavender extract and listen to a podcast or another audio that you like.Light some candles and gather your thoughts, lean in and relax. Maybe read a book while you at it. Enjoy!" },
    { title:"BOOB POT", description:"Go to the nearest second hand shop, or look around in your home for a empty pot that needs a makeover. Gather your friends and get the ingredients to create a boobpot. The results will be magic and you will have so much fun - we promise. Perfect to decorate your home and also the perfect gift! Boob pot recipe: shorturl.at/lnvN2 " },    
    { title:"SECOND-HAND SILLY EXTRAVAGANZA", description:"Visit a second-hand shop with your friend and go on a hunt for something that you think your friend would appreciate - keep it secret.. Have fun sharing your little surprises with each other while the big dollar goes to a good cause! Top tips on shops: Stadsmissionen Nytorget, Humana Mariatorget." },
    { title:"PILLOW FORT MAGIC", description:"Have your popcorn ready, make a pillow fort and enjoy a movie night in! Don't forget your cosy fairy-lights for decoration." },    
    { title:"HOME FEST", description:"Decorate your home with lots of bunting! Bring out the party hats and whistles! Bust out your favourite tunes! You don't need to have a special reason to celebrate. For the hungry fest-visitor: https://lovingitvegan.com/vegan-banana-pancakes/" },
    { title:"TEA & MEDITATION CIRCLE", description:"What could be co-prepare an assortment of teas, bring out the candle lights and spend some downtime with your loved ones. Start by sharing a cuppa together, then move on to meditating. Make sure to ask your friends to bring a pillow each for extra comfort. Here's a tip for a guided 10ms meditation: https://www.youtube.com/watch?v=tw7XBKhZJh4 " },
    { title:"KARAOKE", description:"Always dreamt of rocking that Usher tune? Or why not a little Britney Spears? The choice is yours! Hire a karaoke booth with your friends and sing your hearts out." },
    { title:"A TAROT A DAY...", description:"..keeps the doctor away. Shuffle your deck while asking what you should focus on today. Stop when your intuition tells you to, slice the deck into two, pick a card from the pile and interpret its' message. Let it inspire you for the rest of your day. This can be a solitary and friend activity too. Let the magic unfold." },
    { title:"BIKE SURPRISE", description:"Open Google Maps and search for an area you don't visit that often. Now point at a random place on the map without looking. Done deal! Pack your sandwiches, hot chocolates and get going on your little bike adventure." },
    { title:"CRYSTAL HUNTING", description:"Go to your local crystal shop with a dear friend. Before you enter the shop, make sure to be in a good mood and a nice state of mind together, maybe even meditate together right before. Take a look around and choose one crystal that really speaks to you and gives you a good feeling. Buy your chosen crystals for each other and learn more about them together. On the next full moon: Remind each other to put your crystal in the moonlight." },
    { title:"REARRANGE FURNITURE", description:"Take a look around in your house and give a furniture a some new life. Maybe repaint a chair? A table? Choose one furniture that needs some extra sparkle: Clean it, grind it and repaint it with a new beautiful color of your choice. " },
    { title:"MASTER COOKERY", description:"Open your fridge, pick two things each from the top, middle and bottom shelf. What can you make with this? Ask your friends to do the same and bring it along. Now cook up a feast together. Let the creativity flow." },
];

console.log