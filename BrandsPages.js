import React from "react";
import { useParams } from "react-router-dom";
import "./BrandsPage.css";

// Importing images directly from the correct 'brandwear' folder
import jImage from '../brandwear/j..jpg'; // Make sure the path is correct
import sapphireImage from '../brandwear/sapphire.png'; // Correct the import path
import alkaramImage from '../brandwear/alkaram.png'; // Correct the import path
import khaddiImage from '../brandwear/Khaadi.jpg'; // Correct the import path


// Importing images directly from the correct 'electronics' folder
import appleImage from '../electronics/apple.png'; // Make sure the path is correct
import dawlanceImage from '../electronics/dawlance.jpg'; 
import pellImage from '../electronics/pel.png'; // Correct the import path
import samsungImage from '../electronics/Samsung.jpg'; // Correct the import path

import foodImage from '../foodpanda/food.png'; // Make sure the path is correct
import JohnImage from '../foodpanda/jonny.png'; 
import KababjeesImage from '../foodpanda/kababjees.png'; // Correct the import path
import KFCImage from '../foodpanda/kfc.png'; // Correct the import path
import MacdonaldImage from '../foodpanda/macdonald.png'; // Correct the import path



import AlfatahImage from '../groceryandcrockery/alfatah.png'; 
import CarrefourImage from '../groceryandcrockery/carrefour.png'; // Correct the import path
import EurostoreImage from '../groceryandcrockery/eurostore.png'; // Correct the import path
import ImtiazImage from '../groceryandcrockery/imtiaz.png'; // Correct the import path

const brandData = {
  clothes: [
    { name: "J.", image: jImage, link: "/dresses/j" },
    { name: "Sapphire", image: sapphireImage, link: "/dresses/sapphire" },
    { name: "Alkaram", image: alkaramImage, link: "/dresses/alkaram" },
    { name: "Khaddi", image: khaddiImage, link: "/dresses/khaddi" }, // Added Khaddi
  ],

  electronics: [
    { name: "Apple", image: appleImage, link: "/electronics/apple" },
    { name: "Dawlance", image: dawlanceImage, link: "/electronics/dawlance" },
    { name: "Samsung", image: samsungImage, link: "/electronics/samsung" },
    { name: "Pell", image: pellImage, link: "/electronics/pell" },
  ],

  foods: [
    { name: "Food", image: foodImage, link: "/foods/food" },
    { name: "Jonny", image: JohnImage, link: "/foods/Jonnys" },
    { name: "Kababjees", image: KababjeesImage, link: "/foods/Kababjees" },
    { name: "Kfc", image: KFCImage, link: "/foods/KFC" },
    { name: "Macdonald", image: MacdonaldImage, link:"/foods/Macdonald" },
  ],


  groceries: [
    { name: "Alfatah", image: AlfatahImage, link: "/groceryandcrockery/alfatah" },
    { name: "Carrefour", image:CarrefourImage, link: "/groceryandcrockery/carrefour" },
    { name: "Eurostore", image: EurostoreImage, link: "/groceryandcrockery/eurostore" },
    { name: "Imtiaz", image:ImtiazImage, link: "/groceryandcrockery/imtiaz" },
   
  ],
};

const BrandsPage = () => {
  const { category } = useParams(); // Get the category from the URL

  const brands = brandData[category] || [];

  return (
    <div className="brands-page">
      <h2 className="brands-heading">
        Explore {category.charAt(0).toUpperCase() + category.slice(1)} Brands
      </h2>
      <div className="brands-container">
        {brands.length > 0 ? (
          brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <img src={brand.image} alt={brand.name} className="brand-card-image" />
              <h3>{brand.name}</h3>
              <a href={brand.link} className="brand-card-btn">
                Visit {brand.name}
              </a>
            </div>
          ))
        ) : (
          <p>No brands available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default BrandsPage;

