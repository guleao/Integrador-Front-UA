import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Atividade } from 'src/app/models/atividade';
import { AtividadeService } from 'src/app/services/atividade.service';
import { switchMap } from 'rxjs';
import { AtividadeListDialogComponent } from 'src/app/dialogs/atividade-list-dialog/atividade-list-dialog.component';


@Component({
  selector: 'app-cadastro-atividadelist',
  templateUrl: './cadastro-atividadelist.component.html',
  styleUrls: ['./cadastro-atividadelist.component.scss']
})
export class CadastroAtividadelistComponent {
  listaAtividade: Atividade[] = [];
  atividadeSelecionadaParaEdicao: Atividade = new Atividade();

  atividade: Atividade = new Atividade;

  atividadeService = inject(AtividadeService);
  modalService = inject(NgbModal);

  public atividadeForm!: FormGroup;

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute, private fb: FormBuilder,) {

    this.listAll();
  }


  openDialog(id: number) {
    const dialogRef = this.dialog.open(AtividadeListDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.deletar(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  listAll() {

    this.atividadeService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.listaAtividade = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  listAllConcluidas() {
    this.atividadeService.listAllConcluidas().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.listaAtividade = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  listAllCanceladas() {
    this.atividadeService.listAllCanceladas().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.listaAtividade = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  pesquisarAtividadePorNome(nome: string) {
    this.atividadeService.pesquisarPorNome(nome).subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.listaAtividade = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  concluirAtividade(id: number) {
    this.atividadeService.concluirAtividade(id).subscribe({
      next: atividade => {
        this.listAll();
        alert('deu certo')
      },
      error: erro => {
        alert('ERRO CABULOSO')
        console.log(erro);
      }
    });
  }

  cancelaAtividade(id: number) {
    this.atividadeService.cancelarAtividade(id) .pipe(
      switchMap(() => this.atividadeService.listAll()) // Recarrega a lista de pessoas após o cancelamento
    ).subscribe({
      next: atividade => {
        alert('deu certo')
      },
      error: erro => {
        alert('ERRO CABULOSO')
        console.log(erro);
      }
    });
  }

  deletar(id: number) {
    this.atividadeService.delete(id).subscribe({
      next: retorno => {
        this.listAll();
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }


  // adicionar(modal: any) {
  //   this.atividadeSelecionadaParaEdicao = new Atividade();
  //   this.modalService.open(modal, { size: 'sm' });
  // }


  addOuEditarAtividade(atividade: Atividade) {
    this.listAll();
    this.modalService.dismissAll();
  }

  testeAlert() {
    alert('teste')
  }

  // addLive(): void {
  //   const dialogRef = this.dialog.open(AtividadesdetailsComponent, {
  //     // maxHeight: '95vh',
  //     minWidth: '400px',
  //     // width: '25vw',
  //   });

  // }

  adicionar() {
    this.router.navigateByUrl('home/cadastroAtividade')
  }

  onEdit(atividade: Atividade) {
    this.router.navigate(['edit', atividade.id], { relativeTo: this.route })
  }
}
