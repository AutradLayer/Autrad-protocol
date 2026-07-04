export default function ComputeMarkets() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold">
        AI Compute Markets
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="border rounded-xl p-6">
          H100 Futures
        </div>

        <div className="border rounded-xl p-6">
          Inference Credits
        </div>

        <div className="border rounded-xl p-6">
          GPU Index
        </div>

      </div>
    </section>
  );
}
