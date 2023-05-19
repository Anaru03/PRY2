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
	
	
	
}
