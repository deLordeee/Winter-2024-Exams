// Generate random password

let generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  password = '';
  for (let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * max);
    password = password + alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
