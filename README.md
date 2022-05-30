In this Project Handle following things
  - First create a lambda function through AWS CLI and provide access of Dynamodb and perform dynamodb put operation
    End_Point - https://jkqmauputf.execute-api.us-east-1.amazonaws.com/dbstore
             method - post
             input -
              {
                 "id":"123",
               "name":"pradeep kumar"
              }
             
             
    
   - Second create a lambda function to handle email service and provide access of SES
      End_Point - https://jkqmauputf.execute-api.us-east-1.amazonaws.com/
          method - post
          input - 
             {
           "Message":"All done",
            "Subject":"notification"
             }
             
     - Third create a lambda function to handle image upload with the help of S3 service
          End_point - https://jkqmauputf.execute-api.us-east-1.amazonaws.com/upload?parameters (parameters like filename=a.jpg)
          method  - post
          
          
