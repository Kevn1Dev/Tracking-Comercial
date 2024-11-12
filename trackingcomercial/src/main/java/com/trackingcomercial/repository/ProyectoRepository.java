package com.trackingcomercial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectoRepository extends JpaRepository<ProyectoRepository, Long> {
    // Agregar métodos de búsqueda personalizados si es necesario.
    
}
