// Array of all available images from natural-images directory
const availableImages = [
  'YLN Men\'s 55+.jpg',
  'XXXL Penis Enlargement Oil.jpg',
  'XXXL Penis Enlargement Oil Description.jpg',
  'Womb Tea.jpg',
  'Wins Town Skin Whitening.jpg',
  'Whitening Skin.jpg',
  'Well Bet X Berberine.jpg',
  'Vitamin Pills.jpg',
  'Vitamin C+ Serum.jpg',
  'Vitamin C.jpg',
  'Vitamin C Under Arm.jpg',
  'Vitamin C Under Arm Description.jpg',
  'Vitamin C Serum.jpg',
  'Vitamin C Serum Description.jpg',
  'Vitamin C Serum 2.jpg',
  'Vitamin C Facial Serum.jpg',
  'Vitamin C Brightening Serum Description.jpg',
  'Vichy Mineral 89.jpg',
  'Vichy Mineral 89 Description.jpg',
  'Vaseline Gluta -Hlyla Deruy Radiance.jpg',
  'Vaseline Daily Brightening.jpg',
  'Vaseline Daily Brightening Description.jpg',
  'Vani Cream Moisturing Cream.jpg',
  'Ultra Whitening Skin Glutathone Liposomal.jpg',
  'Turmeric Curcumin.jpg',
  'Tummeric Gummies.jpg',
  'Tumeric Toner.jpg',
  'Tumeric Toner Description.jpg',
  'Tumeric Oil Description.jpg',
  'Tumeric Oil Description (2).jpg',
  'Tumeric Curricum.jpg',
  'Tumeric Curcumin.jpg',
  'Tumeric Bioperine Garlic Ginger.jpg',
  'Thyroid Support.jpg',
  'Thyroid Support Description.jpg',
  'Thyroid Support (2).jpg',
  'Three Ships Salicylic Acid Foaming Cleanser.jpg',
  'Testosterone Booster.jpg',
  'Testosterone Booster Description.jpg',
  'Testosterone Booster Description 3.jpg',
  'Testosterone Booster Description 2.jpg',
  'Testerone Booster.jpg',
  'Supre Collagen Glutathione + Vitamin C.jpg',
  'Supre Collagen Description.jpg',
  'Supre Collagen Description 3.jpg',
  'Super Vitamin C Serum.jpg',
  'Super Vitamin C Serum Description.jpg',
  'Super Vitamin C Serum Description 2.jpg',
  'Super Vitamin C Serum Descriptio n.jpg',
  'Stubbon Acne Tenance Description.jpg',
  'St.jpg',
  'Sproos Marine Collagen.jpg',
  'Slim Green Coffee.jpg',
  'Skin Whitening.jpg',
  'Skin Whitening Gummies.jpg',
  'Skin Whitening Gummies Description.jpg',
  'Skin Whitening Description.jpg',
  'Skin Whitening 3.jpg',
  'Skin Cleanse.jpg',
  'Sever Cracked Heel Repair.jpg',
  'Sea Moss.jpg',
  'Schwartz Collagen Peptides Bio +.jpg',
  'Salicylic Acid Agne Cream.jpg',
  'Salicylic Acid Agne Cream Description.jpg',
  'Sadoer Enlarging Breast Essence.jpg',
  'Sadoer Enlarging Breast Essence Description image.jpg',
  'Sadoer Collagen.jpg',
  'Sadoer Collagen Face Serum.jpg',
  'Retinol Collagen.jpg',
  'Retinol Collagen Description.jpg',
  'Retinol Collagen Description 2.jpg',
  'Resveratrol 700mg.jpg',
  'Rejuvenating Serum.jpg',
  'Purefully Benfotiamine.jpg',
  'Purefully Benfotiamine Description 2.jpg',
  'Pure Marine Collagen.jpg',
  'Pure Marine Collagen Description.jpg',
  'Pure Charm Retinol Collagen Description.jpg',
  'Pure And Charm Retinol.jpg',
  'Pure And Charm Retinol Collagen Description.jpg',
  'Promise Vitamin C Description.jpg',
  'Promise Vitamin C Description 3.jpg',
  'Piping Rock Blood Pressure Syrup.jpg',
  'Peptide Tanning Oil.jpg',
  'Peptide Tanning Oil (2).jpg',
  'PCA Skin Rejuvenating Serum.jpg',
  'Ovilz 24K Sold Serum.jpg',
  'Organika Enhanced Colagen.jpg',
  'Organika Collagen Type 1,2,3.jpg',
  'OEM-ODM Collagen +c.jpg',
  'OEM Skin Whitening And Brightening Collagen +C.jpg',
  'Neutrogena Stubborn Acne Tenance.jpg',
  'Neutrogena Products description image.jpg',
  'Neutrogena pdts.jpg',
  'Nature\'s Bounty.jpg',
  'Naka Ultra Collagen.jpg',
  'Naka Platinum Ultra Collagen.jpg',
  'Multi Collagene Corps Entier.jpg',
  'Mooym Scar Removal Description.jpg',
  'Mooyam Strectch Mark Removal Oil.jpg'
];

