import * as duckdb from "@duckdb/duckdb-wasm/dist/duckdb-esm";
const JSDELIVR_BUNDLES = duckdb.getJsDelivrBundles();
console.log("resolving bundles");
async function resolve() {
  // Select a bundle based on browser checks
  const bundle = await duckdb.selectBundle(JSDELIVR_BUNDLES);
  // Instantiate the asynchronus version of DuckDB-Wasm
  const worker = new Worker(bundle.mainWorker);
  const logger = new duckdb.ConsoleLogger();
  const db = new duckdb.AsyncDuckDB(logger, worker);
  return await db.instantiate(bundle.mainModule, bundle.pthreadWorker);
}

(async () => {
  const db = await resolve();
  console.log(db);
})();
