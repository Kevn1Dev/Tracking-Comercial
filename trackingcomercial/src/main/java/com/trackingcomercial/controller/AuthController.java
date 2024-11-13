package com.trackingcomercial.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.trackingcomercial.entity.Usuario;
import com.trackingcomercial.repository.UsuarioRepository;

@Controller
public class AuthController {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/register")
    public String register(@RequestParam String username, @RequestParam String password){
        //codificar contraseña antes de guardarla.
        String encodePassword = new BCryptPasswordEncoder().encode(password);
        Usuario usuario = new Usuario(username, encodePassword, "ROLE_USER");
        usuarioRepository.save(usuario);
        return "redirect:/login";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }
}
