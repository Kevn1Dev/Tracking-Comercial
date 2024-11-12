package com.trackingcomercial.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Proyecto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double mount;
    private String status; // Usa valores como "Aprobado", "En Espera", "No Aprobado"
    private LocalDate fecha;
    

    public Proyecto(){
    }

    public Proyecto(String name, String description, double mount, LocalDate fecha, String status){
        this.name=name;
        this.description=description;
        this.mount=mount;
        this.status=status;
        this.fecha=fecha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setNombre(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getMount(){
        return mount;
    }

    public void setMount(double mount){
        this.mount = mount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }
}
