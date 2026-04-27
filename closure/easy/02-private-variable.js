/**
 * Problem 2: Private Variable
 * Difficulty: Easy
 *
 * Description:
 * Implement a function createSecret(secret).
 *
 * It should return an object with:
 * - getSecret() → returns the current secret value
 * - setSecret(newSecret) → updates the secret value
 *
 * The secret must not be directly accessible from outside.
 */
const createSecret = (secret) => {
  return {
    getSecret: () => {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
      return "updating Secret...";
    },
  };
};
const secret1 = createSecret(10);
console.log(secret1.getSecret());
console.log(secret1.setSecret(20));
console.log(secret1.getSecret());
