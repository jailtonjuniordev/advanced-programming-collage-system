package com.school.system.controller;

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

import com.school.system.repository.*;
import com.school.system.model.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class TurmaController {

	@Autowired
	private TurmaRepository turmaRepository;

	@PostMapping("/turmas")
	public Turma addNewTurma(@RequestBody Turma turma) {
		return turmaRepository.save(turma);
	}

	@GetMapping("/turmas")
	public List<Turma> getAllTurmas() {
		return turmaRepository.findAll();
	}

	@GetMapping("/turmas/{idTurma}")
	public Turma getTurmaById(@PathVariable Integer idTurma) {
		return turmaRepository.findById(idTurma).orElseThrow(/* () -> new TurmaNotFoundException(idTurma) */);
	}

	@PutMapping("/turmas/{idTurma}")
	public Turma updateTurma(@RequestBody Turma newTurma, @PathVariable Integer idTurma) {
		return turmaRepository.findById(idTurma).map(turma -> {
			turma.setIdCurso(newTurma.getIdCurso());
			turma.setIdProfessor(newTurma.getIdProfessor());
			turma.setValor(newTurma.getValor());
			return turmaRepository.save(turma);
		}).orElseThrow(/* () -> new TurmaNotFoundException(idTurma) */);
	}

	@DeleteMapping("/turmas/{idTurma}")
	public String deleteTurma(@PathVariable("idTurma") Integer idTurma) {
		/*
		 * if(!turmaRepository.existsById(idTurma)) {
		 * throw new TurmaNotFoundException(idTurma);
		 * }
		 */

		return "Turma de ID: " + idTurma + " Foi deletada com Sucesso!.";
	}
}