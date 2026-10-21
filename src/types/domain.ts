import { colors } from "../theme";
export type Role = "player" | "master";

export type Reward = {
  xp: number;
  coins: number;
  item?: string;
};

export const rewardColors: Record<keyof Reward, { main: string }> = {
  xp:    { main: colors.green },
  coins: { main: colors.orange },
  item:  { main: colors.blue },
};

export type Quest = {
  id: string;
  title: string;
  description: string;
  difficulty: "Fácil" | "Média" | "Difícil";
  dueDate?: string;
  reward: Reward;
};

type Difficulty = Quest["difficulty"];

export const difficultyColors: Record<Difficulty, { main: string;}> = {
  "Fácil":   { main: colors.green},
  "Média":   { main: colors.orange},
  "Difícil": { main: colors.red},
};

export type Player = {
  name: string;
  characterClass: string;
  role: Role;
  level: number;
  xp: number;
  nextLevelXp: number;
  coins: number;
  streak: number;
};

export type Boss = {
  name: string;
  remainingHealth: number;
  classContribution: number;
};
