def is_leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            return False
        return True
    return False

print(is_leap_year(1901))

def month_list(year):
    monthList = [31,28,31,30,31,30,31,31,30,31,30,31]
    if is_leap_year(year):
        monthList[1] = 29
    return monthList

print(month_list(1901))

def how_many_days(date_A, date_B):
    year_A = date_A[0]
    year_B = date_B[0]
    year_diff = year_B - year_A
    month_A = date_A[1]
    month_B = date_B[1]
    days_A = date_A[2]
    days_B = date_B[2]

    total_days = 0
    for year in range(year_B - year_diff + 1, year_B):
        if is_leap_year(year):
            days = 366
        else:
            days = 365
        total_days += days
    total_days += month_list(year_A)[month_A - 1] - days_A + 1
    total_days += days_B
    if year_A != year_B:
        for month in month_list(year_A)[month_A:]:
            total_days +=month
        for month in month_list(year_B)[:month_B - 1]:
            total_days +=month
    else:
        for month in month_list(year_A)[month_A:month_B-1]:
            total_days +=month
    return total_days

print(how_many_days([2021, 2, 1], [2021, 12, 31]))

print('--------------------------------------')
def days_after(date, x):
    year = date[0]
    month = date[1]
    days = date[2]
    last_date = [year, 12, 31]
    next_last_date = [year+1, 12, 31]
    if x < (month_list(year)[month-1]-days+1):
        date[2] = date[2] + x
        return date
    if x < how_many_days(date, last_date):
        x = x - month_list(year)[month-1]
        for month in month_list(year)[month:]:
            x = x - month
            date[1] = date[1] + 1
            if x < 0:
                x = x + month
                break
        date[2] = x
        return date
    if x < how_many_days(date, next_last_date):
        x = x - month_list(year)[month-1]
        for month in month_list(year)[month:]:
            x = x - month
        date[0] = date[0] + 1
        date[1] = 0
        for month in month_list(year+1)[0:]:
            x = x - month
            date[1] = date[1] + 1
            if x < 0:
                x = x + month
                break
        date[2] = x
        return date
    
    x = x - month_list(year)[month-1]
    
    for month in month_list(year)[month:]:
        x = x - month
    
    for year_day in range(year,year+300):
        if is_leap_year(year_day):
            year_days = 366
        else:
            year_days = 365
        x = x - year_days
        date[0] = date[0] + 1
        if x < 0:
            x = x + year_days
            break

    date[1] = 0
    for month in month_list(year+1)[0:]:
        x = x - month
        date[1] = date[1] + 1
        if x < 0:
            x = x + month
            break
    date[2] = x
    return date



    # while x > 0:

print(days_after([2021, 2, 1],700))