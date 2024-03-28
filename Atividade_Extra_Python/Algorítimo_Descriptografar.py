def decifra_de_cesar(texto_cifrado, chave):
    texto_decifrado = ''
    for char in texto_cifrado:
        if char.isalpha():  # Verifica se o caractere é uma letra
            if char.islower():
                novo_char = chr(((ord(char) - 97 - chave) % 26) + 97)
            else:
                novo_char = chr(((ord(char) - 65 - chave) % 26) + 65)
            texto_decifrado += novo_char
        else:
            texto_decifrado += char
    return texto_decifrado

# Solicitar entrada do usuário
texto_cifrado = input("Digite o texto cifrado: ")
chave = int(input("Digite a chave de cifra (um número inteiro): "))

# Chamar a função de decifra de César
texto_decifrado = decifra_de_cesar(texto_cifrado, chave)
print("Texto decifrado:", texto_decifrado)
