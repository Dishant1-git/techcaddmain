import type { CoursePage } from "./types";
import { cloudComputing } from "./cloud-computing";
import { cyberForensics } from "./cyber-forensics";
import { cybersecurity } from "./cybersecurity";
import { ethicalHacking } from "./ethical-hacking";
import { linux } from "./linux";
import { penetrationTesting } from "./penetration-testing";

export const cyberCloudCourses: CoursePage[] = [
  cybersecurity,
  ethicalHacking,
  cloudComputing,
  linux,
  penetrationTesting,
  cyberForensics,
];
