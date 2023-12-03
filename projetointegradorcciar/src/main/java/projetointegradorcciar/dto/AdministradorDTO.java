package projetointegradorcciar.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

@Getter
@Setter
@Validated
@AllArgsConstructor
@NoArgsConstructor
public class AdministradorDTO {

    private Long id;

    @NotNull(message = "Nome não pode ser nulo")
    @NotBlank(message = "Nome não estar ser em branco")
    @Size(max = 50, message = "Nome excede limite de caracteres")
    @Pattern(regexp = "^[a-zA-ZÀ-ÿ\\s]*$", message = "Nome não pode conter caracteres especiais")
    private String nomeAdm;

    @NotNull(message = "Telefone não pode ser nulo")
    @NotBlank(message = "Telefone não estar ser em branco")
    private String telefone;

    // @NotNull(message = "Senha não pode ser nula")
    // @NotBlank(message = "Senha não estar ser em branco")
    // private String password;

    @NotNull(message = "username não pode ser nulo")
    @NotBlank(message = "username não estar ser em branco")
    @Size(max = 130, message = "E-mail excede limite de caracteres")
    private String username;

    private String role;

    private String token;
}
