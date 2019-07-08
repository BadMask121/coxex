package com.acecorps.errorHandler;

import java.util.HashMap;
import java.util.Map;

public class CoxexErrorResult {
	

	
	public static Map<String, Object> sendError(String message){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("error", message);
		return result;
	}
}
