"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedbackUseCase = void 0;
class SubmitFeedbackUseCase {
    constructor(feedbackRepository, mailAdapter) {
        this.feedbackRepository = feedbackRepository;
        this.mailAdapter = mailAdapter;
    }
    async execute(request) {
        const { type, comment, screenshot } = request;
        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        });
        await this.mailAdapter.sendMail({
            subject: `Novo Feedback Encontrado - ${type}`,
            body: [
                `<div style="font-family: arial; font-size:16px">`,
                `<p>Tipo de Feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot ? `<p><img src="${screenshot}"></p>` : null,
                `</div>`,
            ].join('\n'),
        });
    }
}
exports.SubmitFeedbackUseCase = SubmitFeedbackUseCase;
