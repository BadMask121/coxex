package com.acecorps.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acecorps.errorHandler.CoxexCustomException;
import com.acecorps.errorHandler.CoxexErrorHandler;
import com.acecorps.model.Patent;
import com.acecorps.model.User;
import com.acecorps.model.dao.PatentDAO;
import com.acecorps.model.dao.UserDAO;
import com.acecorps.repository.PatentRepo;

@RestController
@RequestMapping( path = "/request/dashboard" , consumes = "application/json")
public class DashboardController {

	
	@Autowired
	PatentDAO patentdao;
	@Autowired
	UserDAO userdao;

	HttpStatus httpStatus;
	
	
	@GetMapping( path = "/{pages}")
	public ResponseEntity<Object> invalidMethod(){
		throw new CoxexErrorHandler();
	}
	
	
	@PostMapping("/detector")
	public Patent detect(@Valid @RequestBody Patent patent) {
		return patentdao.create(patent);
	}
	
	@PostMapping("/list-patent")
	public List<Patent> listPatent(@Valid @RequestBody Patent patent){
		return patentdao.findByUserId(patent);
	}
	
	
}
