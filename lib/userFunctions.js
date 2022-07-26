const ObjectId = require("mongodb").ObjectID;
import clientPromise from "@/lib/mongodb";
import User from "@/models/User";

export async function getUser(id) {
  const client = await clientPromise;
  const db = client.db();
  const formattedId = ObjectId(id);

  try {
    const user = await db
      .collection("users")
      .find({ _id: formattedId })
      .toArray();

    return user;
  } catch (error) {
    console.log(error);
    Sentry.captureException(error);
    return { error };
  }
}

export async function updateUserById(id, update) {
  const client = await clientPromise;
  const db = client.db();
  const formattedId = ObjectId(id);
  const query = { _id: formattedId };

  try {
    const user = await db
      .collection("users")
      .updateOne(query, { $set: update });

    return user;
  } catch (error) {
    console.log(error);
    Sentry.captureException(error);
    return { error };
  }
}

export async function updateUserByQuery(query, update) {
  const client = await clientPromise;
  const db = client.db();
  try {
    //todo how to save
    const user = await db
      .collection("users")
      .updateOne(query, { $set: update });

    return user;
  } catch (error) {
    console.log("dat user", error);
    Sentry.captureException(error);
    return { error };
  }
}
