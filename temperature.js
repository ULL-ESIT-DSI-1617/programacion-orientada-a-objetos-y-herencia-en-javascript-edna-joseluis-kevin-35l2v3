"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

class Medida {
	constructor(valor, medida) {
		this.valor_ = valor;    //Valor numerico que introducimos
		this.medida_ = medida;  //Tipo de medida (Temperatura, Longitud, etc.)
	}
}

class Temperatura extends Medida{
  constructor(valor, tipo){
    super(valor,"Temperatura");
    this.tipo_ = tipo;      //Tipo de temperatura (Celsius, Fahrenheit, Kelvin, etc. )
  }
}

class Longitud extends Medida{
  constructor(valor, tipo){
    super(valor,"Longitud");
    this.tipo_ = tipo;      //Tipo de longitud (Metros y Pulgadas)
  }
}

class Fahrenheit extends Temperatura{
    constructor(valor, tipo){
        super(valor, tipo)
    }

    toCelsius(){
        let resultado = (this.valor_-32)/1.8;
        return resultado;
    }

    toKelvin(){
        let resultado = this.toCelsius()+273;
        return resultado;
    }
}

class Celsius extends Temperatura{
  constructor(valor, tipo){
      super(valor, tipo)
  }

  toKelvin(){
    let resultado = this.valor_+273;
    return resultado;
  }

  toFahrenheit(){
    let resultado = (this.valor_*1.8)+32;
    return resultado;
  }
}

class Kelvin extends Temperatura {
	constructor(valor, tipo) {
		super(valor, tipo);
	}
	
	toCelsius() {
		let resultado = this.valor_ - 273;
		return resultado;
	}
	
	toFahrenheit() {
		let resultado = (this.toCelsius * 1.8) + 32;
		return resultado;
	}
}

function calculate() {
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Fahrenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
