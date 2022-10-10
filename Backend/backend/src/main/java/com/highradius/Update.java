package com.highradius;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import com.google.gson.Gson;

/**
 * Servlet implementation class update
 */
public class Update extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Update() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HashMap<Object,Object> Response = new HashMap<>();
		
		try {
			String url = "jdbc:mysql://localhost:3306/grey_goose";
			String uname = "root";
			String upassword = "root";
			
			String query = "update winter_internship set business_code=?,cust_number=?,clear_date=?,buisness_year=?,doc_id=?,posting_date=?,document_create_date=?,"
					+ "document_create_date1=?,due_in_date=?,invoice_currency=?,document_type=?,posting_id=?,total_open_amount=?,baseline_create_date=?,"
					+ "cust_payment_terms=?,invoice_id=?,isOpen=?,is_deleted=? where sl_no = ?";
			
			String sl_no = request.getParameter("sl_no");
			String business_code = request.getParameter("business_code");
			String cust_number = request.getParameter("cust_number");
			String clear_date = request.getParameter("clear_date");
			String buisness_year = request.getParameter("buisness_year");
			String doc_id = request.getParameter("doc_id");
			String posting_date = request.getParameter("posting_date");
			String document_create_date = request.getParameter("document_create_date");
			String document_create_date1 = request.getParameter("document_create_date1");
			String due_in_date = request.getParameter("due_in_date");
			String invoice_currency = request.getParameter("invoice_currency");
			String document_type = request.getParameter("document_type");
			String posting_id = request.getParameter("posting_id");
			String total_open_amount = request.getParameter("total_open_amount");
			String baseline_create_date = request.getParameter("baseline_create_date");
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			String invoice_id = request.getParameter("invoice_id");
		  	String isOpen = request.getParameter("isOpen");
			String is_deleted = request.getParameter("is_deleted");
			
			  
					
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url,uname,upassword);
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setString(1,business_code);
			ps.setString(2,cust_number);
			ps.setString(3,clear_date);
			ps.setString(4,buisness_year);
			ps.setString(5,doc_id);
			ps.setString(6,posting_date);
			ps.setString(7,document_create_date);
			ps.setString(8,document_create_date1);
			ps.setString(9,due_in_date);
			ps.setString(10,invoice_currency);
			ps.setString(11,document_type);
			ps.setString(12,posting_id);
			ps.setString(13,total_open_amount);
			ps.setString(14,baseline_create_date);
			ps.setString(15,cust_payment_terms);
			ps.setString(16,invoice_id);
			ps.setString(17,isOpen);
			ps.setString(18,is_deleted);
			ps.setString(19,sl_no);


			if(ps.executeUpdate()>0) {
				Response.put("insert", true);
			}else {
				Response.put("insert", false);
			}
			
			Gson gson = new Gson();
			String gsonResponse = gson.toJson(Response);
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().append(gsonResponse);
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
