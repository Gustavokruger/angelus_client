import { Usuario } from './Usuario';
import { Animal } from './Animal';

export class Post {
    
    _id?: string;
    descricao: string;
    usuario: Usuario;
    criadoEm?: Date;
}