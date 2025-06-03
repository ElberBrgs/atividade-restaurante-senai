package com.example.aula.service;

import com.example.aula.exception.NomePratoJaExistenteException;
import com.example.aula.model.Prato;
import com.example.aula.repository.PratoRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
public class PratoService {
    private PratoRepository pratoRepository;

    public PratoService(PratoRepository pratoRepository) {
        this.pratoRepository = pratoRepository;
    }

    public List <Prato> listarTodos() {
        return pratoRepository.findAll();
    }

    public Prato salvar(@Valid Prato prato) {
        if (pratoRepository.findByNomeDoPrato(prato.getNomeDoPrato()).isPresent()) {
            throw new NomePratoJaExistenteException("Prato já cadastrado.");
        }
        return pratoRepository.save(prato);
    }
}
