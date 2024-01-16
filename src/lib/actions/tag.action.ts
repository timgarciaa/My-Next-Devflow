"use server";

import { connectToDatabase } from "@/lib/mongoose";
import { GetTopInteractedTagsParams } from "@/lib/actions/shared.types";
import User from "@/database/user.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    return [
      { _id: "1", name: "tag" },
      { _id: "1", name: "tag" },
    ];
  } catch (e) {
    console.log(e);
    throw e;
  }
}
