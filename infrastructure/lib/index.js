import DynamoDbStack from "./DynamoDbStack";
import CognitoStack from "./CognitoStack";

// Add stacks
export default function main(app) {
  new DynamoDbStack(app, "dynamodb");
  new CognitoStack(app, "cognito");
}

// import MyStack from "./MyStack";

// export default function main(app) {
//   new MyStack(app, "my-stack");

//   // Add more stacks
// }