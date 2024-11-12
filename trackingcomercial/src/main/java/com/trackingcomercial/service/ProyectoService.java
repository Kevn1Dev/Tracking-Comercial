package com.trackingcomercial.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trackingcomercial.repository.ProyectoRepository;

@Service
public class ProyectoService {
    
    @Autowired
    private ProyectoRepository proyectoRepository;

    public list<Proyecto> listarProyectos(){
        return proyectoRepository.findAll();
    }

    public Optional<Proyecto> obtenerProyectoPorId(Long Id){
        return proyectoRepository.findById(Id);
    }

    public Proyecto guardar(Proyecto proyecto){
        return proyectoRepository.save(proyecto);
    }

    public void eliminarProyecto(Long Id){
        proyectoRepository.deleteById(Id);
    }
}
