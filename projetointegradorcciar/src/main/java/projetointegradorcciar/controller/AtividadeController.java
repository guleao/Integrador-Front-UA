package projetointegradorcciar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import projetointegradorcciar.dto.AtividadeDTO;
import projetointegradorcciar.entity.Atividade;
import projetointegradorcciar.repository.AtividadeRepository;
import projetointegradorcciar.service.AtividadeService;

import java.util.List;

@Controller
@RequestMapping(value = "/api/atividade")
@CrossOrigin
public class AtividadeController {
    @Autowired
    private AtividadeRepository atividadeRepository;

    @Autowired
    private AtividadeService atividadeService;

    @GetMapping("/{id}")
    public ResponseEntity<Atividade> findByIDPath(@PathVariable("id") final Long id) {
        final Atividade atividade = this.atividadeRepository.findById(id).orElse(null);
        return ResponseEntity.ok(atividade);
    }

    @GetMapping
    public ResponseEntity<List<Atividade>> listaCompleta() {
        return ResponseEntity.ok(this.atividadeRepository.findAll());

    }

    @PostMapping
    public ResponseEntity<String> cadastrar(@Validated @RequestBody final AtividadeDTO atividade) {
        try {
            atividadeService.validaAtividade(atividade);
            return ResponseEntity.ok("Atividade cadastrada com sucesso");
        } catch (Exception e) {
            String errorMessage = getErrorMessage(e);
            return ResponseEntity.internalServerError().body(errorMessage);
        }
    }

    @PutMapping ("/{id}")
    public ResponseEntity<String> editar(@PathVariable("id") final Long id, @Validated @RequestBody final AtividadeDTO atividadeDTO) {
        try {
            atividadeService.editarAtividade(id,atividadeDTO);
            return ResponseEntity.ok("Atividade atualizada com sucesso");
        } catch (DataIntegrityViolationException e) {
            String errorMessage = getErrorMessage(e);
            return ResponseEntity.internalServerError().body(errorMessage);
        }
    }

    @DeleteMapping
    public ResponseEntity<String> deletaAtividade (@RequestParam  ("id") final Long id){
        try {
            this.atividadeService.deletarAtividade(id);
            return ResponseEntity.ok("Atividade excluida com sucesso.");
        }
        catch (Exception e){
            String errorMessage = getErrorMessage(e);
            return ResponseEntity.internalServerError().body(errorMessage);
        }
    }

    public String getErrorMessage(Exception e) {
        return "Error: " + e.getMessage();
    }
}
