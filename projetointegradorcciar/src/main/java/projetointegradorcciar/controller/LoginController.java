package projetointegradorcciar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import projetointegradorcciar.dto.AdministradorDTO;
import projetointegradorcciar.dto.LoginDTO;
import projetointegradorcciar.entity.Administrador;
import projetointegradorcciar.service.LoginService;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseEntity<AdministradorDTO> logar(@RequestBody LoginDTO loginDTO) {
        try {
            return ResponseEntity.ok(loginService.logar(loginDTO));
        }catch(AuthenticationException ex) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<AdministradorDTO> include(@RequestBody Administrador user) {
        try {
            return ResponseEntity.ok(loginService.include(user));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @GetMapping("deslogar")
    public ResponseEntity<HttpStatus> logout() {
        SecurityContextHolder.clearContext();
        return new ResponseEntity<>(null, HttpStatus.OK);
    }


}