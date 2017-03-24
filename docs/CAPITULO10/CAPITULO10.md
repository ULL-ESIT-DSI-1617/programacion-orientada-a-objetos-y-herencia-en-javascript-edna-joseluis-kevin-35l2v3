# ***Prototipado y herencia en JavaScript***

En JavaScript, podría ser interesante crear clases que hereden de otras clases al estilo de otros lenguajes de programación como C++. Sin embargo, el enfoque que da JavaScript a estos aspectos es ligeramente distinto a lo que cabe esperar, ya que en este lenguaje **todo son objetos**, incluuidos los números, las funciones y las clases (éstas últimas son objetos que crearán otros objetos).

Una vez entendido ésto, resulta más fácil entender cosas como las funciones anónimas o el prototipado.


## Creación de clases

~~~js
    function Animal (edad) {
    this.edad = edad || 0;
    }
    
    var iris = new Animal(4),
        rufo = new Animal(6);
    
    console.log(iris instanceof Animal);  //true
    console.log(rufo.edad);  //6
~~~

Para crear una clase, **lo primero que debemos hacer es definir nuestro constructor**, tarea que desempeñará una función que hará uso de la variable *this* como el objeto creado. Desde el momento en el que se defina la función, podremos crear instancias de la clase para obtener nuevos objetos. **El siguiente paso sería añadir métodos** a nuestra clase que puedan ser utilizados por los objetos creados y, dado que en JavaScript todo es un objeto, podríamos hacer algo así:

~~~js
    function Animal (edad) {
        this.edad = edad;
        this.crecer = function() {
            this.edad = this.edad +1;
            return this.edad;
        }
    }
    
    var iris = new Animal(3);
    console.log(iris.crecer());  //4
~~~

Efectivamente, este código funcionaría y nos da una forma de implementar métodos de instancia, pero surge un pequeño problema, y es que nuestro constructor **está cerando una función *crecer* para cada una de las instancias** que creemos de la clase, por lo que si creamos un array con 1000 instancias de *Animal*, se crearán 1000 funciones distintas e independientes, lo cual, en términos de eficiencia, es tremendamente indeseable.

Para ésto, JavaScript nos provee de un pequeño (pero práctico) atributo que poseen todos los objetos: ***prototype***. Este atributo, a priori, es un objeto vacío y corriente, pero que cuenta con unas características muy interesantes. Cuando una función se utiliza como constructor (tal y como hacíamos en los ejemplos anteriores) JavaScript establece como atributo *prototype* del objeto al mismo prototipo del constructor, de forma que los objetos cerados pueden acceder a todos los atributos que se encuentren dentro de este objeto sin necesidad de duplicar información. Veamos cómo quedaría el código introduciendo este concepto:

~~~js
    function Animal (edad) {
        this.edad = edad;
    }
    
    Animal.prototype.crecer = function() {
        this.edad = this.edad + 1;
        return this.edad;
    };
    
    var iris = new Animal(3);
    console.log(iris.crecer());  //4
~~~


## Herencia

Ahora que hemos visto cómo crear la clase animal, vamos a hacer que los animales creados puedan hablar. El problema que surge ahora es que no todos emiten el mismo sonido, así que deberíamos hacer clases distintas que hereden de la clase animal.

~~~js
    function Felino () {
    }
    
    Felino.prototype = new Animal();
    Felino.prototype.constructor = Felino;
    
    Felino.prototype.maullar = function() {
        console.log('meowwwww');
    };
    
    var iris = new Felino();
    iris.crecer();
    iris.maullar();
~~~

Cuando creamos nuestra clase *Felino* establecemos su prototipo como un nuevo objeto *Animal*, de forma que el prototipo contendrá todos los métodos y atributos que tendría un animal corriente. Seguidamente sobrescribimos el constructor de *Felino* para que los objetos creados pertenezcan a esta clase y ya podemos añadir todos los métodos/atributos que queramos sin ningún problema.

El problema es que con éste método iris no puede heredar de otras clases como *Cuadrúpedo*, la cual le permitiría usar el método caminar. Para hacer esta doble herencia habrá que crear un método algo más complejo o usar una librerís que nos proporcione estas capacidads como [Class.js](http://classjs.readthedocs.org/en/latest/) o [Ring.js](http://ringjs.neoname.eu/).
