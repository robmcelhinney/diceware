current_work_directory = os.getcwd()
print('Current work directory: {}'.format(current_work_directory))

with open('engine/eff_large_wordlist.json', 'r') as wordlist:
    data = wordlist.read()

obj = json.loads(data)

# print(obj)

all_die = []
all_words = []
all_nums = []
for i in range(8):
    diceroll = []
    for _ in range(5):
        # print(1 + secrets.randbelow(6))
        diceroll.append(1 + secrets.randbelow(6))
    all_die.append(diceroll)
    diceroll_str = "".join(str(x) for x in diceroll)
    all_nums.append(diceroll_str)
    all_words.append(obj[diceroll_str])

print(all_die)
print(all_nums)
print(all_words)

sys.stdout.flush()
