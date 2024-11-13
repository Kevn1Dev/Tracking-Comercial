package com.trackingcomercial.service;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.trackingcomercial.entity.Usuario;
import com.trackingcomercial.repository.UsuarioRepository;

public class UsuarioService {
    
    private UsuarioRepository usuarioRepository;

    public UserDetails loadByUsername(String username) throws UsernameNotFoundException{
        Usuario usuario = usuarioRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
        return new User(usuario.getUser(), usuario.getPassword(), AuthorityUtils.createAuthorityList(usuario.getRole()));
    }
}
