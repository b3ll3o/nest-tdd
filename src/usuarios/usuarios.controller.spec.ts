import { Test, TestingModule } from '@nestjs/testing';
import { NovoUsuarioDto } from './application/dto/novo-usuario.dto';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

const EMAIL = 'email@email.com'
const SENHA = 'senha'

describe('UsuariosController', () => {
  let controller: UsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [UsuariosService],
    }).compile();

    controller = module.get<UsuariosController>(UsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('deve salvar um usuario', () => {
    controller.criaNovoUsuario(new NovoUsuarioDto(EMAIL, SENHA))
    const usuarios = controller.listaTodosUsuarios()
    expect(usuarios[0].email).toBe(EMAIL)
    expect(usuarios[0].senha).toBe(SENHA)
  })

  test('deve listar todos os usuarios cadastrados', () => {
    controller.criaNovoUsuario(new NovoUsuarioDto(EMAIL, SENHA))
    controller.criaNovoUsuario(new NovoUsuarioDto(EMAIL, SENHA))
    controller.criaNovoUsuario(new NovoUsuarioDto(EMAIL, SENHA))
    const usuarios = controller.listaTodosUsuarios()
    expect(usuarios.length).toBe(3)
  })
});
