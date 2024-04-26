import { audioService } from "@by-webapp/services/audioService";
import { useQuery } from "react-query";

export const useAudioList = () => {
  return useQuery(["audioList"], async () => await audioService.getAudioList());
};
