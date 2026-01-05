import useListingQueryStore from "@/listingQueryStore";
import { Box, CloseButton, Input, InputGroup } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const setTitle = useListingQueryStore((s) => s.setTitle);

  const endElement = value ? (
    <CloseButton
      variant="plain"
      size="2xs"
      onClick={() => {
        setValue("");
        inputRef.current?.focus();
      }}
      me="-2"
    />
  ) : undefined;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) setTitle(inputRef.current?.value || "");
        setValue("");
      }}
      style={{ width: "60%" }}
    >
      <InputGroup
        endElement={endElement}
        startElement={
          <Box margin={1}>
            <BsSearch size={20} />
          </Box>
        }
        width="100%"
      >
        <Input
          marginY={3}
          marginLeft={2}
          size="lg"
          ref={inputRef}
          placeholder="Search"
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
