package com.acecorps.errorHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class CoxexCustomException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	String message;
	public CoxexCustomException(String message) {
		super(message);
	}
			
}
