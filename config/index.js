import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const ddbClient = new DynamoDBClient({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: 'AKIA4NPDSZNLU3EV2FXX',
    secretAccessKey: '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',
  },
});

const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

export { ddbClient, ddbDocClient };
