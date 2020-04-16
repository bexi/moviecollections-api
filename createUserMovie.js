import { v1 as uuidv1 } from 'uuid';
import dynamoDb from "./libs/dynamodb-lib";
import handler from "./libs/handler-lib";

export const main = handler(async (event, context) => {
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
      createdAt: Date.now(),
      rating: null,
      note: null
    }
  };


  await dynamoDb.put(params);

  return params.Item;
});