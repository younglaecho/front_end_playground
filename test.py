def calculate_change(payment, cost):
    change = payment - cost
    
    n = 0
    while change >= 0:
        change = change - 50000
        n = n + 1
    print("50000원 지폐:", str(n-1) +' 장')
    change = change + 50000

    n = 0
    while change >= 0:
        change = change - 10000
        n = n + 1
    print("10000원 지폐:", str(n-1) +' 장')
    change = change + 10000

    n = 0
    while change >= 0:
        change = change - 5000
        n = n + 1
    print("5000원 지폐:", str(n-1) +' 장')
    change = change + 5000
    
    n = 0
    while change >= 0:
        change = change - 1000
        n = n + 1
    print("1000원 지폐:", str(n-1) +' 장')
    change = change + 1000

calculate_change(100000, 50000)