// Generate 202 products
export const naturalEssenceProducts = Array.from({ length: 202 }, (_, index) => {
  const id = (index + 1).toString();
  const imageIndex = index % availableImages.length;
  const image = `/images/natural-images/${availableImages[imageIndex]}`;
  
  // Use original names for first 20 products, then generic names
  const originalNames = [
    'Mouthwash', 'Shower Gel', 'Face Serum', 'Body Lotion', 'Face Cleanser',
    'Face Scrub', 'Natural Sea Salt', 'Acne Treatment', 'Body Scrub', 'Lightening Soap',
    'Shea Butter', 'Anti-Wrinkle Cream', 'Anti-Aging Serum', 'Turmeric Soap', 'Slimming Tea',
    'Moisturizer', 'Facial Cleanser', 'Body Oil', 'Eye Cream', 'Hand Cream'
  ];
  
  const originalDescriptions = [
    'Fresh breath and oral hygiene solution',
    'Refreshing and moisturizing shower gel',
    'Advanced anti-aging serum',
    'Hydrating body moisturizer',
    'Gentle daily facial cleanser',
    'Exfoliating facial scrub',
    'Pure sea salt for bath',
    'Effective acne treatment gel',
    'Exfoliating body scrub',
    'Skin lightening soap',
    'Pure organic shea butter',
    'Anti-wrinkle collagen cream',
    'Advanced anti-aging collagen serum',
    'Natural turmeric soap',
    'Natural slimming herbal tea',
    'Daily facial moisturizer',
    'Deep cleansing facial wash',
    'Nourishing body oil',
    'Rejuvenating eye cream',
    'Moisturizing hand cream'
  ];
  
  const originalCategories = [
    'Oral Care', 'Body Care', 'Face Care', 'Body Care', 'Face Care',
    'Face Care', 'Bath & Body', 'Face Care', 'Body Care', 'Bath & Body',
    'Body Care', 'Face Care', 'Face Care', 'Bath & Body', 'Wellness',
    'Face Care', 'Face Care', 'Body Care', 'Face Care', 'Body Care'
  ];
  
  const originalPrices = [
    12.99, 15.99, 29.99, 19.99, 24.99, 22.99, 16.99, 27.99, 23.99, 14.99,
    18.99, 34.99, 39.99, 13.99, 21.99, 26.99, 25.99, 28.99, 32.99, 17.99
  ];
  
  const name = index < 20 ? originalNames[index] : `Pure Essence Natural Product ${id}`;
  const description = index < 20 ? originalDescriptions[index] : 'Pure Essence natural product for healthy skin and body.';
  const category = index < 20 ? originalCategories[index] : 'General';
  const price = index < 20 ? originalPrices[index] : (19.99 + (index % 20) * 2);
  
  return {
    id,
    name,
    price: Math.round(price * 100) / 100,
    image,
    category,
    description
  };
});