/*
 * Ruben Aleman 5/5
 * Yonuel Guerrero 5/5
 */
package liveCode03;

import java.util.Scanner;

public class MangosNaranjasMain {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese el número de mangos y naranjas separados por un espacio:");
        int mangos = scanner.nextInt();
        int naranjas = scanner.nextInt();

        MangosNaranjas cajas = new MangosNaranjas(mangos, naranjas);
        cajas.imprimir();
	}

}
