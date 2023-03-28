import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cifrado-cesar';

  cifrar() {
    let frase:any = (document.getElementById("input-cifrado") as HTMLInputElement).value;
    let pocision:any =  (document.getElementById('input-cifrado-number')as HTMLInputElement).value;

    console.log(frase,pocision);
    let letra,
      respuesta = '';

    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    //Rotamos el alfabeto [pocision] lugares a la derecha
    let cifrado = alfabeto.slice(+pocision);


    // cifrado += alfabeto.slice(0, alfabeto.length - pocision);
    cifrado += alfabeto.slice(0, alfabeto.length + pocision);


    //Coge la letra del cifrado según la posición de cada letra

    //en alfabeto

    for (let i = 0; i < frase.length; i++) {
      letra = frase[i].toLowerCase();

      if (letra == ' ') {
        letra = ' ';
      } else {
        letra = cifrado[alfabeto.indexOf(letra)];
      }

      respuesta += letra;
    }
    alert(`Clave cifrada: ${respuesta}`)
    return respuesta;
  }

  descifrar() {

    let frase:any = (document.getElementById("input-cifrado2") as HTMLInputElement).value;
    let clave:any =  (document.getElementById('input-cifrado-number2')as HTMLInputElement).value;
    let letra,
      respuesta = '';

    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    let cifrado = alfabeto.slice(+clave);

    cifrado += alfabeto.slice(0, alfabeto.length + clave);

    for (let i = 0; i < frase.length; i++) {
      letra = frase[i].toLowerCase();

      if (letra == ' ') {
        letra = ' ';
      } else {
        letra = alfabeto[cifrado.indexOf(letra)];
      }

      respuesta += letra;
    }
    alert(`Clave descifrada: ${respuesta}`)
    return respuesta;
  }
}
