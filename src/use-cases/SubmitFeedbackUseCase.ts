import { IMailAdapter } from "../adapters/interfaces/IMailAdapter";
import { IFeedbackRepository } from "../data/repositories/interfaces/IFeedbackRepository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: IFeedbackRepository,
    private mailAdapter: IMailAdapter,
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const {type, comment,screenshot} = request;
    await this.feedbackRepository.create({
      type, 
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: `Novo Feedback Encontrado - ${type}`, 
      body: [
        `<div style="font-family: arial; font-size:16px">`,
        `<p>Tipo de Feedback: ${type}</p>`,      
        `<p>Comentário: ${comment}</p>`,    
        screenshot ? `<p><img src="${screenshot}"></p>` : null,                    
        `</div>`,
      ].join('\n'),
    })
  }
}