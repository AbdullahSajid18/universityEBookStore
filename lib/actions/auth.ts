"use server";

import { signIn } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { AuthCredentials } from "@/types";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import ratelimit from "@/lib/ratelimit";
import { redirect } from "next/navigation";
// import { workflowClient } from "@/lib/workflow";
// import config from "@/lib/config";


// Signin With the credentials functionality
export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
): Promise<{ success: boolean; error?: string }> => {
  const { email, password } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error }; // Return with error if signIn fails
    }

    return { success: true }; // ✅ Return success when no error
  } catch (error) {
    console.log(error, "SignIn Error");
    return { success: false, error: "Something went wrong while signing in." };
  }
};


// SignUp Functionality
export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, password, universityId, universityCard } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");

  // Checking if the user is already existed or not
  const existedUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existedUser.length > 0) {
    return { success: false, error: "User already exists with this email." };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      password: hashedPassword,
      universityId,
      universityCard,
    });

    // await workflowClient.trigger({
    //   url: `${config.env.prodApiEndpoint}/api/workflows/onboarding`,
    //   body: {
    //     email,
    //     fullName
    //   }
    // })

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.log(error, "SignUp Error");
    return { success: false, error: "Something went wrong while signing up." };
  }
};
