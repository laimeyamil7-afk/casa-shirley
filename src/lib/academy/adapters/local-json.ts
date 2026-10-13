import type { AcademyCourse } from "../types";
import courseData from "@/content/courses.json";

export async function fetchCourseFromLocalJson(): Promise<AcademyCourse> {
  return courseData as AcademyCourse;
}
