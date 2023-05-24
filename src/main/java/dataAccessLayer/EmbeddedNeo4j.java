package dataAccessLayer;
import org.neo4j.driver.AuthTokens;
import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import org.neo4j.driver.Record;
import org.neo4j.driver.Result;
import org.neo4j.driver.Session;
import org.neo4j.driver.Transaction;
import org.neo4j.driver.TransactionWork;
import org.neo4j.driver.summary.ResultSummary;

import static org.neo4j.driver.Values.parameters;

import java.util.LinkedList;
import java.util.List;

public class EmbeddedNeo4j implements AutoCloseable{
	//Crea un driver
	private final Driver driver;
	
	/**
	 * Constructor del driver
	 * @param uri String de conexion
	 * @param user usuario
	 * @param password contrasenia
	 */
	public EmbeddedNeo4j( String uri, String user, String password )
    {
        driver = GraphDatabase.driver( uri, AuthTokens.basic( user, password ) );
    }
	
	@Override
	public void close() throws Exception {
		// TODO Auto-generated method stub
		
	}
	
	/**
     * Imprime un saludo y crea un nodo Greeting en la base de datos.
     *
     * @param message el mensaje del saludo
     */
	public void printGreeting( final String message )
    {
        try ( Session session = driver.session() )
        {
            String greeting = session.writeTransaction( new TransactionWork<String>()
            {
                @Override
                public String execute( Transaction tx )
                {
                    Result result = tx.run( "CREATE (a:Greeting) " +
                                                     "SET a.message = $message " +
                                                     "RETURN a.message + ', from node ' + id(a)",
                            parameters( "message", message ) );
                    return result.single().get( 0 ).asString();
                }
            } );
            System.out.println( greeting );
        }
    }
	
	public LinkedList<String> getRestaurants(){
		try(Session session = driver.session()){
			LinkedList<String> restaurants = session.readTransaction( new TransactionWork<LinkedList<String>>()
				{
				@Override
                public LinkedList<String> execute( Transaction tx )
                {
                    Result result = tx.run( "MATCH (restaurante:Restaurante) RETURN restaurante.nombre");
                    LinkedList<String> myrestaurants = new LinkedList<String>();
                    List<Record> registros = result.list();
                    for (int i = 0; i < registros.size(); i++) {
                   	 //myactors.add(registros.get(i).toString());
                   	 myrestaurants.add(registros.get(i).get("restaurante.nombre").asString());
                    }
                    
                    return myrestaurants;
                	}	
				
				});
			return restaurants;
		}
	}
	
	public LinkedList<String> getMoviesByLocation(String location){
		return null;
	}
	
}
