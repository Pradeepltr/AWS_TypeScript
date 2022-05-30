"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AWS_S3 = require('aws-sdk');
const S3 = new AWS_S3.S3();
module.exports.ImageUpload = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var Location;
    var Response;
    const filename = event.queryStringParameters.filename;
    const file = Buffer.from(event.body, 'base64');
    const params = {
        Body: file,
        ContentType: "image/jpeg",
        Bucket: "image-abc",
        Key: filename
    };
    yield S3.upload(params).promise()
        .then((data) => {
        Response = {
            StatusCode: 200,
            body: JSON.stringify({
                status: "Submitted",
                Image_url: data.Location
            })
        };
    })
        .catch((err) => {
        Response = {
            StatusCode: 400,
            body: JSON.stringify({
                status: "not Submitted",
                error: err
            })
        };
    });
    return Response;
});
