import { Injectable } from '@nestjs/common';
import { NovoUsuarioDto } from './application/dto/novo-usuario.dto';
import { Usuario } from './domain/models/usuario';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[]

  constructor() {
    this.usuarios = []
  }

  criaNovoUsuario(novoUsuario: NovoUsuarioDto): Usuario {
    const usuario = new Usuario(novoUsuario.email, novoUsuario.senha)
    this.usuarios.push(usuario)
    return usuario
  }

  listaUsuarios(): Usuario[]{
    return [ ...this.usuarios ]
  }
}
