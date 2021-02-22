package es.unex.tests.dao;
import static org.junit.Assert.assertEquals;

import java.sql.Connection;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import es.unex.giiis.pi.model.Category;
import es.unex.giiis.pi.model.User;
import es.unex.giiis.pi.dao.CategoryDAO;
import es.unex.giiis.pi.dao.JDBCCategoryDAOImpl;
import es.unex.giiis.pi.dao.JDBCUserDAOImpl;
import es.unex.giiis.pi.dao.UserDAO;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)

public class TestCategoryDAO {

	static DBConn dbConn;
	static CategoryDAO categoryDAO;
	static Connection conn;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		dbConn = new DBConn();
		conn = dbConn.create();
	    categoryDAO = new JDBCCategoryDAOImpl();
		categoryDAO.setConnection(conn);
	}
	
	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		
		dbConn.destroy(conn);
	    
	}

	@Before
	public void setUpBeforeMethod() throws Exception {
	
	}

	@Test
	public void test1BaseData() {
		Category category00 = categoryDAO.get(0);
		assertEquals(category00.getId(),0);
		assertEquals(category00.getName(),"home");
		
		Category category01 = categoryDAO.get(1);
		assertEquals(category01.getId(),1);
		assertEquals(category01.getName(),"computers");
		
		Category category02 = categoryDAO.get(2);
		assertEquals(category02.getId(),2);
		assertEquals(category02.getName(),"electronic");

		Category category03 = categoryDAO.get(3);
		assertEquals(category03.getId(),3);
		assertEquals(category03.getName(),"phones");

		Category category04 = categoryDAO.get(4);
		assertEquals(category04.getId(),4);
		assertEquals(category04.getName(),"sports");
	}
	
	
	@Test
	public void test2Add(){
		Category category01 = new Category();
		category01.setName("newCategory");
		long value = categoryDAO.add(category01);
		
		Category category02 = categoryDAO.get("newCategory");
		assertEquals(category01.getName(),category02.getName());
	}
	
	@Test
	public void test3Modify(){
		Category category01 = categoryDAO.get("newCategory");
		category01.setName("newCategoryUpdated");
		categoryDAO.save(category01);
		
		Category category02 = categoryDAO.get("newCategoryUpdated");		
		assertEquals(category01.getName(),category02.getName());
	}
	
	@Test
	public void test4Delete(){
		 Category category01 = categoryDAO.get("newCategoryUpdated");
		 categoryDAO.delete(category01.getId());
		 
		 Category category02 = categoryDAO.get("newCategoryUpdated");
 		 assertEquals(null, category02);
 		 
 		categoryDAO.getAll();
	}

}
