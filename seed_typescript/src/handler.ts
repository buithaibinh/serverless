import {APIGatewayProxyHandler} from "aws-lambda";

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(event, null, 2),
  };
};
