package projetointegradorcciar.payload.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginMessage {
    String mensagem;
    boolean status;
    public LoginMessage( ) {
    }
    public LoginMessage (String mensagem){}
    public LoginMessage(String mensagem, boolean status) {
        this.mensagem = mensagem;
        this.status = status;
    }
}
