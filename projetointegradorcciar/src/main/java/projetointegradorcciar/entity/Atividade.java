package projetointegradorcciar.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "atividades", schema = "public")
@Getter
@Setter
public class Atividade {

    public Atividade() {
    }

    public Atividade(Long id, boolean ativo, String nomeAtividade, String descricao, LocalTime horarioCadastro, Date dataAtividade) {
        this.id = id;
        this.ativo = ativo;
        this.nomeAtividade = nomeAtividade;
        this.descricao = descricao;
        this.horarioCadastro = horarioCadastro;
        this.dataAtividade = dataAtividade;
    }

    @Id
    @Column(name = "atividade", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column (name = "ativo", nullable = false)
    private boolean ativo;
    @Column (name = "nome_atividade", nullable = false)
    private String nomeAtividade;
    @Column(name = "descricao")
    private String descricao;

    @Column (name = "horario_cadastro")
    private LocalTime horarioCadastro;

    @Column (name = "data_atividade")
    private Date dataAtividade;

    @ManyToMany
    @JoinTable(
            name = "atividade_pessoa",
            joinColumns = @JoinColumn(name = "atividade_id"),
            inverseJoinColumns = @JoinColumn(name = "pessoa_id")
    )
    private List<Pessoa> pessoas;

    @Column (name = "concluida")
    private boolean concluida;

    @Column (name = "cancelada")
    private boolean cancelada;

    @Column (name = "horario_atividade")
    private String horarioAtividade;

}
