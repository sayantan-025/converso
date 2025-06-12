import { Feature, Testimonial } from "@/types";
import {
  Mic,
  Bot,
  ShieldCheck,
  CreditCard,
  Bookmark,
  Search,
} from "lucide-react";

export const features: Feature[] = [
  {
    icon: <Mic className="h-6 w-6 text-orange-400" />,
    title: "AI Voice Tutors",
    description:
      "Experience real-time, voice-based tutoring from AI agents tailored to your learning style.",
  },
  {
    icon: <Bot className="h-6 w-6 text-orange-400" />,
    title: "Create Your Tutor",
    description:
      "Customize your own AI tutor by selecting subject, tone, and teaching approach.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-orange-400" />,
    title: "Secure Sign-In",
    description:
      "Easily sign in with Clerk using Google or email — your data stays safe and private.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-orange-400" />,
    title: "Flexible Subscriptions",
    description:
      "Pick a plan that fits your needs and manage it easily with our transparent billing system.",
  },
  {
    icon: <Bookmark className="h-6 w-6 text-orange-400" />,
    title: "Bookmarks & History",
    description:
      "Save your favorite tutors and revisit any past learning session at your convenience.",
  },
  {
    icon: <Search className="h-6 w-6 text-orange-400" />,
    title: "Smart Search",
    description:
      "Quickly find the right AI tutor by filtering topics, subjects, or tutor names with ease.",
  },
];

export const testimonials: Testimonial[] = [
  {
    initials: "AK",
    name: "Anita K.",
    role: "Student",
    quote:
      "Learning with real-time AI support helped me grasp complex topics faster. It’s like having a personal tutor available 24/7!",
  },
  {
    initials: "MR",
    name: "Mr. Rajeev N.",
    role: "Educator",
    quote:
      "This platform has changed how I teach. I can now provide instant feedback and keep students more engaged than ever.",
  },
  {
    initials: "LD",
    name: "Liam D.",
    role: "Developer",
    quote:
      "I used this platform to upskill while working full-time. The AI-assisted lessons made it incredibly efficient and practical.",
  },
];
