package com.Backend.Backend;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/employee")
public class controller {
	
	@Autowired
	EmployeeRepository repo;
	
	@GetMapping("/all")
	public List<EmployeeEntity> getAllEmployees(){
		return repo.findAll();
	}
	@CrossOrigin
	@GetMapping(value="/id/{id}",produces = "application/json")
	public EmployeeEntity getEmployee(@PathVariable("id") String tempId) {
		Integer id=Integer.parseInt(tempId);
		if(!repo.existsById(id)) {
			return new EmployeeEntity(0,"No Such Entry Exists","NA",0);
		}
		else {
			Optional<EmployeeEntity> ans=repo.findById(id);
			return ans.get();
		}
	}
	
	@PostMapping(value="/create",produces = "application/json")
	public Map<String,String> createEmployee(@RequestBody EmployeeEntity obj) {
		Integer id=obj.getId();
		Map m=new HashMap();
		if(repo.existsById(id)) {
			m.put("message","Employee with this ID already exists");
			return m;
		}
		else {
			repo.saveAndFlush(obj);
			m.put("message","New Employee Created");
			return m;
		}
	}
	@PutMapping(value="/update",produces = "application/json")
	public Map<String,String> updateEmployee(@RequestBody EmployeeEntity obj){
		Integer id=obj.getId();
		Map m=new HashMap();
		if(!repo.existsById(id)) {
			m.put("message","No Employee with such ID");
			return m;
		}
		else {
			Optional<EmployeeEntity> temp=repo.findById(id);
			EmployeeEntity toChange=temp.get();
			toChange.setAddress(obj.getAddress());
			toChange.setName(obj.getName());
			toChange.setSalary(obj.getSalary());
			repo.saveAndFlush(toChange);
			m.put("message","Employee with id :-"+id+" is succesfully Updated");
			return m;
		}
	}
	@DeleteMapping(value="/delete/{id}",produces = "application/json")
	public Map<String,String> deleteEmployee(@PathVariable("id") String tempId){
		Integer id=Integer.parseInt(tempId);
		Map m=new HashMap();
		if(!repo.existsById(id)) {
			m.put("message","No Employee with such ID");
			return m;
		}
		else {
			repo.deleteById(id);
			m.put("message","Employee with id :-"+id+" is succesfully Deleted");
			return m;
		}
	}
}
