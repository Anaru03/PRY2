

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.LinkedList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import dataAccessLayer.EmbeddedNeo4j;
import dataAccessLayer.Restaurante;

/**
 * Servlet implementation class SearchRestaurants
 */
@WebServlet("/SearchRestaurants")
public class SearchRestaurants extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchRestaurants() {
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
	 	
	 	ArrayList<Restaurante> arrRest = new ArrayList();
	 	
	 	String ubicacion = request.getParameter("ubicacion");
	 	String precio = request.getParameter("precio");
	 	String tipoComida = request.getParameter("tipoComida");
	 	String ambiente = request.getParameter("ambiente");
	 	String servicio = request.getParameter("servicio");
	 	String horario = request.getParameter("horario");
	 	
	 	try ( EmbeddedNeo4j greeter = new EmbeddedNeo4j( "bolt://52.91.190.166:7687", "neo4j", "kilometer-raise-capabilities" ) )
	        {
			 	LinkedList<Restaurante> myrestaurants = greeter.getSearch(ubicacion,precio,tipoComida,ambiente,servicio,horario);
	 		//LinkedList<Restaurante> myrestaurants = greeter.getSearch("10","Gama alta","Comida internacional","Negocios","Domicilio","Almuerzo");
			 	for (int i = 0; i < myrestaurants.size(); i++) {
			 		JSONObject caracteristicasRestaurantes = new JSONObject();
			 		
			 		caracteristicasRestaurantes.put("nombre", myrestaurants.get(i).getNombre());
			 		caracteristicasRestaurantes.put("ubicacion", myrestaurants.get(i).getUbicacion());
			 		caracteristicasRestaurantes.put("precio", myrestaurants.get(i).getPrecio());
			 		caracteristicasRestaurantes.put("tipoComida", myrestaurants.get(i).getTipoComida());
			 		caracteristicasRestaurantes.put("ambiente", myrestaurants.get(i).getAmbiente());
			 		caracteristicasRestaurantes.put("tipoServicio", myrestaurants.get(i).getTipoServicio());
			 		caracteristicasRestaurantes.put("horarios", myrestaurants.get(i).getHorarios());
			 		caracteristicasRestaurantes.put("web", myrestaurants.get(i).getWeb());
			 		caracteristicasRestaurantes.put("img1", myrestaurants.get(i).getImg1());


			 		arrrest.add(caracteristicasRestaurantes);
			 		
			 		
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
