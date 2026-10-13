import type { AcademyCourse } from "../types";

/** Fase 2: mismo CMS que productos o colección dedicada "course". */
export async function fetchCourseFromCms(): Promise<AcademyCourse> {
  throw new Error("Academia vía CMS no implementada. Ver docs/ROADMAP-COMMERCE-CMS.md");
}
