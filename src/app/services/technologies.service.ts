import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  public techList = [
    {
      name:"angular",
      logo:"assets/angular.png",
      description:"Uso Angular en el desarrollo Frontend de aplicaciones web medianas o grandes."
    },
    {
      name:"git",
      logo:"assets/git.png",
      description:"Git para el control de versiones de mis proyectos, facilitando además el trabajo en equipo."
    },
    {
      name:"github",
      logo:"assets/github-white.png",
      description:"Uso Github para alojar mis repositorios Git y compartir mi codigo con la comunidad."
    },
    {
      name:"sass",
      logo:"assets/sass.png",
      description:"Sass expande las funcionalodades de css, ayudandome a crear sitios geniales."
    },
    {
      name:"posgres",
      logo:"assets/postgres.png",
      description:"Postgres es uno de los sistemas que uso para almacenar y gestionar los datos de mis apps."
    },
    {
      name:"javascript",
      logo:"assets/javascript.png",
      description:"Uso Javascript tanto en el Frontend de la mano de HTML como en el Backend con Nodejs."
    },
    {
      name:"typescript",
      logo:"assets/typescript.png",
      description:"Typescript en conjunto con Angular me permite lograr aplicaciones mas mantenibles y escalables."
    },
    {
      name:"html",
      logo:"assets/html.png",
      description:"HTML y CSS son indispensables para dar estructura y estilo a practicamente cualquier sitio web."
    },
    {
      name:"php",
      logo:"assets/php.png",
      description:"Php es una de las alternativas que uso para desarrollar mis aplicaciones web."
    },
    {
      name:"java",
      logo:"assets/java.png",
      description:"Ademas de usar Java con Springboot para el backend he creado aplicaciones con Swing."
    },
    {
      name:"springboot",
      logo:"assets/springboot.png",
      description:"He usado Spring Boot para crear APIs que sirvan o almacenen los datos de mis apps Frontend."
    },
    {
      name:"nodejs",
      logo:"assets/nodejs.png",
      description:"Nodejs es otra de las tecnologias de backend que uso para crear mis propias API REST."
    },
    {
      name:"mysql",
      logo:"assets/mysql.png",
      description:"Uso Mysql en algunos de mis proyectos para gestionar las bases de datos."
    }
  ]

}
