/*
 * Ruben Aleman 5/5
 * Yonuel Guerrero 5/5
 */
package liveCode04;

public class FizzBuzz {


		public static void main(String[] args) {
			int cantidadNumeros = 100;
			FizzBuzzCheck(cantidadNumeros);
		}
		
		public static void FizzBuzzCheck(int numeros) {
			for (int i=1;i<=numeros;i++) {
				if((i%3==0)&&(i%5==0))
					System.out.println("FizzBuzz");
				else if(i%3==0)
					System.out.println("Fizz");
				else if(i%5==0)
					System.out.println("Buzz");
				else
					System.out.println("N. "+i);
			}
		}

	}
