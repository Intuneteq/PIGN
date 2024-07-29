export type OnboardingSlide = {
  key: number;
  image: string;
  title: string;
  description: string;
};

export default [
  {
    key: 1,
    image: "onboarding1.png",
    title: "Smart Storage",
    description: "Smart file management system for saving important files",
  },
  {
    key: 2,
    image: "onboarding2.png",
    title: "File verification",
    description: "Smart file management system for saving important files",
  },
] as OnboardingSlide[];
