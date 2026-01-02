import { Box, CloseButton, Input, InputGroup } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = value ? (
    <CloseButton
      size="xs"
      onClick={() => {
        setValue("");
        inputRef.current?.focus();
      }}
      me="-2"
    />
  ) : undefined;

  return (
    <InputGroup
      endElement={endElement}
      startElement={
        <Box margin={1}>
          <BsSearch />
        </Box>
      }
      width="75%"
    >
      <Input
        marginY={2}
        marginLeft={2}
        size="2xs"
        ref={inputRef}
        placeholder="Search"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        variant="subtle"
      />
    </InputGroup>
  );
};

export default SearchInput;
