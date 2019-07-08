package com.acecorps.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.acecorps.errorHandler.CoxexCustomException;
import com.acecorps.errorHandler.CoxexErrorHandler;
import com.acecorps.model.User;
import com.acecorps.model.dao.PatentDAO;
import com.acecorps.model.dao.UserDAO;
import com.acecorps.repository.UserRepo;

@RestController
public class RequestFactory {

	
	@Autowired
	UserDAO userdao;
	PatentDAO patentdao;

	HttpStatus httpStatus;
	
	
	@GetMapping( path = "/{pages}")
	public ResponseEntity<Object> invalidMethod(){
		throw new CoxexErrorHandler();
	}
	
	@GetMapping("/")
	public ResponseEntity<Object> notAllowedPage(){
		throw new CoxexErrorHandler();
	}
}
