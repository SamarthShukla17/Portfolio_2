'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { githubConfig } from '@/config/Github';
import Container from '@/components/common/Container';

const ActivityCalendar = dynamic(() => import('react-activity-calendar'), {
  ssr: false,
});

interface Contribution {
  date: string;
  count: number;
  level: number;
}

export default function Github() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isUsingMockData, setIsUsingMockData] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setHasError(false);

        console.log('Fetching GitHub contributions for:', githubConfig.username);

        // Add timeout and proper error handling
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        try {
          const response = await fetch(
            `${githubConfig.apiUrl}/${githubConfig.username}`,
            {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              },
              signal: controller.signal,
            }
          );

          clearTimeout(timeoutId); // Clear timeout if fetch completes

          console.log('Response status:', response.status);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log('GitHub API response:', data);

          if (data?.contributions && Array.isArray(data.contributions)) {
            // New API format: contributions are directly in the array with date, count, level
            const validContributions = data.contributions
              .filter(
                (item: unknown): item is { date: string; count: number; level: number } =>
                  typeof item === 'object' &&
                  item !== null &&
                  'date' in item &&
                  'count' in item &&
                  'level' in item,
              )
              .map((item: { date: string; count: number; level: number }) => ({
                date: String(item.date),
                count: Number(item.count || 0),
                level: Number(item.level || 0),
              }));

            const filteredContributions = validContributions.filter(
              (item: Contribution) => item.count > 0,
            );

            console.log('Successfully loaded', filteredContributions.length, 'contributions');
            console.log('Sample contribution data:', filteredContributions.slice(0, 5));

            const total = filteredContributions.reduce((sum: number, item: Contribution) => sum + item.count, 0);
            setTotalContributions(total);
            setContributions(filteredContributions);
            setHasError(false);
            setIsUsingMockData(false);
          } else {
            throw new Error('Invalid data format received from API');
          }
        } catch (error) {
          console.error('Error fetching GitHub contributions:', error);
          if (error instanceof Error && error.name === 'AbortError') {
            console.error('Request was aborted due to timeout');
          }
          throw error; // Re-throw to be caught by outer catch
        }
      } catch (error) {
        console.error('Failed to fetch GitHub contributions:', error);
        setHasError(true);

        // Generate mock data as fallback
        const mockContributions: Contribution[] = [];
        const startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - 1);

        for (let i = 0; i < 365; i++) {
          const date = new Date(startDate);
          date.setDate(date.getDate() + i);
          const count = Math.random() > 0.7 ? Math.floor(Math.random() * 10) : 0;

          mockContributions.push({
            date: date.toISOString().split('T')[0],
            count,
            level: count > 0 ? Math.min(4, Math.floor(count / 3)) : 0,
          });
        }

        const total = mockContributions.reduce((sum, item) => sum + item.count, 0);
        setTotalContributions(total);
        setContributions(mockContributions);
        setHasError(false); // Don't show error, just use mock data
        setIsUsingMockData(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Format contributions for react-activity-calendar
  const formattedContributions = contributions.map(contrib => ({
    date: contrib.date,
    count: contrib.count,
    level: contrib.level || Math.min(4, Math.floor(contrib.count / 5))
  }));

  return (
    <Container id="github" className="mt-20">
      <div className="space-y-8">
        {/* Modern Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GitHub Activity
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My coding journey visualized through daily contributions
          </p>
        </div>

        {/* Activity Calendar */}
        <div className="flex justify-center">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            {isLoading ? (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-slate-600 dark:text-slate-400">Loading contributions...</span>
              </div>
            ) : hasError ? (
              <div className="text-center py-8">
                <div className="text-red-500 mb-2">⚠️</div>
                <p className="text-red-600 dark:text-red-400">Failed to load GitHub contributions</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Please check your internet connection and try again
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <ActivityCalendar
                  data={formattedContributions}
                  blockSize={githubConfig.blockSize}
                  blockMargin={githubConfig.blockMargin}
                  fontSize={githubConfig.fontSize}
                  colorScheme={theme === 'dark' ? 'dark' : 'light'}
                  maxLevel={githubConfig.maxLevel}
                  hideTotalCount={false}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                  theme={githubConfig.theme}
                  labels={{
                    months: githubConfig.months,
                    weekdays: githubConfig.weekdays,
                    totalCount: githubConfig.totalCountLabel,
                    legend: {
                      less: 'Less',
                      more: 'More',
                    },
                  }}
                  style={{
                    color: theme === 'dark' ? 'rgb(139, 148, 158)' : 'rgb(107, 114, 128)',
                  }}
                />

                {/* Stats */}
                <div className="flex justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                  <div className="text-center">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {totalContributions.toLocaleString()}
                    </div>
                    <div>Total Contributions</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {contributions.filter(c => c.count > 0).length}
                    </div>
                    <div>Active Days</div>
                  </div>
                  {isUsingMockData && (
                    <div className="text-center">
                      <div className="font-semibold text-amber-600 dark:text-amber-400">
                        Demo Data
                      </div>
                      <div className="text-xs">API Unavailable</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}