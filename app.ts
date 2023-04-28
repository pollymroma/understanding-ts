let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
//userName = userInput; //can't assign type unknown to type string because unknown might not be a string.

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}
// This function never returns anything, it throws an error, it never produces a value
// So the return type isn't just void but also never, you can set it explicitly if you don't want TS to infer void
generateError("An error occurred!", 500);
