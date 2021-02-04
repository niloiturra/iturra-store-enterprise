export class ResponseResult {
  title: string;
  status: number;
  errors: ResponseErrorMessages;
}

export class ResponseErrorMessages {
  mensagens: string[];
}
