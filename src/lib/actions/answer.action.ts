"use server";

import Answer from "@/database/answer.model";
import { connectToDatabase } from "../mongoose";
import { CreateAnswerParams } from "./shared.types";
import Question from "@/database/question.model";
import { revalidatePath } from "next/cache";

export async function createAnwser(params: CreateAnswerParams) {
  try {
    connectToDatabase();

    const { content, author, question, path } = params;

    const newAnswer = new Answer({
      content,
      author,
      question,
    });

    await Question.findByIdAndUpdate(question, {
      $push: {answers: newAnswer._id}
    })

    // TODO: Add interaction

    revalidatePath(path);
  } catch (e) {
    console.log(e);
    throw e;
  }
}
