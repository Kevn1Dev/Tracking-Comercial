package com.trackingcomercial.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trackingcomercial.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
    Optional<Usuario> findByUsername(String username);
    
}
