#!/bin/bash

echo 'Bienvenido, vamos a copiar las imagenes'

#Ejemplo ~/Documentos/rutaImagenes/

cd $1

echo "Me paso a la ruta del directorio $1"


echo "-----------------------------------------"
#Ejemplo rutaImagenes/
#echo "ruta origen $2"

echo "-----------------------------------------"

#Ejemplo /rutaTareaGrunt/imgOrg
echo "ruta destino $2"
#Copiar archivos mayores
##cd $2
find . -type f  -size +$3k -regex '.*.jpg\|.*.jpeg\|.*png'  -exec cp -p --parents -t$2 {} +



#Contar cantidad de archivos dentro de un directorio
find $2 -type f | wc -l


##ejecuta el script para comprimir
cd $2
cd ../
grunt
