package com.acecorps.controller;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acecorps.errorHandler.CoxexCustomException;
import com.acecorps.errorHandler.CoxexErrorHandler;
import com.acecorps.model.User;
import com.acecorps.model.dao.UserDAO;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping( path = "/request" , consumes = "application/json")
public class UserController {

	
	@Autowired
	UserDAO userdao;

	HttpStatus httpStatus;
	
	
	@GetMapping( path = "/{pages}")
	public ResponseEntity<Object> invalidMethod(){
		throw new CoxexErrorHandler();
	}
	
	
	@PostMapping("/signup")
	public User signup(@Valid @RequestBody User user) {		
		if (userdao.isUserExist(user , "email")) {
			throw new CoxexCustomException("errorRegistered");
		}
		if(user.getPassword().length() < 6 )
			throw new CoxexCustomException("errorPassword");
		
		return userdao.create(user);
	}
	
	
	@PostMapping("/login")
	public Map<String , Object> login(@Valid @RequestBody User user) {
		return userdao.login(user);
	}
	
}
