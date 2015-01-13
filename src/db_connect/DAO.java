package db_connect;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.List;


public class DAO {
	private Connection con = null;
	
	//one ResultSet object per Statement object can be open at the same time.
	//A table of data representing a database result set,
	//which is usually generated by executing a statement that queries the database.
	private ResultSet rs = null;
	
	private PreparedStatement pst = null;
	
	public DAO(){
		DB_Connect db = new DB_Connect();
		con = db.connection;
	}
	
	
	public ResultSet query(String sql,List<HashMap> value){
		try {
			pst = con.prepareStatement(sql);
			
		} catch (Exception e) {
			System.out.println("Exception is , " + e);
		} finally {
			return rs;
		}
	}
	
	/**
	 * Destroy all SQL connection object
	 */
	public void closeDBConnection() {
		try {
			rs.close();
			pst.close();
			con.close();
		} catch(Exception e) {
			System.out.println("Exception is , " + e);
		}
	}
	
}
