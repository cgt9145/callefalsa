  module.exports = function(grunt) {

  var mozjpeg = require('imagemin-mozjpeg');  
    // Configuración del proyecto.
      grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
		  
          //Tarea para comprimir imagenes
           tinypng: {
             options: {
               // Task-specific options go here.
                //Llave que se genera en https://tinypng.com/developers
                apiKey: "fMEfB24P4HA-2kgrTbTssMz194T2Iw6Q",
                checkSigs: true,
                sigFile: 'file_sigs.json',
                summarize: true,
                showProgress: true,
                stopOnImageError: true
            },
           compress: {
            expand: true,
            src: ['**/*.{png,jpg}'],
            cwd: 'imgOrg/',
            dest: 'imgCom/',
           },
         },
        
        }); 
          
      //Cargar tareas
      grunt.loadNpmTasks('grunt-tinypng');
      // Definición de las tareas.
      grunt.registerTask('default', ['tinypng']);


  };