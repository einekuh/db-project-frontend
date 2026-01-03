import { Box, Card, Heading, Image, Text } from "@chakra-ui/react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import ferrariF40 from "../assets/ferrariF40.png";
import ferrariF402 from "../assets/ferrariF402.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarCard = () => {
  const [isLiked, setLiked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/cars`);
  };

  return (
    <Card.Root
      height="100%"
      width="90%"
      overflow="hidden"
      onClick={() => handleClick()}
    >
      <Card.Header p={0} h="160px">
        <Box display="flex" h="100%">
          <Image src={ferrariF40} w="50%" h="100%" objectFit="cover" />
          <Image src={ferrariF402} w="50%" h="100%" objectFit="cover" />
        </Box>
      </Card.Header>

      <Card.Body>
        {" "}
        <Heading>Ferrari F40</Heading>
        <Text>
          The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sports
          car[12] engineered by Nicola Materazzi with styling by Pininfarina.
        </Text>
      </Card.Body>

      <Card.Footer>
        <Box
          marginX={1}
          _hover={{
            transform: "scale(1.1)",
            transition: "transform .15s ease-in",
            cursor: "pointer",
          }}
          onClick={() => setLiked(!isLiked)}
        >
          {isLiked ? (
            <IoMdHeart color="red" size={20} />
          ) : (
            <IoMdHeartEmpty size={20} />
          )}
        </Box>
      </Card.Footer>
    </Card.Root>
  );
};

export default CarCard;
