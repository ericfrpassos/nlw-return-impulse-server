"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRepository = void 0;
const prisma_1 = require("../../prisma");
class FeedbackRepository {
    async create({ type, comment, screenshot }) {
        await prisma_1.prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        });
    }
}
exports.FeedbackRepository = FeedbackRepository;
