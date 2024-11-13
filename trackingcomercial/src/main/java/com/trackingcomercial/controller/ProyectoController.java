package com.trackingcomercial.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.trackingcomercial.entity.Proyecto;
import com.trackingcomercial.service.ProyectoService;

@RestController
@RequestMapping("/api/Proyectos")
public class ProyectoController {
    
    @Autowired
    private ProyectoService proyectoService;

    @GetMapping
    public List<Proyecto> listarProyectos() {
        return proyectoService.listarProyectos();
    }

    @GetMapping("/{id}")
    public Proyecto obtenerProyecto(@PathVariable Long id) {
        return proyectoService.obtenerProyectoPorId(id);
    }

    @PostMapping
    public Proyecto crearProyecto(@RequestBody Proyecto proyecto) {
        return proyectoService.guardar(proyecto);
    }

    @DeleteMapping("/{id}")
    public void eliminarProyecto(@PathVariable Long id) {
        proyectoService.eliminarProyecto(id);
    }

}
