package com.acecorps.model.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acecorps.repository.PatentRepo;
import com.acecorps.repository.UserRepo;
import com.acecorps.errorHandler.CoxexCustomException;
import com.acecorps.model.Patent;
import com.acecorps.model.User;

@Service
public class PatentDAO {

	@Autowired
	 PatentRepo patentrepo;
	 UserRepo userepo;
	@Autowired
	 UserDAO userdao;
	
	//create Patent data
	public  Patent create(Patent data ) {
		
		if(userdao.isUserExistById(data.getUserId()) == false)
			throw new CoxexCustomException("Could not process, user not found ");
		
		return patentrepo.save(data);
	}
	
	
	//find all patents from database
	public List<Patent> findAll(Patent data){
		if(userdao.isUserExistById(data.getUserId()) == false)
			throw new CoxexCustomException("Could not process, user not found ");
		return patentrepo.findAll();
	}
	
	//find users Patent by userid
	public List<Patent> findByUserId(Patent data){
		if(userdao.isUserExistById(data.getUserId()) == false)
			throw new CoxexCustomException("Could not process, user not found ");
		return patentrepo.findByUserId(data.getUserId());
	}
	
	public Optional<Patent> findOne(Long id) {
		return patentrepo.findById(id);
	}
	
	public void delete(Patent patent) {
		patentrepo.delete(patent);
	}
}
