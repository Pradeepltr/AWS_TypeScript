import { buffer } from "stream/consumers";

const AWS_S3=require('aws-sdk')
const S3=new AWS_S3.S3();

module.exports.ImageUpload=async(event:any)=>{
    var Location:any
    var Response:any
    const filename=event.queryStringParameters.filename;
    const file=Buffer.from(event.body,'base64');
    const params={
        Body:file,
        ContentType:"image/jpeg",
        Bucket:"image-abc",
        Key:filename
    }
    await S3.upload(params).promise()
    .then((data:any)=>{
       Response={
           StatusCode:200,
           body:JSON.stringify({
               status:"Submitted",
               Image_url:data.Location
           })
       }
    })
    .catch((err:any)=>{
        Response={
            StatusCode:400,
            body:JSON.stringify({
                status:"not Submitted",
                error:err
            })
        }
    })
    return Response
}