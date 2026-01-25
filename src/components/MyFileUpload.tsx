import { Button, FileUpload, Float } from "@chakra-ui/react";
import { LuFileImage, LuX } from "react-icons/lu";

interface Props {
  files: File[];
  onFilesChange: (files: File[]) => void;
  disabled?: boolean;
}

const MyFileUpload = ({ files, onFilesChange, disabled }: Props) => {
  return (
    <FileUpload.Root
      accept="image/*"
      maxFiles={10}
      onFileChange={(e) => onFilesChange([...e.acceptedFiles])}
      disabled={disabled}
    >
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm" disabled={disabled}>
          <LuFileImage /> Upload Images
        </Button>
      </FileUpload.Trigger>
      <FileUpload.ItemGroup>
        {files.map((file) => (
          <FileUpload.Item
            w="auto"
            boxSize="20"
            p="2"
            file={file}
            key={file.name}
          >
            <FileUpload.ItemPreviewImage />
            <Float placement="top-end">
              <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
                <LuX />
              </FileUpload.ItemDeleteTrigger>
            </Float>
          </FileUpload.Item>
        ))}
      </FileUpload.ItemGroup>
    </FileUpload.Root>
  );
};

export default MyFileUpload;
