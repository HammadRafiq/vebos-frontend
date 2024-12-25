import React, { useCallback } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { Typography } from "@components/typography";
import ReactUploadFile from "@assets/icons/react-upload";
import { useController } from "react-hook-form";
import toast from "react-hot-toast";

interface CustomDropzoneProps {
  name: string;
  label: string;
  control: any;
  getFileOnChange?: any;
}

export const ControlledFileUpload: React.FC<CustomDropzoneProps> = ({
  name,
  label,
  control,
  getFileOnChange,
}) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });
  const accept: Accept = {
    "video/mp4": [".mp4"], // Only accept .mp4 files
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Filter out files that are not .mp4 format
      const mp4Files = acceptedFiles.filter(
        (file) => file.type === "video/mp4"
      );
      if (mp4Files.length !== acceptedFiles.length) {
        toast.error("Please select only .mp4 format files");
      }
      onChange(mp4Files);
      getFileOnChange(mp4Files);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className=" border-dashed border-2 rounded-[24px] border-primary bg-primary/20 pt-[48px] pb-[70px] cursor-pointer"
      >
        <input {...getInputProps()} />
        <div className=" flex flex-col items-center space-y-3 ">
          <div className=" w-[80px] h-[80px] bg-primary rounded-full flex items-center justify-center">
            <ReactUploadFile />
          </div>

          {value ? (
            <div className="flex space-x-2 items-center">
              <strong>Files:</strong>
              <ul>
                {value.map((file: File) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              {" "}
              <Typography variant="body-small" className=" text-center">
                Drag your video here to upload
              </Typography>
              <Typography variant="body-small" className=" text-center">
                or
              </Typography>
              <Typography
                variant="body-small"
                className=" text-center font-semibold text-primary"
              >
                Select a video from your computer
              </Typography>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
