export const unprocessableEntity = (message: string) => ({
  code: 422,
  status: "Unprocessable Entity",
  message
});

export const notFound = (message: string) => ({
  code: 404,
  status: "Not Found",
  message
});

export const badRequest = (message: string) => ({
  code: 400,
  status: "Bad Request",
  message
});