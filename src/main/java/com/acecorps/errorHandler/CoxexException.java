package com.acecorps.errorHandler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.json.*;

@ControllerAdvice
public class CoxexException {
	
	@ExceptionHandler(value = CoxexErrorHandler.class)
	public ResponseEntity<Object> exception(CoxexErrorHandler exception){
		HashMap<String, String> req  = new HashMap<String, String>();
		req.put("error", "Invalid Request Method");
		return new ResponseEntity<Object>(req , HttpStatus.METHOD_NOT_ALLOWED);
	}

	@ExceptionHandler(value = CoxexCustomException.class)
	public ResponseEntity<Object> exception(CoxexCustomException exception){
		HashMap<String, String> req  = new HashMap<String, String>();
		req.put("error", exception.getMessage());
		return new ResponseEntity<Object>(req , HttpStatus.METHOD_NOT_ALLOWED);
	}
	
}
