import { audioService } from "@by-webapp/services/audioService";
import { useQuery } from "react-query";

export const useAudioDetails = (audioId: string) => {
  return useQuery(
    ["audioDetails", audioId],
    async () => await audioService.getDetailAudio(audioId),
  );
};
