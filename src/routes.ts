import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/NodemailerMailAdapter';
import { FeedbackRepository } from './data/repositories/prisma/FeedbackRepository';
import { SubmitFeedbackUseCase } from './use-cases/SubmitFeedbackUseCase';

export const routes = express.Router()

routes.post('/feedbacks', async function(req, res) {
  const { type, comment, screenshot} = req.body;

  const feedbackRepository = new FeedbackRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    feedbackRepository,
    nodemailerMailAdapter);
  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send();
})

routes.get('/feedbacks', (req, res) => {
  res.status(404).send("Não há método GET na rota");
})  