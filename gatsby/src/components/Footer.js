import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className="center">&copy; Slick's Slices {new Date().getFullYear()}</p>
      <StaticImage
        className="lp"
        src="../laporte_pizza_logo.jpeg"
        alt="laporte"
        width={400}
      />
    </footer>
  );
}
