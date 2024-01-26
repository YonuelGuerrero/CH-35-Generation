/*
 * Ruben Aleman 5/5
 * Yonuel Guerrero 5/5
 */
package liveCode03;

public class MangosNaranjas {

//atributos
public int mangos;
public int naranjas;

//constructor
public MangosNaranjas(int mangos, int naranjas) {
	this.mangos = mangos;
	this.naranjas = naranjas;
}
	
//metodo para calcular el divisor y sacar las cajas
public int calcularDivisor(int n1, int n2) {
	while (n2 != 0) {
		int valor = n2;
		n2 = n1 % n2;
		n1 = valor;
	}
	return n1;
}

//metodo para imprimir 
public void imprimir() {
	int divisor = calcularDivisor (mangos, naranjas);
	int cajas = divisor;
	int mangosPorCaja = mangos / divisor;
	int naranjasPorCaja = naranjas / divisor;
	
	System.out.println("El numero de cajas es: " + cajas);
	System.out.println("El numero de mangos en una caja es: " + mangosPorCaja);
	System.out.println("El numero de naranjas en una caja es es: " + naranjasPorCaja);
	
}



	
}//class
