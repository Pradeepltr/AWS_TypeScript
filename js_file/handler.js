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
const AWS = require('aws-sdk');
const SES = new AWS.SES();
module.exports.hello = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { Message, Subject } = JSON.parse(event.body);
    var Response;
    const params = {
        Destination: {
            ToAddresses: ["pk6361439@gmail.com"]
        },
        Message: {
            Body: {
                Text: { Data: Message }
            },
            Subject: { Data: Subject }
        },
        Source: "pk6361439@gmail.com"
    };
    try {
        yield SES.sendEmail(params).promise();
        Response = {
            StatusCode: 200,
            body: JSON.stringify("Message send")
        };
    }
    catch (err) {
        Response = {
            StatusCode: 400,
            body: JSON.stringify(err)
        };
    }
    return Response;
});
