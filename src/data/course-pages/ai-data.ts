import type { CoursePage } from "./types";
import { artificialIntelligence } from "./artificial-intelligence";
import { chatgptAiTools } from "./chatgpt-ai-tools";
import { dataAnalytics } from "./data-analytics";
import { dataScience } from "./data-science";
import { deepLearning } from "./deep-learning";
import { generativeAi } from "./generative-ai";
import { machineLearning } from "./machine-learning";
import { powerBi } from "./power-bi";
import { tableau } from "./tableau";

export const aiDataCourses: CoursePage[] = [
  artificialIntelligence,
  generativeAi,
  chatgptAiTools,
  machineLearning,
  deepLearning,
  dataScience,
  dataAnalytics,
  powerBi,
  tableau,
];
