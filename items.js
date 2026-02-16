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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
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
        sold: false
    },
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
    {
        id: 19,
        title: "Rowenta Iron",
        price: "€30",
        description: `
            <p>This is a Rowenta Focus Excel DW5220 iron</p>
            <p>Features:</p>
            <ul>
                <li>2700 Watts power</li>
                <li>Excellent steam distribution</li>
                <li>Easy to fill</li>
                <li>Precision tip</li>
                <li>Anti-drip</li>
                <li>Made in Germany</li>
                <li>Includes original box and manual</li>
            </ul>
        `,
        images: [
            "images/home/rowenta1.jpg",
            "images/home/rowenta2.jpg",
            "images/home/rowenta3.jpg"
        ],
        sold: false
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
        sold: false
    },
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
    {
        id: 22,
        title: "LG 50-inch Television",
        price: "€150",
        description: `
            <p>This is an LG 50PA4500 Plasma Television with Stand</p>
            <p>Features:</p>
            <ul>
            <li>1024 x 768 HD resolution (720p)</li>
	    <li>HDMI and USB 2.0 Inputs</li>
	    <li>Dolby Digital decoderAll original accesories included</li>
	    <li>Includes heavy duty stand and wall mounting bracket</li>
            </ul>
        `,
        images: [
            "images/home/lgtv1.jpg",
	    "images/home/lgtv2.jpg",
	    "images/home/lgtv3.jpg"
	],
        sold: false
    }

]