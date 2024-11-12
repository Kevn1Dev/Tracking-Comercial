package com.trackingcomercial.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.trackingcomercial.entity.Proyecto;
import com.trackingcomercial.repository.ProyectoRepository;

@Service
public class ProyectoService {
    
    @Autowired
    private ProyectoRepository proyectoRepository;

    public List<Proyecto> listarProyectos() {
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
