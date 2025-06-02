"use client";

import { toast } from "@/hooks/use-toast";
import config from "@/lib/config";
import { IKImage, ImageKitProvider, IKUpload, IKVideo } from "imagekitio-next";
import Image from "next/image";
import { useRef, useState } from "react";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
    apiEndpoint,
  },
} = config;

// Fetch auth params from backend
const authenticator = async () => {
  try {
    const response = await fetch(`${apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, token, expire } = data;
    return { token, signature, expire };
  } catch (error: any) {
    throw new Error(`Authentication failed ${error.message}`);
  }
};

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const UploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  const onError = (error: any) => {
    console.error("Image upload failed. Please try again later.", error);
    toast({
      title: "Image upload Failed!",
      description: `Your image could not be uploaded. Please try again later.`,
      variant: "destructive",
    });
  };
  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: "Image uploaded successfully!",
      description: `${res.filePath} uploaded successfully!`,
    });
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      authenticator={authenticator}
      urlEndpoint={urlEndpoint}
    >
      <IKUpload
        className="hidden"
        ref={UploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      />

      <button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();

          if (UploadRef.current) {
            //@ts-ignore
            UploadRef.current?.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="Upload Icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a File</p>

        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
