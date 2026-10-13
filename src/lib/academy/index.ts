import { usesRemoteCms } from "@/config/features";
import { fetchCourseFromCms } from "./adapters/cms";
import { fetchCourseFromLocalJson } from "./adapters/local-json";

export type { AcademyCourse } from "./types";

let courseCache: Awaited<ReturnType<typeof fetchCourseFromLocalJson>> | null = null;

export async function getAcademyCourse() {
  if (courseCache) return courseCache;
  courseCache = usesRemoteCms()
    ? await fetchCourseFromCms()
    : await fetchCourseFromLocalJson();
  return courseCache;
}

export function resetAcademyCache(): void {
  courseCache = null;
}
