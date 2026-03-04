import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FormDataProvider } from './context/FormDataContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages (eagerly loaded — critical for SEO & first paint)
import Landing from './pages/Landing';
import Login from './pages/Login';
import APILanding from './pages/APILanding';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';

// Lazy-loaded public pages
const StartHiring = lazy(() => import('./pages/StartHiring'));
const RequestDemo = lazy(() => import('./pages/RequestDemo'));
const QuickInvite = lazy(() => import('./pages/QuickInvite'));
const About = lazy(() => import('./pages/About'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Blog = lazy(() => import('./pages/Blog'));

// Lazy-loaded dashboard
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const APIKeys = lazy(() => import('./pages/APIKeys'));
const DashboardStats = lazy(() => import('./pages/DashboardStats'));
const UsageDashboard = lazy(() => import('./pages/UsageDashboard'));
const CallDetail = lazy(() => import('./pages/CallDetail'));
const Account = lazy(() => import('./pages/Account'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const ResumeLibrary = lazy(() => import('./pages/ResumeLibrary'));
const ResumeDetail = lazy(() => import('./pages/ResumeDetail'));

// Lazy-loaded API Playground
const APIPlayground = lazy(() => import('./layouts/APIPlayground'));
const MatchResume = lazy(() => import('./pages/MatchResume'));
const InviteCandidate = lazy(() => import('./pages/InviteCandidate'));
const ParseResume = lazy(() => import('./pages/ParseResume'));
const ParseJD = lazy(() => import('./pages/ParseJD'));
const EvaluateInterview = lazy(() => import('./pages/EvaluateInterview'));

// Lazy-loaded Documentation
const DocsLayout = lazy(() => import('./layouts/DocsLayout'));
const DocsOverview = lazy(() => import('./pages/docs/DocsOverview'));
const DocsQuickStart = lazy(() => import('./pages/docs/DocsQuickStart'));
const DocsAuthentication = lazy(() => import('./pages/docs/DocsAuthentication'));
const DocsMatchResume = lazy(() => import('./pages/docs/DocsMatchResume'));
const DocsParseResume = lazy(() => import('./pages/docs/DocsParseResume'));
const DocsParseJD = lazy(() => import('./pages/docs/DocsParseJD'));
const DocsInviteCandidate = lazy(() => import('./pages/docs/DocsInviteCandidate'));
const DocsEvaluateInterview = lazy(() => import('./pages/docs/DocsEvaluateInterview'));
const DocsWebhooks = lazy(() => import('./pages/docs/DocsWebhooks'));
const DocsErrorHandling = lazy(() => import('./pages/docs/DocsErrorHandling'));

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600" /></div>}>
      {children}
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <FormDataProvider>
        <SuspenseWrapper>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/start-hiring" element={<StartHiring />} />
            <Route path="/developers" element={<APILanding />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/request-demo" element={<RequestDemo />} />
            <Route path="/quick-invite" element={<QuickInvite />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />

            {/* Dashboard (protected, shared sidebar layout) */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="requests/:id" element={<Dashboard />} />
              <Route path="resumes" element={<ResumeLibrary />} />
              <Route path="resumes/:id" element={<ResumeDetail />} />
              <Route path="api-keys" element={<APIKeys />} />
              <Route path="stats" element={<DashboardStats />} />
              <Route path="usage" element={<UsageDashboard />} />
              <Route path="usage/calls/:id" element={<CallDetail />} />
              <Route path="account" element={<Account />} />
              <Route path="admin" element={<AdminDashboard />} />
            </Route>

            {/* API Playground Routes (Public) */}
            <Route path="/api-playground" element={<APIPlayground />}>
              <Route index element={<Navigate to="match-resume" replace />} />
              <Route path="match-resume" element={<MatchResume />} />
              <Route path="invite" element={<InviteCandidate />} />
              <Route path="parse-resume" element={<ParseResume />} />
              <Route path="parse-jd" element={<ParseJD />} />
              <Route path="evaluate" element={<EvaluateInterview />} />
            </Route>

            {/* Documentation Routes (Public) */}
            <Route path="/docs" element={<DocsLayout />}>
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<DocsOverview />} />
              <Route path="quick-start" element={<DocsQuickStart />} />
              <Route path="authentication" element={<DocsAuthentication />} />
              <Route path="api/match-resume" element={<DocsMatchResume />} />
              <Route path="api/parse-resume" element={<DocsParseResume />} />
              <Route path="api/parse-jd" element={<DocsParseJD />} />
              <Route path="api/invite-candidate" element={<DocsInviteCandidate />} />
              <Route path="api/evaluate-interview" element={<DocsEvaluateInterview />} />
              <Route path="webhooks" element={<DocsWebhooks />} />
              <Route path="errors" element={<DocsErrorHandling />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SuspenseWrapper>
      </FormDataProvider>
    </AuthProvider>
  );
}

export default App;
