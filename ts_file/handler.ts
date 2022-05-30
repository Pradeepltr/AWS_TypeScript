const AWS=require('aws-sdk')
const SES=new AWS.SES();

module.exports.hello=async(event:any)=>{
    const {Message,Subject}=JSON.parse(event.body)
    var Response:any
    const params={
        Destination:{
            ToAddresses:["pk6361439@gmail.com"]
        },
        Message:{
            Body:{
                Text:{Data:Message}
            },
            Subject:{Data:Subject}
        },
        Source:"pk6361439@gmail.com"
    }
    try{
       await SES.sendEmail(params).promise()
       Response={
           StatusCode:200,
           body:JSON.stringify("Message send")
       }
    }
    catch(err){
        Response={
            StatusCode:400,
            body:JSON.stringify(err)
        }

    }
    return Response
}

