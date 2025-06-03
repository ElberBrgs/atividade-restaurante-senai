package com.example.aula.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "tab_pratos")
public class Prato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome do prato é obrigatório.")
    private String nomeDoPrato;

    @NotBlank(message = "Descrição do prato é obrigatória.")
    private String descricaoDoPrato;

    @NotNull(message = "Preço do prato é obrigatório.")
    private double precoDoPrato;

    @NotNull(message = "Categoria do prato é obrigatória.")
    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    @NotNull(message = "Disponibilidade do prato é obrigatória.")
    @Enumerated(EnumType.STRING)
    private Disponibilidade disponibilidade;

    @NotBlank(message = "Imagem do prato é obrigatória.")
    private String urlImagem;

    public Prato() {
    }

    public Prato(Long id, String nomeDoPrato, String descricaoDoPrato, double precoDoPrato, Categoria categoria, Disponibilidade disponibilidade, String urlImagem) {
        this.id = id;
        this.nomeDoPrato = nomeDoPrato;
        this.descricaoDoPrato = descricaoDoPrato;
        this.precoDoPrato = precoDoPrato;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.urlImagem = urlImagem;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome do prato é obrigatório.") String getNomeDoPrato() {
        return nomeDoPrato;
    }

    public void setNomeDoPrato(@NotBlank(message = "Nome do prato é obrigatório.") String nomeDoPrato) {
        this.nomeDoPrato = nomeDoPrato;
    }

    public @NotBlank(message = "Descrição do prato é obrigatória.") String getDescricaoDoPrato() {
        return descricaoDoPrato;
    }

    public void setDescricaoDoPrato(@NotBlank(message = "Descrição do prato é obrigatória.") String descricaoDoPrato) {
        this.descricaoDoPrato = descricaoDoPrato;
    }

    public @NotNull(message = "Preço do prato é obrigatório.") double getPrecoDoPrato() {
        return precoDoPrato;
    }

    public void setPrecoDoPrato(@NotNull(message = "Preço do prato é obrigatório.") double precoDoPrato) {
        this.precoDoPrato = precoDoPrato;
    }

    public @NotNull(message = "Categoria do prato é obrigatória.") Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(@NotNull(message = "Categoria do prato é obrigatória.") Categoria categoria) {
        this.categoria = categoria;
    }

    public @NotNull(message = "Disponibilidade do prato é obrigatória.") Disponibilidade getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(@NotNull(message = "Disponibilidade do prato é obrigatória.") Disponibilidade disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public @NotBlank(message = "Imagem do prato é obrigatória.") String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(@NotBlank(message = "Imagem do prato é obrigatória.") String urlImagem) {
        this.urlImagem = urlImagem;
    }

    @Override
    public String toString() {
        return "Prato{" +
                "id=" + id +
                ", nomeDoPrato='" + nomeDoPrato + '\'' +
                ", descricaoDoPrato='" + descricaoDoPrato + '\'' +
                ", precoDoPrato='" + precoDoPrato + '\'' +
                ", categoria=" + categoria +
                ", disponibilidade=" + disponibilidade +
                ", urlImagem='" + urlImagem + '\'' +
                '}';
    }
}
