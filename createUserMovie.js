import { v1 as uuidv1 } from 'uuid';
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      movieId: uuidv1(),
      imdbId: data.imdbId,
      title: data.title,
      posterUrl: data.posterUrl,
      description: data.description,
      imdbRating: data.imdbRating,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}
