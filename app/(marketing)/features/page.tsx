import { FeatureCard } from "./_components/FeatureCard";

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-muted-foreground">
          Discover how FPLpal can help you improve your team.
        </p>
      </div>

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
          title="🔁 Transfer Recommendation Engine"
          description="Receive smart suggestions on who to buy or sell. This feature uses past performance data and fixture difficulty to recommend optimal transfers tailored to your squad’s needs."
        />
      </div>
    </div>
  );
}
