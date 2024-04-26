import { z } from "zod";

// for account data return to client
export const ZGetAccountData = z.object({
  id: z.number(),
  avatar: z.string().url().optional(),
  name: z.string(),
  include_adult: z.boolean(),
  username: z.string(),
});

// for sign up
export const ZPostUser = z.object({
  firstName: z.string(),
  lastName: z.string(),
  userName: z.string(),
  password: z.string(),
  email: z.string().email(),
});

export const ZAudioAuthor = z.object({
  name: z.string(),
  avatar: z.string().url().optional(),
  title: z.string().optional(),
});

export const ZAudioListItem = z.object({
  id: z.number(),
  audio: z.string().url(),
  audioName: z.string(),
  author: ZAudioAuthor,
  views: z.number(),
  thumbnail: z.string().url().optional(),
});

// for audio list return to client
export const ZAudioList = z.array(ZAudioListItem);

export const ZAudioDiscussUser = z.object({
  name: z.string(),
  avatar: z.string().url().optional(),
});

export const ZAudioDiscuss = z.object({
  id: z.string(),
  user: ZAudioDiscussUser,
  createTime: z.string().datetime().optional(),
  editTime: z.string().datetime().optional(),
  message: z.string(),
});

// for account data return to client
export const ZDetailedAudio = z.object({
  id: z.number(),
  audio: z.string().url(),
  audioName: z.string(),
  author: ZAudioAuthor,
  description: z.string(),
  discuss: z.array(ZAudioDiscuss),
  views: z.number(),
  thumbnail: z.string().url().optional(),
  isStreaming: z.boolean(),
});
