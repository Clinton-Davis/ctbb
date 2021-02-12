import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      category: "",
      activities: [],

      // activities: [
      //   {
      //     id: "MT6X7Mjk6H20xOCM-QL",
      //     category: "sight_seeing",
      //     googleId: "ChIJdeCOYqJnzB0Rm5YhSFRUI2w",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989183/CTBB/activities/tom-podmore-e3QepI-chns-unsplash_jprxvc.webp",
      //     info:
      //       "Mountain with a distinctive flat plateau, popular for hiking, climbing, biking & wildlife viewing. There is the Table Mountain Aerial Cableway Company has been providing visitors with a world-class experience since October 4, 1929. The company operates in a National Park and World Heritage Site.",
      //     name: "Table Mountain",
      //   },
      //   {
      //     id: "MT6XqO1VPLDpmugLfpU",
      //     category: "sight_seeing",
      //     googleId: "ChIJAf2PqQkjzB0RTEFJZ9rJSSM",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989181/CTBB/activities/shashank-kumar-YMOvzRuBH8k-unsplash_iztrm5.webp",
      //     info:
      //       "Cape Point is like no other.  At Cape Point Nature Reserve, the mountain and ocean meet in a thunderous clash of water against rock, producing a dramatic landscape inhabited by an incredible diversity of life.",
      //     name: "Cape Point",
      //   },
      //   {
      //     id: "MT6as43Dams7P0BTU9U",
      //     category: "sight_seeing",
      //     googleId: "ChIJLSz2VWhnzB0Rpm9vazg9yw4",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fill,h_500,q_100,w_500/v1612989184/CTBB/activities/devon-janse-van-rensburg-ODZIiIsn490-unsplash_cqgepp.webp",
      //     info:
      //       "A popular daytime destination, hillside Bo-Kaap is known for its narrow cobbled streets lined with colorful houses. Local Cape Malay culture is represented at sites like the 1790s-built Auwal Mosque and the Bo-Kaap Museum, with exhibits about the achievements of Muslim immigrants. Nearby, simple restaurants serve curries, roti and other Cape Malay dishes. The Noon Gun cannon is fired daily at midday from Signal Hill.",
      //     name: "Boo-Kaap",
      //   },
      //   {
      //     id: "-MT6bCxtKkARsi9uddXZ",
      //     category: "sight_seeing",
      //     googleId: "ChIJ29Ra-NNpzB0R03JXGGkr6Bo",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1613038883/CTBB/activities/Wine-Farms-in-Constantia_obeojj.webp",
      //     info:
      //       "Constantia is a wine-producing suburb of Cape Town, South Africa. The Constantia Wine Route links the many wineries dotting the Constantia Valley. Housed in a 17th-century wine estate, Groot Constantia Homestead and Wine Museum includes a manor house with 18th- and 19th-century furnishings, plus collections of drinking vessels and carriages. The Constantia Greenbelt network includes the tree-lined Alphen Trail.",
      //     name: "Constainta",
      //   },
      //   {
      //     id: "-MT6bTPsPiiVWWmxKld9",
      //     category: "sight_seeing",
      //     googleId: "ChIJu2x0EhZAzB0RCyIwnb_NXFY",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1613038890/CTBB/activities/170425165916-beautiful-south-africa-2-kalk-bay_i0namo.webp",
      //     info:
      //       'Kalk Bay is a fishing village on the coast of False Bay, South Africa and is now a suburb of greater Cape Town. It lies between the ocean and sharply rising mountainous heights that are buttressed by crags of grey Table Mountain Sandstone. A literal translation from the Dutch/Afrikaans name "Kalkbaai" is "Lime Bay"',
      //     name: "Kalk Bay",
      //   },
      //   {
      //     id: "-MT6biD_Mievuv1gcolE",
      //     category: "sight_seeing",
      //     googleId: "ChIJvxVitEk-zB0RVJetXFk0qww",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989183/CTBB/activities/bernd-m-schell-np257H6Ex1o-unsplash_otzknk.webp",
      //     info:
      //       "This picturesque area, with enormous boulders dividing small, sandy coves, is home to a colony of some 3000 delightful African penguins. A boardwalk runs from the Boulders Visitor Centre at the Foxy Beach end of the protected area to Boulders Beach, where you can get down on the sand and mingle with the waddling penguins. Don’t, however, be tempted to pet them: they have sharp beaks that can cause serious injuries.",
      //     name: "Boulders Beach/Penguins",
      //   },
      //   {
      //     id: "-MT6bwbCSRkkpcJXY24Z",
      //     category: "sight_seeing",
      //     googleId: "ChIJVagz7BNpzB0Rv9p0tMDvZsg",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989183/CTBB/activities/benjamin-le-roux-bTBnQ1DUycI-unsplash_tdqacq.webp",
      //     info:
      //       "Chapman's Peak is the name of a mountain on the western side of the Cape Peninsula, between Hout Bay and Noordhoek. The mountain falls sharply for hundreds of metres into the Atlantic Ocean. A spectacular road, known as Chapman's Peak Drive, hugs the near-vertical face of the mountain.",
      //     name: "Chapmens Peak Drive",
      //   },
      //   {
      //     id: "-MT6cC7cabNGHoL3GwOI",
      //     category: "sight_seeing",
      //     googleId: "hIJXdpUhHtnzB0RI8TYhHL5028",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fill,h_500,w_500/v1612989185/CTBB/activities/districtSix_pkypih.webp",
      //     info:
      //       "It's impossible not to be emotionally moved by this museum, which celebrates the once lively multiracial area that was destroyed during apartheid in the 1960s and 1970s, its 60,000 inhabitants forcibly removed. Inside the former Methodist Mission Church, home interiors have been recreated, alongside photographs, recordings and testimonials, all of which build an evocative picture of a shattered but not entirely broken community.",
      //     name: "Distrct Six",
      //   },
      //   {
      //     id: "-MT6cR7rQjAzsm3SXQPU",
      //     category: "sight_seeing",
      //     googleId: "ChIJecz6YqhCzB0RZqXqcdmKfBs",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989181/CTBB/activities/ROP-CapeTownHelicopters-Table-Mountain_f2qakq.webp",
      //     info:
      //       "Kirstenbosch is an important botanical garden nestled at the eastern foot of Table Mountain in Cape Town.  The garden is one of ten National Botanical Gardens covering five of South Africa's six different biomes and administered by the South African.  There is also sunset concert, They are a picnic style concert, so bring a blanket and a picnic basket. Children under 6 years do not require a concert ticket for the Kirstenbosch Summer Sunset Concerts. Check the website for more details.",
      //     name: "Kirstenbosch National Botanical Garden",
      //   },
      //   {
      //     id: "-MT6chzWSmasWl4AHIoZ",
      //     category: "sight_seeing",
      //     googleId: "ChIJfeaqwlpnzB0Rl2i0iRvp6SI",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989184/CTBB/activities/erik-o990dFLgo1Q-unsplash_ag3alw.webp",
      //     info:
      //       "This excellent aquarium & conservation center features denizens of the deep from the cold and the warm oceans that border the Cape Peninsula. It's a chance to see penguins, turtles,  offering close encounters with sharks.An astounding kelp forest open to the sky, and pools in which kids can touch sea creatures. Qualified divers can get into the water for a closer look.  We recommend That you have a look at the Website for more detail of events and feeding times.",
      //     name: "Two Oceans aquarium",
      //   },
      //   {
      //     id: "-MT6czuZOtsNHFosrToF",
      //     category: "adventure",
      //     googleId: "ChIJG31DwhJnzB0RC9C77ufuck0",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/v1612989181/CTBB/activities/kayak_ot4nc8.webp",
      //     info:
      //       "Kayaking is vastly becoming one of the top Adventure Activities that Cape Town has to offer. With our guided Kayak Tour in Hout Bay and state of the art equipment - let Kayak Adventures take you on a scenic excursion that you won't forget!",
      //     name: "Kayak Cape Town",
      //   },
      //   {
      //     id: "-MT6dFEfPCP-qpE8gsmX",
      //     category: "adventure",
      //     googleId: "ChIJm-ZKiSFnzB0R4NBaoM1UpgM",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/v1612989184/CTBB/activities/inverdoorn-game-reserve_qpc2f8.webp",
      //     info:
      //       "Inverdoorn game reserve is filled with various natural life, within the Klein Karoo. The reserve has made a significant contribution to sustaining the biodiversity of the region. Inverdoorn’s 10 000 hectares are also home to the successful cheetah conservation centre.",
      //     name: "Big Five Game Reserve",
      //   },
      //   {
      //     id: "-MT6dU6MzAOxM8kRz-n3",
      //     category: "adventure",
      //     googleId: "ChIJ846ZPb5nzB0RCXS_Tom7p9w",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989183/CTBB/activities/absailing_u8hecj.webp",
      //     info:
      //       "Explore Cape Town and surrounds with us Abseil Africa is OPEN 7 days a week between 08:30 – 16:00. Bad weather may affect our operation status. Book your trips with us – we want to take you on an adventure of a lifetime!",
      //     name: "Abseil Table Mountain abseilafrica.co.za",
      //   },
      //   {
      //     id: "-MT6dju4KnIhymZpw81j",
      //     category: "adventure",
      //     googleId: "ChIJgfmZnllnzB0RPihXS4A96ZA",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989183/CTBB/activities/alexander-schimmeck-H3mN3MI5eyU-unsplash_am6t1g.webp",
      //     info:
      //       "Wineland Ballooning offers daily scenic Hot Air Balloon flights over the naturally beautiful Berg River Valley, one of South Africas famous wine regions. On nearly every flight, while gently floating away, can we see majestic Table Mountain in the distance and on particularly spectacular days you may even see the Atlantic Ocean with the  'Cape of Good Hope'  100 km away.Each flight is totally unique and no two flights are exactly the same.",
      //     name: "Wineland Ballooning Cape Town kapinfo.com",
      //   },
      //   {
      //     id: "-MT6dwibn3Pr5eNQ0ILw",
      //     category: "adventure",
      //     googleId: "ChIJY3iy6x0Rzh0RKtT-ViOf004",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fill,h_500,q_100,w_500/v1612989184/CTBB/activities/clayton-cardinalli-_U0SEppuF6Q-unsplash_izpwds.webp",
      //     info:
      //       "Shark Bookings has been in operation since 2003 as a central bookings office for the most reputable shark diving operators in South Africa. We have by far the most competitive prices for shark cage diving in Cape Town & Gansbaai, and we offer trips to Mossel Bay and Durban. We work with only the best operators, all of whom are fully licensed and registered. And best of all, bookings are in real time, with instant confirmation, there is no waiting around, just book, pay and go shark diving.",
      //     name: "Shark Bookings sharkbookings.com",
      //   },
      //   {
      //     id: "-MT6e8uIZECsOPHAM4hR",
      //     category: "adventure",
      //     googleId: "ChIJfWMCP3THzR0R_8QVpSATqYM",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1613038882/CTBB/activities/zipline_penlnf.webp",
      //     info:
      //       "A zipline canopy tour in the company of soaring eagles, surrounded by breath-taking Cape fynbos panoramas and mountainscapes only an hour’s drive from Cape Town by car could well be exactly what you are looking for. Thrilled zipliners who have completed the course have described it as super safe. One commented that the quality of the structure and equipment was reassuringly high and had made her fear of heights irrelevant.",
      //     name: "Zipline - Cape Canopy Tour capecanopytour.co.za",
      //   },
      //   {
      //     id: "-MT6eK1IpeiDX9jS4z8N",
      //     category: "adventure",
      //     googleId: "ChIJAxwYC6dnzB0RihwwcBrKwYE",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_crop,h_500,w_500/v1612989181/CTBB/activities/Living-Life-Downhill_appxbo.webp",
      //     info:
      //       "Enjoy an exhilarating downhill descent on the Monster Mountain® Scooters. Scootours® is not an extreme activity but a unique and family friendly way to experience nature and the surroundings of your holiday destination. Scootours make use of non motorised Monster Mountain® Scooters, making this an eco friendly adventure. These Swiss designed scooters are used in the Alps during their summer season on the ski slopes when the snow has melted.",
      //     name: "Scootours Cape Town scootours.co.za",
      //   },
      //   {
      //     id: "-MT6eYT0ivfxS2nYShK_",
      //     category: "adventure",
      //     googleId: "ChIJ1_u4UbNnzB0RH1tMJWyQWrI",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989183/CTBB/activities/brent-ninaber-hC9HbPWdllc-unsplash_ijypez.webp",
      //     info:
      //       "Cape Town is an adventure hotspot featuring an endless variety of exciting activities. At Hike Addicts we are pleased to offer a diverse selection of Cape Town’s most exhilarating tours on one platform. Table Mountain shows off its exceptional beauty all year round and for the more adventurous souls, hiking Table Mountain is possibly the most rewarding and amazing experience you will have in Cape Town.",
      //     name: "Lions Head - Hike Addicts hikeaddicts.com",
      //   },
      //   {
      //     id: "-MT6eis6OxxWhHdzCCwl",
      //     category: "adventure",
      //     googleId: "ChIJN4QZT1ZnzB0Rq1OQmhhKoFc",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989181/CTBB/activities/ROP-CapeTownHelicopters-Table-Mountain_f2qakq.webp",
      //     info:
      //       "The helicopter you fly in has a huge impact on the quality of your air-tour experience. Compare Cape Town Helicopters’ state-of-the-art helicopters with some other tour helicopters used in Cape Town.",
      //     name: "Cape Toewn Helicotpers helicopterscapetown.co.za",
      //   },
      //   {
      //     id: "-MT6etElHqWQxZOR4zg2",
      //     category: "adventure",
      //     googleId: "ChIJ5_CYMno_zB0Rb3CrFJuM0vI",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989183/CTBB/activities/water_bykes_xesiso.webp",
      //     info:
      //       "Cape Town Water Bikes is a new way to experience the Simon’s Town coast. \nHop on one of the world’s most advanced water bikes and get pedalling for a different perspective.",
      //     name: "Water Bikes",
      //   },
      //   {
      //     id: "-MT6f6yNReVFCbdUaa-I",
      //     category: "foodie",
      //     googleId: "ChIJe6PtQ9FpzB0R4YORfViLQ5s",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1613039920/CTBB/activities/jonkershuis-restaurant_t1l8pk.webp",
      //     info:
      //       "Jonkershuis Constantia is nestled in the historic core of the Groot Constantia Wine Estate next to the historic Manor House and surrounded by ancient oak trees. Sweeping views across the oldest wine producing vineyards in South Africa, Sustainability and the ethical content of all the food prepared, Reflecting the rich Cape Malay heritage of our ‘home’",
      //     name: "Jonkershuis Restaurant",
      //   },
      //   {
      //     id: "-MT6fIwofrPXKvVTSQjw",
      //     category: "foodie",
      //     googleId: "ChIJgcBEXzhpzB0R2_0Gu9eDcIA",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989182/CTBB/activities/snoekies_but_vmdw1l.webp",
      //     info:
      //       "Hans’s purchased an old bus, which he converted into a takeaway cafe and positioned it at the end of Harbour Road, Hout Bay. \n\t\t\t\tThey named the take-away cafe, Snoekies from where they served fish & chips to the local fishermen.  Hans’s wife ran the Snoekies take-away cafe whilst he experimented with smoking fish and they found that his smoked snoek sold well at the café. Before long they found it difficult to keep up with the demand from their garage at home and in 1956 he built a factory in the Hout Bay Harbour.",
      //     name: "Snoekies",
      //   },
      //   {
      //     id: "-MT6fVeYUX6l6LDF-N-h",
      //     category: "foodie",
      //     googleId: "ChIJHWikDhRAzB0RyOvryzibbV8",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989184/CTBB/activities/harbour-house-115280_xcdspv.webp",
      //     info:
      //       "Sitting on the harbour wall it's self is an elegant yet relaxed seafood restaurant with a deck overlooking fishing boats, the ocean and mountains.",
      //     name: "Harbour House Kalk Bay",
      //   },
      //   {
      //     id: "-MT6flKIlfDwn0nx7QF7",
      //     category: "foodie",
      //     googleId: "ChIJ-f-De2VnzB0RwYNmkT4nR1A",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989182/CTBB/activities/mamanAfrica_o51cfo.webp",
      //     info:
      //       "Mama Africa Cape Town enjoys the distinction as a Long Street institution. It is the most unique experience you will have during your visit in Africa. Nowhere else exists where you can be Africa. You can view awesome African sunsets from the top of Table Mountain. But, if you want to immerse yourself in African history and culture, you must visit Mama Africa restaurant and be Africa.",
      //     name: "Mamma Afirca",
      //   },
      //   {
      //     id: "-MT6g0UkAyDfqWNG9um0",
      //     category: "foodie",
      //     googleId: "ChIJ6cobfmZnzB0Rj3KoGeEf7d8",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989182/CTBB/activities/shortmarket-club-1_vwcyu8.webp",
      //     info:
      //       "Open for lunch and dinner and, in keeping with its luxe old-world feel, many of the dishes are modern interpretations of classics as only chef Randles can do. Where most chefs use ‘seasonal’ and ‘sustainable’ as meaningless selling points, Randles fully embraces it. The restaurant works closely with local suppliers for all of their ingredients, which in turn inspire the menus.  As a result, Randles’ food is instantly identifiable. Inventive, playful and refreshed, the dishes he puts on the Shortmarket menus are ever-changing.",
      //     name: "The Shortmarket Club",
      //   },
      //   {
      //     id: "-MT6gCStpRjSKLALiuxk",
      //     category: "foodie",
      //     googleId: "ChIJc6IAMYRdzB0R9yLw41HjQtM",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989182/CTBB/activities/stardust_egcjxv.webp",
      //     info:
      //       "This is no ordinary restaurant. This is the home of the singing waiter! Tonight, not only will you enjoy the wholesome, sumptuous taste of our designer tagine menu and the buzz of our wine bar’s best and brightest, but you’ll also be served and entertained by the shining stars of Cape Town’s immense pool of talented young performers. Make sure you get your waiter’s",
      //     name: "Stardust Theatrical Dining",
      //   },
      //   {
      //     id: "-MT6gPy52PJQbumK51a2",
      //     category: "foodie",
      //     googleId: "ChIJR-hGZGZnzB0R0DeLE_fCN3o",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989184/CTBB/activities/CW_Bree_1_hwzwe2.webp",
      //     info:
      //       "Liam Tomlin opened Banc restaurant in Sydney in 1997 where he garnered many accolades including 3 Chef Hats. Relocating to South Africa in 2003 he consulted to various projects within the hospitality industry and in 2010 opened Chefs Warehouse and Cookery School, Cape Town. In 2014 the concept was changed, and Chefs Warehouse and Canteen began serving fine-dining quality global tapas.",
      //     name: "Chefs Warehouse & Canteen",
      //   },
      //   {
      //     id: "-MT6gaTOkU0-SrZXUgTF",
      //     category: "foodie",
      //     googleId: "ChIJ4RIv5klqzB0RK47qApYWst8",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1613039920/CTBB/activities/CPV-24_upnsdo.webp",
      //     info:
      //       "Cape Point Vineyards, a unique farm in Noordhoek where vines are lazily nestled between mountains and ocean. Cool breezes from the sea make for a slow-growing season, with a late harvest that results in a truly unique Sauvignon Blanc that is recognised across the globe for it’s rich minerality, structure and tone.",
      //     name: "Cape Point Vineyards Restaurant",
      //   },
      //   {
      //     id: "-MT6gnz1Z0tCzJvwyrF8",
      //     category: "foodie",
      //     googleId: "ChIJ7xQ8UL9rzB0R0T8uHTXAJvU",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1613039920/CTBB/activities/Monkey-Valley-Resort_imy3gi.webp",
      //     info:
      //       "Nestled within the Milkwood forest at the foot of Chapman’s Peak Noordhoek is Monkey Valley Resort. The resort has an unrivaled view of the Noordhoek beach and nature reserve. Monkey Valley was built with a sustainable environmentally friendly ethos in order to preserve the natural beauty of the area.",
      //     name: "Monkey Valley Resort",
      //   },
      //   {
      //     id: "-MT6h-iLM8afM6upLDh0",
      //     category: "foodie",
      //     googleId: "ChIJ8aBJ0NQ_zB0REMuSYqHp6k8",
      //     imageUrl:
      //       "https://res.cloudinary.com/dayietcj3/image/upload/c_fit,h_500,w_500/v1612989181/CTBB/activities/lighthouseCaffe_oqmesl.webp",
      //     info:
      //       "The Café has a beautiful ambience; it is an inviting space, light & airy with a French Provençal and Coastal feel which makes one feel right at home, it is a space where customers love to spend time with a book or with friends and a frothy cappuccino coffee for breakfast, lingering and often taking their shoes off.",
      //     name: "The Light House Cafe",
      //   },
      // ],
    };
  },

  mutations,
  actions,
  getters,
};
