/* Marriott portfolio dashboard figures — sourced from the canvas prototype. */
const DATA = {

default:'northBethesda',

properties:{

/* ---------------- NORTH BETHESDA ---------------- */
northBethesda:{
  name:"North Bethesda Marriott",
  full:"North Bethesda Marriott Hotel and Conference Center",
  address:"5701 Marinelli Rd, Rockville, MD 20852",
  kind:"Conference centre · 4 departments",
  installDate:"Feb 27, 2023",
  orgId:"6a4ae2fc3aa41c5669c19e2c",
  period:"July 18 – 25, 2026",
  periodNote:"",

  totalLbs:{value:113.0,status:"confirmed"},
  costLost:{low:451.80,high:677.70,status:"confirmed",
    display:"$269.56",
    perLb:2.38,
    caption:"",
    note:"Real ingredient-level model from North Bethesda's own costed inventory, already in "+
         "globalContext (filed as type 'Menu') — no new data was needed. Blended rate $2.38/lb "+
         "vs. the platform's flat $4.00-$6.00/lb assumption; real cost is roughly half the low "+
         "end of the platform's $451.80-$677.70 claim. Full breakdown in "+
         "Marriott_COGS_Mapping.xlsx, Summary/CategoryRates/WeekEstimate tabs. Three assumptions "+
         "are marked LOW confidence; one Keany invoice line (pre-cut fruit case weight, ASM-03) "+
         "would resolve the largest of them."},

  wasteType:{status:"confirmed",
    rows:[{label:"Preconsumer",pct:61.1,color:"#1B5E3F"},
          {label:"Postconsumer",pct:38.9,color:"#8FA99A"}],
    note:"Preconsumer 61.1% is reported directly. Remainder is arithmetic."},

  department:{status:"confirmed",
    rows:[{label:"Kitchen",pct:46.5,color:"#1B5E3F"},
          {label:"Cafeteria",pct:21.2,color:"#4A7C59"},
          {label:"Restaurant",pct:17.7,color:"#2C5C7A"},
          {label:"Banquet",pct:14.7,color:"#96342E"}]},

  categories:{status:"confirmed",
    note:"$/lb and cost share from North Bethesda's own June 2026 inventory — see "+
         "Marriott_COGS_Mapping.xlsx, CategoryRates tab. Three of six category rates are "+
         "flagged LOW confidence there (composition inferred, not line-by-line verified).",
    rows:[{label:"Fruits",pct:44.8,costPerLb:2.30,costShare:43.2},
          {label:"Proteins",pct:20.5,costPerLb:3.30,costShare:28.3},
          {label:"Starches/Grains",pct:12.9,costPerLb:1.60,costShare:8.6},
          {label:"Other",pct:12.1,costPerLb:2.20,costShare:11.2},
          {label:"Vegetables",pct:8.0,costPerLb:1.80,costShare:6.0},
          {label:"Dairy",pct:1.8,costPerLb:3.50,costShare:2.6}]},

  topIngredients:{status:"confirmed",
    rows:[{name:"Honeydew melon",lbs:29.93},{name:"Scrambled eggs",lbs:16.36},
          {name:"Green apple chunks",lbs:9.98},{name:"Honeydew melon chunks",lbs:8.16}]},

  recommendations:{status:"confirmed",rows:[
    {pri:"high",costDriven:true,estSavings:"$32–$43/wk",title:"Cut honeydew prep by 30–40%, prioritizing pre-cut portions",
     body:"Honeydew is the single biggest waste driver — 38 lbs between whole melon and pre-cut chunks, a third of all food waste this week. Pre-cut chunks weigh less but cost more per pound ($3.95/lb vs. $2.51/lb blended), so together the two account for 72% of named-ingredient cost lost. Pulling total prep back 30–40%, weighted toward the pre-cut portion, would save an estimated $32–$43 per week at current cost.",
     support:"Honeydew melon: 29.93 lbs, $75.11 ($2.51/lb). Honeydew melon chunks: 8.16 lbs, $32.22 ($3.95/lb). Combined 38.09 lbs, $107.33 — 72% of the $149.08 named-ingredient total and 33.7% of total waste (112.95 lbs)."},
    {pri:"high",title:"Right-size and repurpose fruit platters",
     body:"Fruit is 44.8% of all waste by weight, and the two most-wasted menu items are both fruit platters. Shrinking batch sizes and setting up a same-day repurposing plan — smoothies, infused water, dessert garnish — would redirect cut fruit before it becomes waste.",
     support:"Fruit: 44.8% of waste by weight. Fruit platters were the top wasted item across 5 event occurrences."},
    {pri:"high",title:"Cook eggs in smaller, rolling batches",
     body:"Scrambled eggs are the #2 waste item at 16.36 lbs, tied to the recurring American Breakfast menu. Moving from steam-table batches to 15–20 minute rolling batches during service is one of the easier fixes available — Kitchen already drives 46.5% of total waste.",
     support:"Scrambled eggs: 16.36 lbs across 2 events. Kitchen: 46.5% of total waste. Preconsumer waste: 61.1% of all waste."},
    {pri:"med",title:"Put Kitchen on par-level controls and yield training",
     body:"Kitchen produces almost half of all waste (46.5%), and 61.1% of that is preconsumer — over-prepping and trim loss, not plate waste. Standardized par sheets and yield training on the top offenders (honeydew, eggs, green apple chunks at 9.98 lbs) would target that directly.",
     support:"Kitchen: 46.5% of waste. Preconsumer: 61.1% of 112.95 lbs total. Green apple chunks: 9.98 lbs."},
    {pri:"med",title:"Set up a leftover hand-off between departments",
     body:"Sweet Potato Hash and American Breakfast each showed up wasted in 2 separate events, and waste is split across all four departments with no shared surplus system. An end-of-service check-in between departments could redirect surplus before disposal.",
     support:"Waste spans 4 departments — Kitchen 46.5%, Cafeteria 21.2%, Restaurant 17.7%, Banquet 14.7%."},
    {pri:"med",costDriven:true,title:"Fold protein cost into Kitchen's par-level review",
     body:"Proteins are only 20.5% of waste by weight but 28.3% of dollars lost — eggs, sausage, and bacon carry more cost than their weight suggests. Adding a cost view to the par-level review already planned for Kitchen would flag protein prep with the same urgency as fruit.",
     support:"Proteins: 20.5% of waste by weight, 28.3% of the week's $269.56 total food cost ($3.30/lb). Fruits: 44.8% by weight, 43.2% of cost ($2.30/lb) — roughly proportional by comparison."}]},

  menuAttribution:{status:"confirmed",
    note:"Verified 2026-08-05: 29/29 raw correlations in the window matched a real menu line "+
         "verbatim (21 distinct items), against the actual stored analysisResult text, not a "+
         "simulation. No truncation on any of the 10 processed feeds — the 36,218-char menu "+
         "reached the model fully intact (limit is 50,000 chars). The items shown here are "+
         "trustworthy. The mechanism behind them is not fully safe, though: feedContext carries "+
         "3 Menu-type documents per feed, the same first-occurrence-wins exposure that broke "+
         "Maven's daypart attribution — it's currently harmless only because the correct, "+
         "comprehensive banquet menu always happens to be listed first. Two of the three "+
         "Menu-type docs are actually mislabeled recipe/use-record documents, not real menus; "+
         "they're benign only because they never win. If the doc ordering changes, or a non-"+
         "banquet feed needs a different menu, this could misfire silently the way Maven's did. "+
         "Separately: the banquet menu also lacks a structured array (same defect as Maven's "+
         "menus), which affects the real BioGreen360 portal's item-matching display — that's "+
         "likely the actual cause of any '(unmatched)' rows seen on the live portal, independent "+
         "of the correlation accuracy verified here. Ben's structured-array fix is still needed "+
         "for both properties' live portal reports.",
    rows:[
      {item:"Diced Cantaloupe | Honeydew | Pineapple",lbs:16.57,flag:""},
      {item:"Scrambled Eggs",lbs:15.34,flag:""},
      {item:"American Breakfast",lbs:14.50,flag:""},
      {item:"Sweet Potato Hash",lbs:12.96,flag:""},
      {item:"Sliced Cantaloupe | Pineapple | Honeydew",lbs:11.74,flag:""},
      {item:"Corby Kitchen Breakfast Buffet",lbs:7.23,flag:""},
      {item:"Applewood Smoked Bacon",lbs:6.34,flag:""},
      {item:"Baby Greens Salad | Shaved Carrots | Charred Corn | Tomato | Feta | Sweet Onion Dressing",lbs:6.32,flag:""},
      {item:"Chicken Apple Sausage",lbs:6.12,flag:""},
      {item:"Breakfast Potatoes",lbs:6.06,flag:""},
      {item:"Rockville Buffet",lbs:5.55,flag:""},
      {item:"Mixed Greens Salad | Succotash | Cider Dressing",lbs:4.24,flag:""}]},

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
  period:"July 18 – 25, 2026",
  periodNote:"",

  totalLbs:{value:617.2,status:"confirmed"},
  costLost:{low:2468.80,high:3703.20,status:"estimated",
    display:"$2,241.66",
    perLb:3.63,
    caption:"Built from Maven's own May 2026 inventory — real per-category unit costs, applied "+
            "to Maven's own confirmed waste-category split.",
    note:"Replaces the platform's flat $4.00–$6.00/lb rate with real category-level unit costs "+
         "from Joe's May 2026 inventory export (494 genuinely weight-priced SKUs, median $/lb per "+
         "category), applied to Maven's own confirmed waste-category breakdown (Vegetables 37.0%, "+
         "Other 19.5%, Proteins 18.3%, Fruits 12.5%, Starches/Grains 7.9%, Dairy 4.8% — from "+
         "ingredientWeights, unaffected by the menu-context defect). Result: $2,241.66 total, "+
         "$3.63/lb blended — the platform overstates by 1.10x–1.65x, materially closer to correct "+
         "than the flat-rate assumption implied. Notably smaller correction than seen at other "+
         "properties analyzed: the platform isn't wrong by the same factor everywhere, which is worth "+
         "saying to Marriott directly rather than implying a blanket 'the AI overstates cost' claim. "+
         "Category rates are medians across real priced SKUs, not hand-picked examples — full "+
         "breakdown and per-category confidence in Marriott_COGS_Mapping.xlsx, MavenCategoryRates "+
         "and MavenWeekEstimate tabs. Weakest link: Produce and Dry/Canned items were split into "+
         "Fruits/Vegetables and Starches/Other by automated keyword matching, not manually "+
         "reviewed line-by-line the way some category models are — about 29 produce items "+
         "defaulted to 'Vegetables' by fallback rather than a keyword match. Status held at "+
         "'estimated' rather than 'confirmed' for that reason; spot-checking those defaults would "+
         "close the gap. A separate 5-ingredient, line-by-line traceable estimate ($1.54/lb, 34% "+
         "of the week) lives on the MavenTemplate tab for anyone who wants to verify the method by "+
         "hand rather than trust the category statistics."},

  wasteType:{status:"confirmed",
    rows:[{label:"Postconsumer",pct:64.8,color:"#1B5E3F"},
          {label:"Preconsumer",pct:30.1,color:"#4A7C59"},
          {label:"Unclassified",pct:5.1,color:"#C4D1C7"}],
    note:"Postconsumer and Preconsumer reported directly. 5.1% remainder is arithmetic."},

  department:{status:"confirmed",
    rows:[{label:"Restaurant",pct:96.2,color:"#1B5E3F"},
          {label:"Banquet",pct:3.8,color:"#B8C9BC"}]},

  categories:{status:"confirmed",
    note:"$/lb and cost share from Joe's May 2026 inventory export — see Marriott_COGS_Mapping.xlsx, "+
         "MavenCategoryRates tab. Category % of waste is unaffected by this; only the cost layer is new.",
    rows:[{label:"Vegetables",pct:37.0,costPerLb:2.85,costShare:29.0},
          {label:"Other",pct:19.5,costPerLb:4.05,costShare:21.7},
          {label:"Proteins",pct:18.3,costPerLb:6.44,costShare:32.4},
          {label:"Fruits",pct:12.5,costPerLb:1.97,costShare:6.8},
          {label:"Starches/Grains",pct:7.9,costPerLb:1.81,costShare:3.9},
          {label:"Dairy",pct:4.8,costPerLb:4.62,costShare:6.1}]},

  topIngredients:{status:"confirmed",
    rows:[{name:"Corn tortilla chips",lbs:53.23},{name:"Avocado",lbs:45.56},
          {name:"Wild rice",lbs:43.26},{name:"Blue corn tortilla chips",lbs:36.61},
          {name:"Peruano bean purée",lbs:32.21}]},

  recommendations:{status:"confirmed",rows:[
    {pri:"high",title:"Right-size tortilla chip portions across both varieties",
     body:"Corn tortilla chips (53.23 lbs) and blue corn tortilla chips (36.61 lbs) together account for 89.84 lbs of waste, nearly 14.6% of total waste, suggesting over-portioning or unlimited self-serve setups. Conduct a portion audit and switch to pre-portioned servings or on-request refills to immediately cut this top waste category.",
     support:"Corn tortilla chips: 53.23 lbs; blue corn tortilla chips: 36.61 lbs. Combined 89.84 lbs, ~14.6% of total 617.2 lbs."},
    {pri:"high",title:"Reduce avocado prep volume and shift to made-to-order production",
     body:"Avocado is the second highest wasted ingredient at 45.56 lbs, and its rapid oxidation makes it especially prone to spoilage once prepped in bulk. Transition avocado-based preparations to smaller, more frequent batch production tied to real-time demand rather than pre-event volume estimates.",
     support:"Avocado waste: 45.56 lbs. Highest-frequency related menu item appeared in 28 of 34 events."},
    {pri:"high",title:"Recalibrate wild rice batch sizes",
     body:"Wild rice is the third most wasted ingredient at 43.26 lbs. Analyse actual consumption per event versus the quantity prepped to establish a tighter production ratio and reduce over-preparation.",
     support:"Wild rice waste: 43.26 lbs across 26 of 34 events."},
    {pri:"med",title:"Investigate the dominant postconsumer waste stream",
     body:"Postconsumer waste represents 64.8% of total waste weight, indicating that food is reaching guests but not being consumed. This points to portion sizing, menu appeal, or over-serving rather than kitchen over-production. Implement plate-waste observation or guest feedback collection at restaurant-level events, which drive 96.2% of waste.",
     support:"Postconsumer: 64.8% of 617.2 lbs (~399.9 lbs). Restaurant accounts for 96.2% of all waste."},
    {pri:"med",title:"Standardise Peruano bean purée batch quantities to confirmed guest counts",
     body:"Peruano bean purée ranks fifth among wasted ingredients at 32.21 lbs, and as a prepared purée it has limited repurposing potential once made. Introduce a strict batch-sizing formula that caps production at confirmed guest count multiplied by a tested per-person yield.",
     support:"Peruano bean purée: 32.21 lbs. Preconsumer waste, which includes prep waste like purées, is 30.1% of total."},
    {pri:"high",costDriven:true,title:"Cut chicken portion sizes in the Chicken Bowl specifically",
     body:"Chicken Bowl is already the heaviest single item on the waste log, but its cost impact is even more concentrated than its weight: at $6.44/lb (the Proteins rate) against the property's $3.63/lb blended average, it accounts for $1,658.04 of this week's food cost lost — 48% of all costed menu-item waste in a single dish. A modest cut to the chicken portion specifically, not the rice, beans or toppings, would have far more dollar impact than an equivalent weight reduction anywhere else on the menu.",
     support:"Chicken Bowl: 257.46 lbs, $1,658.04 — 48% of this week's $3,427.48 in costed menu-item waste, priced at $6.44/lb vs. the property's $3.63/lb blended average."},
    {pri:"med",costDriven:true,title:"Right-size pozole batch production across both cup and bowl formats",
     body:"Cup of Chicken Pozole Blanco and Chicken Pozole Blanco are wasted independently of one another, not as substitutes, which points to a shared prep step — likely the base broth and chicken batch — being over-produced regardless of which format it's served in. Tie that shared batch to actual covers forecast rather than a fixed daily quantity, and split it into two smaller batches so a slow shift doesn't waste the whole run. Together with Chicken Bowl, chicken-based dishes make up close to 70% of all costed menu-item waste this week.",
     support:"Cup of Chicken Pozole Blanco: $483.19. Chicken Pozole Blanco: $255.99. Combined $739.18, 22% of this week's costed menu-item waste. With Chicken Bowl, all three chicken dishes total $2,397.22 — 70% of $3,427.48."},
    {pri:"med",costDriven:true,title:"Add a cost-ranked waste view for the kitchen, not just weight-ranked",
     body:"Proteins are only 18.3% of Maven's waste by weight but 32.4% of the week's total food cost lost — the single largest cost share of any category, ahead of Vegetables despite Vegetables weighing twice as much. A weight-ranked log alone will keep pointing kitchen staff at vegetable and starch prep first. Add a cost column to the same waste log already in use, so the chicken station gets checked with the same urgency as vegetable prep, not after it.",
     support:"Proteins: 18.3% of waste by weight, 32.4% of the week's $2,241.66 total food cost ($6.44/lb). Vegetables: 37.0% by weight, only 29.0% of cost ($2.85/lb)."}]},

  menuAttribution:{status:"confirmed",
    note:"Reprocessed 2026-08-04 with daypart-routed v4 prompt (batch-6512da9e5507, staging "+
         "orchestrator, 41/41 feeds succeeded). Each feed's feedContext now references a single "+
         "menu matched to its Denver-local capture daypart, fixing the first-occurrence-wins "+
         "defect that previously forced every feed onto the Lunch menu. Price-appended and "+
         "modifier-as-dish defects (F4) are resolved: 186/187 raw correlations (99%) matched a "+
         "verbatim menu dish, zero carried a price, em-dash, or modifier/section-header name. "+
         "Lbs below use single-attribution (each feed's weight assigned to its highest-confidence "+
         "correlation only) to avoid double-counting across a feed's multiple correlations; "+
         "38 of 41 feeds had a usable top correlation, so lbs here (681.4 total) run lower than "+
         "the property's overall total waste figure above.",
    rows:[
      {item:"Chicken Bowl",lbs:257.46,flag:"",cat:"Proteins",cost:1658.04},
      {item:"Sumac Guacamole",lbs:91.28,flag:"",cat:"Fruits",cost:179.82},
      {item:"Cup of Chicken Pozole Blanco",lbs:75.03,flag:"",cat:"Proteins",cost:483.19},
      {item:"Quesadillas",lbs:50.93,flag:"",cat:"Dairy",cost:235.30},
      {item:"Wild Rice",lbs:46.12,flag:"",cat:"Starches/Grains",cost:83.48},
      {item:"Tomato Peach Salad",lbs:40.55,flag:"",cat:"Vegetables",cost:115.57},
      {item:"Chicken Pozole Blanco",lbs:39.75,flag:"",cat:"Proteins",cost:255.99},
      {item:"Taco Set Combo",lbs:28.71,flag:"",cat:"Proteins",cost:184.89},
      {item:"Enchiladas",lbs:23.43,flag:"",cat:"Proteins",cost:150.89},
      {item:"Nopales",lbs:17.03,flag:"",cat:"Vegetables",cost:48.54},
      {item:"Poblano Romesco Salad",lbs:11.15,flag:"",cat:"Vegetables",cost:31.78}]},

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
  period:"July 14 – 28, 2026",
  periodNote:"",

  totalLbs:{value:1426.68,status:"confirmed"},
  costLost:{low:null,high:null,status:"estimated",
    display:"$5,890.92",
    perLb:4.13,
    caption:"Built from DTC's own August 2026 purchasing price list — real per-category unit costs.",
    note:"Replaces the earlier generic $2.50–$4.00/lb placeholder with real category-level unit "+
         "costs from DTC's own purchasing price list (2,975 SKUs, 929 directly weight-priced "+
         "items, median $/lb per category), applied to DTC's own ingredient-level waste-category "+
         "breakdown (Vegetables 28.7%, Starches/Grains 24.9%, Fruits 19.1%, Proteins 13.6%, "+
         "Other 8.9%, Dairy 4.9%). Result: $5,890.92 total, $4.13/lb blended. Status held at "+
         "'estimated' rather than 'confirmed' for two reasons: category assignment for ~2,000 of "+
         "the 2,975 priced items (Produce, Dry/Canned, Frozen, Baked Goods vendor categories) was "+
         "done by automated keyword matching, not manually reviewed line-by-line; and the waste "+
         "categorization itself required extending the platform's own ingredient-to-category map "+
         "to correctly catch cantaloupe, honeydew, and other melon/berry produce that the deployed "+
         "map has no token for — without that extension, ~93 lbs (6.5% of total waste) would have "+
         "been miscategorized as 'Other' and costed at the wrong rate. That map gap is a real "+
         "platform issue worth flagging to engineering, not something specific to DTC."},

  wasteType:{status:"confirmed",
    rows:[{label:"Preconsumer",pct:51,color:"#1B5E3F"},
          {label:"Postconsumer",pct:49,color:"#8FA99A"}],
    note:"Preconsumer and Postconsumer reported directly from image analysis. Notably even — "+
         "prep waste and served-but-uneaten waste are happening at roughly the same scale here, "+
         "pointing to both banquet production planning and service-side portioning as areas to "+
         "address."},

  department:{status:"confirmed",
    note:"From the department field captured at the point of waste (operator-selected at "+
         "capture, not inferred).",
    rows:[{label:"Banquet",pct:83,color:"#1B5E3F"},
          {label:"M-Club",pct:9,color:"#2C5C7A"},
          {label:"Kitchen",pct:8,color:"#96342E"}]},

  categories:{status:"estimated",
    note:"$/lb from DTC's own August 2026 purchasing price list — see the cost card note for "+
         "the full methodology, including the ingredient-map extension needed to correctly "+
         "categorize cantaloupe, honeydew, and other melon/berry produce.",
    rows:[{label:"Vegetables",pct:28.7,costPerLb:3.79,costShare:26.3},
          {label:"Starches/Grains",pct:24.9,costPerLb:2.35,costShare:14.2},
          {label:"Fruits",pct:19.1,costPerLb:3.77,costShare:17.4},
          {label:"Proteins",pct:13.6,costPerLb:6.62,costShare:21.8},
          {label:"Other",pct:8.9,costPerLb:7.11,costShare:15.4},
          {label:"Dairy",pct:4.9,costPerLb:4.20,costShare:5.0}]},

  topIngredients:{status:"confirmed",
    note:"Based on 71 of 78 recorded weigh-ins this period; 7 were excluded due to scale "+
         "readings that indicate sensor issues at this property warranting a maintenance check.",
    rows:[{name:"Scrambled Eggs",lbs:76.20},{name:"Rolled Oats",lbs:44.93},
          {name:"Watermelon",lbs:43.81},{name:"Black Beans",lbs:40.65},
          {name:"Green Beans",lbs:39.94}]},

  recommendations:{status:"confirmed",rows:[
    {pri:"high",title:"Reduce banquet breakfast egg-station batch sizes",
     body:"Scrambled eggs are the single largest wasted ingredient at 76.20 lbs across 15 feeds — more than any other item by a wide margin, and concentrated in banquet breakfast buffets (NAHN and similar recurring breakfast events). Shift from large steam-table batches to smaller, more frequent refills timed to actual buffet traffic to reduce this batch-driven waste.",
     support:"Scrambled eggs: 76.20 lbs across 15 feeds, the highest of any ingredient at this property."},
    {pri:"high",costDriven:true,title:"Liquid Eggs is both the heaviest and the most expensive item on the menu log",
     body:"Liquid Eggs tops the menu-attribution table both by weight (127.3 lbs) and by cost ($842.73) — a double concentration that's rare across all three properties analyzed. At the Proteins rate ($6.62/lb), it accounts for 21.8% of all costed menu-item waste despite being only 13.5% of costed menu-item weight. Fixing egg-station batch sizes (see above) will move both the weight and dollar numbers at once.",
     support:"Liquid Eggs: 127.3 lbs (13.5% of costed menu-item weight), $842.73 (21.8% of this week's $3,867.28 in costed menu-item waste), priced at $6.62/lb vs. the property's $4.13/lb blended average."},
    {pri:"high",title:"Right-size fruit and grain sides across recurring banquet events",
     body:"Rolled oats (44.93 lbs), watermelon (43.81 lbs), and green beans (39.94 lbs) are all high-volume banquet side items appearing repeatedly across the event calendar. These are exactly the kind of bulk-prepped items where a fixed case-order quantity stops matching actual cover counts once an event's real attendance is known. Tie prep quantities to confirmed cover counts per event rather than a standing case order.",
     support:"Rolled oats 44.93 lbs, watermelon 43.81 lbs, green beans 39.94 lbs — three of the top five wasted ingredients, all recurring banquet-side items."},
    {pri:"med",title:"Audit black bean prep across the banquet menu rotation",
     body:"Black beans appear as a wasted ingredient in 11 separate feeds, more frequently than any other item, suggesting a standing prep item that's consistently over-produced regardless of which event is running that day. Review the standard batch recipe against typical per-event draw before the next prep cycle.",
     support:"Black beans: 40.65 lbs wasted across 11 feeds — the highest feed-frequency of any ingredient."},
    {pri:"med",costDriven:true,title:"Add a cost-ranked waste view for the kitchen, not just weight-ranked",
     body:"Proteins are only 13.6% of DTC's waste by weight but 21.8% of the week's total food cost lost — the largest gap between weight share and cost share of any category. A weight-ranked log alone will keep pointing staff at vegetable and starch prep first. Add a cost column to the same waste log already in use, so protein-heavy stations (the egg station especially) get checked with the same urgency as bulk produce prep, not after it.",
     support:"Proteins: 13.6% of waste by weight, 21.8% of the week's $5,890.92 total food cost ($6.62/lb). Vegetables: 28.7% by weight, 26.3% of cost ($3.79/lb) — closer to proportional by comparison."},
    {pri:"med",title:"Investigate the even Preconsumer/Postconsumer split as two separate problems",
     body:"DTC's waste splits almost evenly between Preconsumer (51%) and Postconsumer (49%) — over-prepping and guest-facing leftover waste are both happening at meaningful scale here, and neither can be treated as the dominant lever. Pair the prep-side fixes above with a banquet-service review (portion sizes on plated items, buffet breakdown timing) rather than assuming one intervention will move the whole number.",
     support:"Preconsumer 51% vs Postconsumer 49% of total waste — a genuinely balanced split, not skewed toward one waste type."},
    {pri:"low",title:"Review M-Club and Kitchen waste once banquet fixes are underway",
     body:"M-Club (9%) and Kitchen (8%) together are a modest 17% of total waste, well behind Banquet's 83%. Worth a follow-up pass once banquet interventions are in place, but not the first priority given the concentration of waste and dollar opportunity elsewhere.",
     support:"Banquet: 83% of total waste. M-Club: 9%. Kitchen: 8%."}]},

  menuAttribution:{status:"confirmed",
    note:"Built for this presentation by running this hub's 78 backlogged feeds through analysis "+
         "for the first time (no report previously existed here), then mapping each feed to the "+
         "specific banquet prep sheet covering its actual capture week — 67 of 78 feeds matched "+
         "cleanly by date. The remaining 11 fall in a July 19–25 gap with no prep sheet on file for "+
         "that week; those correlate against the nearest available (late-June) sheet instead and "+
         "should be read as directionally useful, not week-accurate. Separately, DTC's context "+
         "documents are unpriced banquet order/prep sheets, not a guest-facing menu, so "+
         "correlations here are ingredient-level (e.g. \"cantaloupe,\" \"liquid eggs\") rather than "+
         "\"dish-level\" the way a guest-facing menu's items would be — there is no dish name to correlate to in a prep sheet. "+
         "This run also used the general-purpose analysis prompt rather than a banquet-specific "+
         "one, and the 13 feeds tagged M-Club or Kitchen (rather than Banquet) were matched to the "+
         "same banquet event sheets as everything else, since no department-aware routing exists "+
         "yet — a reasonable approximation for a first pass, worth refining before this becomes a "+
         "standing report. Item names below are merged case/plural duplicates (e.g. \"Green Beans\" "+
         "and \"green beans\" counted as one). Costs added once DTC's own price list arrived: since "+
         "each row here is already a single ingredient (not a composite dish like Maven's menu "+
         "items), each is costed directly at its own category rate — no dish-decomposition needed.",
    rows:[
      {item:"Liquid Eggs",lbs:127.3,flag:"",cat:"Proteins",cost:842.73},
      {item:"Rolled Oats",lbs:119.2,flag:"",cat:"Starches/Grains",cost:280.12},
      {item:"Pineapple",lbs:105.9,flag:"",cat:"Fruits",cost:399.24},
      {item:"Watermelon",lbs:97.2,flag:"",cat:"Fruits",cost:366.44},
      {item:"Par Boiled Rice",lbs:74.1,flag:"",cat:"Starches/Grains",cost:174.13},
      {item:"Green Beans",lbs:71.2,flag:"",cat:"Vegetables",cost:269.85},
      {item:"Cantaloupe",lbs:71.2,flag:"",cat:"Fruits",cost:268.42},
      {item:"Tofu",lbs:63.5,flag:"",cat:"Proteins",cost:420.37},
      {item:"Cavatappi Pasta",lbs:63.4,flag:"",cat:"Starches/Grains",cost:148.99},
      {item:"Baby Spinach",lbs:52.1,flag:"",cat:"Vegetables",cost:197.46},
      {item:"Zucchini",lbs:51.8,flag:"",cat:"Vegetables",cost:196.32},
      {item:"Random Chicken Breast",lbs:45.8,flag:"",cat:"Proteins",cost:303.20}]},

  allTime:{status:"confirmed",recycledTons:57.03,co2Tons:272.76,
    acres:344,trees:4501,homes:12545,miles:699349}
}
},
};

export default DATA;
