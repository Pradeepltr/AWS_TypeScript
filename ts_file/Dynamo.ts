const AWS1=require('aws-sdk')
const DB=new AWS1.DynamoDB.DocumentClient();
module.exports.store=async(event:any)=>{
    const {id,name}=JSON.parse(event.body);
    var Response:any
    const params={
        TableName:"Check",
        Item:{
            id:id,
            name:name
        }
    }
  await DB.put(params).promise()
  .then((data:any)=>{
     Response={
         StatusCode:200,
         body:JSON.stringify("Data Submitted")
     }
  })
  .catch((err:any)=>{
    Response={
        StatusCode:400,
        body:JSON.stringify("Data not Submitted",err)
    }
  })
  return Response
}