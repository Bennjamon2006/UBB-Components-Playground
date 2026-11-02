export default function wrapError(error: unknown): Error {
  if (error === null || error === undefined) {
    return new Error("An unknown error occurred");
  }

  if (error instanceof Error) {
    return error;
  }

  if (typeof error === "string") {
    return new Error(error);
  }

  if (typeof error === "object" && "message" in error) {
    return wrapError((error as { message: unknown }).message);
  }

  if (typeof error === "object" && "error" in error) {
    return wrapError((error as { error: unknown }).error);
  }

  return new Error(String(error));
}
