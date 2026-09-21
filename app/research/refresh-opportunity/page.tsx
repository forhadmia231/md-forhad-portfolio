export default function ResearchPaper() {
  const metrics = [
    { label: "Precision@50", value: "32.0%" },
    { label: "Lift vs Base Rate", value: "17.1×" },
    { label: "Model Recall", value: "79.87%" },
    { label: "Client Overlap", value: "0" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-cyan-400 font-semibold mb-4">
            FlyRank ML Internship — Capstone Research
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Refresh Opportunity Scoring
          </h1>

          <p className="text-xl text-slate-400 mt-5">
            Prioritizing Content for Review Using Search Performance Signals
          </p>

          <p className="mt-6 text-slate-400">
            Md Forhad Mia · Machine Learning Intern
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border border-slate-800 rounded-xl p-5 bg-slate-900"
              >
                <p className="text-2xl font-bold text-cyan-400">
                  {metric.value}
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Abstract */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-5">
            Abstract
          </h2>

          <p className="leading-8 text-slate-300">
            This study investigates whether historical search-performance
            signals can help prioritize content for future review and refresh
            opportunities using the FlyRank ML Internship dataset. Performance
            signals from May 2026 were used as model features, while June 2026
            performance was used to define future refresh opportunities. A
            Random Forest model was evaluated using a client-grouped holdout
            split to prevent the same clients from appearing in both training
            and test data. Although binary classification precision was
            limited, the ranking output was substantially more useful: the top
            50 recommendations achieved 32% Precision@50 compared with a
            test-set opportunity base rate of about 1.87%, representing
            approximately 17.1× lift over the base rate. The results suggest
            that historical performance signals can provide a useful
            decision-support ranking for editorial review, while further
            validation is required before automated content decisions.
          </p>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-5">
            1. Problem Statement
          </h2>

          <p className="leading-8 text-slate-300">
            Content teams may manage large numbers of pages, making it
            difficult to decide which pages should be reviewed first. This
            project explores whether historical search and engagement signals
            can create a ranked queue of potential content refresh
            opportunities.
          </p>

          <div className="mt-6 border-l-4 border-cyan-400 bg-slate-900 p-6 rounded-r-xl">
            <p className="font-semibold text-white">
              Research Question
            </p>

            <p className="mt-2 text-slate-300">
              Which content pages should be prioritized for review or refresh
              based on observed search-performance signals?
            </p>
          </div>

          <p className="leading-8 text-slate-300 mt-6">
            The goal is not to prove that refreshing content causes ranking or
            traffic improvements. The model is designed as a decision-support
            tool for prioritizing human review.
          </p>
        </section>

        {/* Data */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-5">
            2. Data
          </h2>

          <p className="leading-8 text-slate-300">
            The project uses the FlyRank ML Internship warehouse dataset.
            Daily content-performance records contain pseudonymized identifiers
            together with Google Search Console and GA4 performance signals.
          </p>

          <div className="overflow-x-auto mt-7">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  ["Analysis period", "May → June 2026"],
                  ["June daily records", "11,694,072"],
                  ["Clients", "65"],
                  ["Content items", "409,205"],
                  ["Impressions", "216,194,872"],
                  ["Clicks", "1,209,117"],
                  ["Pageviews", "4,861,097"],
                  ["Sessions", "2,759,763"],
                ].map(([name, value]) => (
                  <tr key={name} className="border-b border-slate-800">
                    <td className="py-3 text-slate-400">{name}</td>
                    <td className="py-3 text-white font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500 mt-5">
            No client names, domains, URLs, private queries, credentials, or
            raw warehouse exports are included in this public research page.
          </p>
        </section>

        {/* Methodology */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-5">
            3. Methodology
          </h2>

          <p className="leading-8 text-slate-300">
            May 2026 was used as the historical observation window. Features
            included impressions, clicks, CTR, average search position,
            pageviews, sessions, users, engaged sessions, and observed days.
          </p>

          <p className="leading-8 text-slate-300 mt-5">
            June 2026 was used as the future outcome window. A refresh
            opportunity was operationally defined as eligible content with
            relatively high search visibility but relatively weak CTR.
            Distribution-based thresholds were used rather than treating the
            thresholds as universal SEO rules.
          </p>

          <p className="leading-8 text-slate-300 mt-5">
            A Random Forest classifier was trained using only historical May
            features. Validation used a client-grouped holdout split. The
            training and test sets had zero client overlap.
          </p>

          <div className="mt-6 bg-emerald-950/30 border border-emerald-800 rounded-xl p-5">
            <p className="font-semibold text-emerald-400">
              Leakage Audit Passed
            </p>
            <p className="text-slate-300 mt-2">
              No June future-outcome variables were used as model predictors,
              and client overlap between training and test sets was zero.
            </p>
          </div>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-5">
            4. Results
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3">Model</th>
                  <th>Accuracy</th>
                  <th>Precision</th>
                  <th>Recall</th>
                  <th>F1</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="py-4">Majority Baseline</td>
                  <td>98.13%</td>
                  <td>0.00%</td>
                  <td>0.00%</td>
                  <td>0.00%</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 text-cyan-400">Random Forest</td>
                  <td>79.09%</td>
                  <td>6.78%</td>
                  <td>79.87%</td>
                  <td>12.55%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-8 text-slate-300 mt-7">
            The majority baseline achieved high accuracy because the positive
            opportunity class was rare, but it identified no positive
            opportunities. This demonstrates why accuracy alone is misleading
            for this task.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-10 mb-5">
            Ranking Performance
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Top 50", "32.0%", "17.1× lift"],
              ["Top 100", "27.0%", "14.4× lift"],
              ["Top 250", "21.6%", "11.5× lift"],
            ].map(([rank, precision, lift]) => (
              <div
                key={rank}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6"
              >
                <p className="text-slate-400">{rank}</p>
                <p className="text-3xl text-cyan-400 font-bold mt-2">
                  {precision}
                </p>
                <p className="text-sm text-slate-400 mt-2">{lift}</p>
              </div>
            ))}
          </div>

          <p className="leading-8 text-slate-300 mt-7">
            The test-set opportunity base rate was approximately 1.87%.
            Among the top 50 model-ranked items, 32% matched the defined future
            opportunity condition. This corresponds to approximately 17.1×
            lift over the base rate.
          </p>
        </section>

        {/* Interpretation */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-5">
            5. Interpretation
          </h2>

          <p className="leading-8 text-slate-300">
            The model was more useful as a ranking system than as a binary
            classifier. Historical impressions were the largest Random Forest
            feature-importance signal, followed by historical CTR, clicks, and
            average position.
          </p>

          <p className="leading-8 text-slate-300 mt-5">
            The ranking results indicate that model scores concentrated more
            of the defined future opportunities near the top of the review
            queue than the overall base rate. This supports using the score to
            prioritize analyst attention rather than automatically deciding
            whether content should be refreshed.
          </p>
        </section>

        {/* Limitations */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-5">
            6. Limitations
          </h2>

          <div className="space-y-4 text-slate-300 leading-7">
            <p>
              The opportunity label is an operational definition based on
              observed performance signals and is not ground-truth evidence
              that a page requires a refresh.
            </p>

            <p>
              Binary precision remained low, meaning the model generated many
              false positives.
            </p>

            <p>
              The primary experiment uses May 2026 signals and June 2026
              outcomes. Additional rolling and future time windows are needed
              to evaluate temporal stability.
            </p>

            <p>
              Random Forest feature importance does not establish causal
              relationships.
            </p>

            <p>
              The analysis does not demonstrate that refreshing content causes
              improvements in Google rankings, CTR, traffic, or engagement.
            </p>
          </div>
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-5">
            7. Ranked Recommendations
          </h2>

          <p className="leading-8 text-slate-300">
            The recommended use of the model is to rank eligible content by
            opportunity score and review the highest-ranked items first.
            Analysts can then inspect visibility, CTR, ranking position, and
            engagement signals before deciding whether editorial action is
            appropriate.
          </p>

          <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-6">
            <p className="text-cyan-400 font-semibold">
              Recommended Decision Workflow
            </p>

            <ol className="list-decimal pl-5 mt-4 space-y-2 text-slate-300">
              <li>Rank eligible content by opportunity score.</li>
              <li>Review the highest-ranked items first.</li>
              <li>Inspect search and engagement signals.</li>
              <li>Assess content quality and search-intent alignment.</li>
              <li>Apply human judgment before making changes.</li>
            </ol>
          </div>
        </section>

        {/* Reproducibility */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-5">
            8. Reproducibility
          </h2>

          <p className="leading-8 text-slate-300">
            The project repository contains the capstone notebook documenting
            data aggregation, feature engineering, label construction,
            client-grouped validation, baseline comparison, Random Forest
            modeling, leakage checks, threshold analysis, Precision@K
            evaluation, feature importance, and ranked recommendations.
          </p>

          <p className="mt-5 font-mono text-sm bg-slate-900 p-4 rounded-lg text-cyan-300">
            work/notebooks/capstone_refresh_opportunity.ipynb
          </p>

          <a
            href="https://github.com/forhadmia231/md-forhad-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-cyan-400 hover:text-cyan-300"
          >
            View GitHub →
          </a>
        </section>

        {/* Credit */}
        <section className="border-t border-slate-800 pt-10">
          <h2 className="text-2xl font-bold text-white">
            Acknowledgments & Data Credit
          </h2>

          <p className="text-slate-400 mt-4">
            Built on the FlyRank ML Internship dataset.
          </p>

          <a
            href="https://flyrank.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 inline-block mt-2"
          >
            FlyRank
          </a>

          <p className="text-slate-600 text-sm mt-10">
            © 2026 Md Forhad Mia · Capstone Research
          </p>
        </section>
      </article>
    </main>
  );
}