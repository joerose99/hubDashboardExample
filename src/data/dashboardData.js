/* Multi-week Marriott portfolio dashboard data. */
const DATA = {

default:'dtc',

properties:{

/* ---------------- NORTH BETHESDA ---------------- */
northBethesda:{
  name:"North Bethesda Marriott",
  full:"North Bethesda Marriott Hotel and Conference Center",
  address:"5701 Marinelli Rd, Rockville, MD 20852",
  kind:"Conference centre · 4 departments",
  installDate:"Feb 27, 2023",
  orgId:"6a4ae2fc3aa41c5669c19e2c",

  weeks:[
{
  weekLabel:"Jul 5–12", period:"July 5 – 12, 2026", periodNote:"",
  totalLbs:{value:78.86,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$159.12",perLb:2.02,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  wasteType:{status:"confirmed",rows:[{label:"Postconsumer",pct:75.3,color:"#8FA99A"},{label:"Preconsumer",pct:24.7,color:"#1B5E3F"}]},
  department:{status:"confirmed",rows:[{label:"Kitchen",pct:52.6,color:"#1B5E3F"},{label:"Banquet",pct:47.4,color:"#96342E"}]},
  categories:{status:"estimated",rows:[{label:"Vegetables",pct:37.7,costPerLb:1.8,costShare:33.6},{label:"Starches/Grains",pct:32.2,costPerLb:1.6,costShare:25.5},{label:"Other",pct:15.4,costPerLb:2.2,costShare:16.8},{label:"Proteins",pct:14.7,costPerLb:3.3,costShare:24.0},{label:"Fruits",pct:0,costPerLb:2.3,costShare:0.0},{label:"Dairy",pct:0,costPerLb:3.5,costShare:0.0}]},
  topIngredients:{status:"confirmed",rows:[{name:"Spiced Yellow Rice",lbs:16.8},{name:"Mushroom Sauce",lbs:9.3},{name:"Bagels",lbs:9.2}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Green Beans | Roasted Red Peppers",lbs:37.4,flag:""},
      {item:"Assorted Bagels with Cream Cheese, Fruit Preserves | Wildflower Honey | Butter",lbs:21.97,flag:""},
      {item:"Classic Jumbo Shrimp Cocktail Presentation (3 pieces per person)",lbs:6.67,flag:""},
      {item:"Artisan Rolls and Sweet Butter",lbs:5.25,flag:""}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"high",title:"Cut portion sizes on Green Beans | Roasted Red Peppers",
     body:"This single banquet side accounts for 37.40 lbs, nearly half of the week's total waste — the largest single-item concentration seen at this property to date. A direct check on batch sizing for this specific side would address a large share of the week's waste in one move.",
     support:"Green Beans | Roasted Red Peppers: 37.40 lbs — 47% of the week's 78.86 lbs total."},
    {pri:"med",title:"Look into the high share of guest-facing leftovers this week",
     body:"Postconsumer waste — food that reached guests but wasn't eaten — was 75.3% this week, above the typical pattern for this property. That points to portion sizing or menu appeal at service, not kitchen prep, as the likely driver.",
     support:"Postconsumer 75.3% vs. Preconsumer 24.7% — among the highest Postconsumer shares recorded at this property."},
    {pri:"med",costDriven:true,title:"Proteins carry more cost than their weight suggests",
     body:"Proteins are only 14.7% of this week's waste by weight but 24.0% of the cost — the widest weight-to-cost gap of any category this week. Worth flagging for the same par-level review already used elsewhere at this property.",
     support:"Proteins: 14.7% of weight, 24.0% of $159.12 cost ($3.30/lb)."}]}
},
{
  weekLabel:"Jul 12–19", period:"July 12 – 19, 2026", periodNote:"",
  totalLbs:{value:149.47,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$389.52",perLb:2.61,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  wasteType:{status:"confirmed",rows:[{label:"Preconsumer",pct:82.2,color:"#1B5E3F"},{label:"Postconsumer",pct:17.8,color:"#8FA99A"}]},
  department:{status:"confirmed",rows:[{label:"Kitchen",pct:63.0,color:"#1B5E3F"},{label:"Banquet",pct:37.0,color:"#96342E"}]},
  categories:{status:"estimated",rows:[{label:"Proteins",pct:41.7,costPerLb:3.3,costShare:52.8},{label:"Other",pct:31.7,costPerLb:2.2,costShare:26.8},{label:"Vegetables",pct:13.7,costPerLb:1.8,costShare:9.5},{label:"Starches/Grains",pct:8.9,costPerLb:1.6,costShare:5.5},{label:"Dairy",pct:4.1,costPerLb:3.5,costShare:5.5},{label:"Fruits",pct:0,costPerLb:2.3,costShare:0.0}]},
  topIngredients:{status:"confirmed",rows:[{name:"Mixed Greens",lbs:23.0},{name:"Fried Chicken",lbs:20.5},{name:"Pork Loin",lbs:17.2}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Super Food Salad | Spinach | Strawberries | Blueberries | Walnuts | Raspberry Dressing",lbs:41.76,flag:""},
      {item:"Slow Roasted Pork Loin",lbs:28.69,flag:""},
      {item:"Broccoli Salad | Dried Cranberries | Pickled Onion | Sunflower Seeds | Poppy Dressing",lbs:26.87,flag:""},
      {item:"Maryland Fried Chicken",lbs:25.57,flag:""},
      {item:"Scrambled Eggs",lbs:18.04,flag:""},
      {item:"Artisan Flat Bread",lbs:8.54,flag:""}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"high",title:"Run a par-level and yield-training check on Kitchen prep",
     body:"Preconsumer waste — food discarded before it reaches a guest — is 82.2% this week, and Kitchen accounts for 63.0% of total waste, both the highest levels seen at this property. This points squarely at over-preparation rather than plate waste, and is worth a direct par-level and yield-training pass.",
     support:"Preconsumer 82.2%, Kitchen 63.0% of waste — both the highest of any week analyzed at this property."},
    {pri:"high",costDriven:true,title:"Protein prep is driving a disproportionate share of cost",
     body:"Proteins are 41.7% of this week's waste by weight but 52.8% of its cost — the widest gap seen at this property. Slow Roasted Pork Loin (28.69 lbs) and Maryland Fried Chicken (25.57 lbs) together account for more than a third of total weight and are the priciest items on the log — both worth a direct batch-size review.",
     support:"Proteins: 41.7% of weight, 52.8% of $389.52 cost ($3.30/lb). Pork Loin (28.69 lbs) + Fried Chicken (25.57 lbs) combined are over a third of the week's weight."},
    {pri:"med",title:"Highest-cost week recorded at this property so far",
     body:"At $389.52, this week's estimated food cost lost is the highest recorded for this property. Understanding what drove it — event type, banquet volume — will help determine whether this is a one-off or a pattern worth planning around.",
     support:"$389.52 — the highest weekly cost figure recorded for this property to date."}]}
},
{
  weekLabel:"Jul 19–26", period:"July 19 – 26, 2026", periodNote:"",
  totalLbs:{value:121.33,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$285.00",perLb:2.35,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  wasteType:{status:"confirmed",rows:[{label:"Preconsumer",pct:56.9,color:"#1B5E3F"},{label:"Postconsumer",pct:43.1,color:"#8FA99A"}]},
  department:{status:"confirmed",rows:[{label:"Kitchen",pct:43.2,color:"#1B5E3F"},{label:"Banquet",pct:20.5,color:"#96342E"},{label:"Cafeteria",pct:19.7,color:"#4A7C59"},{label:"Restaurant",pct:16.5,color:"#2C5C7A"}]},
  categories:{status:"estimated",rows:[{label:"Fruits",pct:41.7,costPerLb:2.3,costShare:40.8},{label:"Proteins",pct:19.1,costPerLb:3.3,costShare:26.8},{label:"Vegetables",pct:12.9,costPerLb:1.8,costShare:9.9},{label:"Other",pct:12.7,costPerLb:2.2,costShare:11.9},{label:"Starches/Grains",pct:12.0,costPerLb:1.6,costShare:8.2},{label:"Dairy",pct:1.6,costPerLb:3.5,costShare:2.4}]},
  topIngredients:{status:"confirmed",rows:[{name:"Honeydew",lbs:29.9},{name:"Scrambled Eggs",lbs:16.4}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Diced Cantaloupe | Honeydew | Pineapple",lbs:52.47,flag:""},
      {item:"Scrambled Eggs",lbs:43.93,flag:""},
      {item:"Baby Greens Salad | Shaved Carrots | Charred Corn | Tomato | Feta | Sweet Onion Dressing",lbs:16.55,flag:""}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"high",title:"Right-size the recurring fruit platter across events",
     body:"The Diced Cantaloupe | Honeydew | Pineapple platter shows up across 3 separate events and is the single largest item this week at 52.47 lbs — 43% of the week's total. This recurring pattern matches fruit-platter over-portioning already flagged at this property; a standard smaller batch size across events would address a large share of waste at once.",
     support:"Diced Cantaloupe | Honeydew | Pineapple: 52.47 lbs across 3 feeds — 43% of the week's 121.33 lbs total."},
    {pri:"med",title:"Move scrambled eggs to smaller, rolling batches",
     body:"Scrambled eggs account for 43.93 lbs across 2 feeds, the week's second-largest item — consistent with breakfast-service over-production seen elsewhere at this property. Rolling batches tied to service pace would reduce this.",
     support:"Scrambled Eggs: 43.93 lbs across 2 feeds."},
    {pri:"low",title:"Use this week as the baseline for a balanced-operations comparison",
     body:"Kitchen, Banquet, Cafeteria, and Restaurant all contributed meaningfully to this week's total, unlike most weeks where one or two departments dominate. Worth keeping as a reference point for how waste distributes across the full operation under typical mixed conditions.",
     support:"Kitchen 43.2%, Banquet 20.5%, Cafeteria 19.7%, Restaurant 16.5% — all four departments represented, unlike most weeks analyzed."}]}
},
{
  weekLabel:"Jul 26–Aug 2", period:"July 26 – August 2, 2026", periodNote:"",
  totalLbs:{value:55.02,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$120.99",perLb:2.2,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  wasteType:{status:"confirmed",rows:[{label:"Preconsumer",pct:100,color:"#1B5E3F"}]},
  department:{status:"confirmed",rows:[{label:"Banquet",pct:51.6,color:"#96342E"},{label:"Kitchen",pct:48.4,color:"#1B5E3F"}]},
  categories:{status:"estimated",rows:[{label:"Vegetables",pct:73.4,costPerLb:1.8,costShare:60.1},{label:"Proteins",pct:26.6,costPerLb:3.3,costShare:39.9},{label:"Starches/Grains",pct:0,costPerLb:1.6,costShare:0.0},{label:"Fruits",pct:0,costPerLb:2.3,costShare:0.0},{label:"Dairy",pct:0,costPerLb:3.5,costShare:0.0},{label:"Other",pct:0,costPerLb:2.2,costShare:0.0}]},
  topIngredients:{status:"confirmed",rows:[{name:"Romaine",lbs:28.4},{name:"Salmon",lbs:14.6}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Greek Salad | Romaine | Feta | Pepperoncini | Olives | Cherry Tomatoes",lbs:28.41,flag:""},
      {item:"Atlantic Salmon | Spinach | Pommery Sauce",lbs:26.61,flag:""}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"low",title:"Limited data this week — treat as an early signal only",
     body:"Only 2 feeds were captured this week: Greek Salad (28.41 lbs) and Atlantic Salmon (26.61 lbs), both entirely preconsumer, pointing to prep-stage over-production for both. Worth revisiting once more data accumulates before acting on this alone.",
     support:"2 feeds only — Greek Salad (28.41 lbs) and Atlantic Salmon (26.61 lbs), both 100% preconsumer."}]}
},
{
  weekLabel:"Aug 2–9", period:"August 2 – 9, 2026", periodNote:"5 additional feeds captured this week have not yet been analyzed; totals below reflect only the 12 already processed.",
  totalLbs:{value:118.13,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$279.68",perLb:2.37,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  wasteType:{status:"confirmed",rows:[{label:"Preconsumer",pct:83.2,color:"#1B5E3F"},{label:"Postconsumer",pct:16.8,color:"#8FA99A"}]},
  department:{status:"confirmed",rows:[{label:"Banquet",pct:41.8,color:"#96342E"},{label:"Cafeteria",pct:31.7,color:"#4A7C59"},{label:"Kitchen",pct:26.5,color:"#1B5E3F"}]},
  categories:{status:"estimated",rows:[{label:"Vegetables",pct:29.6,costPerLb:1.8,costShare:22.5},{label:"Proteins",pct:27.5,costPerLb:3.3,costShare:38.3},{label:"Other",pct:22.1,costPerLb:2.2,costShare:20.5},{label:"Starches/Grains",pct:15.1,costPerLb:1.6,costShare:10.2},{label:"Dairy",pct:5.7,costPerLb:3.5,costShare:8.4},{label:"Fruits",pct:0,costPerLb:2.3,costShare:0.0}]},
  topIngredients:{status:"confirmed",rows:[{name:"Pork Belly",lbs:12.5},{name:"Fajita Chicken",lbs:9.7},{name:"Chicken",lbs:9.4}]},
  menuAttribution:{status:"pending",
    pendingReason:"This week's menu items couldn't be matched to specific dishes due to a formatting issue in the source document — the weight, cost, and category figures above are unaffected and fully reliable. We're correcting the underlying document order so menu-level detail returns in a future update.",
    rows:[]},
  recommendations:{status:"confirmed",rows:[
    {pri:"high",title:"Review protein prep and portioning across the board",
     body:"Pork Belly, Fajita Chicken, and Chicken are this week's three largest wasted ingredients — the first week at this property where the entire top-3 list is protein rather than the usual produce-heavy mix. Worth a broader look at protein prep quantities this week specifically.",
     support:"Pork Belly 12.5 lbs, Fajita Chicken 9.7 lbs, Chicken 9.4 lbs — the first week at this property where every top-3 ingredient is a protein."},
    {pri:"med",costDriven:true,title:"Protein cost concentration remains the widest gap",
     body:"Proteins are 27.5% of this week's waste by weight but 38.3% of its cost — the widest gap of any category, consistent with the pattern seen in other high-protein weeks at this property.",
     support:"Proteins: 27.5% of weight, 38.3% of $279.68 cost ($3.30/lb)."},
    {pri:"med",title:"Preconsumer waste remains elevated",
     body:"Preconsumer waste is 83.2% this week, the second-highest share recorded at this property — reinforcing a prep-side pattern rather than guest-facing leftovers.",
     support:"Preconsumer 83.2% vs. Postconsumer 16.8%."}]}
},
{
  weekLabel:"Aug 9–16", period:"August 9 – 16, 2026", periodNote:"Week in progress — partial data (2 feeds captured so far).",
  totalLbs:{value:27.49,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$50.26",perLb:1.83,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  wasteType:{status:"confirmed",rows:[{label:"Preconsumer",pct:100,color:"#1B5E3F"}]},
  department:{status:"confirmed",rows:[{label:"Cafeteria",pct:100,color:"#4A7C59"}]},
  categories:{status:"estimated",rows:[{label:"Vegetables",pct:92.9,costPerLb:1.8,costShare:91.5},{label:"Other",pct:7.1,costPerLb:2.2,costShare:8.5},{label:"Proteins",pct:0,costPerLb:3.3,costShare:0.0},{label:"Starches/Grains",pct:0,costPerLb:1.6,costShare:0.0},{label:"Fruits",pct:0,costPerLb:2.3,costShare:0.0},{label:"Dairy",pct:0,costPerLb:3.5,costShare:0.0}]},
  topIngredients:{status:"confirmed",rows:[{name:"Romaine",lbs:14.9},{name:"Iceberg",lbs:8.0}]},
  menuAttribution:{status:"pending",
    pendingReason:"Same cause as the prior week — a formatting issue in the source document, not a data or model problem. The weight, cost, and category figures above are fully reliable.",
    rows:[]},
  recommendations:{status:"confirmed",rows:[
    {pri:"low",title:"Week in progress — early signal points to salad-bar over-prep",
     body:"Only 2 feeds have been captured so far this week, both Cafeteria lettuce waste (Romaine, Iceberg), suggesting a salad-bar over-prep pattern. Worth revisiting once the full week's data is in before acting on this alone.",
     support:"Romaine 14.9 lbs, Iceberg 8.0 lbs — both Cafeteria, 100% of this week's activity so far (2 feeds)."}]}
},
  ],

  allTime:{status:"confirmed",recycledTons:87.65,co2Tons:419.25,
    acres:528,trees:6917,homes:19280,miles:1074948}
},

/* ---------------- MAVEN ---------------- */
maven:{
  name:"The Maven Hotel",
  full:"The Maven Hotel — Kachina Cantina",
  address:"1850 Wazee St, Denver, CO 80202",
  kind:"Boutique hotel · à la carte restaurant",
  installDate:"May 18, 2026",
  orgId:"6554f786a8c64cf4f5945895",

  weeks:[
{
  weekLabel:"Jul 5–12", period:"July 5 – 12, 2026", periodNote:"Menu attribution is partial this week: 3 of 23 feeds have no analysis at all (no context was ever attached) and are excluded from every card. This is the only remaining data gap in Maven's full dataset.",
  totalLbs:{value:394.51,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$1,653.87",perLb:4.19,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  wasteType:{status:"confirmed",rows:[{label:"Postconsumer",pct:64.2,color:"#1B5E3F"},{label:"Preconsumer",pct:35.8,color:"#4A7C59"}]},
  department:{status:"confirmed",rows:[{label:"Restaurant",pct:100.0,color:"#1B5E3F"}]},
  categories:{status:"estimated",rows:[{label:"Proteins",pct:33.9,costPerLb:6.44,costShare:52.1},{label:"Vegetables",pct:29.2,costPerLb:2.85,costShare:19.9},{label:"Other",pct:17.4,costPerLb:4.05,costShare:16.8},{label:"Fruits",pct:8.4,costPerLb:1.97,costShare:4.0},{label:"Starches/Grains",pct:7.3,costPerLb:1.81,costShare:3.2},{label:"Dairy",pct:3.7,costPerLb:4.62,costShare:4.1}]},
  topIngredients:{status:"confirmed",rows:[{name:"Blue Corn Tortilla Chips",lbs:27.0},{name:"Beef (Raw Sliced)",lbs:25.0},{name:"Wild Rice",lbs:22.0},{name:"Peruano Bean Purée",lbs:20.9},{name:"Avocado",lbs:20.4}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Chicken Bowl",lbs:186.48,flag:"",cat:"Mixed",cost:732.85},
      {item:"Sumac Guacamole",lbs:56.81,flag:"",cat:"Mixed",cost:185.92},
      {item:"Chicken Pozole Blanco",lbs:31.16,flag:"",cat:"Mixed",cost:171.88},
      {item:"Wild Rice",lbs:22.66,flag:"",cat:"Mixed",cost:76.54},
      {item:"Quesadilla",lbs:13.34,flag:"",cat:"Mixed",cost:79.34}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"high",title:"Right-size Chicken Bowl portions specifically",
     body:"Chicken Bowl leads the week at 186.48 lbs across 10 feeds and $732.85 in cost — the top item by both weight and dollar impact. A modest portion cut on this dish alone would move a large share of the week's total.",
     support:"Chicken Bowl: 186.48 lbs across 10 feeds, $732.85."},
    {pri:"high",costDriven:true,title:"Protein cost concentration is the sharpest gap seen at this property",
     body:"Proteins are 33.9% of this week's waste by weight but 52.1% of its cost — the widest weight-to-cost gap of any week analyzed for this property. Worth a direct look at protein portioning and prep.",
     support:"Proteins: 33.9% of weight, 52.1% of $1,653.87 cost ($6.44/lb)."},
    {pri:"med",title:"Check what drove this week's unusual raw beef waste",
     body:"Raw sliced beef shows up as a top ingredient this week at 25.0 lbs — not a typical item at this property in other weeks. Worth a quick check on what changed in prep or ordering.",
     support:"Beef (raw sliced): 25.0 lbs — not a recurring top item in other weeks."}]}
},
{
  weekLabel:"Jul 12–19", period:"July 12 – 19, 2026", periodNote:"Menu attribution is complete this week -- 100% of feeds (27 of 27) are daypart-correct and included in the menu-item table.",
  totalLbs:{value:496.81,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$1,652.00",perLb:3.33,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  wasteType:{status:"confirmed",rows:[{label:"Postconsumer",pct:87.8,color:"#1B5E3F"},{label:"Preconsumer",pct:8.9,color:"#4A7C59"},{label:"Spoilage",pct:3.3,color:"#96342E"}]},
  department:{status:"confirmed",rows:[{label:"Restaurant",pct:97.9,color:"#1B5E3F"},{label:"Banquet",pct:2.1,color:"#B8C9BC"}]},
  categories:{status:"estimated",rows:[{label:"Vegetables",pct:47.9,costPerLb:2.85,costShare:41.1},{label:"Other",pct:15.8,costPerLb:4.05,costShare:19.2},{label:"Starches/Grains",pct:11.9,costPerLb:1.81,costShare:6.5},{label:"Proteins",pct:10.8,costPerLb:6.44,costShare:20.9},{label:"Fruits",pct:8.3,costPerLb:1.97,costShare:4.9},{label:"Dairy",pct:5.3,costPerLb:4.62,costShare:7.4}]},
  topIngredients:{status:"confirmed",rows:[{name:"Blue Corn Tortilla Chips",lbs:44.8},{name:"Wild Rice",lbs:42.9},{name:"Peruano Bean Purée",lbs:36.3},{name:"Corn Tortilla Chips",lbs:31.4},{name:"Pork Rinds",lbs:20.1}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Chicken Bowl",lbs:259.83,flag:"",cat:"Mixed",cost:855.77},
      {item:"Sumac Guacamole",lbs:60.61,flag:"",cat:"Mixed",cost:191.06},
      {item:"Chicken Pozole Blanco",lbs:28.03,flag:"",cat:"Mixed",cost:88.0},
      {item:"Wild Rice",lbs:24.66,flag:"",cat:"Mixed",cost:67.41},
      {item:"Beans & Tortillas",lbs:23.41,flag:"",cat:"Mixed",cost:79.12},
      {item:"Quesadillas",lbs:21.64,flag:"",cat:"Mixed",cost:74.86},
      {item:"Taco Set Combo",lbs:21.54,flag:"",cat:"Mixed",cost:93.01},
      {item:"Amaranth Mixed Green Salad",lbs:19.68,flag:"",cat:"Mixed",cost:62.51},
      {item:"House Made Blue Corn Tortillas",lbs:17.51,flag:"",cat:"Mixed",cost:48.62},
      {item:"Chicharrón con Carne",lbs:9.45,flag:"",cat:"Mixed",cost:55.77}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"high",title:"Chicken Bowl continues to dominate waste and cost",
     body:"Chicken Bowl remains the top item this week at 259.83 lbs across 12 feeds — the largest single-item total analyzed at this property to date. This reinforces the case for a standing portion-size review on this dish specifically.",
     support:"Chicken Bowl: 259.83 lbs across 12 feeds, $855.77."},
    {pri:"high",title:"Run a plate-waste observation pass on the restaurant floor",
     body:"Postconsumer waste — food that reached guests but wasn't eaten — is 87.8% this week, the highest share analyzed at this property. Guest-facing leftovers are dominating almost entirely over kitchen prep waste, pointing to portion sizing or menu appeal as the driver rather than prep.",
     support:"Postconsumer 87.8% vs. Preconsumer 8.9% — the highest Postconsumer share analyzed at this property."},
    {pri:"med",title:"Review portioning on Beans & Tortillas and Chicharrón con Carne",
     body:"Both dinner-service items show meaningful waste this week. Worth a portioning check on both as part of the dinner menu review.",
     support:"Beans & Tortillas: 23.41 lbs, $79.12. Chicharrón con Carne: 9.45 lbs, $55.77."},
    {pri:"low",costDriven:true,title:"Protein cost concentration holds even at a smaller scale",
     body:"Proteins are 10.8% of this week's weight but 20.9% of its cost — smaller in absolute terms than other weeks, but the same recurring pattern.",
     support:"Proteins: 10.8% of weight, 20.9% of $1,652.00 cost ($6.44/lb)."}]}
},
{
  weekLabel:"Jul 19–26", period:"July 19 – 26, 2026", periodNote:"Menu attribution is complete this week -- 100% of feeds (37 of 37) are daypart-correct and included in the menu-item table.",
  totalLbs:{value:655.2,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$2,424.46",perLb:3.7,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  wasteType:{status:"confirmed",rows:[{label:"Postconsumer",pct:69.3,color:"#1B5E3F"},{label:"Preconsumer",pct:26.8,color:"#4A7C59"},{label:"Spoilage",pct:3.9,color:"#96342E"}]},
  department:{status:"confirmed",rows:[{label:"Restaurant",pct:96.4,color:"#1B5E3F"},{label:"Banquet",pct:3.6,color:"#B8C9BC"}]},
  categories:{status:"estimated",rows:[{label:"Vegetables",pct:36.9,costPerLb:2.85,costShare:28.4},{label:"Other",pct:24.0,costPerLb:4.05,costShare:26.3},{label:"Proteins",pct:17.6,costPerLb:6.44,costShare:30.6},{label:"Fruits",pct:9.3,costPerLb:1.97,costShare:4.9},{label:"Starches/Grains",pct:7.2,costPerLb:1.81,costShare:3.5},{label:"Dairy",pct:5.0,costPerLb:4.62,costShare:6.2}]},
  topIngredients:{status:"confirmed",rows:[{name:"Blue Corn Tortilla Chips",lbs:50.7},{name:"Wild Rice",lbs:34.2},{name:"Peruano Bean Purée",lbs:31.2},{name:"Avocado",lbs:23.4},{name:"Grilled Chicken Thigh",lbs:22.3}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Chicken Bowl",lbs:175.5,flag:"",cat:"Mixed",cost:633.48},
      {item:"Chicken Pozole Blanco",lbs:114.78,flag:"",cat:"Mixed",cost:478.86},
      {item:"Sumac Guacamole",lbs:75.05,flag:"",cat:"Mixed",cost:260.79},
      {item:"Quesadillas",lbs:50.93,flag:"",cat:"Mixed",cost:172.33},
      {item:"Wild Rice",lbs:46.12,flag:"",cat:"Mixed",cost:155.91},
      {item:"Tomato Peach Salad",lbs:40.55,flag:"",cat:"Mixed",cost:146.37},
      {item:"Amaranth Mixed Green Salad",lbs:33.83,flag:"",cat:"Mixed",cost:109.14},
      {item:"Taco Set Combo",lbs:28.71,flag:"",cat:"Mixed",cost:167.74},
      {item:"Enchiladas",lbs:23.43,flag:"",cat:"Mixed",cost:67.18},
      {item:"Nopales",lbs:17.03,flag:"",cat:"Mixed",cost:58.18},
      {item:"Poblano Romesco Salad",lbs:11.15,flag:"",cat:"Mixed",cost:22.75}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"high",title:"Chicken Bowl and Chicken Pozole Blanco together drive half of costed waste",
     body:"These two dishes account for $1,112.34 combined — close to half of this week's $2,272.73 in costed menu-item waste. Addressing portion sizes on both would have an outsized impact on the week's total cost.",
     support:"Chicken Bowl: $633.48 (175.50 lbs, 11 feeds). Chicken Pozole Blanco: $478.86 (114.78 lbs, 5 feeds). Combined: $1,112.34."},
    {pri:"high",costDriven:true,estSavings:"$111–$148/wk",title:"Protein cost concentration reaches its largest dollar impact yet",
     body:"Proteins are 17.6% of this week's weight but 30.6% of its cost — $741.88 — the same recurring gap seen every week at this property, with the largest single-week dollar impact given this week's overall size. Cutting protein waste by 15–20% would save an estimated $111–$148 per week at current cost.",
     support:"Proteins: 17.6% of weight, 30.6% of $2,424.46 cost ($741.88), $6.44/lb."},
    {pri:"med",title:"Add a portioning check on Tomato Peach Salad and Amaranth Mixed Green Salad",
     body:"Together these two salads account for a meaningful produce-waste line this week — worth a direct portioning check alongside other salad-menu items.",
     support:"Tomato Peach Salad: 40.55 lbs, $146.37. Amaranth Mixed Green Salad: 33.83 lbs, $109.14."}]}
},
{
  weekLabel:"Jul 26–Aug 2", hidden:true, period:"July 26 – August 2, 2026", periodNote:"Menu attribution is complete this week -- 100% of clean feeds are daypart-correct and included.",
  totalLbs:{value:135.09,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$495.08",perLb:3.66,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  wasteType:{status:"confirmed",rows:[{label:"Postconsumer",pct:79.9,color:"#1B5E3F"},{label:"Preconsumer",pct:16.6,color:"#4A7C59"},{label:"Spoilage",pct:3.5,color:"#96342E"}]},
  department:{status:"confirmed",rows:[{label:"Restaurant",pct:96.5,color:"#1B5E3F"},{label:"Banquet",pct:3.5,color:"#B8C9BC"}]},
  categories:{status:"estimated",rows:[{label:"Vegetables",pct:43.8,costPerLb:2.85,costShare:34.1},{label:"Proteins",pct:17.8,costPerLb:6.44,costShare:31.3},{label:"Other",pct:17.1,costPerLb:4.05,costShare:18.9},{label:"Starches/Grains",pct:10.9,costPerLb:1.81,costShare:5.4},{label:"Dairy",pct:6.6,costPerLb:4.62,costShare:8.3},{label:"Fruits",pct:3.8,costPerLb:1.97,costShare:2.0}]},
  topIngredients:{status:"confirmed",rows:[{name:"Corn Tortilla Chips",lbs:19.8},{name:"Wild Rice",lbs:14.8},{name:"Grilled Chicken Thigh",lbs:11.8},{name:"Raw Chicken Thigh",lbs:11.2},{name:"Blue Corn Tortilla Chips",lbs:8.9}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Chicken Bowl",lbs:105.61,flag:"",cat:"Mixed",cost:403.11},
      {item:"Chicken Pozole Blanco",lbs:12.74,flag:"",cat:"Mixed",cost:44.97},
      {item:"Quesadillas",lbs:12.04,flag:"",cat:"Mixed",cost:37.74},
      {item:"Lemonade Agua Fresca",lbs:4.7,flag:"",cat:"Mixed",cost:9.26}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"med",costDriven:true,title:"Protein cost concentration remains consistent",
     body:"Proteins are 17.8% of this week's weight but 31.3% of its cost — the same gap seen in every week analyzed at this property, reinforcing that this is a structural pattern rather than a one-off.",
     support:"Proteins: 17.8% of weight, 31.3% of $495.08 cost ($6.44/lb)."},
    {pri:"low",title:"Read this week as directional, not definitive",
     body:"At 135.09 lbs across 8 feeds, this is the smallest week analyzed at this property. The findings above are real but should be read alongside larger weeks rather than in isolation.",
     support:"135.09 lbs across 8 feeds — the smallest week analyzed for this property."}]}
}
  ],

  allTime:{status:"confirmed",recycledTons:1.89,co2Tons:9.06,
    acres:11,trees:149,homes:416,miles:23231}
},

/* ---------------- DENVER TECH CENTER ---------------- */
dtc:{
  name:"Denver Marriott Tech Center",
  full:"Denver Marriott Tech Center",
  address:"4900 S Syracuse St, Denver, CO 80237",
  kind:"Full-service hotel · banquet-driven volume",
  installDate:"May 22, 2023",
  orgId:"6a4ae3b33aa41c5669c19e2e",

  weeks:[
{
  weekLabel:"Jul 12–19", period:"July 12 – 19, 2026", periodNote:"7 of 46 recorded weigh-ins were excluded due to scale readings indicating sensor issues that should be checked.",
  totalLbs:{value:794.6,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$3,246.91",perLb:4.09,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  covers:{status:"confirmed",wastePerCoverOz:"1.61",costPerCover:0.41},
  wasteType:{status:"confirmed",rows:[{label:"Preconsumer",pct:65.2,color:"#1B5E3F"},{label:"Postconsumer",pct:34.8,color:"#8FA99A"}]},
  department:{status:"confirmed",rows:[{label:"Banquet",pct:74.0,color:"#1B5E3F"},{label:"Kitchen",pct:17.2,color:"#96342E"},{label:"M-Club",pct:8.8,color:"#2C5C7A"}]},
  categories:{status:"estimated",rows:[{label:"Vegetables",pct:30.8,costPerLb:3.79,costShare:28.6},{label:"Starches/Grains",pct:21.9,costPerLb:2.35,costShare:12.6},{label:"Fruits",pct:20.5,costPerLb:3.77,costShare:18.9},{label:"Proteins",pct:14.1,costPerLb:6.62,costShare:22.8},{label:"Dairy",pct:6.8,costPerLb:4.2,costShare:7.0},{label:"Other",pct:5.8,costPerLb:7.11,costShare:10.1}]},
  topIngredients:{status:"confirmed",rows:[{name:"Scrambled Eggs",lbs:55.3},{name:"Rolled Oats",lbs:29.8},{name:"Watermelon",lbs:27.0}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Liquid Eggs",lbs:127.29,flag:""},
      {item:"Pineapple",lbs:82.37,flag:""},
      {item:"Tofu",lbs:63.48,flag:""},
      {item:"Watermelon",lbs:54.63,flag:""},
      {item:"Rolled Oats",lbs:53.77,flag:""},
      {item:"Baby Spinach",lbs:52.14,flag:""},
      {item:"Zucchini",lbs:51.76,flag:""},
      {item:"Button Mushrooms",lbs:38.62,flag:""}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"high",title:"Cut portion sizes at the egg station",
     body:"Liquid Eggs leads the menu log at 127.29 lbs across 8 feeds — more weight and more recurrence than any other item this week. Egg-station batch sizing remains the clearest, most repeatable lever available at this property.",
     support:"Liquid Eggs: 127.29 lbs across 8 feeds — the highest of any item this week."},
    {pri:"high",costDriven:true,title:"Check Proteins on a cost basis, not just Starches on a weight basis",
     body:"Starches/Grains are 21.9% of this week's waste by weight but only 12.6% of its cost — the widest gap in either direction. Proteins run the opposite way: only 14.1% of weight but 22.8% of cost. A weight-ranked log alone would point staff at the wrong station first.",
     support:"Starches/Grains: 21.9% of weight, 12.6% of $3,246.91 cost ($2.35/lb). Proteins: 14.1% of weight, 22.8% of cost ($6.62/lb)."},
    {pri:"med",title:"Address recurring pineapple and watermelon waste",
     body:"Pineapple (82.37 lbs across 3 feeds) and watermelon (54.63 lbs across 3 feeds) are both sizable, repeat items — consistent with the melon and fruit waste pattern already flagged as recurring at this property.",
     support:"Pineapple: 82.37 lbs across 3 feeds. Watermelon: 54.63 lbs across 3 feeds."}]}
},
{
  weekLabel:"Jul 19–26", period:"July 19 – 26, 2026", periodNote:"No banquet prep sheet was available for this specific week, so the menu-item table below draws from a different week's sheet and should be read as directional only. Weight, waste-type, department, and category figures above come directly from image analysis and are unaffected.",
  totalLbs:{value:238.14,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$890.10",perLb:3.74,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  covers:{status:"confirmed",wastePerCoverOz:"15.81",costPerCover:3.69},
  wasteType:{status:"confirmed",rows:[{label:"Postconsumer",pct:66.7,color:"#8FA99A"},{label:"Preconsumer",pct:33.3,color:"#1B5E3F"}]},
  department:{status:"confirmed",rows:[{label:"M-Club",pct:51.4,color:"#2C5C7A"},{label:"Banquet",pct:48.6,color:"#1B5E3F"}]},
  categories:{status:"estimated",rows:[{label:"Fruits",pct:38.2,costPerLb:3.77,costShare:38.5},{label:"Starches/Grains",pct:35.0,costPerLb:2.35,costShare:22.0},{label:"Vegetables",pct:10.6,costPerLb:3.79,costShare:10.7},{label:"Proteins",pct:7.7,costPerLb:6.62,costShare:13.6},{label:"Other",pct:7.1,costPerLb:7.11,costShare:13.5},{label:"Dairy",pct:1.4,costPerLb:4.2,costShare:1.6}]},
  topIngredients:{status:"confirmed",rows:[{name:"Cantaloupe",lbs:19.3},{name:"Rolled Oats",lbs:17.5},{name:"Watermelon",lbs:16.8}]},
  menuAttribution:{status:"pending",
    pendingReason:"No banquet prep sheet was available for this specific week. The items below are pulled from a different week's sheet as a fallback and should be treated as directional, not week-accurate.",
    rows:[
      {item:"Rolled Oats",lbs:65.39,flag:""},
      {item:"Watermelon",lbs:42.53,flag:""},
      {item:"2 oz Beef Meatballs",lbs:38.75,flag:""},
      {item:"Pineapple",lbs:23.54,flag:""},
      {item:"Cantaloupe",lbs:30.03,flag:""},
      {item:"Black Beans",lbs:16.74,flag:""},
      {item:"Cherry Tomato",lbs:1.53,flag:""}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"med",title:"Breakfast fruit-and-grain pattern holds even without reliable menu data",
     body:"Even though this week's menu attribution isn't reliable (see note above), the underlying ingredient-level data is unaffected and still shows Cantaloupe, Rolled Oats, and Watermelon as the top three — consistent with the recurring breakfast-waste pattern seen in other weeks.",
     support:"Cantaloupe 19.3 lbs, Rolled Oats 17.5 lbs, Watermelon 16.8 lbs — ingredient-level data, unaffected by this week's menu-attribution gap."},
    {pri:"low",costDriven:true,title:"Cost-to-weight gaps can flip week to week — worth tracking, not assuming",
     body:"Starches/Grains are 35.0% of this week's waste by weight but only 22.0% of its cost — the widest gap this week. Which category costs more than its weight share can shift from week to week rather than being a fixed pattern, so this is worth tracking over time rather than treating any single week as the rule.",
     support:"Starches/Grains: 35.0% of weight, 22.0% of $890.10 cost ($2.35/lb)."}]}
},
{
  weekLabel:"Jul 26–Aug 2", period:"July 26 – August 2, 2026", periodNote:"",
  totalLbs:{value:820.22,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$3,851.65",perLb:4.7,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  covers:{status:"confirmed",wastePerCoverOz:"1.76",costPerCover:0.52},
  wasteType:{status:"confirmed",rows:[{label:"Postconsumer",pct:68.2,color:"#8FA99A"},{label:"Preconsumer",pct:30.7,color:"#1B5E3F"},{label:"Spoilage",pct:1.1,color:"#96342E"}]},
  department:{status:"confirmed",rows:[{label:"Banquet",pct:92.6,color:"#1B5E3F"},{label:"M-Club",pct:7.4,color:"#2C5C7A"}]},
  categories:{status:"estimated",rows:[{label:"Vegetables",pct:31.2,costPerLb:3.79,costShare:25.2},{label:"Proteins",pct:20.5,costPerLb:6.62,costShare:28.9},{label:"Starches/Grains",pct:19.3,costPerLb:2.35,costShare:9.7},{label:"Other",pct:17.4,costPerLb:7.11,costShare:26.3},{label:"Fruits",pct:6.0,costPerLb:3.77,costShare:4.8},{label:"Dairy",pct:5.7,costPerLb:4.2,costShare:5.1}]},
  topIngredients:{status:"confirmed",rows:[{name:"Scrambled Eggs",lbs:45.2},{name:"Green Beans",lbs:38.9},{name:"Par Boiled Rice",lbs:32.2}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Scrambled Eggs",lbs:86.47,flag:""},
      {item:"Par Boiled Rice",lbs:74.12,flag:""},
      {item:"Green Beans",lbs:71.23,flag:""},
      {item:"Cavatappi Pasta",lbs:63.36,flag:""},
      {item:"Random Chicken Breast",lbs:45.81,flag:""},
      {item:"Mixed Greens",lbs:43.36,flag:""},
      {item:"Cantaloupe",lbs:41.12,flag:""},
      {item:"Halved Hardboiled Egg",lbs:38.67,flag:""}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"high",costDriven:true,estSavings:"$143–$172/wk",title:"Make egg-station batch sizing a standing fix, not a one-time adjustment",
     body:"Scrambled Eggs is the largest item again this week at 86.47 lbs across 4 feeds, confirming the pattern seen in the prior week wasn't a one-off. At the Proteins rate ($6.62/lb), that's roughly $572 in cost this week from this single item. Cutting batch sizes by 25–30% would save an estimated $143–$172 per week at current cost. This points to a standing process fix at the egg station rather than a one-time adjustment.",
     support:"Scrambled Eggs: 86.47 lbs across 4 feeds, ~$572 at the property's $6.62/lb Proteins rate — the highest of any item this week."},
    {pri:"med",title:"Extend the par-level review to Par Boiled Rice and Green Beans",
     body:"Both appear across 4 feeds each — Par Boiled Rice at 74.12 lbs and Green Beans at 71.23 lbs — making them worth the same par-level review already warranted for the egg station.",
     support:"Par Boiled Rice: 74.12 lbs across 4 feeds. Green Beans: 71.23 lbs across 4 feeds."},
    {pri:"low",title:"Check cold-storage practices after this week's spoilage reading",
     body:"Spoilage was 1.1% of total waste weight this week, not seen in any other week analyzed at this property. The share is small, but worth a quick check on cold-storage practices given it hasn't appeared before.",
     support:"Spoilage: 1.1% of total waste weight this week — not present in any other analyzed week for this property."}]}
},
{
  weekLabel:"Aug 2–9", hidden:true, period:"August 2 – 9, 2026", periodNote:"Week in progress — 25 additional feeds captured this week are still being analyzed; totals below reflect only the 2 processed so far. A prep sheet for this specific period isn't available yet either, so once analysis catches up, menu-item detail may initially rely on a nearby week's sheet.",
  totalLbs:{value:44.2,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",display:"$152.43",perLb:3.45,
    caption:"Category-rate model applied to this week's data.",
    note:"Cost computed from this week's own ingredient-level category breakdown, using the "+
         "property's established per-category $/lb rates."},
  covers:{status:"confirmed",wastePerCoverOz:"0.19",costPerCover:0.04},
  wasteType:{status:"confirmed",rows:[{label:"Preconsumer",pct:100,color:"#1B5E3F"}]},
  department:{status:"confirmed",rows:[{label:"Banquet",pct:100,color:"#1B5E3F"}]},
  categories:{status:"estimated",rows:[{label:"Vegetables",pct:73.6,costPerLb:3.79,costShare:80.9},{label:"Starches/Grains",pct:24.3,costPerLb:2.35,costShare:16.6},{label:"Dairy",pct:2.1,costPerLb:4.2,costShare:2.6},{label:"Proteins",pct:0,costPerLb:6.62,costShare:0.0},{label:"Fruits",pct:0,costPerLb:3.77,costShare:0.0},{label:"Other",pct:0,costPerLb:7.11,costShare:0.0}]},
  topIngredients:{status:"confirmed",rows:[{name:"Green Beans",lbs:10.9},{name:"Broccoli",lbs:7.3}]},
  menuAttribution:{status:"confirmed",rows:[
      {item:"Roasted Broccoli",lbs:29.08,flag:""},
      {item:"Green Beans",lbs:15.12,flag:""}]},
  recommendations:{status:"confirmed",rows:[
    {pri:"low",title:"Limited data this week — early signal only",
     body:"Only 2 feeds have been analyzed so far this week, with 25 additional captured feeds still pending. Both items logged — Roasted Broccoli (29.08 lbs) and Green Beans (15.12 lbs) — are Vegetables from Banquet service. Worth revisiting once the remaining feeds are processed rather than treating this as representative.",
     support:"2 feeds only: Roasted Broccoli (29.08 lbs) and Green Beans (15.12 lbs), both Vegetables, both Banquet."}]}
},
  ],

  allTime:{status:"confirmed",recycledTons:57.03,co2Tons:272.76,
    acres:344,trees:4501,homes:12545,miles:699349}
}
},
};

export default DATA;
