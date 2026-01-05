import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isFullText, setFullText] = useState(false);

  if (!children) return null;

  if (children.length <= maxChars) {
    return <Text fontSize="130%">{children}</Text>;
  }

  const summary = isFullText
    ? children
    : children.substring(0, maxChars) + "...";
  return (
    <Text fontSize="130%">
      {summary}{" "}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setFullText(!isFullText)}
      >
        {isFullText ? "show less" : "show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
