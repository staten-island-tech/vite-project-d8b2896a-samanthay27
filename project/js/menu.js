const fooditems = [
    {
        name: "Almond Croissant",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadbd_Almond%20Croissant.webp',
        price: "$4.75",
        calories: "610 Calories",
        tag: "pastry"
    },
    {
        name: "Apple Jam Mont Blanc Pastry",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae27_Apple%20Jam%20Mont%20Blanc%20Pastry.jpg',
        price: "$4.95",
        calories: "420 Calories",
        tag: "pastry"
    },
    {
        name: "Blueberry Cream Cheese Bread",
        img: 'https://assets-global.website-files.com/6419b668828857182d1e7359/6450724cf44cacc419f4ee3b_Blueberry%20Cream%20Cheese%20Bread.webp',
        price: "$4.75",
        calories: "200 Calories",
        tag: "bread"
    },
    {
        name: "Blueberry Yogurt Cream Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deade7_Screenshot%202023-05-15%20at%2011.52.02%20AM.png',
        price: "$58.95",
        calories: "280 Calories",
        tag: "cake"
    },
    {
        name: "Blueberry Yogurt Piece Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf6_Copy%20of%20Blueberry%20Yogurt%20Piece%20Cake.png',
        price: "$10.95",
        calories: "360 Calories",
        tag: "cake"
    },
    {
        name: "Bread & Butter Coffee Beans",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/655ba9b0ad5bcd592d9f1c53_CoffeeBean_Bread_Butter-p-500.png',
        price: "$7.95",
        calories: "5 Calories",
        tag: "coffee"
    },
    {
        name: "Buttercream Bread",
        img: 'https://assets-global.website-files.com/6419b668828857182d1e7359/645068bb1560011534b8f210_Butter%20Cream%20Bread.webp',
        price: "$8.00",
        calories: "350 Calories",
        tag: "bread"
    },
    {
        name: "Cafe Americano",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae05_Copy%20of%20Cafe%20Americano.jpg',
        price: "$3.25",
        calories: "5 Calories",
        tag: "coffee"
    },
    {
        name: "Cafe Mocha",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae12_Copy%2520of%2520Cafe%2520Mocha-p-500.png',
        price: "$4.85 Calories",
        calories: "300 Calories",
        tag: "coffee"
    },
    {
        name: "Cafe Latte",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae11_Copy%20of%20Cafe%20Latte.png',
        price: "$4.25",
        calories: "180 Calories",
        tag: "coffee"
    },
    {
        name: "Cappuccino",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae10_Cappuccino.png',
        price: "$4.25",
        calories: "170 Calories",
        tag: "coffee"
    },
    {
        name: "Caramel Apple Pie",
        img: 'https://assets-global.website-files.com/6419b668828857182d1e7359/645073a064613b9f92685349_Caremel%20Apple%20Pie.webp',
        price: "$4.50",
        calories: "250 Calories",
        tag: "pastry"
    },
    {
        name: "Caramel Frappe",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae1a_Copy%20of%20Caramel%20Frappe.png',
        price: "$4.45",
        calories: "430 Calories",
        tag: "blended"
    },
    {
        name: "Caramel Macchiato",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae0f_Caramel%20Macchiato.png',
        price: "$5.35",
        calories: "300 Calories",
        tag: "coffee"
    },
    {
        name: "Chamomile Tea",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae17_Chamomile%2520Tea-p-500.png',
        price: "$1.50 Calories",
        calories: "0 Calories",
        tag: "tea"
    },
    {
        name: "Cheesecake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf0_Screenshot%202023-05-15%20at%2012.26.57%20PM.png',
        price: "$13.50",
        calories: "330 Calories",
        tag: "cake"
    },
    {
        name: "Choco Cloud",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deade0_Screenshot%202023-05-02%20at%209.25.22%20AM.webp',
        price: "$57.00",
        calories: "340 Calories",
        tag: "cake"
    },
    {
        name: "Chocolate Cloud Piece Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deaddf_Copy%20of%20Chocolate%20Cloud%20Piece%20Cake.webp',
        price: "$10.95",
        calories: "340 Calories",
        tag: "cake"
    },
    {
        name: "Chocolate Croissant",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadb4_Chocolate%20Croissant.webp"',
        price: "$4.75",
        calories: "480 Calories",
        tag: "pastry"
    },
    {
        name: "Classic Mocha Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadeb_Screenshot%202023-05-15%20at%2012.15.49%20PM.png',
        price: "$62.95",
        calories: "270 Calories",
        tag: "cake"
    },
    {
        name: "Cloud Cake #2",
        img: 'https://assets-global.website-files.com/64190cfdcda0164ec3252946/646acb5b492ea69c3498b2aa_Cloud-Cake-2.webp',
        price: "$49.95",
        calories: "270 Calories",
        tag: "cake"
    },
    {
        name: "Cloud Cake #3",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deade9_Screenshot%202023-05-15%20at%2012.12.18%20PM.png',
        price: "$49.95",
        calories: "290 Calories",
        tag: "cake"
    },
    {
        name: "Cloud Piece Cake",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Y2ktlk66eNWV-ig9-jub4RdqQxdD7sQIwCn1saIMonIRUMwql5J1UonOcj4PrG6plkY&usqp=CAU',
        price: "$9.95",
        calories: "340 Calories",
        tag: "cake"
    },
    {
        name: "Cold Brew Tonic",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dqx8GKcy7YJoTWl30_8TQvhum7G6HWbYXw&usqp=CAU',
        price: "$4.95",
        calories: "100 Calories",
        tag: "coffee"
    },
    {
        name: "Confetti Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadec_Screenshot%202023-05-15%20at%2012.19.24%20PM.png',
        price: "$49.95",
        calories: "450 Calories",
        tag: "cake"
    },
    {
        name: "Croissant",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadb6_Croissant-p-500.webp',
        price: "$3.95",
        calories: "280 Calories",
        tag: "pastry"
    },
    {
        name: "Croque Monsieur",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3dead4b_Croque%20Monsieur.webp',
        price: "$5.75",
        calories: "680 Calories",
        tag: "bread"
    },
    {
        name: "Croquette",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deaddd_Croquette.webp',
        price: "$3.95",
        calories: "260 Calories",
        tag: "pastry"
    },
    {
        name: "Custard Bun",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3dead37_Custard%20Bun.webp',
        price: "$4.75",
        calories: "190 Calories",
        tag: "bread"
    },
    {
        name: "Decaf Coffee Beans",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/655ba9d91b3358cc76bd846d_CoffeeBean_Decaf-p-500.png',
        price: "$7.95",
        calories: "5 Calories",
        tag: "coffee"
    },
    {
        name: "Everyday Coffee Beans",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/655ba9c9940bb4cd03adf7aa_CoffeeBean_Everyday-p-500.png',
        price: "$7.95",
        calories: "5 Calories",
        tag: "coffee"
    },
    {
        name: "Fruit Pastry",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae24_Fruit%20Pastry.jpg',
        price: "$5.50",
        calories: "410 Calories",
        tag: "pastry"
    },
    {
        name: "Garlic & Cheese Croissant",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae23_Garlic%2520%2526%2520Cheese%2520Croissant-p-500.jpg',
        price: "$5.75",
        calories: "420 Calories",
        tag: "pastry"
    },
    {
        name: "Green Tea Cloud Cake",
        img: 'https://cdn.discordapp.com/attachments/1073718327375048775/1172696359757959218/649249d29a20bd6bc3deade5_Green20Tea20Cloud20Cake.png?ex=65614197&is=654ecc97&hm=752f2925699fb634a241cb8b1a3a5f5d590777a6e0a24acbae4a72f45c1dae63&',
        price: "$57.00",
        calories: "230 Calories",
        tag: "cake"
    },
    {
        name: "Heart Chocolate Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadee_Screenshot%202023-05-15%20at%2012.23.43%20PM.png',
        price: "$56.95",
        calories: "300 Calories",
        tag: "cake"
    },
    {
        name: "Honey Cheese Mochi Pancake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadde_Honey%20Cheese%20Mochi%20Pancake.webp',
        price: "$5.75",
        calories: "400 Calories",
        tag: "bread"
    },
    {
        name: "Honey Lavender Matcha Latte",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae16_64639ef13cf7845a5ef0b61b_Copy%20of%20Honey%20Lavender%20Matcha%20Latte.png" alt="honeylavendermatchalatte',
        price: "$4.95",
        calories: "270 Calories",
        tag: "tea"
    },
    {
        name: "Hot Green Tea",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae2a_Green%2520Tea-p-1080.png',
        price: "$1.75",
        calories: "60 Calories",
        tag: "tea"
    },
    {
        name: "Iced Americano",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae06_Copy%20of%20Iced%20Americano.png',
        price: "$3.25",
        calories: "5 Calories",
        tag: "coffee"
    },
    {
        name: "Iced Black Tea",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac45/649249d29a20bd6bc3deaea4_Iced%20Black%20Tea.webp',
        price: "$1.75",
        calories: "60 Calories",
        tag: "tea"
    }, 
    {
        name: "Iced Cafe Latte",
        img: 'https://assets-global.website-files.com/64190cfdcda0164ec3252946/646b73850288e33b35b0ae05_Copy%20of%20Iced%20Cafe%20Latte-2.webp',
        price: "$3.95",
        calories: "170 Calories",
        tag: "coffee"
    }, 
    {
        name: "Iced Cafe Mocha",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae14_Copy%20of%20Iced%20Cafe%20Mocha.png',
        price: "$3.95",
        calories: "310 Calories",
        tag: "coffee"
    }, 
    {
        name: "Iced Caramel Macchiato",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae0f_Caramel%20Macchiato.png" alt="icedcaramelmacchiato',
        price: "$3.95",
        calories: "290 Calories",
        tag: "coffee"
    }, 
    {
        name: "Iced Green Tea",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae2d_Iced%2520Green%2520Tea-p-1080.png',
        price: "$1.95",
        calories: "60 Calories",
        tag: "tea"
    }, 
    {
        name: "Iced Lavender Latte",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae0e_Lavender%20Latte.png',
        price: "$3.95",
        calories: "240 Calories",
        tag: "coffee"
    }, 
    {
        name: "Iced Matcha Latte",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aJ1DWBvqPll2bc6TBYL64oKbkGiF8oPutbr6nYMWQMdOSnbaFgnNpp5zT3slPXGmHtw&usqp=CAU',
        price: "$3.95",
        calories: "210 Calories",
        tag: "tea"
    }, 
    {
        name: "Iced Ube Latte",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae07_iced-ube-latte.png',
        price: "$4.25",
        calories: "230 Calories",
        tag: "tea"
    },
    {
        name: "Iced Vanilla Latte",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae0c_Iced%2520Vanilla%2520Latte-p-500.png',
        price: "$3.95",
        calories: "230 Calories",
        tag: "coffee"
    }, 
    {
        name: "Jungle Party",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae02_Screenshot%202023-05-15%20at%202.28.40%20PM.png',
        price: "$62.95",
        calories: "250 Calories",
        tag: "cake"
    }, 
    {
        name: "Kimchi Croquette",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deaddc_Kimchi%20Croquette.webp',
        price: "$4.75",
        calories: "300 Calories",
        tag: "pastry"
    }, 
    {
        name: "Lake Awassa",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/655ba9e9940bb4cd03ae09b1_CoffeeBean_LakeAwassa-p-500.png',
        price: "$7.95",
        calories: "5 Calories",
        tag: "coffee"
    },
    {
        name: "Lavender Latte",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae0e_Lavender%20Latte.png',
        price: "$3.95",
        calories: "270 Calories",
        tag: "coffee"
    }, 
    {
        name: "Mango Cloud #2",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deade2_Mango%20Cloud%202.webp',
        price: "$59.00",
        calories: "290 Calories",
        tag: "cake"
    }, 
    {
        name: "Mango Cloud #3",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deade3_Mango%20Cloud%203.webp',
        price: "$59.00",
        calories: "290 Calories",
        tag: "cake"
    }, 
    {
        name: "Mango Smoothie",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJPJ5rOiwgc5YVqaNcSgVk_Y2a3hpNI2P7gaXUoHgu4ZZxTXL6NnGbVXe_9IKQ9mjmVI&usqp=CAU',
        price: "$6.95",
        calories: "250 Calories",
        tag: "blended"
    }, 
    {
        name: "Matcha Frappe",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae1b_Copy%20of%20Matcha%20Frappe.png',
        price: "$3.35",
        calories: "480 Calories",
        tag: "blended"
    }, 
    {
        name: "Matcha Latte",
        img: 'https://assets-global.website-files.com/6419b668828857182d1e7359/64639f3e4f3b525d461b0e24_Copy%20of%20Matcha%20Latte.png',
        price: "$3.35",
        calories: "220 Calories",
        tag: "tea"
    }, 
    {
        name: "Milk Cream Bread",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3dead32_Milk%20Cream%20Bread%20(1).webp',
        price: "$4.40",
        calories: "180 calories",
        tag: "bread"
    }, 
    {
        name: "Mocha Cloud",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deade1_Screenshot%25202023-05-02%2520at%25209.35.30%2520AM-p-500.webp',
        price: "$59.00",
        calories: "310 Calories",
        tag: "cake"
    }, 
    {
        name: "Mocha Frappe",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTwatoBAxj7Fx0oeO0VnHVoGPcfMRLQw14vnSO2nv2dU5MwPOSD_XE-LMHB8JPv03JX8&usqp=CAU',
        price: "$3.35",
        calories: "330 Calories",
        tag: "blended"
    }, 
    {
        name: "Multi-Grain Bread",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3dead4f_Multi-Grain%20Pan%20Bread.webp',
        price: "$9.95",
        calories: "290 Calories",
        tag: "bread"
    }, 
    {
        name: "Orange Cream Piece",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprrfJEC4wfDMdNsorSl7gwtG7CqPSTn5txb0bknrRbkqE2FNB7mgDBJUeX7CkdMmr5aQ&usqp=CAU',
        price: "$10.95",
        calories: "260 Calories",
        tag: "cake"
    }, 
    {
        name: "Pain Au Chocolat",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae22_Pain%20Au%20Chocolat.jpg',
        price: "$4.50",
        calories: "260 Calories",
        tag: "pastry"
    }, 
    {
        name: "Party Bear",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae03_Screenshot%202023-05-15%20at%202.30.45%20PM.png',
        price: "$49.95",
        calories: "230 Calories",
        tag: "cake"
    }, 
    {
        name: "Peach Cream Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deade4_Peach%20Cream%20Cake.webp',
        price: "$45.00",
        calories: "260 Calories",
        tag: "cake"
    }, 
    {
        name: "Peach Cream Piece",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQkClcKcTtf9zcV8q7plgIjVChOYJ0pJqOg&usqp=CAU',
        price: "$10.95",
        calories: "260 Calories",
        tag: "cake"
    }, 
    {
        name: "Piggy Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae04_Screenshot%202023-05-15%20at%202.33.25%20PM.png',
        price: "$49.95",
        calories: "440 Calories",
        tag: "cake"
    }, 
    {
        name: "Potato Cheese Bread",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae21_Potato%20Cheese%20Bread.jpg',
        price: "$4.50",
        calories: "410 Calories",
        tag: "bread"
    }, 
    {
        name: "Purple Sweet Potato Loaf",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3dead19_Purple%2520Sweet%2520Potato%2520Loaf-p-500.webp',
        price: "$9.95",
        calories: "260 Calories",
        tag: "bread"
    },
    {
        name: "Raisin Bread",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3dead51_Raisin%20Bread.webp',
        price: "$9.95",
        calories: "280 Calories",
        tag: "bread"
    }, 
    {
        name: "Red Bean Bread",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3dead34_Redbean%20Bread.webp',
        price: "$2.25",
        calories: "240 Calories",
        tag: "bread"
    }, 
    {
        name: "Red Bean Donut",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadd9_Redbean%20Donut.webp',
        price: "$4.50",
        calories: "350 Calories",
        tag: "pastry"
    }, 
    {
        name: "Red Velvet Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deaded_Screenshot%202023-05-15%20at%2012.22.11%20PM.png',
        price: "$49.95",
        calories: "440 Calories",
        tag: "cake"
    }, 
    {
        name: "Sesame Donut",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae20_Sesame%20Donut.jpg',
        price: "$4.50",
        calories: "250 Calories",
        tag: "pastry"
    }, 
    {
        name: "Soboro Bread",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3dead4a_Soboro.webp',
        price: "$4.50",
        calories: "260 Calories",
        tag: "bread"
    }, 
    {
        name: "Spinach Feta Danish",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadae_Spinach%2520Feta%2520Danish-p-500.webp',
        price: "$4.95",
        calories: "320 Calories",
        tag: "pastry"
    }, 
    {
        name: "Strawberry Cloud Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deade6_Strawberry%20Cloud%20Cake.webp',
        price: "$57.00",
        calories: "270 Calories",
        tag: "cake"
    }, 
    {
        name: "Strawberry Croissant",
        img: 'https://assets-global.website-files.com/64190cfdcda0164ec3252946/64512649cf3b712b30084491_Strawberry%20Croissant%20(1).png',
        price: "$5.75",
        calories: "300 Calories",
        tag: "pastry"
    }, 
    {
        name: "Strawberry Smoothie",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae1e_Copy%20of%20Strawberry%20Smoothie.png',
        price: "$6.95",
        calories: "230 Calories",
        tag: "blended"
    }, 
    {
        name: "Strawberry Sweet",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadea_Screenshot%202023-05-15%20at%2012.14.16%20PM.png',
        price: "$56.95",
        calories: "480 Calories",
        tag: "cake"
    }, 
    {
        name: "Sweet Frank Roll",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3dead4e_Sweet%20Frank%20Roll.webp',
        price: "$5.50",
        calories: "300 Calories",
        tag: "bread"
    }, 
    {
        name: "Sweet Potato Mousse Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf2_Screenshot%202023-05-15%20at%2012.30.52%20PM.png',
        price: "$9.95",
        calories: "280 Calories",
        tag: "cake"
    }, 
    {
        name: "Sweet Rice Donut",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deaddb_Sweet%20Rice%20Donut.webp',
        price: "$4.50",
        calories: "180 Calories",
        tag: "pastry"
    }, 
    {
        name: "Taro Cream Bread",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMnzi50nXjSozqlhur113cRPoxmS9DxDfNYg&usqp=CAU',
        price: "$6.50",
        calories: "550 Calories",
        tag: "bread"
    }, 
    {
        name: "Tiramisu",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf1_Screenshot%202023-05-15%20at%2012.29.13%20PM.png',
        price: "$56.95",
        calories: "180 Calories",
        tag: "cake"
    }, 
    {
        name: "Triple Berry Cloud",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae28_Screenshot%202023-05-17%20at%203.52.39%20PM.png',
        price: "$49.95",
        calories: "250 Calories",
        tag: "cake"
    },
    {
        name: "Triple Chocolate Mousse Cake",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadef_Screenshot%202023-05-15%20at%2012.25.34%20PM.png',
        price: "$49.95",
        calories: "330 Calories",
        tag: "cake"
    }, 
    {
        name: "Ube Latte",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae09_Ube%2520Latte-p-1080.png',
        price: "$4.75",
        calories: "240 Calories",
        tag: "tea"
    }, 
    {
        name: "Vanilla Chocolate Heart Mousse",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadf3_Screenshot%202023-05-15%20at%2012.33.43%20PM.png',
        price: "$56.95",
        calories: "250 Calories",
        tag: "cake"
    }, 
    {
        name: "Vanilla Latte",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deae0d_Latte.png',
        price: "$4.85",
        calories: "210 Calories",
        tag: "coffee"
    }, 
    {
        name: "Whole Milk Loaf",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3dead35_Whole%2520Milk%2520Loaf-p-500.webp',
        price: "$9.95",
        calories: "270 Calories",
        tag: "bread"
    }, 
    {
        name: "Yuzu Pie",
        img: 'https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deadb5_Yuzu%20Pie.webp',
        price: "$4.50",
        calories: "420 Calories",
        tag: "pastry"
    },    
 ];
 export {fooditems}
 //sends the information/cards to somewhere with something with export{menu} in the code
 
 
 