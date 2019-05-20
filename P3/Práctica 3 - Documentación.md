# Práctica 3	

### DOCUMENTACIÓN - DISEÑO DE AgendaUGR(Prototipado)

- Nombre del Equipo: **Isótopos**
- Germán Casto Montes - *germancastro@correo.ugr.es*

- Jorge Gutiérrez Segovia - *saytes@correo.ugr.es*
- DIU 1 - Martes 15:30

### Índice

1. [Herramientas seleccionadas y Diseño del Layout.](#herramientas)
2. [Guía de estilos y patrones utilizados.](#estilos)
3. [Simulación de datos.](#simulacion)
4. [Comentarios y conclusión.](#conclusion)

### Herramientas Seleccionadas y Diseño del Layout <a name="herramientas"></a>

---

Para el desarrollo del prototipo de nuestra plataforma de eventos de la UGR hemos utilizado [MD Bootstrap](https://mdbootstrap.com/), el cual está basado en [Bootstrap](https://getbootstrap.com/).
El motivo para decantarse por esta solución es la potencia que ofrece. Contamos con los estilos y la sintaxis de bootstrap, pero añadiendo una capa de mayor personalización y estilos a un mínimo coste.

Además, tanto bootstrap como MD bootstrap se adecuan perfectamente a la solución que buscamos. Un potente framework CSS con una gran cantidad de recursos integrados y un sistema de grid sencillo, con el que adaptar el contenido a dispositivos móviles con un esfuerzo reducido.
Ambas herramientas cuentan con [snippets](https://mdbootstrap.com/snippets/) y generadores de formas para facilitar el desarrollo.

El desarrollo de la plataforma se ha realizado en Visual Studio Code, un potente editor con gran cantidad de plugins. También cuenta por defecto con [Emmet](https://emmet.io/), haciendo la programación HTML menos tediosa.

<div style="page-break-after: always;"></div>

### Guía de estilos y patrones utilizados<a name="estilos"></a>

---

Para el desarrollo de nuestra plataforma se ha empleado HTML junto con CSS para algunos estilos y javascript para algunas funcionalidades.

Empleamos un sistema grid de 12 columnas. En la mayoría de casos, el estilo ha sido definido empleando las reglas de bootstrap sobre el HTML, aunque para algunos detalles hemos empleado reglas CSS.

Todos los estilos han sido diseñados intentando mantener un estilo agradable e intuitivo tanto en dispositivos móviles como en laptops. Un ejemplo de esto es la barra de navegación, que se ocultará en dispositivos como una tablet o de menor tamaño.

Siguiendo algunos enlaces de la documentación proveída por el profesor, se muestra en la página principal un carrusel de tarjetas con algunos eventos de posible interés para cualquier usuario que visite la página.

También se emplean modales en el formulario de búsqueda de eventos y en los detalles del evento en el que se haga click.

Nos hemos decidido por crear una web minimalista, evitando sobrecargas e información inverosímil para el usuario medio. Se emplea el color blanco como fondo, y el color `elegant`, un tipo de negro ofrecido por MDbootstrap

Se emplea *OpenSans* como fuente predeterminada, ya que es la más recomendada a la hora de mostrar grandes textos, facilitando la lectura al usuario.
En el header se ha empleado la fuente *Marck Script*. Se trata de una fuente "handwrite" elegante que no destaca de forma exagerada.

<div style="page-break-after: always;"></div>

### Simulación de datos<a name="simulacion"></a>

---

Como simulación de datos hemos incluído los siguientes:
- Información real sobre actividades de Ocio y talleres.
- Información real sobre Conferencias.
- Información real sobre Exposiciones.
- Noticias reales incluídas en el apartado de Canal UGR.
- Noticias reales incluídas en el apartado de Hoja Informativa.

Todos los datos incluídos han sido extraídos de la página de [Canal UGR](https://canal.ugr.es/).  

### Comentarios y conclusión<a name="conclusión"></a>

---


Esta práctica ha resultado de lo más interesante, ya que nos obliga a pensar en como mostrar al usuario aquello que queremos que vea, a darnos cuenta de detalles que mejoran la calidad de la navegación y otros que la entorpecen. 

Así, hemos mostrado una parte más personal, ya que la página ha sido desarrollada teniendo en cuenta elementos prefijados, pero con un estilo muy propio. Esto nos enseñará que cosas mejorar y que cosas mantener para un futuro.

Por otro lado, gracias a las herramientas propuestas, el desarrollo de la práctica se ha hecho mucho más ameno y entretenido. Además, estás herramientas son tremendamente útiles, y reducirán enormemente el tiempo empleado en futuros proyectos.

Un detalle ha destacar es que entre los diseños de la práctica 2 y el diseño final de la práctica 3 ha habido un gran número de cambios. Podemos deducir que las IU deben estar en constante evolución (aunque sea de forma muy lenta), ya que los gustos y usuarios cambian continuamente.

Finalmente, la página web ha sido alojada en Github, en un repositorio llamado DIU2019(enlace a la página [aquí](https://saytes.github.io/DIU2019/P3/index.html)), y este ha sido enlazado al repositorio de la Asignatura propuesto (DIU19).




