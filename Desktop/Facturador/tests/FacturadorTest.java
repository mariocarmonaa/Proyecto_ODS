import org.junit.jupiter.api.Test;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import static org.junit.jupiter.api.Assertions.*;

public class FacturadorTest {
    
    @Test
    public void testSalidaCompletaFacturador() {
        // Redirigir System.out para capturar la salida
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PrintStream originalOut = System.out;
        System.setOut(new PrintStream(outputStream));
        
        try {
            // Ejecutar el main
            Facturador.main(new String[]{});
            
            String salida = outputStream.toString();
            
            // Verificar que contiene los elementos esperados
            assertTrue(salida.contains("FACTURA DE ACTUACIONES"));
            assertTrue(salida.contains("Cliente: Ayuntamiento de Badajoz"));
            assertTrue(salida.contains("BASE IMPONIBLE: 72800.0"));
            assertTrue(salida.contains("IVA (21%): 15288.00"));
            assertTrue(salida.contains("TOTAL FACTURA: 88088.00"));
            assertTrue(salida.contains("Créditos obtenidos: 4108"));
            
        } catch (Exception e) {
            fail("No debería lanzar excepción: " + e.getMessage());
        } finally {
            // Restaurar System.out
            System.setOut(originalOut);
        }
    }
    
    @Test
    public void testCabeceraYCliente() {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PrintStream originalOut = System.out;
        System.setOut(new PrintStream(outputStream));
        
        try {
            Facturador.main(new String[]{});
            String salida = outputStream.toString();
            
            assertTrue(salida.contains("FACTURA DE ACTUACIONES"));
            assertTrue(salida.contains("Cliente: Ayuntamiento de Badajoz"));
        } catch (Exception e) {
            fail("Excepción inesperada");
        } finally {
            System.setOut(originalOut);
        }
    }
}