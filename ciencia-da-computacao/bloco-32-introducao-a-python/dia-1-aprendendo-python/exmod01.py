# Exercicio 01

def defineNumeroMaior(numero1, numero2):
    if numero1 > numero2:
        return numero1
    else:
        return numero2

print(defineNumeroMaior(10, 20))

# Exercicio 02

notas = [10, 20, 30, 40, 50]

def media(notas):
    soma = 0
    for nota in notas:
        soma = soma + nota
    return soma / len(notas)

print(media(notas))

# Exercicio 03

def draw_square(n):
    for row in range(n):
        print(n * '*')

print(draw_square(5))

# Exercicio 04


names = ['João', 'Maria', 'Pedro', 'José', 'Ana', 'Paulo', 'José', 'Carlos', 'Fernanda']

def find_biggest_name(names):
    biggest_name = names[0]
    print(biggest_name)
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name

print(find_biggest_name(names))

# Exercicio 05

def can_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price

print(can_costs(100))

# Exercicio 06

def type_of_triagle(a, b, c):
    is_triagle = (a + b > c and a + c > b and b + c > a)
    if not is_triagle:
        return 'Não é um triângulo'
    elif a == b == c:
           return 'Equilátero'
    elif a == b or a == c or b == c:
            return 'Isósceles'
    else:
            return 'Escaleno'

print(type_of_triagle(5, 5, 5))

    

    

    
    
    

        


