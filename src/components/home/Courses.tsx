import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseExplorer } from "./CourseExplorer";

export function Courses() {
  return (
    <section id="courses" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Courses"
          title={<>Programs built for <span className="text-gradient">today&apos;s jobs</span></>}
          text="Every course includes AI tools, live projects, certification and placement support. Filter by track to find your fit."
        />
        <div data-reveal="up" className="mt-12">
          <CourseExplorer />
        </div>
      </div>
    </section>
  );
}
