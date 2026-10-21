import { Quest } from "../types/domain";

// Dados locais: os componentes não precisam conhecer uma API para funcionar.
export const quests: Quest[] = [
  {
    id: "goblin-das-props",
    title: "Derrote o Goblin das Props",
    description:
      "Crie um componente React Native que receba dados por props tipadas com TypeScript.",
    difficulty: "Média",
    dueDate: "15 de agosto",
    reward: { xp: 100, coins: 20, item: "null" },
  },
  {
    id: "Ogro-do-Estado",
    title: "Derrote o Ogro do Estado",
    description:
      "Crie um componente React Native que utilize o hook useState para gerenciar o estado interno do componente.",
    difficulty: "Média",
    dueDate: "15 ago",
    reward: { xp: 100, coins: 20 },
  },
];
