"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const NodemailerMailAdapter_1 = require("./adapters/nodemailer/NodemailerMailAdapter");
const FeedbackRepository_1 = require("./data/repositories/prisma/FeedbackRepository");
const SubmitFeedbackUseCase_1 = require("./use-cases/SubmitFeedbackUseCase");
exports.routes = express_1.default.Router();
exports.routes.post('/feedbacks', async function (req, res) {
    const { type, comment, screenshot } = req.body;
    const feedbackRepository = new FeedbackRepository_1.FeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter_1.NodemailerMailAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase_1.SubmitFeedbackUseCase(feedbackRepository, nodemailerMailAdapter);
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    });
    return res.status(201).send();
});
exports.routes.get('/feedbacks', (req, res) => {
    res.status(404).send("Não há método GET na rota");
});
