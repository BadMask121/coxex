package com.acecorps.miscellenous;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
public class Utility {
	
	private Utility() {}
	
	private StandardPBEStringEncryptor enc; 
	
	private StandardPBEStringEncryptor encryptor() {
		enc = new StandardPBEStringEncryptor();
		enc.setPassword(System.getenv("env_key_93"));
		enc.setAlgorithm("PBEWithMD5AndTripleDES");
		enc.setKeyObtentionIterations(1000);
		enc.setProviderName("SunJCE");
		
		return enc;
	}
	
	public static String encrypt(String message) {
		return new Utility().encryptor().encrypt(message);
	}
	
	
	public static String decrypt(String message) {
		return new Utility().encryptor().decrypt(message);
	}
	
	
	public static boolean isValidEmail(String email) {
          String ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";          
          Pattern pattern = Pattern.compile(ePattern);
          Matcher matcher = pattern.matcher(email);
          return matcher.matches();
   }
	  
}
