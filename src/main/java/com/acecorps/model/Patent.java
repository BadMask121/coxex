package com.acecorps.model;

import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity 
@Table(name="coxex_patent")
@EntityListeners(AuditingEntityListener.class)
public class Patent {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	

	private long userId;
	
	
	private String firstPatent;
	
	private String secondPatent;
	
	
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date createdDate;


	private String fileurl;
	
	
	public String getFileurl() {
		return fileurl;
	}


	public void setFileurl(String fileurl) {
		this.fileurl = fileurl;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public long getUserId() {
		return userId;
	}


	public void setUserId(long userId) {
		this.userId = userId;
	}


	public String getFirstPatent() {
		return firstPatent;
	}


	public void setFirstPatent(String firstPatent) {
		this.firstPatent = firstPatent;
	}


	public String getSecondPatent() {
		return secondPatent;
	}


	public void setSecondPatent(String secondPatent) {
		this.secondPatent = secondPatent;
	}


	public Date getCreatedDate() {
		return createdDate;
	}


	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	
}
