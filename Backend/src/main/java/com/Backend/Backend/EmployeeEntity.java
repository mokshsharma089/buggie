package com.Backend.Backend;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class EmployeeEntity {
	@Id
	public Integer id;
	public String name;
	public String Address;
	public int salary;
	
	public EmployeeEntity() {
		
	}
	public EmployeeEntity(Integer id, String name, String address, int salary) {
		super();
		this.id = id;
		this.name = name;
		Address = address;
		this.salary = salary;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	@Override
	public String toString() {
		return "EmployeeEntity [id=" + id + ", name=" + name + ", Address=" + Address + ", salary=" + salary + "]";
	}
	
	
}
