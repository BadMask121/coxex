package com.acecorps.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acecorps.repository.UserRepo;
import com.acecorps.CoxexApplication;
import com.acecorps.errorHandler.CoxexCustomException;
import com.acecorps.errorHandler.CoxexErrorResult;
import com.acecorps.miscellenous.Utility;
import com.acecorps.model.User;

@Service
public class UserDAO {
	private static final Logger log = LoggerFactory.getLogger(CoxexApplication.class);
	
	//autowire User respoitory
	@Autowired
	UserRepo userepo;
		
	// validate and create user data
	public User create(User data) {
		
		String email = data.getEmail();
		String password = data.getPassword();
		
		String encPassword = Utility.encrypt(password);
		
		if(isUserExist(data, "email"))
			throw new CoxexCustomException("errorRegistered");
		
		if(!Utility.isValidEmail(email))
				throw new CoxexCustomException("errorEmail");
		
		if(password.length() < 6 ) //check for password length
				throw new CoxexCustomException("errorPassword");
		
		if(encPassword == null) //check is encrypted password returned null
				throw new CoxexCustomException("failed");
		
		data.setPassword(encPassword);
		return userepo.save(data);
	}
	
	
	//get all data from user table
	public List<User> findAll(){
		return userepo.findAll();
	}
	
	//get a user details by id
	public Optional<User> findById(Long id) {
		return userepo.findById(id);
	}
	
	
	//delete user detials
	public void delete(User user) {
		userepo.delete(user);
	}

	
	//check your detials on params to match with data from User table
	public Map< String , Object> login(User user) {
		
		Map<String, Object> result = new HashMap<String, Object>();
		String matchPassword = null;
		Long id 			 = null;
		String matchEmail = null;
		
		
		
		String getPassword 	 = user.getPassword();
		String email 		 = user.getEmail();
		
		
		if(!Utility.isValidEmail(email))
				return CoxexErrorResult.sendError("failed");
		
		if(!isUserExist(user, "email")) {
			result.put("error" , "failed");
			return result;
		}

		
		if(getPassword.isEmpty())
				return CoxexErrorResult.sendError("errorEmptyPassword");
		
		if(getPassword.length() < 6)
				return CoxexErrorResult.sendError("errorPassword");
	
		List<User> userDetials = userepo.findByEmail(email);

		for (User users : userDetials) {
			matchPassword = users.getPassword();
			id  		  = users.getId();
			matchEmail = users.getEmail();
		}
		
		if(matchPassword.isEmpty())
				return CoxexErrorResult.sendError("Server Error");
		
		matchPassword = Utility.decrypt(matchPassword);
		if( matchPassword.equals(getPassword.trim()) && matchEmail.equals(email)) {
			result.put("id", id);
			result.put("email", user.getEmail());
		}else 
				return CoxexErrorResult.sendError("failed");
			
			
		return result;
	}

	public Map<String, Object> checkSession(User user) {
		Map<String, Object> res = new HashMap<String, Object>();

		if(!isUserExistById(user.getId())) {
			res.put("error", "userNotFound");
			return res;
		}
		
		res.put("response", "success");
		return res;
	}
	
	//check is user exists by id
	public boolean isUserExistById(Long id) {
		Optional<User> userdetail = userepo.findById(id);			
		User user = userdetail.get();
		if(user.getId() == id)
			return true;

		return false;
	}
	
	//check if user exists on the User Table 
	public boolean isUserExist(User user , String by) {
		
		List<User> userdetail = userepo.findByEmail(user.getEmail());

		if(userdetail.size() <= 0)
			return false;
		
		if(userdetail.get(0) != null) 
			return true;
		
		
		return false;
	}



	
	
	
	
}
