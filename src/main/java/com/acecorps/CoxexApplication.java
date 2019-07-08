package com.acecorps;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import io.airbrake.javabrake.Notifier;
@SpringBootApplication
public class CoxexApplication {
	
	@Value("${allow.cors.url}")
	private String corsURL;
	
	public static void main(String[] args) throws Exception {
		SpringApplication.run(CoxexApplication.class, args);
//		
//		  int projectId = 234752;
//		    String projectKey = "798aa0942fc6ee5f47981fa649334c78";
//		    Notifier notifier = new Notifier(projectId, projectKey);
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
