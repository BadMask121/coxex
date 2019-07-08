package com.acecorps;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class CoxexApplication {
	
	@Value("${allow.cors.url}")
	private String corsURL;
	
	public static void main(String[] args) throws Exception {
		SpringApplication.run(CoxexApplication.class, args);
	}

	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/request/signup").allowedOrigins("*");
            }
        };
    }
}
