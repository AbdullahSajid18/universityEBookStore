'use client';

import config from "@/lib/config";
import { Image, ImageKitProvider, Upload, Video } from "@imagekit/next";

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, token, expire } = data;
    return {token, signature, expire};

  } catch (error: any) {
    throw new Error(`Authentication failed ${error.message}`);
  }
}

const ImageUpload = () => {
  return <div>ImageUpload</div>;
};

export default ImageUpload;
