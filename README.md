# Demo Angular 6 app deployment on AWS Serverless Architecture 

Live deployment of this app can be viewed [here](http://bit.ly/angular-aws)

This is the job search portal demo app build on Angular 6. The application backend is built on the AWS Serverless architecture using [API Gateway](https://aws.amazon.com/api-gateway/), [AWS Lambda](https://aws.amazon.com/lambda/), [AWS DynamoDB](https://aws.amazon.com/dynamodb).

When the web-page is requested through given URL, the static angular app and html/css/images are served by Amazon S3 bucket. The angular app then makes asynchronous HTTP requests to the Amazon API gateway endpoint to get the content to be displayed.

Requests form Amazon API gateway end point is configured to invoke AWS lambda functions. The lambda functions process the request, fetch required data from DynamoDB and sends back the response for the request.

Below is a diagram that depicts the deployment architecture.

![architecture diagram]( https://github.com/CloudTara/angular-aws-serverless-demo/blob/master/AngularAWSDemoAppArchitecture.jpg)
