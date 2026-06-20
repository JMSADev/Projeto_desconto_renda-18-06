//  <p>São insentos as pessoas menores de idade e com renda abaixo de R$ 1.700,00</p>
//<P> De R$ 1.701,01 Até R$ 5.000,00 o desonto será de 5%</P>
//<p> De R$ 5.001,00 até R$ 8.000,00 o desconto será de 8%</p>
//<p> De R$ 8.001,00 até R$ 10.000,00 o desconto será de 10%</p>
<P> De R$ 10.0001,00 será de 3%</P> 

const calculoDesconto = (objPessoa) => {
    let resposta = ''

    if ((objPessoa.idade < 18) || (objPessoa.renda <= 1700)) {
        resposta = 'Isento de Desconto'

    } else if (objPessoa.renda <= 5000) {
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.05)
            .toFixed(2)
            .replace('.', ',')}`

    } else if (objPessoa.renda <= 8000) {
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.08)
            .toFixed(2)
            .replace('.', ',')}`

    } else if (objPessoa.renda <= 10000) {
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.10)
            .toFixed(2)
            .replace('.', ',')}`

    } else {
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.03)
            .toFixed(2)
            .replace('.', ',')}`
    }

    return resposta
}

export {calculoDesconto}