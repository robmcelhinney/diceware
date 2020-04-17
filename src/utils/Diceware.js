import eff_large_wordlist from "../assets/eff_large_wordlist.json"

export const get_all_die = (num_words) => {

  let all_die = []
  for (let __ = 0; __ < num_words; __++) {
      let diceroll = []
      for (let _ = 0; _ < 5; _++) {
          let dice_num = getRandomDiceRoll();
          dice_num++;
          diceroll.push(dice_num)
      }
      all_die.push(diceroll)
  }
  return (
    all_die
  );
}

export const get_all_words = (all_die) => {
  const wordlist_obj = JSON.parse(JSON.stringify(eff_large_wordlist));
  let all_words = []
  let diceRoll = []

  all_die.forEach(element => {
    const dicerollStr = element.join("")
    diceRoll.push(dicerollStr)
    all_words.push(wordlist_obj[dicerollStr])
  });

  return all_words;
}

// Copied from Diceware.prototype.random @ 
// https://github.com/EFForg/OpenWireless/blob/master/app/js/diceware.js
const getRandomDiceRoll = () => {
  let rval = 0;
  const max = 6;
  const min = 0;
  const range = max - min;
  
  const bits_needed = Math.ceil(Math.log2(range));
  const bytes_needed = Math.ceil(bits_needed / 8);
  const mask = Math.pow(2, bits_needed) - 1; 
  // 7776 -> (2^13 = 8192) -1 == 8191 or 0x00001111 11111111
  
  // Create byte array and fill with N random numbers
  let byteArray = new Uint8Array(bytes_needed);
  window.crypto.getRandomValues(byteArray);
  
  let p = (bytes_needed - 1) * 8;
  for(let i = 0; i < bytes_needed; i++ ) {
    rval += byteArray[i] * Math.pow(2, p);
    p -= 8;   
  }
  
  // Use & to apply the mask and reduce the number of recursive lookups
  rval = rval & mask;
  
  if (rval >= range) {
    // Integer out of acceptable range
    return getRandomDiceRoll();
  }
  // Return an integer that falls within the range
  return min + rval;
}