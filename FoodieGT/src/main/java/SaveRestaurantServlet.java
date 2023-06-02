

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import dataAccessLayer.EmbeddedNeo4j;

/**
 * Servlet implementation class SaveRestaurantServlet
 */
@WebServlet("/SaveRestaurantServlet")
public class SaveRestaurantServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveRestaurantServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
	 	response.setContentType("application/json");
	 	response.setCharacterEncoding("UTF-8");
	 	JSONObject myResponse = new JSONObject();
	 	
	 	JSONArray insertionResult = new JSONArray();
	 	
	 	String nombre = request.getParameter("nombre");
	 	String img1 = request.getParameter("img1");
	 	String ubicacion = request.getParameter("ubicacion");
	 	String precio = request.getParameter("precio");
	 	String tipoComida = request.getParameter("tipoComida");
	 	String ambiente = request.getParameter("ambiente");
	 	String servicio = request.getParameter("servicio");
	 	String horario = request.getParameter("horario");
	 	
	 	 try ( EmbeddedNeo4j neo4jDriver = new EmbeddedNeo4j( "bolt://52.91.190.166:7687", "neo4j", "kilometer-raise-capabilities" ) )
	        {
			 	String myResultTx = neo4jDriver.insertRestaurant(nombre, img1, ubicacion, precio, tipoComida, ambiente, servicio, horario);
	        	
			 	myResponse.put("resultado", myResultTx);
	        } catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				myResponse.put("resultado", "Error: " + e.getMessage());
			}
	 	
	 	
	 	out.println(myResponse);
	 	out.flush();
	}
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
