import { useEffect } from "react";

export function useActiveSection(
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> },
  setActiveSection: (section: string) => void
) {
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";
      for (const [name, ref] of Object.entries(sectionRefs)) {
        if (!ref.current) continue;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          currentSection = name;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs, setActiveSection]);
}
