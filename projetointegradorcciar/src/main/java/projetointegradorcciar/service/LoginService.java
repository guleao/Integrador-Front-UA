package projetointegradorcciar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import projetointegradorcciar.dto.LoginDTO;
import projetointegradorcciar.entity.Administrador;
import projetointegradorcciar.payload.response.LoginMessage;
import projetointegradorcciar.repository.AdministradorRepository;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    AdministradorRepository administradorRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    public LoginMessage  validaLogin(LoginDTO loginDTO) {
        Administrador administrador1 = administradorRepository.findByEmail(loginDTO.getEmail());
        if (administrador1 != null) {
            String senha = loginDTO.getSenha();
            String senhaEncriptada = administrador1.getSenha();
            boolean validaSenha = passwordEncoder.matches(senha, senhaEncriptada);
            if (validaSenha) {
                Optional<Administrador> adm = administradorRepository.findOneByEmailAndSenha(loginDTO.getEmail(), senhaEncriptada);
                if (adm.isPresent()) {
                    return new LoginMessage("Login realizado com sucesso", true);
                } else {
                    return new LoginMessage("Login inválido", false);
                }
            } else {
                return new LoginMessage("Senha inválida", false);
            }
        } else {
            return new LoginMessage("Email inválido", false);
        }
    }
}
