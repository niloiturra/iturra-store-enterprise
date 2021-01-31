export class UsuarioRegistro {
  email: string;
  senha: string;
  senhaConfirmacao: string;
}

export class UsuarioLogin {
  email: string;
  senha: string;

  static fromJson(jsonData: any): UsuarioLogin {
    return Object.assign(new UsuarioLogin(), jsonData);
  }
}

export class UsuarioRespostaLogin {
  accessToken: string;
  expiresIn: string;
  usuarioToken: UsuarioToken;
}

export class UsuarioToken {
  id: string;
  email: string;
  claims: UsuarioClaim[];
}

export class UsuarioClaim {
  value: string;
  type: string;
}
