package com.highradius;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;

import com.google.gson.Gson;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Servlet implementation class DataLoading
 */
public class DataLoading extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DataLoading() {
        super();
        // TODO Auto-generated constructor stub
    }
    /*
       
     */

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HashMap<Object,Object> Response = new HashMap<>();
		ArrayList<Customer> customers = new ArrayList<>();
		
		try {
			String url = "jdbc:mysql://localhost:3306/grey_goose";
			String uname = "root";
			String upassword = "root";
			
			String query = "select * from winter_internship limit ?";
			
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url,uname,upassword);
			PreparedStatement ps = con.prepareStatement(query);
			ps.setInt(1, 10);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				Customer customer = new Customer(rs.getInt(1),rs.getString(2),rs.getLong(3),rs.getString(4),rs.getInt(5),rs.getLong(6),rs.getString(7),
						            rs.getString(8),rs.getString(9),rs.getString(10),rs.getString(11),rs.getString(12)
						            ,rs.getInt(13),rs.getString(14),rs.getString(15),rs.getString(16),rs.getString(17),rs.getInt(18),rs.getInt(19),
						            rs.getString(20),rs.getInt(21));
				customers.add(customer);
			}
			Response.put("customers", customers); 
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		Gson gson = new Gson();
		String gsonResponse = gson.toJson(Response);
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(gsonResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
