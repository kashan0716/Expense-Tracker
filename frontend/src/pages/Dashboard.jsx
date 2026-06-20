import MainLayout from "../layouts/MainLayout";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            Dashboard
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            Get a clear overview of your spending habits and financial activity.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 cursor-pointer">
          <StatsCard title="Total Expense" amount={0} />

          <StatsCard title="Today Expense" amount={0} />

          <StatsCard title="Monthly Expense" amount={0} />
        </div>

        {/* Future-ready section (optional UI structure) */}
        <div className="bg-[#111c2e] border border-white/5 rounded-2xl p-6 cursor-pointer">
          <h2 className="text-white font-medium mb-2">Insights</h2>

          <p className="text-slate-400 text-sm">
            Analytics and charts will appear here once you integrate reporting.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
