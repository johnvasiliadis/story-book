import React from "react";
import { BackgroundImage, Heading, Icon, Box, Text } from "pcln-design-system";
import HeaderText from "../../molecules/HeaderText"


const Header = () => {
  return (
    <div>
      {/* <BackgroundImage image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1024&q=20"> */}
      <BackgroundImage image="https://www.grekomania.ru/images/places/macedonia/kastoria/6372_Lake-Orestiada.jpg">
      {/* <BackgroundImage image="http://investingreece.ru/wp-content/uploads/2013/11/image-Kastoria-panoramic.jpg"> */}
        <HeaderText />
      </BackgroundImage>
    </div>
  );
};

export default Header;
