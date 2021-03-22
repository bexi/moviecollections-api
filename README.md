# MovieCollections-API

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

Install the Node.js packages

``` bash
$ npm install
```

### Usage

To deploy infrastructure as code

``` bash
$ cd infrastructure
$ npx sst deploy
```

Deploy serverless api

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function hello
```

To run a function on your local

``` bash
$ serverless invoke local --function hello
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

#### Running Tests

Run your tests using

``` bash
$ npm test
```
