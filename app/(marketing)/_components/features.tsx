import { FeatureCard } from "./FeatureCard";

export default function Features() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="🪙 Price Change Tracker"
          description="Stay ahead of the market! Get real-time insights into which players’ prices are predicted to rise or fall, helping you make timely transfer decisions and maximize your team’s value."
        />
        <FeatureCard
          title="⚖️ Player Comparison Tool"
          description="Compare two players side by side based on stats, price, and upcoming fixtures. Quickly identify which player offers better value or performance potential for your Fantasy Premier League team."
        />
        <FeatureCard
          title="🔁 Transfer Recommendation"
          description="Receive smart suggestions on who to buy or sell. This feature uses past performance data and fixture difficulty to recommend optimal transfers tailored to your squad’s needs."
        />
      </div>
    </div>
  );
}
