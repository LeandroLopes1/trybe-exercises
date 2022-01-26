
# Exercício 1: Em um contexto de orientação a objetos, como podemos definir o que são mensagens e qual a sua importância?

# mensagem são dados que são passados entre objetos. Forma de como os objetos interagem.


# Exercício 2: Para exercitar nossa capacidade de abstração, vamos modelar algumas partes de um software de geometria. Como poderíamos modelar um objeto retângulo?
# 🐦 Para ajudar, segue o exemplo do quadrado. Vamos utilizar a seguinte notação para descrever nossas abstrações:

"""Nome da abstração
Quadrado

atributos/estados
- lado (tamanho)

comportamentos
- calcular area (lado * lado)
- calcular perímetro (4 * lado)"""

class Quadrado:
    def __init__(self, lado):
        self.lado = lado

    def calcular_area(self):
        return self.lado * self.lado
    
    def calcular_perimetro(self):
        return 4 * self.lado

print(Quadrado(5).calcular_area())
print(Quadrado(5).calcular_perimetro())

# Exercício 3: Agora vamos modelar um objeto circulo.

class Circulo:
    def __init__(self, raio):
        self.raio = raio
    
    def calcular_area(self):
        return 3.14 * self.raio ** 2

    def calcular_perimetro(self):
        return 2 * 3.14 * self.raio

print(Circulo(5).calcular_area())
print(Circulo(5).calcular_perimetro())
    
# Exercício 4: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma cafeteria. 
# Como podemos abstrair um pedido composto por vários itens? Quais as suas características e comportamentos?

"""Nome da abstração
Pedido

atributos/estados
- cliente
- itens consumidos
- forma de pagamento
- descontos

comportamentos
- calcular valor total (soma dos valores dos itens)
- calcular valor total com desconto (valor total - descontos)

--------------

Nome da abstração
Item

atributos/estados
- nome
- preço

comportamentos
- alterar preço"""

class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def alterar_preco(self, novo_preco):
        self.preco = novo_preco


class Pedido:
    def __init__(self, cliente, itens_consumidos, forma_de_pagar, desconto):
        self.cliente = cliente
        self.itens_consumidos = itens_consumidos
        self.forma_de_pagar = forma_de_pagar
        self.desconto = desconto

    def calcular_total(self):
        total = 0
        for item in self.itens_consumidos:
            total = total + item.preco

        return total

    def calcular_total_com_descontos(self):
        return self.calcular_total() * (1 - self.desconto)


# Para testar!
sanduba = Item('X-tudo', 10)
pizza = Item('Unidade', 30)
coca = Item('Lata', 4.5)

pedido_mesa_1 = Pedido('Cristiano', [sanduba, pizza, coca], 'Cartao', 0)

print(pedido_mesa_1.calcular_total_com_descontos())

"""Nome da abstração
Televisão

atributos/estados
- volume
- canal
- taxa de aumento do volume
- tamanho (não pode ser modificado)
- estado (ligada/desligada)

comportamentos
- aumentar volume 
- diminuir volume
- mudar canal (novo canal deve ser fornecido)
- ligar/desligar (normalmente é um botão só que modifica o estado atual)"""

class Televisao:
    def __init__(self, tamanho_em_polegadas):
        self.volume = 5
        self.canal = 12
        self.taxa_de_aumento_volume = 2
        self.tamanho = tamanho_em_polegadas
        self.ligada = False

    def aumentar_volume(self):
        self.volume = self.volume + self.taxa_de_aumento_volume

    def diminuir_volume(self):
        self.volume = self.volume - self.taxa_de_aumento_volume
    
    def mudar_canal(self, novo_canal):
        self.canal = novo_canal

    def ligar(self):
        self.ligada = not self.ligada

# para testar!

tv_da_sala = Televisao(32)
tv_da_sala.aumentar_volume()
print(tv_da_sala.volume)

tv_da_sala.diminuir_volume()
tv_da_sala.diminuir_volume()
print(tv_da_sala.volume)

tv_da_sala.mudar_canal(10)
print(tv_da_sala.canal)

tv_da_sala.ligar()
print(tv_da_sala.ligada)



