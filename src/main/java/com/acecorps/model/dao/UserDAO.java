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
		
		if(!Utility.isValidEmail(email))
				throw new CoxexCustomException("Invalid Email Address");
		
		if(password.length() > 20 ) //check for password length
				throw new CoxexCustomException("Password lenght must be between 0-20");
		
		if(encPassword == null) //check is encrypted password returned null
				throw new CoxexCustomException("Request failed");
		
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
		
		Map<String, Object> result = new HashMap<>();
		String matchPassword = null;
		Long id 			 = null;
		
		
		
		String getPassword 	 = user.getPassword();
		String email 		 = user.getEmail();
		
		if(!Utility.isValidEmail(email))
				throw new CoxexCustomException("Invalid Email Address");
		
		if(getPassword.isEmpty())
				throw new CoxexCustomException("Password must not be empty");
		
		List<User> userDetials = userepo.findByEmail(email);

		for (User users : userDetials) {
			matchPassword = users.getPassword();
			id  		  = users.getId();
		}
		
		if(matchPassword.isEmpty())
				throw new CoxexCustomException("Server Error");
		
		matchPassword = Utility.decrypt(matchPassword);
		if( matchPassword.equals(getPassword.trim()) ) {
			result.put("id", id);
			result.put("email", user.getEmail());
		}else
			throw new CoxexCustomException("Invalid login credentials");
			
		return result;
	}

	//check is user exists by id
	public boolean isUserExistById(Long id) {
		Optional<User> userdetail = userepo.findById(id);
		
			if(userdetail.isEmpty())
				return false;
			
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
