import type { CoursePage } from "./types";
import { aws } from "./aws";
import { devops } from "./devops";
import { dockerKubernetes } from "./docker-kubernetes";
import { microsoftAzure } from "./microsoft-azure";
import { networkSecurity } from "./network-security";
import { socAnalyst } from "./soc-analyst";

/** Cyber & Cloud, part 2 — assembly only: every page uses the client's long-form copy from its own file. */
export const cyberCloudMoreCourses: CoursePage[] = [
  networkSecurity,
  socAnalyst,
  aws,
  microsoftAzure,
  devops,
  dockerKubernetes,
];
