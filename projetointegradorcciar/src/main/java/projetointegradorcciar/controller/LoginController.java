package projetointegradorcciar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import projetointegradorcciar.dto.LoginDTO;
import projetointegradorcciar.payload.response.LoginMessage;
import projetointegradorcciar.service.LoginService;

@RestController
@RequestMapping(value = "/api/login")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseEntity<LoginMessage> loginPost (@Validated @RequestBody LoginDTO loginDTO){
        LoginMessage loginMessage = loginService.validaLogin (loginDTO);
        return ResponseEntity.ok(loginMessage);
    }
}