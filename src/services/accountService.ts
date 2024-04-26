import { z } from "zod";
import { ZPostUser } from "./../types/zodType";
import { https } from "./configURL";

export const accountService = {
  getAccountData: async (accountId: string) => {
    let response = await https.get(`/account/${accountId}`);
    return response.data;
  },
  postUser: async (requestBody: z.infer<typeof ZPostUser>) => {
    let response = await https.post(`/account`, requestBody);

    return response.data;
  },
};
