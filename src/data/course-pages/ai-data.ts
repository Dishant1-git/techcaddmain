import type { CoursePage } from "./types";
import { agenticAi } from "./agentic-ai";
import { artificialIntelligence } from "./artificial-intelligence";
import { chatgptAiTools } from "./chatgpt-ai-tools";
import { dataAnalytics } from "./data-analytics";
import { dataScience } from "./data-science";
import { deepLearning } from "./deep-learning";
import { generativeAi } from "./generative-ai";
import { machineLearning } from "./machine-learning";
import { powerBi } from "./power-bi";
import { promptEngineering } from "./prompt-engineering";
import { rag } from "./rag";
import { tableau } from "./tableau";

export const aiDataCourses: CoursePage[] = [
  artificialIntelligence,
  generativeAi,
  chatgptAiTools,
  promptEngineering,
  agenticAi,
  rag,
  machineLearning,
  deepLearning,
  dataScience,
  dataAnalytics,
  powerBi,
  tableau,
];
