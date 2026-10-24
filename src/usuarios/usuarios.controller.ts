import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query, } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
    private usuarios = [
        { id: 1, nome: 'Lucas', email: 'lucas@uem.br' },
        { id: 2, nome: 'Ana', email: 'ana@uem.br' },
    ];

    @Get()
    listar(@Query('nome') nome: string) {
        if (nome) {
            return this.usuarios.filter((usuario) => usuario.nome === nome);
        }

        return this.usuarios;
    }

    @Get(':id')
    buscar(@Param('id') id: string) {
        return { id };
    }

    @Post()
    criar(@Body() dados: any) {
        return dados;
    }

    @Patch(':id')
    atualizar(
        @Param('id') id: string,
        @Body() dados: any,
    ) {
        return { id, dados };
    }

    @Delete(':id')
    @HttpCode(204)
    remover(@Param('id') id: string) {
    }
}