def cifra_de_cesar(texto, chave):
    texto_cifrado = ''
    for char in texto:
        if char.isalpha():  # Verifica se o caractere é uma letra
            if char.islower():
                novo_char = chr(((ord(char) - 97 + chave) % 26) + 97)
            else:
                novo_char = chr(((ord(char) - 65 + chave) % 26) + 65)
            texto_cifrado += novo_char
        else:
            texto_cifrado += char
    return texto_cifrado

# Solicitar entrada do usuário
texto = input("Digite o texto a ser cifrado: ")
chave = int(input("Digite a chave de cifra (um número inteiro): "))

# Chamar a função de cifra de César
texto_cifrado = cifra_de_cesar(texto, chave)
print("Texto cifrado:", texto_cifrado)
