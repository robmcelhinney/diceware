import rand from 'csprng';
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

const getRandomDiceRoll = () => {
  let number = rand(1, 6);
  if (number === undefined || isNaN(number) || number < 0 || number > 5) {
    return getRandomDiceRoll();
  }
  return number;
}