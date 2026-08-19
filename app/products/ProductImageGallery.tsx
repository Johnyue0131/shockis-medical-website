"use client";

import { useState } from "react";

const listingImages = [
  ["/images/products/amazon-listing-gallery/01_main_white_background.jpg", "SHOCKIS ST100 radial shockwave therapy system with handpiece and seven treatment heads"],
  ["/images/products/amazon-listing-gallery/02_portable_design_stable_output.jpg", "SHOCKIS ST100 portable design and operating specifications"],
  ["/images/products/amazon-listing-gallery/03_seven_treatment_heads.jpg", "Seven SHOCKIS ST100 interchangeable treatment heads"],
  ["/images/products/amazon-listing-gallery/04_aluminum_handpiece.jpg", "SHOCKIS ST100 aluminum handpiece construction"],
  ["/images/products/amazon-listing-gallery/05_dual_control.jpg", "SHOCKIS ST100 touchscreen and physical control interface"],
  ["/images/products/amazon-listing-gallery/06_lab_test_output.jpg", "SHOCKIS ST100 output testing presentation"],
  ["/images/products/amazon-listing-gallery/07_buyers_choose_st100.jpg", "SHOCKIS ST100 product overview from the Amazon listing"],
];

export function ProductImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSrc, selectedAlt] = listingImages[selectedIndex];

  return (
    <div className="st100-product-image st100-product-gallery">
      <div className="st100-gallery-thumbnails" aria-label="Amazon product image gallery">
        {listingImages.map(([src, alt], index) => (
          <button
            className={index === selectedIndex ? "is-active" : ""}
            type="button"
            key={src}
            onClick={() => setSelectedIndex(index)}
            aria-label={`View product image ${index + 1} of ${listingImages.length}`}
            aria-pressed={index === selectedIndex}
          >
            <img src={src} alt={alt} />
          </button>
        ))}
      </div>

      <div className="st100-gallery-main">
        <img key={selectedSrc} src={selectedSrc} alt={selectedAlt} />
      </div>

      <style>{`
        .st100-product-image.st100-product-gallery{display:grid;grid-template-columns:68px minmax(0,1fr);gap:18px;align-items:stretch;place-items:stretch}.st100-gallery-thumbnails{display:flex;flex-direction:column;gap:8px;max-height:590px;overflow-y:auto;padding-right:3px;scrollbar-width:thin;scrollbar-color:#b9c9d6 transparent}.st100-gallery-thumbnails button{width:62px;height:62px;flex:0 0 62px;padding:3px;border:1px solid #d6e0e8;background:#fff;cursor:pointer}.st100-gallery-thumbnails button:hover,.st100-gallery-thumbnails button.is-active{border-color:#176da5}.st100-product-gallery .st100-gallery-thumbnails button img{display:block;width:100%;height:100%;object-fit:contain}.st100-gallery-main{min-width:0;display:grid;place-items:center;overflow:hidden;background:#fff}.st100-product-gallery .st100-gallery-main img{display:block;width:100%;height:100%;object-fit:contain;animation:st100-gallery-fade .18s ease-out}@keyframes st100-gallery-fade{from{opacity:.72}to{opacity:1}}
        @media(max-width:820px){.st100-product-image.st100-product-gallery{grid-template-columns:1fr;grid-template-rows:minmax(0,1fr) auto;gap:13px}.st100-gallery-main{grid-row:1}.st100-gallery-thumbnails{grid-row:2;flex-direction:row;max-height:none;overflow-x:auto;overflow-y:hidden;padding:0 0 4px}.st100-gallery-thumbnails button{width:58px;height:58px;flex-basis:58px}}
      `}</style>
    </div>
  );
}
