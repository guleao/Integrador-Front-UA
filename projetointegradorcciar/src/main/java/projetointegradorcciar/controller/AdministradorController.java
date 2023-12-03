package projetointegradorcciar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import projetointegradorcciar.dto.AdministradorDTO;
import projetointegradorcciar.entity.Administrador;
import projetointegradorcciar.repository.AdministradorRepository;
import projetointegradorcciar.service.AdministradorService;

import java.util.List;

@Controller
@RequestMapping(value = "/api/administrador")
@CrossOrigin
public class AdministradorController {
    @Autowired
    private AdministradorRepository administradorRep;

    @Autowired
    private AdministradorService administradorService;

    @GetMapping("/{id}")
    public ResponseEntity<Administrador> findByIDPath(@PathVariable("id") final Long id) {
        final Administrador administrador = this.administradorRep.findById(id).orElse(null);
        return ResponseEntity.ok(administrador);
    }


    @GetMapping
    public ResponseEntity<List<Administrador>> listaCompleta() {
        return ResponseEntity.ok(this.administradorRep.findAll());

    }

    @PostMapping
    public ResponseEntity<HttpStatus> cadastrar(@Validated @RequestBody final AdministradorDTO administrador) {
        try {
            administradorService.validaAdm(administrador);
            return ResponseEntity.created(null).body(null);
        } catch (Exception e) {
            // String errorMessage = getErrorMessage(e);
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping ("/{id}")
    public ResponseEntity<HttpStatus> editar(@PathVariable("id") final Long id, @Validated @RequestBody final AdministradorDTO administradorDTO) {
        try {
            administradorService.editaAdm(id, administradorDTO);
            return ResponseEntity.created(null).body(null);
        } catch (DataIntegrityViolationException e) {
            // String errorMessage = getErrorMessage(e);
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping
    public ResponseEntity <String> deletarAdministrador(@RequestParam  final Long id) {
        try {
            administradorService.deletaAdm(id);
            return ResponseEntity.ok("Administrador excluído com sucesso");
        } catch (DataIntegrityViolationException e){
            String errorMessage = getErrorMessage(e);
            return ResponseEntity.internalServerError().body(errorMessage);
        }
    }

    public String getErrorMessage(Exception e) {
        return "Error: " + e.getMessage();
    }
}
