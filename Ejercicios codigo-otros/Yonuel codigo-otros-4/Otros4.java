package codigoOtros4;
import java.util.Scanner; //se importa el scanner

public class Otros4 {
	public static void main (String[] args) {
		
    Scanner scanner = new Scanner(System.in); //system in 
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String j1 = scanner.nextLine();
    
    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): "); //jugador 2
    Scanner scanner2 = new Scanner(System.in); //system in
    String j2 = scanner.nextLine();
    
    if (j1.equals(j2)) { //se quita 1 parentesis //se reemplaza == por .equals
      System.out.println("Empate");
    } else {
      int g = 2;
      switch(j1) {
        case "piedra":
          if (j2.equals("tijeras")) { //.equals
            g = 1;
          } break; //se agrega break

        case "papel":
          if (j2.equals("piedra")) {
            g = 1;
          } //faltaba una llave
          break; 
        case "tijera":
          if (j2.equals("papel")) {
            g = 1;
          }
          break;//se agrega break
        default:
      }
      System.out.println("Gana el jugador " + g);
    }
  }
}	