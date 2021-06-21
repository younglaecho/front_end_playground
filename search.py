import random
snum = int(input("0~100 사이의 숫자를 입력하세요"))
startnum = 0
lastnum = 100

if snum < 0 or snum > 100 :
    print("0~100 사이의 숫자를 입력하세요")
else:
    while True:
        cnum = random.randint(startnum, lastnum)
        if cnum == snum:
            print(cnum, " :정답입니다.")
            break
        elif cnum > snum:
            lastnum = cnum - 1
            print(cnum, " :더 작습니다.")
        else:
            startnum = cnum + 1
            print(cnum, " :더 큽니다.")
