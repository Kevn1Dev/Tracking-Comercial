package com.trackingcomercial.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.trackingcomercial.entity.Proyecto;

@Repository
public interface ProyectoRepository extends JpaRepository<Proyecto, Long> {

    // Agregar métodos de búsqueda personalizados si es necesario.
    List<Proyecto> findProyectosByStatus(String status); 

    // Consulta personalizada para buscar por el nombre
    @Query("SELECT p FROM Proyecto p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<Proyecto> findProyectosByName(@Param("name") String name);
    
}

// 
// 