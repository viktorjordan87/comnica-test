import "./index.scss";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import ErrorFallback from "@/components/ErrorFallback";
import { Spinner } from "@components/Spinner";

const Main = () => {
  return (
    <main>
      <div className={`page-default`}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
          }}
        >
          <Suspense fallback={<Spinner />}>
            <div className="card comnica-main-card">
              <Outlet />
            </div>
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Main;
