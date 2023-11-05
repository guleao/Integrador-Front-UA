import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastrolist',
  templateUrl: './cadastrolist.component.html',
  styleUrls: ['./cadastrolist.component.scss']
})
export class CadastrolistComponent {
  lista: Pessoa[] = [];
  totalAtivos!: number;

  pessoaSelecionadaParaEdicao: Pessoa = new Pessoa();
  indiceSelecionadoParaEdicao!: number;

  @Input() modoLancamento: boolean = false;
  @Output() retorno = new EventEmitter<Pessoa>();
  @Output() edit = new EventEmitter();


  pessoaService = inject(PessoaService);


  constructor(private router: Router, private route: ActivatedRoute) {
    this.listAll();
  }


  listAll() {
    this.pessoaService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('ERRO CABULOSO, VEJA O CONSOLE');
        console.error(erro);
      }
    });
  }

  adicionar() {
    this.router.navigateByUrl('home/novocadastro')
  }


  addOuEditarUsuario(pessoa: Pessoa) {
    this.listAll();
  }

  lancamento(pessoa: Pessoa) {
    this.retorno.emit(pessoa);
  }


  onEdit(pessoa: Pessoa) {
    this.router.navigate(['edit', pessoa.id], { relativeTo: this.route })
  }


  deletar(id: number) {
    this.pessoaService.delete(id).subscribe({
      next: retorno => {
        this.listAll();
      },
      error: erro => {
        alert('EERRO CABULOSO');
        console.error(erro);
      }
    });
  }

  listPorOrdemAlfabetica() {
    this.pessoaService.listPorOrdemAlfabetica().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('ERRO CABULOSO');
        console.error(erro);
      }
    });
  }

  listPorDataCadastro(){
    this.pessoaService.listPorDataCadastro().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('ERRO CABULOSO');
        console.error(erro);
      }
    });
  }

  ngOnInit(): void {
    this.pessoaService.getTotalAtivos().subscribe((total: number) => {
      this.totalAtivos = total;
    });
  }

 
}
