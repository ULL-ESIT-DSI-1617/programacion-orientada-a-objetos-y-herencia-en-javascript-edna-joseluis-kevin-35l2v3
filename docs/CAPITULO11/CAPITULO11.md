# ***ECMAScript 6 (Clases y Herencia)***

Las clases de javascript son introducidas en el ECMAScript 6 y son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases **no** introduce un nuevo modelo de herencia orientada a objetos a JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.


## Clases

Una manera de definir una clase es mediante una *declaración de clase*. Para la declaración de una clase, es necesario el uso de la palabra reservada *class* y un nombre para la clase ("Poligono" en esté caso).

~~~js
    class Poligono {
        constructor(alto, ancho) {
            this.alto = alto;
            this.ancho = ancho;
        }
    }
~~~

Una diferencia importante entre las **declaraciones de funciones** y las **declaraciones de clases** es que, para éstas últimas, en primer lugar se necesita declarar la clase y luego acceder a ella. De otra manera, el código de ejemplo siguiente lanzará un *ReferenceError*:

~~~js
    var p = new Poligono();  //ReferenceError
    
    class Poligono {}
~~~

### Cuerpo de la clase y definición de métodos

El *cuerpo* de una **clase** es la parte que se encuentra entre las llaves {}. Éste es el lugar donde se definen los **miembros de clase**, como los **métodos** o **constructores**.

#### Constructor

El método *constructor* es un método especial para crear e inicializar un objeto creado con una *clase*. Solo puede haber un método especial con el nombre "constructor" en una clase. Si esta contiene mas de una ocurrencia del método **constructor**, se arrojará un *SyntaxError*.

Un **constructor** puede usar la palabra reservada **super** para llamar al constructor de una *superclase*.

#### Métodos prototipo

~~~js
    class Poligono {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }

        calcArea() {
            return this.height * this.width;
        }

        getarea() {
            return this.calcArea();
        }
    }

    const cuadrado = new Poligono(10, 10);

    console.log(cuadrado.area);
~~~

En este ejemplo podemos ver como a la clase *Poligono* se le han añadido dos métodos:

* ***calcArea()***: Devuelve el resultado de multiplicar el atributo *height* por el atributo *width*.
* ***getarea()***: Devuelve el valor retornado por el método *calcArea()*.

#### Métodos estáticos

La palabra clave *stati*c define un método estático para una clase. Los métodos estáticos pueden ser llamados sin instanciar la clase ni una vez instanciada. Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.

~~~js
    class Punto {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        static distancia(a, b) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;

            return Math.sqrt(dx*dx + dy*dy);
        }
    }

    const p1 = new Punto(5, 5);
    const p2 = new Punto(10, 10);

    console.log(Punto.distancia(p1, p2));
~~~


## Herencia (subclases con *extends*)

La palabra clave *extends* es usada en *declaraciones de clase* o *expresiones de clase* para crear una clase hija.

~~~js
    class Animal {
        constructor(nombre) {
            this.nombre = nombre;
        }

        hablar() {
            console.log(this.nombre + ' hace un ruido.');
        }
    }

    class Perro extends Animal {
        hablar() {
            console.log(this.nombre) + ' ladra.';
        }
    }
~~~

También se pueden extender las clases tradicionales basadas en funciones:

~~~js
    function Animal (nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.hablar = function () {
        console.log(this.nombre + 'hace un ruido.');
    }

    class Perro extends Animal {
        hablar() {
            super.hablar();
            console.log(this.nombre + ' ladra.');
        }
    }

    var p = new Perro('Mitzie');
    p.hablar();
~~~

Destacar que las clases no pueden extender objectos regulares (literales). Si se quiere heredar de un objecto regular, se debe user *Object.setPrototypeOf()::* de la siguiente forma:

~~~js
    var Animal = {
        hablar() {
            console.log(this.nombre + 'hace ruido.');
        }
    };

    class Perro {
        constructor(nombre) {
            this.nombre = nombre;
        }
        hablar() {
            console.log(this.nombre + ' ladra.');
        }
    }

    Object.setPrototypeOf(Perro.prototype, Animal);

    var d = new Perro('Mitzie');
    d.hablar();
~~~

### Llamadas a la superclase con *super*

La palabra clave *super* es usada para llamar a funciones del objeto padre:

~~~js
    class Gato { 
        constructor(nombre) {
            this.nombre = nombre;
        }

        hablar() {
            console.log(this.nombre + ' hace ruido.');
        }
    }

    class Leon extends Gato {
        hablar() {
            super.hablar();
            console.log(this.nombre + ' maulla.');
        }
    }
~~~

Para llamar al constructor de la superclase, simplemente hacer una llamada a *super("parametros")*, donde "parametros" se sustituye por los parámetros correspondientes que se le quieran pasar al constructor de la clase (en caso de que sean necesarios).
