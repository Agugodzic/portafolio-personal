import { Injectable } from '@angular/core';
import { Proyect } from '../models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  public proyectList:Proyect[] = [
    {
      image:"assets/previews/personalnotes/personalnotes1.png",
      title:"Personal Notes",
      text:"Puedes registrarte o logearte para crear, editar y eliminar notas rápidas. Además permite cambiar la imagen de fondo y el tema (claro/oscuro).",
      technologies:[
        "PHP",
        "Javascript",
        "Html/Css",
        "PosgreSQL"
      ],
      previews:[
        "assets/previews/personalnotes/personalnotes1.png",
        "assets/previews/personalnotes/personalnotes2.png",
        "assets/previews/personalnotes/personalnotes3.png",
        "assets/previews/personalnotes/personalnotes4.png"
      ],
      repository: "https://github.com/Agugodzic/personal-notes-php",
      url:"",
    },
    {
      image:"assets/previews/wsplink/wsplink1.png",
      title:"Whatsapp link generator",
      text:"Al ingresar un número y un mensaje, esta web crea un link personalizado a Wsp. Además genera un botón html/css para colocar en tu Web.",
      technologies:[
        "PHP",
        "Javascript",
        "Html/Css"
      ],
      previews:[
        "assets/previews/wsplink/wsplink1.png",
        "assets/previews/wsplink/wsplink2.png",
        "assets/previews/wsplink/wsplink3.png",
        "assets/previews/wsplink/wsplink4.png"
      ],
      repository: "https://github.com/Agugodzic/wsp-link-generator-PHP",
      url:"https://wsp-link-generator-php-production.up.railway.app/",
    },
    {
      image:"assets/previews/pupitapetshop/pupita1.png",
      title:"Pupita Pet Shop",
      text:"Pet Shop autogestionable con carrito de compras y sistema de pagos. Permite agregar y editar productos. Comunicación Http con Backend en NodeJs.",
      technologies:[
        "Angular",
        "Typescript",
        "NgRx"
      ],
      previews:[
        "assets/previews/pupitapetshop/pupita1.png",
      ],
      repository: "https://github.com/Agugodzic/PupitaPetShop",
      url:"",
    },
    {
      image:"assets/previews/portafolio/portafolio1.png",
      title:"Portafolio personal",
      text:"Se trata de este portafolio, está desarrollado en Angular usando Scss para el estilo. Tiene la finalidad de presentarme y mostrar mis proyectos.",
      technologies:[
        "Angular",
        "Typescript",
        "Sass"
      ],
      previews:[
        "assets/previews/portafolio/portafolio1.png",
        "assets/previews/portafolio/portafolio2.png",
        "assets/previews/portafolio/portafolio3.png",
        "assets/previews/portafolio/portafolio4.png"
      ],
      repository: "",
      url:"",
    },
    {
      image:"assets/previews/pupitaback/pupitaback.png",
      title:"Checkout Mercado Pago",
      text:"Puedes usar este código en tu Backend siguiendo algunas instrucciones. Permite implementar de forma rápida la api de mercado pago.",
      technologies:[
        "NodeJs",
        "Express",
        "MySql",
        "JavaScript",
        "MercadoPago"
      ],
      previews:[

      ],
      repository: "https://github.com/Agugodzic/CheckOut-MercadoPago-public",
      url:"",
    },
    {
      image:"assets/previews/notesadmin/notesadmin2.png",
      title:"Personal Notes AdminPanel",
      text:"Permite la gestión de usuarios de la Web Personal Notes por parte de un uno o varios administradores.",
      technologies:[
        "Java",
        "Swing",
        "PosgreSQL"
      ],
      previews:[
        "assets/previews/notesadmin/notesadmin2.png",
        "assets/previews/notesadmin/notesadmin1.png"
      ],
      repository: "",
      url:"",
    },
    {
      image:"assets/previews/pupitaback/pupitaback.png",
      title:"Pupita Pet Shop Backend",
      text:"Backend para Pupita Pet Shop. Recibe peticiones HTTP y devuelve los recursos solicitados (Productos, categorías, etc). Implementa además la api de mercado pago.",
      technologies:[
        "NodeJs",
        "Express",
        "MySql",
        "JavaScript",
        "MercadoPago"
      ],
      previews:[
        "assets/previews/pupitaback/pupitaback.png"
      ],
      repository: "",
      url:"",
    }
  ];
}
