package com.acecorps.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;
import com.acecorps.model.*;

public interface UserRepo extends  Repository  <User, Long>, JpaRepository <User, Long>{
	List<User> findByEmail(String email);
	List<User> findByPassword(String password);
	List<User> findByEmailAndPassword(String email , String password );
	Optional<User> findById(Long id);
}
