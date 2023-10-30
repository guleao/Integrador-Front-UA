package projetointegradorcciar.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import projetointegradorcciar.dto.AtividadeDTO;
import projetointegradorcciar.entity.Atividade;
import projetointegradorcciar.entity.Pessoa;
import projetointegradorcciar.repository.AtividadeRepository;
import projetointegradorcciar.repository.PessoaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class AtividadeService {
    @Autowired
    private AtividadeRepository atividadeRepository;

    @Autowired
    private PessoaRepository pessoaRepository;

    @Transactional(rollbackFor = Exception.class)
    public void validaAtividade (AtividadeDTO atividadeDTO){

        var atividade = new Atividade();
        BeanUtils.copyProperties(atividadeDTO, atividade);

        atividade.setDataAtividade(LocalDateTime.now());

        List<Pessoa> pessoas = atividadeDTO.getPessoas().stream()
                .map(pessoaDTO -> pessoaRepository.findById(pessoaDTO.getId()).orElse(null))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
        atividade.setPessoas(pessoas);


        this.atividadeRepository.save(atividade);
    }

    @Transactional (rollbackFor = Exception.class)
    public void editarAtividade (final Long id, final AtividadeDTO atividadeDTO) {

        final Atividade atividadeBanco = this.atividadeRepository.findById(id).orElse(null);

        if (atividadeBanco == null || !atividadeBanco.getId().equals(id)) {
            throw new RegistroNaoEncontradoException("Não foi possível identificar o registro informado");
        }

        BeanUtils.copyProperties(atividadeDTO, atividadeBanco);

        this.atividadeRepository.save(atividadeBanco);
    }

    @Transactional (rollbackFor = Exception.class)
    public void deletarAtividade (final Long id){
        final Atividade atividadeBanco = this.atividadeRepository.findById(id).orElse(null);

        if (atividadeBanco == null || !atividadeBanco.getId().equals(id)){
            throw new RegistroNaoEncontradoException("Não foi possível identificar o registro informado");
        }

        this.atividadeRepository.delete(atividadeBanco);
    }

    public static class RegistroNaoEncontradoException extends RuntimeException {
        public RegistroNaoEncontradoException(String message) {
            super(message);
        }
    }
}
