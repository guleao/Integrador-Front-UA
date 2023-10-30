package projetointegradorcciar.entity;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Login {
    @Column(name = "login", nullable = false, length = 150)
    private String email;
    @Column (name = "senha", nullable = false, length = 150)
    private String senha;
    public Login (){}
}
