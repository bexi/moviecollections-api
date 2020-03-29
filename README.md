# MovieCollections-API

## Features
* CI/CD of the whole application - Circle CI 
* Update db model 
* Get all movies for a user from db - done
* Get a user movie from db - done
* Add user movie to db - done

### AWS Services used in this application
* Cognito
* Lambda 
* Route 53
* S3 
* DynamoDB

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

Install the Node.js packages

``` bash
$ npm install
```

### Usage

To run a function on your local

``` bash
$ serverless invoke local --function yourFunction
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

Deploy your project

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function hello
```

#### Running Tests

Run your tests using

``` bash
$ npm test
```
