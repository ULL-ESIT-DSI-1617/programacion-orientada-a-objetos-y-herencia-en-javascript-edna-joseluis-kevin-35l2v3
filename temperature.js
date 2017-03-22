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
    let resultado = this.valor_;
    resultado += 273;
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

class Metros extends Longitud {
	constructor(valor, tipo) {
		super(valor, tipo);
	}
	
	toPulgadas() {
		let resultado = this.valor_ * 39.37;
		return resultado;
	}
}

class Pulgadas extends Longitud {
	constructor(valor, tipo) {
		super(valor, tipo);
	}
	
	toMetros() {
		let resultado = this.valor_/39.37;
		return resultado;
	}
}

function calculate() {
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkKmMiI])\s+(?:to\s+)?([fFcCkKmMiI])/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type1 = m[2];
	var type2 = m[3];
	
	switch (type1) {
		case 'f':
		case 'F':{
			let aux = new Fahrenheit(num, type1);
			switch (type2) {
				case 'c':
				case 'C':{
					result = aux.toCelsius();
					result = result.toFixed(1)+" Celsius";
					break;
                }
				case 'k':
				case 'K':{
					result = aux.toKelvin();
					result = result.toFixed(1)+" Kelvin";
					break;
                }
				case 'f':
				case 'F':{
					result = num.toFixed(1)+" Metros";
                    break;
                }
				default:
                    result = "Medida de conversión incorrecta!";
			}
			break;
		}
		case 'c':
		case 'C':{
			let aux = new Celsius(num, type1);
			switch (type2) {
				case 'f':
				case 'F':{
					result = aux.toFahrenheit();
					result = result.toFixed(1)+" Fahrenheit";
					break;
                }
				case 'k':
				case 'K':{
					result = aux.toKelvin();
                    console.log(result);
					result = result.toFixed(1)+" Kelvin";
					break;
                }
				case 'c':
				case 'C':{
					result = num.toFixed(1)+" Celsius";
					break;
                }
				default:
                    result = "Medida de conversión incorrecta!";
			}
			break;
		}
		case 'k':
		case 'K':{
			let aux = new Kelvin(num, type1);
			switch (type2) {
				case 'c':
				case 'C':{
					result = aux.toCelsius();
					result = result.toFixed(1)+" Celsius";
					break;
                }
				case 'f':
				case 'F':{
					result = aux.toFahrenheit();
					result = result.toFixed(1)+" Fahrenheit";
					break;
                }
				case 'k':
				case 'K':{
					result = num.toFixed(1)+" Kelvin";
                    break;
                }
				default:
                    result = "Medida de conversión incorrecta!";
			}
			break;
		}
		case 'm':
		case 'M':{
			let aux = new Metros(num, type1);
			switch (type2) {
				case 'i':
				case 'I':{
					result = aux.toPulgadas();
					result = result.toFixed(1)+" Pulgadas";
					break;
                }
				case 'm':
				case 'M':{
					result = num.toFixed(1)+" Metros";
                    break;
                }
				default:
                    result = "Medida de conversión incorrecta!";
			}
			break;
		}
		case 'i':
		case 'I':{
			let aux = new Pulgadas(num, type1);
			switch (type2) {
				case 'm':
				case 'M':{
					result = aux.toMetros();
					result = result.toFixed(1)+" Metros";
					break;
                }
				case 'i':
				case 'I':{
					result = num.toFixed(1)+" Pulgadas";
                    break;
                }
				default:
                    result = "Medida de conversión incorrecta!";
			}
			break;
		}
		default:
	}
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C to K' instead";
  }
}
