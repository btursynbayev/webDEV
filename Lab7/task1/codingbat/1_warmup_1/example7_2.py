#241
#2*2 + 4*4 + 1*1 = 21

input_num = 241
result_a = input_num // 100
result_b = (input_num // 10) % 10
result_c = input_num % 10
result_sum = result_a**2 + result_b**2 + result_c**2
print(result_sum)