import { accountService } from "@by-webapp/services/accountService";
import { useQuery } from "react-query";

export const useAccountData = (accountId: string) => {
  return useQuery(
    ["accountData", accountId],
    async () => await accountService.getAccountData(accountId),
  );
};
