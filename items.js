const items = [
    {
        id: 1,
        title: "24-Speed Men`s Raleigh Bike",
        price: "€150",
        description: `
            <p>This is a 24-speed Raleigh Detour 2 Men's Bicycle in black with green highlights,
            very lightly used and in excellent condition. It is great for urban use but can also handle some light trails. 
            The well-padded seat is very comfortable. Designed for riding in a more upright position for greater comfort.</p>
            <p>Features:</p>
            <ul>
                <li>Aluminium frame with top bar - XL size - ideal for riders 6'1" to 6'4" tall.</li>
                <li>Quick release alloy hubs - XTB 26 inch</li>
                <li>Arisun Metro Cruiser tires</li>
                <li>24 gears with easy Shimano Rapid Fire trigger shifters</li>
                <li>Shimano Altus derailleurs</li>
                <li>Shimano Tourney 28/38/48 crankset with chainguard</li>
                <li>Linear pull brakes</li>
                <li>Comfort seat and handlegrips</li>
                <li>Rear rack</li>
                <li>Fenders</li>
                <li>Kickstand</li>
                <li>All original manuals and documentation</li>
            </ul>
        `,
        images: [
            "images/bikes/mbike01.jpg",
            "images/bikes/mbike02.jpg",
            "images/bikes/mbike03.jpg",
            "images/bikes/mbike04.jpg",
            "images/bikes/mbike05.jpg",
            "images/bikes/mbike06.jpg",
            "images/bikes/mbike07.jpg",
            "images/bikes/mbike08.jpg",
            "images/bikes/bike_manual.jpg"
        ],
        sold: false
    },
    {
        id: 2,
        title: "24-Speed Step Through Raleigh Bike",
        price: "€150",
        description: `
            <p>This is a 24-speed Raleigh Detour 2 Step Through Bicycle in white with blue highlights,
            very lightly used and in excellent condition. It is great for urban use but can also handle some light trails. 
            The well-padded seat is very comfortable. Designed for riding in a more upright position for greater comfort.</p>
            <p>Features:</p>
            <ul>
                <li>Aluminium frame with top bar - L size - ideal for riders 5'10" to 6'1" tall.</li>
                <li>Quick release alloy hubs - XTB 26 inch</li>
                <li>Arisun Metro Cruiser tires</li>
                <li>24 gears with easy Shimano Rapid Fire trigger shifters</li>
                <li>Shimano Altus derailleurs</li>
                <li>Shimano Tourney 28/38/48 crankset with chainguard</li>
                <li>Linear pull brakes</li>
                <li>Comfort seat and handlegrips</li>
                <li>Rear rack</li>
                <li>Front basket</li>
                <li>Fenders</li>
                <li>Kickstand</li>
                <li>All original manuals and documentation</li>
            </ul>
        `,
        images: [
            "images/bikes/wbike01.jpg",
            "images/bikes/wbike02.jpg",
            "images/bikes/wbike03.jpg",
            "images/bikes/wbike04.jpg",
            "images/bikes/wbike05.jpg",
            "images/bikes/wbike06.jpg",
            "images/bikes/wbike07.jpg",
            "images/bikes/wbike08.jpg",
            "images/bikes/bike_manual.jpg"
        ],
        sold: true
    },
/*   
    {
        id: 3,
        title: "Bosch Corded Circular Saw",
        price: "€40",
        description: `
            <p>This is a Bosch corded circular saw, model PKS 55A,
            very lightly used and in excellent condition.</p>
            <p>Features:</p>
            <ul>
            <li>1200 Watts of power.</li>
            <li>5600 rpm</li>
            <li>Takes 150 to 160 mm blades</li>
            <li>Bevel from 0 to 45 degrees</li>
            <li>Max. cut depth 55 mm at 0 degrees bevel</li>
	    <li>Max. cut depth 38 mm at 45 degrees bevel</li>
            <li>Includes parallel guide</li>
            <li>Dust - Chip box</li>
            <li>Viewing window for cut control</li>
            <li>Original manuals and box</li>
            </ul>
        `,
        images: [
            "images/tools/circ_saw1.jpg",
            "images/tools/circ_saw2.jpg",
            "images/tools/circ_saw3.jpg",
	    "images/tools/circ_saw4.jpg",
	    "images/tools/circ_saw5.jpg"
        ],
        sold: false
    },
*/
    {
        id: 4,
        title: "Parkside Benchtop Sharpener",
        price: "€12",
        description: `
            <p>Parkside benchtop sharpener model PSS 65 D1. Very useful for sharpening knives, scissors, chisels and drill bits. Includes all accesories and a spare grinding wheel. Lightly used and in the original box.</p>            
        `,
        images: [
            "images/tools/sharpener1.jpg",
            "images/tools/sharpener2.jpg",
            "images/tools/sharpener3.jpg",
            "images/tools/sharpener4.jpg",
            "images/tools/sharpener5.jpg"        
        ],
        sold: true
    },
    {
        id: 5,
        title: "Parkside Trigger Clamps",
        price: "€5",
        description: `
            <p>Set of 2 Parkside trigger clamps. 300 mm max. opening. Adjustable with one hand and quick relese. Never used and in the original packaging.</p>            
        `,
        images: [
            "images/tools/trigger_clamps1.jpg",
            "images/tools/trigger_clamps2.jpg"        
        ],
        sold: true
    },
    {
        id: 6,
        title: "Parkside Woodworking Router",
        price: "€25",
        description: `
            <p>This is a brand new Parkside Woodworking Router, model POF 1200 D3,
            never used and in the original packaging.</p>
            <p>Features:</p>
            <ul>
                <li>1200 Watts of power.</li>
                <li>11,000 - 30,000 rpm</li>
                <li>Takes router bits with 6 and 8 mm shanks</li>
                <li>Adjustable depth stop with fine adjustment</li>
                <li>Parallel guide with fine adjustment</li>
                <li>Fast routing depth selection</li>
                <li>Caliper point for circle cutting</li>
                <li>Includes 6 piece router bit set for wood</li>
                <li>Original manuals and box</li>
            </ul>
        `,
        images: [
            "images/tools/router1.jpg"
        ],
        sold: true
    },
     {
        id: 7,
        title: "Parkside Glue Gun",
        price: "€8",
        description: `
            <p>This is a brand new Parkside Glue Gun, model PNKP 105 B1,
            never used and in the original packaging.</p>
            <p>Features:</p>
            <ul>
                <li>5 Watts of power.</li>
                <li>5 minute warm-up</li>
                <li>Takes standard 7mm glue sticks</li>
                <li>Low-temp setting for sensitive materials</li>
                <li>105 degree (Celsius) working temperature</li>
                <li>Folding stand</li>
                <li>Includes 6 clear glue sticks - 10 cm each</li>
                <li>Original manuals and box</li>
            </ul>
        `,
        images: [
            "images/tools/glue_gun1.jpg"
        ],
        sold: true
    },
    {
        id: 8,
        title: "Parkside Electric Staple Gun and Brad Nailer",
        price: "€12",
        description: `
            <p>This is a brand new Parkside Electric Staple Gun and Brad Nailer, model PHET 15 C2,
            never used and in the original packaging.</p>
            <p>Features:</p>
            <ul>
                <li>Lightweight and compact</li>
                <li>One-handed operation with non-slip soft grip</li>
                <li>Magazine with fill level indicator on both sides</li>
                <li>Takes 6-14 mm staples and 14-15 mm nails</li>
                <li>3 meter cord</li>
                <li>Includes 400 x 10 mm staples and 100 x 14 mm nails</li>
                <li>Original manuals and box</li>
            </ul>
        `,
        images: [
            "images/tools/brad_nailer1.jpg",
            "images/tools/brad_nailer2.jpg"
        ],
        sold: true
    },
    {
        id: 9,
        title: "Crock-Pot 4.7 liter Slow Cooker",
        price: "€25",
        description: `
            <p>This is a round Lift & Serve Crock-Pot in black.</p>
            <p>Features:</p>
            <ul>
                <li>4.7 liter capacity</li>
                <li>Glass lid can be easily removed for serving and cleaning</li>
                <li>Stoneware can be easily lifted off the heating base for serving</li>
                <li>Three heat settings - High, Low and Keep Warm</li>
                <li>Includes original box and instruction manual</li>
            </ul>
        `,
        images: [
            "images/kitchen/crockpot_manual.jpg",
        ],
        sold: true
    },
    {
        id: 10,
        title: "Bosch Universal Kitchen Machine",
        price: "€95",
        description: `
            <p>This is a Bosch MUM58 Universal Kitchen Machine in mint turquoise color and excellent condition.</p>
            <p>Features and functions:</p>
            <ul>
                <li>Stand mixer with stirrer, whisk and kneading hook attachments</li>
                <li>Stainless steel bowl - 3.9 liter</li>
                <li>Blender attachment</li>
                <li>Slicer attachment with corresponding disks</li>
                <li>Seven speed settings</li>
                <li>Includes all original accesories, instruction manual and CD</li>
                <li>1,000 Watts power</li>
                <li>Many additional attachments available from Bosch</li>
            </ul>
        `,
        images: [
            "images/kitchen/stand_mixer1.webp",
            "images/kitchen/stand_mixer_manual.jpg"
        ],
        sold: true
    },
    {
        id: 11,
        title: "Yogurt and Cream Cheese Maker",
        price: "€40",
        description: `
            <p>This is a Rommelsbacher JG80 Yogurt and Cream Cheese Maker, lightly used and in excellent condition. May also be used for herbal extracts.</p>
            <p>Features and functions:</p>
            <ul>
                <li>High-quality, double-walled housing</li>
                <li>Stainless steel inner pot</li>
                <li>4 Programs with different temperatures:
                    <ol>
                        <li>natural yogurt (42 °C)</li>
                        <li>vegan/lactose-free yogurt (38 °C)</li>
                        <li>cream cheese (30 °C)</li>
                        <li>herbal extracts (55 °C)</li>
                    </ol>
                </li>
                <li>24-hour timer with signal tone, automatic switch-off</li>
                <li>Overheat protection</li>
                <li>Removable, clear cover</li>
                <li>4 ceramic portion cups (each 125 ml) with lid, 2 XXL glass containers (each 1.2 liter) with lid, 1 strainer with lid</li>
                <li>Includes original box and manual</li>
            </ul>
        `,
        images: [
            "images/kitchen/yogurt_maker.jpg",
            "images/kitchen/yogurt_maker_cups.jpg",
            "images/kitchen/yogurt_maker_manual.jpg"
        ],
        sold: true
    },
    {
        id: 12,
        title: "Intelligent Tea Kettle",
        price: "€15",
        description: `
            <p>This is an electric Decen KT600 Intelligent Tea Master kettle, lightly used and in excellent condition.</p>
            <p>Features and functions:</p>
            <ul>
                <li>1.7 liter glass jug</li>
                <li>Stainless steel tea infuser</li>
                <li>Six programmed temperature settings:
                    <ol>
                        <li>Boil - Black Tea (100 °C)</li>
                        <li>French Press (95 °C)</li>
                        <li>Oolong (90 °C)</li>
                        <li>White (85 °C)</li>
                        <li>Green (80 °C)</li>
                        <li>Delicate (70 °C)</li>        
                    </ol>
                </li>
                <li>Keep Warm function</li>
                <li>Includes instruction manual</li>
            </ul>
        `,
        images: [
            "images/kitchen/tea_kettle1.jpg",
            "images/kitchen/tea_kettle2.jpg"
        ],
        sold: true
    },
    {
        id: 13,
        title: "Moulinex Blender",
        price: "€45",
        description: `
            <p>This is a Moulinex model LM91 Kitchen Blender in very good condition.</p>
            <p>Features:</p>
            <ul>
                <li>1600 Watts of power</li>
                <li>1.7 liter jar capacity</li>
                <li>600 ml portable bottle with lid</li>
                <li>4 preset programs for the jar: Smoothie, Sorbet, Ice Crush and Dessert </li>
                <li>2 preset programs for the portable bottle: Smoothie and Ice Crush</li>
                <li>Additional program for Cleaning</li>
                <li>Includes all accesories, instruction manual and recipe book</li>
            </ul>
        `,
        images: [
            "images/kitchen/moulinex_blender1.jpg",
            "images/kitchen/moulinex_blender2.jpg",
            "images/kitchen/moulinex_blender3.jpg",
        ],
        sold: true
    },
    {
        id: 14,
        title: "Karcher Pressure Washer",
        price: "€100",
        description: `
            <p>This is a Karcher K4 Power Control pressure washer, lightly used and in very good condition.</p>
            <p>Features:</p>
            <ul>
                <li>1900 psi maximum pressure</li>
                <li>1.5 gallons/minute maximum flow rate</li>
                <li>Power Control trigger gun with quick-connect</li>
                <li>High-pressure spray wand</li>
                <li>Variable pressure spray wand with 4 power settings</li>
                <li>Plug 'n' Clean system for detergent application</li>
                <li>Telescopic handle</li>
                <li>Water-cooled motor</li>
                <li>Integrated water filter</li>
                <li>Integrated storage net</li>
                <li>Includes original manual</li>
            </ul>
        `,
        images: [
            "images/tools/pressure_washer1.jpg",
            "images/tools/pressure_washer2.jpg",
            "images/tools/pressure_washer3.jpg",
            "images/tools/pressure_washer4.jpg",
            "images/tools/pressure_washer5.jpg",
            "images/tools/pressure_washer6.jpg",
            "images/tools/pressure_washer8.jpg"
        ],
        sold: true
    },
    {
        id: 15,
        title: "Wet/Dry Vacuum Cleaner",
        price: "€20",
        description: `
            <p>This is a Practyl Wet/Dry Vacuum Cleaner.</p>
            <p>Features:</p>
            <ul>
                <li>15 liter tank</li>
                <li>1250 Watts power</li>
                <li>Reusable cloth filter</li>
                <li>Dust bag</li>
                <li>Foam filter for wet applications</li>
                <li>Includes original manual</li>
            </ul>
        `,
        images: [
            "images/tools/wet_dry_vac1.jpg",
            "images/tools/wet_dry_vac2.webp",
            "images/tools/wet_dry_vac3.webp",
            "images/tools/wet_dry_vac4.jpg"
        ],
        sold: true
    },
    {
        id: 16,
        title: "Bestway Pool Cleaning Robot",
        price: "€70",
        description: `
            <p>This is a Bestway 58622 Flowclear AquaRover in excellent condition. It is an autonomous pool cleaning robot that will help maintain your pool clean and pristine. Simply turn it on and place it in the pool; the built-in sensors will automatically activate it. As it roams about the bottom of your pool it collects any debris it encounters. The sensors will automatically stop operation when you take it out of the water. It works best with round pools that have a diameter of 7.32 m (24 ft.) or less, or rectangle pools with a length of 9.65 m (31 ft. 4 in.) or less.<b> Please note it is only suitable for pools with flat bottoms i.e. not sloping.</b></p>
            <p>Features:</p>
            <ul>
                <li>4 liter tank for the debris it collects</li>
                <li>90 minute run time on a full charge</li>
                <li>Completely autonomous operation / No hoses or cable required</li>
                <li>Includes original box and manual</li>
            </ul>
        `,
        images: [
            "images/garden/pool_robot1.jpg",
            "images/garden/pool_robot2.jpg",
            "images/garden/pool_robot3.jpg",
            "images/garden/pool_robot4.jpg",
            "images/garden/pool_robot5.jpg",
            "images/garden/pool_robot2.jpg"
        ],
        sold: false
    },
    {
        id: 17,
        title: "Trotec Dehumidifier",
        price: "€75",
        description: `
            <p>This is a Trotec TTK 100 S dehumidifier in good condition.</p>
            <p>Features:</p>
            <ul>
                <li>30 liters / 24 hrs. maximum performance</li>
                <li>4.3 liter water tank capacity</li>
                <li>Condensation drain hose connection</li>
                <li>290 x 390 x 612 mm dimensions</li>
                <li>Wheels for easy relocation</li>
                <li>Suitable for rooms up to 90 m² / 230 m³</li>
                <li>Includes original manual</li>
            </ul>
        `,
        images: [
            "images/home/trotec_dehumidifier1.jpg",
            "images/home/trotec_dehumidifier2.jpg",
            "images/home/trotec_dehumidifier3.jpg",
            "images/home/trotec_dehumidifier4.jpg"
        ],
        sold: true
    },
/*
    {
        id: 18,
        title: "Miele Vacuum Cleaner",
        price: "€95",
        description: `
            <p>This is a Miele HS15 Vacuum Cleaner in red. It does an excellent job on both floors and carpets</p>
            <p>Features:</p>
            <ul>
                <li>6 power settings</li>
                <li>Easily retractable power cord</li>
                <li>All original accesories included</li>
                <li>Includes original manual</li>
            </ul>
        `,
        images: [
            "images/home/miele_vac1.jpg",
            "images/home/miele_vac2.jpg",
            "images/home/miele_vac3.jpg",
            "images/home/miele_vac4.jpg",
            "images/home/miele_vac5.jpg",
            "images/home/miele_vac6.jpg",
            "images/home/miele_vac7.jpg"
        ],
        sold: false
    },
*/
    {
        id: 19,
        title: "Weber MasterTouch Charcoal Grill Kit",
        price: "€150",
        description: `
            <p>This is a Weber MaserTouch 57cm (22") Grill in good condition</p>
	    <p> If you love classic American BBQ this is for you! We're selling it as kit since it includes the grill itself and several accessories, including a Slow 'n Sear, which will help you make the most tender ribs and succulent pulled pork.</p>
            <p>Features:</p>
            <ul>
                <li>57 cm Weber Charcoal grill with all original accessories</li>
                <li>Slow 'n Sear insert for outstanding low-n-slow cooking and smoking</li>
                <li>Beer can chicken accesory</li>
                <li>Veggie basket accessory</li>
                <li>Plastic cover</li>
                <li>Includes a little charcoal and some wood chips!</li>
            </ul>
        `,
        images: [
            "images/garden/weber1.jpg",
            "images/garden/weber2.jpg",
            "images/garden/weber3.jpg",
            "images/garden/weber4.jpg",
            "images/garden/weber5.jpg",
            "images/garden/weber6.jpg",
            "images/garden/weber7.jpg"
        ],
        sold: true
    },   
    {
        id: 20,
        title: "Mini Waffle Iron",
        price: "€10",
        description: `
            <p>This is a Bestron Mini Waffle Iron</p>
            <p>Features:</p>
            <ul>
            <li>Makes 10 cm round waffles</li>
	    <li>Easy to operate and clean</li>
	    </ul>
        `,
        images: [
            "images/kitchen/waffle_iron1.jpg",
	    "images/kitchen/waffle_iron2.jpg",
	    "images/kitchen/waffle_iron3.jpg"
	],
        sold: true
    },
/*
    {
        id: 21,
        title: "Canon Printer/Scanner",
        price: "€25",
        description: `
            <p>This is a Canon TS 6250 All-in-One (Printer/Scanner/Copier) in very good condition</p>
            <p>Features:</p>
            <ul>
            <li>A4 colour inkjet printer with 4800x1200dpi resolution</li>
	    <li>1200x2400dpi scanner/copier</li>
	    <li>100-sheet front tray, 20-sheet rear tray (photos/envelopes)</li>
	    <li>Connectivity – USB, Wifi, with Apple AirPrint, Android</li>
	    <li>Dimensions – 139x372x315mm, 6.2kg</li>
	    <li>Automatic double-sided printing</li>
	    <li>Up to 15 pages-per-minute printing</li>
	    <li>Touch-screen operation</li>
	    <li>Includes original manual and CD</li>
            </ul>
        `,
        images: [
            "images/home/printer1.webp",
	    "images/home/printer2.jpg",
	    "images/home/printer3.jpg",
	    "images/home/printer4.jpg",
	    "images/home/printer5.jpg",
	    "images/home/printer6.jpg",
	    "images/home/printer7.jpg"
	],
        sold: false
    },
*/
    {
        id: 22,
        title: "LG 50-inch Television",
        price: "€30",
        description: `
            <p>This is an LG 50PA4500 Plasma Television with Stand</p>
            <p>Features:</p>
            <ul>
            <li>1024 x 768 HD resolution (720p)</li>
	    <li>HDMI and USB 2.0 Inputs</li>
	    <li>Dolby Digital decoder</li>
	    <li>Includes heavy duty stand and wall mounting bracket</li>
        <li>This is not a smart TV</li>
            </ul>
        `,
        images: [
        "images/home/television1.jpg",
	    "images/home/television2.jpg",
	    "images/home/television3.jpg",
        "images/home/television4.jpg"
	],
        sold: false
    },
    {
        id: 23,
        title: "Rowenta Focus Excel Iron",
        price: "€25",
        description: `
            <p>This is a Rowenta Focus Excel DW5220 iron</p>
            <p>Features:</p>
            <ul>
            <li>2700 Watts Power</li>
	    <li>Excellent steam diffusion</li>
	    <li>High precision tip</li>
	    <li>Easy filling and anti-drip</li>
	    <li>Made in Germany</li>
            </ul>
        `,
        images: [
            "images/home/iron1.jpg",
	    "images/home/iron2.jpg",
	    "images/home/iron3.jpg",
	    "images/home/iron4.jpg"
	],
        sold: true
    },
    {
        id: 24,
        title: "Heavy-Duty Ironing Board",
        price: "€25",
        description: `
            <p>This is a lightly-used, heavy-duty ironing board</p>
            <p>Features:</p>
            <ul>
            <li>Excellent stability</li>
	    <li>Sturdy</li>
	    <li>Includes a second ironing pad</li>
	    </ul>
        `,
        images: [
            "images/home/ironboard1.jpg",
	    "images/home/ironboard2.jpg",
	    "images/home/ironboard3.jpg"
	],
        sold: false
    },
    {
        id: 25,
        title: "New Wood Shelves Stand",
        price: "€10",
        description: `
            <p>This is a brand new IKEA Albert stand</p>
            <p>Features:</p>
            <ul>
            <li>Still in the original packaging</li>
	    <li>Solid wood stand with 4 shelves</li>
	    <li>Assembly required</li>
	    </ul>
        `,
        images: [
            "images/home/ikeaalbert1.avif",
	    "images/home/ikeaalbert2.jpg",
	    "images/home/ikeaalbert3.jpg",
            "images/home/ikeaalbert4.avif"
	],
        sold: true
    },
    {
        id: 26,
        title: "De Longhi Radiator Heater",
        price: "€30",
        description: `
            <p>This is a De Longhi Dragon 4 oil-filled radiator space heater in very good condition</p>
            <p>Features:</p>
            <ul>
            <li>1500 Watts power</li>
	    <li>Three power settings</li>
	    <li>Built-in thermostat</li>
	    <li>Smooth rolling coaster wheels</li>
	    </ul>
        `,
        images: [
            "images/home/oilheater1.jpg",
	    "images/home/oilheater2.jpg",
	    "images/home/oilheater3.jpg"
	],
        sold: true
    },
    {
        id: 27,
        title: "Air Travel Pet Crate for Cat or Small Dog",
        price: "€30",
        description: `
            <p>This is a Petmate SkyKennel Ultra Crate suitable for Air Travel</p>
            <p>Features:</p>
            <ul>
            <li>Suitable for a cat or small dog</li>
	    <li>Very sturdy</li>
	    <li>Top is screwed on  No tools required</li>
            </ul>
        `,
        images: [
            "images/home/skykennel1.jpg",
	    "images/home/skykennel2.jpg",
	    "images/home/skykennel3.jpg",
	    "images/home/skykennel4.jpg",
	    "images/home/skykennel5.jpg"
	],
        sold: true
    },
    {
        id: 28,
        title: "Armchairs",
        price: "€40 each",
        description: `
            <p>Comfortable armchairs</p>
            <p>Features:</p>
            <ul>
            <li>Upholstered in sand colored fabric</li>
	    <li>Blond wood legs</li>
            </ul>
        `,
        images: [
            "images/furniture/armchair1.jpg",
	    "images/furniture/armchair2.jpg"
	],
        sold: false
    },
    {
        id: 29,
        title: "Custom Wood Slab Table",
        price: "€125",
        description: `
            <p>Splendid "one of a kind" table</p>
            <p>Features:</p>
            <ul>
            <li>Solid wood and wrought iron</li>
	        <li>Beautifully finished</li>
        <li>Measures 65cm x 60 cm x 36 cm</li>
            </ul>
        `,
        images: [
            "images/furniture/slabtable1.jpg",
            "images/furniture/slabtable2.jpg",
            "images/furniture/slabtable3.jpg",
	    "images/furniture/slabtable4.jpg"
	],
        sold: false
    },
    {
        id: 30,
        title: "Stool - Plant Stand",
        price: "€10",
        description: `
            <p>Black stool in good condition</p>
            <p>Features:</p>
            <ul>
        <li>Measures 48cm x 42 cm x 45 cm</li>
            </ul>
        `,
        images: [
            "images/furniture/stool1.jpg",
            "images/furniture/stool2.jpg",
	    "images/furniture/stool3.jpg"
	],
        sold: false
    },
    {
        id: 31,
        title: "Dining Chair",
        price: "€25 each",
        description: `
            <p>Dining chairs - two available</p>
            <p>Features:</p>
            <ul>
            <li>Light brown frame with beige fabric cover</li>
            <li>Comfortable padded seat</li>
            <li>Cover is removable & washable</li>
            <li>Sturdy solid wood frame</li>
            </ul>
        `,
        images: [
            "images/furniture/ikeachair1.jpg",
            "images/furniture/ikeachair2.jpg",
	    "images/furniture/ikeachair3.jpg"
	],
        sold: false
    },
    {
        id: 32,
        title: "White Dresser",
        price: "€50",
        description: `
            <p>This is a white dresser in good condition</p>
            <p>Features:</p>
            <ul>
            <li>Large drawers</li>
	        <li>Ideal for any bedroom</li>
	        <li>Measurements: 102cm x 45cm x 86cm</li>
            </ul>
        `,
        images: [
            "images/furniture/whitedresser1.jpg",
	        "images/furniture/whitedresser2.jpg",
	        "images/furniture/whitedresser3.jpg",
	        "images/furniture/whitedresser4.jpg",
	        "images/furniture/whitedresser5.jpg",
	        "images/furniture/whitedresser6.jpg"
	    ],
        sold: false
    },
    {
        id: 33,
        title: "Nightstands",
        price: "€30 each",
        description: `
            <p>Black nightstands with white drawers - 4 available</p>
            <p>Features:</p>
            <ul>
	        <li>Ideal for any bedroom</li>
	        <li>Measurements: 51cm x 40cm x 43cm</li>
            </ul>
        `,
        images: [
            "images/furniture/nightstand1.jpg",
	        "images/furniture/nightstand2.jpg",
	        "images/furniture/nightstand3.jpg"
	    ],
        sold: false
    },
    {
        id: 34,
        title: "TV credenza",
        price: "€45",
        description: `
            <p>White credenza ideal for TV</p>
            <p>Features:</p>
            <ul>
	        <li>Large drawers with frosted glass front</li>
	        <li>Convenient outlets at the rear for easy routing of cables</li>
            </ul>
        `,
        images: [
            "images/furniture/credenza1.jpg",
	        "images/furniture/credenza2.jpg"
	    ],
        sold: false
    },
    {
        id: 35,
        title: "Lamps",
        price: "€25 for the pair",
        description: `
            <p>Table lamps in good condition</p>
            <p>Features:</p>
            <ul>
	        <li>Great for nighstands, sofa tables, sideboards etc.</li>
	        <li>Measurements: 25 cm diameter shade 58cm high</li>
            </ul>
        `,
        images: [
            "images/home/tablelamp1.jpg"
	    ],
        sold: false
    },
    {
        id: 36,
        title: "Glass Lamps",
        price: "€20 for the pair",
        description: `
            <p>Small glass lamps in good condition</p>
            <p>Features:</p>
            <ul>
	        <li>Great for nighstands, sofa tables, sideboards etc.</li>
            <li>Frosted blue glass provides soft lighting</li>
	        <li>Measurements: 10cm x 10cm x 22cm</li>
            </ul>
        `,
        images: [
            "images/home/bluelamps1.jpg",
            "images/home/bluelamps2.jpg",
            "images/home/bluelamps3.jpg"
	    ],
        sold: false
    },
    {
        id: 37,
        title: "Patio Dining Set",
        price: "€200",
        description: `
            <p>Table and four chairs for exterior dining in very good condition.</p>
            <p>Features:</p>
            <ul>
	        <li>Stained wood and aluminium</li>
            <li>Comfortable chairs that recline</li>
	        <li>Table measurements: 150cm x 90cm x 74cm</li>
            </ul>
        `,
        images: [
            "images/garden/patiotable1.jpg",
            "images/garden/patiotable2.jpg",
            "images/garden/patiotable3.jpg",
            "images/garden/patiotable4.jpg",
            "images/garden/patiotable5.jpg" 
	    ],
        sold: false
    },
    {
        id: 38,
        title: "Patio Umbrella",
        price: "€150",
        description: `
            <p>Large tan patio umbrella with heavy duty stand in very good condition</p>
            <p>Features:</p>
            <ul>
	        <li>Square umbrella 280cm x 280 cm x 270cm</li>
            <li>Integrated solar-powered LED lighting built into the frame</li>
	        <li>Smooth crank makes it easy to raise</li>
            <li>Heavy duty stand with rope handles</li>
            </ul>
        `,
        images: [
            "images/garden/umbrella1.jpg",
            "images/garden/umbrella2.jpg",
            "images/garden/umbrella3.jpg",
            "images/garden/umbrella4.jpg",
            "images/garden/umbrella5.jpg",
            "images/garden/umbrella6.jpg",
            "images/garden/umbrella7.jpg",
            "images/garden/umbrella8.jpg",
            "images/garden/umbrella9.jpg",
            "images/garden/umbrella10.jpg"   
	    ],
        sold: false
    },
    {
        id: 39,
        title: "Wand Blender",
        price: "€20",
        description: `
            <p>Moulinex Wand Blender in good condition</p>
            <p>Features:</p>
            <ul>
            <li>1,000 Watts power</li>
	    <li>All accesories included</li>
            </ul>
        `,
        images: [
            "images/kitchen/wandblender1.jpg",
	    "images/kitchen/wandblender2.jpg"
	],
        sold: false
    },
    {
        id: 40,
        title: "Popcorn Machine",
        price: "€20",
        description: `
            <p>Liebfeld Popcorn Machine</p>
            <p>Features:</p>
            <ul>
            <li>Air popper - enjoy popcorn without the fat</li>
            </ul>
        `,
        images: [
            "images/kitchen/popcorn1.jpg",
	    "images/kitchen/popcorn2.jpg"
	],
        sold: false
    },
    {
        id: 41,
        title: "Espresso Cups",
        price: "€10",
        description: `
            <p>Set of four espresso cups with saucers</p>
            <p>Features:</p>
            <ul>
            <li>Each cup has its own beautiful design</li>
            </ul>
        `,
        images: [
            "images/kitchen/espresso1.jpg",
	        "images/kitchen/espresso2.jpg",
            "images/kitchen/espresso3.jpg",
            "images/kitchen/espresso4.jpg",
        "images/kitchen/espresso5.jpg"
	],
        sold: false
    },
    {
        id: 42,
        title: "Cake turntable and leveler",
        price: "€7",
        description: `
            <p>Cake turntable and leveler for cake decoration</p>
            <p>Features:</p>
            <ul>
            <li>28 cm turntable on a stand</li>
            <li>Wilton brand cake leveler</li>
            <li>Both items are in excellent condition</li>
            </ul>
        `,
        images: [
            "images/kitchen/cake1.jpg",
	        "images/kitchen/cake2.jpg",
            "images/kitchen/cake3.jpg",
            "images/kitchen/cake4.jpg",
	],
        sold: false
    },
    {
        id: 43,
        title: "Decorative Ceramic Plate",
        price: "€10",
        description: `
            <p>Beautiful ceramic hand-painted plate </p>
            <p>Features:</p>
            <ul>
            <li>44 cm diameter</li>
            <li>Hand painted</li>
            <li>Made in Mexico</li>
            </ul>
        `,
        images: [
            "images/kitchen/talavera1.jpg"
	],
        sold: false
    },
    {
        id: 44,
        title: "Decorative Pillows",
        price: "€50",
        description: `
            <p>Beautiful set of six decorative pillows </p>
            <p>Features:</p>
            <ul>
            <li>Two large 65cm x 75cm solid color, one side burgundy the other mustard</li>
            <li>Four medium sized 45cm x 45cm with sea life fabric, removable covers</li>
            </ul>
        `,
        images: [
            "images/home/starfishpillow1.jpg",
            "images/home/starfishpillow2.jpg",
            "images/home/starfishpillow3.jpg"
	],
        sold: false
    },
    {
        id: 45,
        title: "Christmas Pillows",
        price: "€15 for both",
        description: `
            <p>Beautiful set of two decorative pillows </p>
            <p>Features:</p>
            <ul>
            <li>Two medium sized 38cm x 38cm</li>
            <li>Covers in Christmas theme</li>
            </ul>
        `,
        images: [
            "images/home/christmaspillow1.jpg"
	],
        sold: false
    }
]