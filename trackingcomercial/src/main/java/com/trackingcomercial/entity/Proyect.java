package com.trackingcomercial.entity;

import java.time.LocalDateTime;

public class Proyect {

    private int id;
    private String name;
    private String description;
    private double mount;
    private LocalDateTime fecha;
    private String status;

    public Proyect(){
    }

    public Proyect(String name, String description, double mount, LocalDateTime fecha, String status){
        this.name=name;
        this.description=description;
        this.mount=mount;
        this.fecha=fecha;
        this.status=status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
