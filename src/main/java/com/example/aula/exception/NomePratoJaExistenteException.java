package com.example.aula.exception;

public class NomePratoJaExistenteException extends RuntimeException {
    public NomePratoJaExistenteException(String message) {
        super(message);
    }
}
