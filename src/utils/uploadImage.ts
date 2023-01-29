import { cloudinary } from '../lib/cloudinary';

type UploadImage = {
  image: string;
};
const uploadImage = async ({ image }: UploadImage) => {
  const uploadedResponse = await cloudinary.uploader.upload(image, {
    upload_preset: 'farmfresh',
  });
  return {
    imageURL: uploadedResponse.secure_url,
    imageId: uploadedResponse.public_id,
  };
};

export { uploadImage };
