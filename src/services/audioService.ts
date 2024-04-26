import { https } from "./configURL";

export const audioService = {
  getAudioList: async () => {
    let response = await https.get(`/audios`);
    return response.data;
  },
  getDetailAudio: async (audioId: string) => {
    let response = await https.get(`/audio/${audioId}`);
    return response.data;
  },
};
