package com.acecorps.errorHandler;

public class CoxexCustomException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	String message;
	public CoxexCustomException(String message) {
		super(message);
	}
			
}
