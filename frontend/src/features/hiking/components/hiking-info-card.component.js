import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

import {
  HikingCard,
  HikingCardCover,
  Info,
  Rating,
  Section,
  HikingTitle,
  HikingPageNumber,
  HikingAuthor,
} from "./hiking-info-styles";

const images = [
    "https://www.rei.com/dam/vagnini_181016_2024_hiking_beginners_hero_lg.jpg",
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2023/07/hiking-apps.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/woman-hiking-at-red-rock-canyon-during-sunset-with-royalty-free-image-1601478369.jpg",
    "https://www.tripsavvy.com/thmb/84XccJQk2WZAVS6uWR2rlnnIcQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/man-on-early-morning-hike-up-mountainside-1056063244-06433cd9244c4ca38ec43d2782062ba1.jpg",
    "https://banfflakelouise.bynder.com/m/72ad8a5534394e88/2000x1080_jpg-2021_LakeLouise_Hiking_ROAMCreative-19.jpg",
  ];

export const HikingInfoCard = ({ hiking = {} }) => {
  const ratingArray = Array.from(new Array(Math.floor(5)));
  let randomNumber = Math.floor(Math.random() * 4);
  return (
    <HikingCard elevation={5}>
      <View>
        <HikingCardCover source={{ uri: images[randomNumber] }} />
      </View>
      <Info>
        <HikingTitle varient="label">{hiking.name}</HikingTitle>
        <Rating>
          {ratingArray.map((_, i) => (
            <SvgXml key={i} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Section>
          <HikingAuthor varient="body">Description: {hiking.decription}</HikingAuthor>
          <HikingPageNumber varient="hint">
            Price: {hiking.price}
          </HikingPageNumber>
        </Section>
      </Info>
    </HikingCard>
  );
};