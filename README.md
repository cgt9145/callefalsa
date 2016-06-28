# callefalsa123
Es un script que recibe tres rutas para comprimir imágenes y mantener la estructura

##Requisitos
Para ustilizar se necesita
* [NodeJs]
* [Gruntjs]

##Como usar

Al momento de ejecutar el sh, se le deben pasar 3 parametros

 - [1] Ruta en donde se encuentran las imágenes
 - [2] Ruta donde se encuentra el script de Grunt en la carpeta imgOrg/
 - [3] Peso de las imágenes

Ejemplo: ./traeimagenes.sh ~/Documentos/dir/ /dirtarea/imgOrg/ 200

##Para utilizar la tarea de grunt se debe ejecutar

Instalar las dependencias con el comando "*npm install*"

Darle permisos de ejecución al archivo treimagenes.sh "*chmod +x traeimagenes.sh*"