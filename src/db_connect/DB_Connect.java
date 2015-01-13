package db_connect;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 * DB Connection Bean
 * @author Banana
 * @version 0.1 
 */
public class DB_Connect {
	

		
	//connection object
	Connection connection = null;
	
	/**
	 *  connect to database by jdbc driver	
	 */
	public DB_Connect() {
		try {
			//new DB config object
			Database_Config db = new Database_Config();
			
			// Load the database driver
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			
			// Get a Connection to the database
			connection = DriverManager.getConnection(db.DB_URL, db.USER, db.PASS);
		} catch(Exception e) {
			System.out.println("Exception is , " + e);
		}
	}

	
	

	
	
	
	
}
