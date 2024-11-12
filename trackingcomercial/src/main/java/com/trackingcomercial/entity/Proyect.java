package com.trackingcomercial.entity;

import java.time.LocalDate;

public class Proyect {

    private Long id;
    private String name;
    private String description;
    private double mount;
    private LocalDate fecha;
    private String status;

    public Proyect(){
    }

    public Proyect(String name, String description, double mount, LocalDate fecha, String status){
        this.name=name;
        this.description=description;
        this.mount=mount;
        this.fecha=fecha;
        this.status=status;
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

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
