package projetointegradorcciar.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;
import projetointegradorcciar.dto.AdministradorDTO;
import projetointegradorcciar.entity.Administrador;
import projetointegradorcciar.repository.AdministradorRepository;

@Service
public class AdministradorService {
    @Autowired
    private AdministradorRepository administradorRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional(rollbackFor = Exception.class)
    public void validaAdm (AdministradorDTO administradorDTO){

        var administrador = new Administrador();
        BeanUtils.copyProperties(administradorDTO, administrador);

        Administrador administradorExistente = administradorRepository.findByCpf(administrador.getCpf());
        Administrador admEmailExistente = administradorRepository.findByEmail (administrador.getEmail());

        Assert.isTrue(administradorExistente == null || administradorExistente.equals(administrador.getCpf()), "CPF Já existente");
        Assert.isTrue(admEmailExistente == null || admEmailExistente.equals(administrador.getEmail()), "E-mail Já existente");

        String senhaCodificada = this.passwordEncoder.encode(administrador.getSenha());
        administrador.setSenha(senhaCodificada);

        administradorRepository.save(administrador);
    }


    @Transactional(rollbackFor = Exception.class)
    public void editaAdm (final Long id, AdministradorDTO administradorDTO){

        final Administrador administrador1 = this.administradorRepository.findById(id).orElse(null);

        if (administrador1 == null || !administrador1.getId().equals(id)) {
            throw new RegistroNaoEncontradoException("Nao foi possivel indentificar o registro informado");
        }

        BeanUtils.copyProperties(administradorDTO, administrador1);

        administradorRepository.save(administrador1);
    }

    @Transactional (rollbackFor = Exception.class)
    public void deletaAdm (final Long id){
        final Administrador admBanco = this.administradorRepository.findById(id).orElse(null);

        if (admBanco == null || !admBanco.getId().equals(id)){
            throw new AdministradorService.RegistroNaoEncontradoException("Não foi possível identificar o registro informado");
        }

        this.administradorRepository.delete(admBanco);
    }

    public static class RegistroNaoEncontradoException extends RuntimeException {
        public RegistroNaoEncontradoException(String message) {
            super(message);
        }
    }
}
