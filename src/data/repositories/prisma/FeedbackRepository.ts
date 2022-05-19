import { prisma } from "../../prisma";
import { FeedbackCreateData, IFeedbackRepository } from "../interfaces/IFeedbackRepository";

export class FeedbackRepository implements IFeedbackRepository {
  async create({type,comment,screenshot}: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })      
  }
}