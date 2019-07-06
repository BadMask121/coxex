package com.acecorps.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

import com.acecorps.model.*;
public interface PatentRepo extends Repository<Patent, Long> , JpaRepository<Patent, Long>{
	List<Patent> findById(String email);
	List<Patent> findAllByUserId(Long id);
	List<Patent> findByUserId(Long id);
}
