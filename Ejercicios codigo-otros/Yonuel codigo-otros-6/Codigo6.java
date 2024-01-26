/*
 * Ruben Aleman 5/5
 * Yonuel Guerrero 5/5
 */
package codigoOtros6;

import java.util.Scanner;

public class Codigo6 {
	 public static void main(String[] args) {
	        int[] n = new int[20];

	        for (int i = 0; i < 20; i++) {
	            n[i] = (int) (Math.random() * 381) + 20;
	            System.out.print(n[i] + " ");
	        }

	        System.out.println("\n¿Qué números quiere resaltar? ");
	        System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");

	        // Using Scanner to read input
	        Scanner scanner = new Scanner(System.in);
	        int opcion = scanner.nextInt();

	        int multiplo = (opcion == 1) ? 5 : 7;

	        for (int e : n) {
	            if (e % multiplo == 0) {
	                System.out.print("[" + e + "] ");
	            } else {
	                System.out.print(e + " ");
	            }
	        }

	        // Close the scanner
	        scanner.close();
	    }
	}

	/*int[] n = int[20]; cambiado a int[] n = nuevo int[20]; para inicializar correctamente la matriz.
	for (int i = 0; i < 20; i+) cambió a for (int i = 0; i < 20; i++) para corregir el error de sintaxis.
	System.print cambió a System.out.print y System.printl cambió a System.out.println.
	System.in.print cambió a System.out.print.
	int multiplo = (opción == 1): 5? 7; cambiado a int multiplo = (opcion == 1)? 5: 7; para corregir la sintaxis del operador ternario.
	Se cambió foreach (char e: n) a for (int e: n) para obtener la sintaxis correcta del bucle for mejorado.*/
