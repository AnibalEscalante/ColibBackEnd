import { Complaint } from "@models/complaint.model";

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

async function uploadImage(req: any, res: any, complaint?: Complaint): Promise<any> {
    let locationImage: string = '';
    AWS.config.setPromisesDependency();
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });
    var params = {
        ACL: 'public-read',
        Bucket: process.env.AWS_BUCKET_NAME,
        Body: req.file.buffer,//fs.createReadStream(req.file.path),
        Key: `imagenes/${req.file.originalname.replace(/\s/g, '-')}`
    };

    const uploadResult = await s3.upload(params, async (err: any, data: any) => {
        if (err) {
            console.log('Error occured while trying to upload to S3 bucket', err);
        }

        if (data) {
            //  fs.unlinkSync(req.file.path); // Empty temp folder
            locationImage = data.Location;
        }
    }).promise();

    return uploadResult;
}

async function deleteImage(fileName: string | undefined): Promise<any> {
    var params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `imagenes/${fileName}`
    };

    const deleteResult = await s3.deleteObject(params, function(err: any, data: any) {
        if (err) {
          console.log(err);
          // callback(err);
        } else {
          // callback(null);
        }
    });

    return deleteResult;
}

export default { uploadImage, deleteImage }