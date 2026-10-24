import { Injectable } from '@nestjs/common';
import type { Usuario } from './usuario.interface.js';

@Injectable()
export class UsuariosService {
    private usuarios: Usuario[] = [];
    private proximoId = 1;

    criar(dados: any) {
        const usuario: Usuario = {
            id: this.proximoId,
            nome: dados.nome,
            email: dados.email,
            idade: dados.idade,
        };

        this.usuarios.push(usuario);
        this.proximoId++;

        return usuario;
    }

    listar(nome?: string) {
        if (nome) {
            return this.usuarios.filter(
                (usuario) => usuario.nome === nome,
            );
        }

        return this.usuarios;
    }

    buscar(id: string) {
        return this.usuarios.find(
            (usuario) => usuario.id === Number(id),
        );
    }

    atualizar(id: string, dados: any) {
        const usuario = this.buscar(id);

        if (usuario) {
            if (dados.nome !== undefined) {
                usuario.nome = dados.nome;
            }

            if (dados.email !== undefined) {
                usuario.email = dados.email;
            }

            if (dados.idade !== undefined) {
                usuario.idade = dados.idade;
            }
        }

        return usuario;
    }

    remover(id: string) {
        this.usuarios = this.usuarios.filter(
            (usuario) => usuario.id !== Number(id),
        );
    }
}