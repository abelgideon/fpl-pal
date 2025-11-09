import { Question } from "./_components/Question";

const questions = [
  {
    id: 1,
    question: "What is FPLpal?",
    answer:
      "Tido is a simple yet powerful task management tool that helps you organize your daily tasks, set priorities, track progress, and stay productive.",
  },
  {
    id: 2,
    question: "Is FPLpal free to use?",
    answer:
      "Yes! FPLpal offers a free plan with all the essential features you need to manage your tasks.",
  },
  {
    id: 3,
    question: "Can I use FPLpal on mobile devices?",
    answer:
      "Absolutely. FPLpal is fully responsive and works smoothly on desktops, tablets, and smartphones. A dedicated mobile app is also in the works!",
  },
  {
    id: 4,
    question: "Will my data be safe?",
    answer:
      "Definitely. FPLpal uses industry-standard encryption and secure cloud storage to ensure your data remains private and protected at all times.",
  },
  {
    id: 5,
    question: "Do I need an internet connection to use it?",
    answer:
      "You can access most features online, but offline mode is coming soon — so you can manage your tasks even without internet, and sync changes later.",
  },
];

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </div>
  );
}
