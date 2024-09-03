import React from "react";
import styled from "styled-components";

import Text from "../global/Text";
import Arrow from "../global/Arrow";
import Image from "../global/Image";

import kiosk from "../../assets/projects/fallen-kiosk.svg";

const Rect = styled.div`
  padding: 10px;
  border: 2px solid #ffd543;
  background: #fff;
  width: fit-content;
  height: fit-content;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Negative = styled.div`
  margin-top: -50px;
  width: 75vw;
  max-width: 370px;
  z-index: -1;
`;

const Fallen = () => {
  return (
    <div className="flex flex-row">
      <div className="pl-10">
        <div className="pl-10">
          <Rect>
            <Text color={"#000"} mult={0.5}>
              <p>Interactive</p> Screen
            </Text>
          </Rect>
          <div className="pl-12">
            <Arrow length={100} angle={45} color="yellow" />
          </div>
        </div>
        <Negative>
          <Image source={kiosk} padding={"0px 0px 0px 50px"} />
        </Negative>
        <div>
          <Rect>
            <Text color={"#000"} mult={0.5}>
              <p>Pamphlets</p>
            </Text>
          </Rect>
          <Arrow length={100} angle={280} color="yellow" />
        </div>
      </div>
      <Text mult={0.5} padding="75px 100px 0px 50px" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Commodo elit at
        imperdiet dui accumsan sit amet nulla. Sit amet tellus cras adipiscing
        enim eu. Vitae tortor condimentum lacinia quis vel eros donec ac odio.
        Consequat semper viverra nam libero justo laoreet sit. Elementum
        curabitur vitae nunc sed velit dignissim sodales ut. Maecenas volutpat
        blandit aliquam etiam erat. Quis ipsum suspendisse ultrices gravida
        dictum fusce ut placerat. Urna molestie at elementum eu facilisis sed
        odio morbi. Vulputate odio ut enim blandit volutpat maecenas volutpat.
        Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
        Lorem ipsum dolor sit amet. Lectus mauris ultrices eros in cursus turpis
        massa tincidunt dui. Est lorem ipsum dolor sit amet consectetur
        adipiscing elit pellentesque. Habitasse platea dictumst vestibulum
        rhoncus est pellentesque elit ullamcorper dignissim. Iaculis at erat
        pellentesque adipiscing commodo elit. Enim nunc faucibus a pellentesque
        sit amet porttitor eget. Faucibus turpis in eu mi. A erat nam at lectus.
      </Text>
    </div>
  );
};

export default Fallen;
