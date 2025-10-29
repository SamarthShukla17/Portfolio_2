/*
 * GitHub Contribution Configuration
 *
 * This file contains the configuration for the GitHub contribution graph.
 * Update the username to match your GitHub profile.
 */

export const githubConfig = {
  username: 'SamarthShukla17',
  apiUrl: 'https://github-contributions-api.jogruber.de/v4',

  // Display settings
  title: 'GitHub Activity',
  subtitle: 'coding journey over the past year',

  // Chart settings
  blockSize: 12,
  blockMargin: 3,
  fontSize: 11,
  maxLevel: 4,

  // Month labels
  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],

  // Weekday labels (empty for weekends, M for Monday, etc.)
  weekdays: ['', 'M', '', 'W', '', 'F', ''],

  // Total count label template
  totalCountLabel: '{{count}} contributions in the last year',

  // Theme configuration for dark and light modes (GitHub's exact colors)
  theme: {
    dark: [
      '#161b22', // GitHub dark mode - no contributions
      '#0e4429', // GitHub dark mode - level 1
      '#006d32', // GitHub dark mode - level 2
      '#26a641', // GitHub dark mode - level 3
      '#39d353', // GitHub dark mode - level 4
    ],
    light: [
      '#ebedf0', // GitHub light mode - no contributions
      '#9be9a8', // GitHub light mode - level 1
      '#40c463', // GitHub light mode - level 2
      '#30a14e', // GitHub light mode - level 3
      '#216e39', // GitHub light mode - level 4
    ],
  },

  // Error state configuration
  errorState: {
    title: 'Unable to load GitHub contributions',
    description: 'Check out my profile directly for the latest activity',
    buttonText: 'View on GitHub',
  },

  // Loading state configuration
  loadingState: {
    title: 'Loading contributions...',
    description: 'Fetching your GitHub activity data',
  },
};
