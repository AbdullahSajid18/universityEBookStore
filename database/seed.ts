import dummyBooks from "@/dummybook.json";
import ImageKit from "imagekit";

const imageKit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,  
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
})

const uploadToImageKit = async (url: string, fileName: string, folder: string) => {
    try {
        const response = await imageKit.upload({
            file: url,
            fileName,
            folder,
        });

        return response.filePath;
    } catch (error) {
        console.error('Error uploading image to ImageKit:', error);
    }
};

const seed = async () => {
  console.log("Seeding data...");

  try {
    for (const book of dummyBooks) {
      const coverUrl = await uploadToImageKit(
        book.coverUrl,
        `${book.title}.jpg`,
        "/books/covers"
      );

      const videoUrl = await uploadToImageKit(
        book.videoUrl,
        `${book.title}.jpg`,
        "/books/videos"
      );
    }
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};
