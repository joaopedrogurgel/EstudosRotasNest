import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';

import { UsuariosService } from './usuarios.service.js';

@Controller('usuarios')
export class UsuariosController {
    constructor(
        private readonly usuariosService: UsuariosService,
    ) { }

    @Get()
    listar(@Query('nome') nome?: string) {
        return this.usuariosService.listar(nome);
    }

    @Get(':id')
    buscar(@Param('id') id: string) {
        return this.usuariosService.buscar(id);
    }

    @Post()
    criar(@Body() dados: any) {
        return this.usuariosService.criar(dados);
    }

    @Patch(':id')
    atualizar(
        @Param('id') id: string,
        @Body() dados: any,
    ) {
        return this.usuariosService.atualizar(id, dados);
    }

    @Delete(':id')
    @HttpCode(204)
    remover(@Param('id') id: string) {
        this.usuariosService.remover(id);
    }
}