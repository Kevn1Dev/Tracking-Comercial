package com.trackingcomercial.entity;

public class Usuario {
    
    private Long id;
    private String user;
    private String password;
    private String role;

    public Usuario(){
    }

    public Usuario(String user, String password, String role){
        this.user=user;
        this.password=password;
        this.role=role;
    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getUser(){
        return user;
    }

    public void setUser(String user){
        this.user = user;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getRole(){
        return role;
    }

    public void setRole(String role){
        this.role = role;
    }
}
