function calculuCombustivel(distancia, combustivel){

    let litrosNece

    if(distancia <= 0){
       return 'A distância deve ser maior que 0!';
    } else if(combustivel !== 'gasolina' && combustivel !== 'etanol'){
        return 'Combustível inválido!';
    }
    
    const consumoGasolina = 16;
    const consumoEtanol = 11;

    if(combustivel === 'gasolina'){
        litrosNece = distancia / consumoGasolina;
    } else if (combustivel === 'etanol'){
        litrosNece = distancia / consumoEtanol;
    }

    return litrosNece;

}

module.exports = {calculuCombustivel};