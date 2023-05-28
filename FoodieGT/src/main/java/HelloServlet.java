

import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;


import dataAccessLayer.EmbeddedNeo4j;

/**
 * Servlet implementation class HelloServlet
 */
@WebServlet("/HelloServlet")
public class HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelloServlet() {
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
		 	
		 	JSONObject  restaurantes = new JSONObject ();
		 	
		 	JSONArray arrrest = new JSONArray();
		 	
		 	try ( EmbeddedNeo4j greeter = new EmbeddedNeo4j( "bolt://52.205.254.112:7687", "neo4j", "investigations-signals-wages" ) )
		        {
				 	LinkedList<String> myrestaurants = greeter.getRestaurants();
				 	
				 	for (int i = 0; i < myrestaurants.size(); i++) {
				 		String[] r = myrestaurants.get(i).split(";");
				 		
				 		restaurantes.put("Nombre",r[0]);
				 		restaurantes.put("Ubicacion",r[1]);
				 		restaurantes.put("Precio",r[2]);
				 		restaurantes.put("TipoDeComida",r[3]);
				 		restaurantes.put("Ambiente",r[4]);
				 		restaurantes.put("TipoDeServicio",r[5]);
				 		restaurantes.put("Horario",r[6]);
				 		restaurantes.put("web",r[7]);
				 		restaurantes.put("img1",r[8]);
				 		restaurantes.put("img2",r[9]);
				 		restaurantes.put("img3",r[10]);
				 		arrrest.add(restaurantes);
					 	
				 		
				 	}
				 	
		        	
		        } catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		 	myResponse.put("Restaurantes", arrrest);
		 	myResponse.put("conteo", arrrest.size()); 
		 	//Guardo la cantidad de actores
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
