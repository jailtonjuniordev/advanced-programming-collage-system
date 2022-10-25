package com.school.system.controller;

import com.school.system.repository.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.system.model.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProfessorController {

	@Autowired
	private ProfessorRepository professorRepository;

	@PostMapping("/professores")
	public Professor addNewProfessor(@RequestBody Professor professor) {
		return professorRepository.save(professor);
	}

	@GetMapping("/professores")
	public List<Professor> getAllProfessores() {
		return professorRepository.findAll();
	}

	@GetMapping("/professores/{idProfessor}")
	public Professor getProfessorById(@PathVariable Integer idProfessor) {
		return professorRepository.findById(idProfessor)
				.orElseThrow(/* () -> new ProfessorNotFoundException(idTurma) */);
	}

	@PutMapping("/professores/{idProfessor}")
	public Professor updateProfessor(@RequestBody Professor newProfessor, @PathVariable Integer idProfessor) {
		return professorRepository.findById(idProfessor).map(professor -> {
			professor.setNome(newProfessor.getNome());
			professor.setTelefone(newProfessor.getTelefone());
			professor.setValorHoraAula(newProfessor.getValorHoraAula());
			professor.setIdTurma(newProfessor.getIdTurma());
			return professorRepository.save(professor);
		}).orElseThrow(/* () -> new ProfessorNotFoundException(idProfessor) */);
	}

	@DeleteMapping("/professores/{idProfessor}")
	public String deleteProfessor(@PathVariable("idProfessor") Integer idProfessor) {
		/*
		 * if(!turmaRepository.existsById(idProfessor)) {
		 * throw new ProfessorNotFoundException(idProfessor);
		 * }
		 */

		return "Professor de ID: " + idProfessor + " Foi deletado com Sucesso!.";
	}
}