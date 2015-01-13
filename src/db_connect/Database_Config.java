package db_connect;

/**
 * DB connection (data class)
 * @author Banana
 * @version 0.1
 */
public class Database_Config {
	//JDBC driver name and database URL
	final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	
	//DB config
	private String driver = "jdbc";
	private String DB_type = "mysql";
	private String URL = "localhost:3306";
	private String DBName = "simpleonlinegame";
	
	//jdbc:@dbtype://@DBURL/@DBName
	final String DB_URL = driver + ":" + DB_type + "://" + URL + "/" + DBName;
	
	//Database credentials
	final String USER = "root";
	final String PASS = "1234";
	
	
	
}
