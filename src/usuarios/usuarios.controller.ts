import { Body, Controller, Get, Post } from '@nestjs/common';
import { NovoUsuarioDto } from './application/dto/novo-usuario.dto';
import { Usuario } from './domain/models/usuario';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  criaNovoUsuario(@Body() novoUsuarioDto: NovoUsuarioDto): Usuario {
    return this.usuariosService.criaNovoUsuario(novoUsuarioDto)
  } 

  @Get()
  listaTodosUsuarios(): Usuario[] {
    return this.usuariosService.listaUsuarios()
  }
}
