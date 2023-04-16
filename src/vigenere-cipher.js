const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.encrypted = [];
    this.alph=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
  
    let keyIndex = 0;
    this.encrypted = [];
  
    for (let i = 0; i < message.length; i++) {
      const messageChar = message.charAt(i);
      if (this.alph.includes(messageChar)) {
        const keyChar = key.charAt(keyIndex % key.length);
        const encryptedChar = this.alph[(this.alph.indexOf(messageChar) + this.alph.indexOf(keyChar)) % 26];
        this.encrypted.push(encryptedChar);
        keyIndex++;
      } else {
        this.encrypted.push(messageChar);
      }
    }
  
    if (!this.isDirect) {
      this.encrypted.reverse();
    }
  
    return this.encrypted.join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
  
    let keyIndex = 0;
    this.decrypted = [];
  
    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage.charAt(i);
      if (this.alph.includes(encryptedChar)) {
        const keyChar = key.charAt(keyIndex % key.length);
        const decryptedChar = this.alph[(this.alph.indexOf(encryptedChar) - this.alph.indexOf(keyChar) + 26) % 26];
        this.decrypted.push(decryptedChar);
        keyIndex++;
      } else {
        this.decrypted.push(encryptedChar);
      }
    }
    if (!this.isDirect) {
      this.decrypted.reverse();
    }
    return this.decrypted.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
