import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  fullyParallel: true,
  globalSetup: require.resolve('./tests/global/global-setup.ts'),
  timeout: 80000,
  reporter: [
    [
      'monocart-reporter',
      {
        name: 'My Test Report',
        outputFile: './test-results/report.html',
        visitor: (data, metadata, collect) => {
          const parserOptions = {
            sourceType: 'module',
            plugins: ['typescript'],
          };
          const comments = collect.comments(parserOptions);
          if (comments) {
            Object.assign(data, comments);
          }
        },
        traceViewerUrl: 'https://trace.playwright.dev/?trace={traceUrl}',
        tags: {
          unstable: {
            style: {
              background: '#6F9913',
            },
            description:
              '"Smoke Testing" is a software testing technique performed post software build to verify that the <critical functionalities> of software are working fine.',
          },
          sanity: {
            style: 'background:#178F43;',
            description:
              '"Sanity testing" is a kind of Software Testing performed after receiving a software build, with minor changes in code, or functionality, to ascertain that the bugs have been fixed and no further issues are introduced due to these changes.',
          },
          bug: {
            background: '#c00',
          },
          slow: 'background:orange;',
        },
        // custom columns
        columns: (defaultColumns) => {
          const locationColumn = defaultColumns.find(
            (column) => column.id === 'location'
          );
          locationColumn.searchable = true;
          // insert custom column(s) before a default column
          const index = defaultColumns.findIndex(
            (column) => column.id === 'duration'
          );
          defaultColumns.splice(index, 0, {
            // another column for JIRA link
            id: 'jira',
            name: 'JIRA Key',
            width: 100,
            searchable: true,
            styleMap: 'font-weight:normal;',
            formatter: (v, rowItem, columnItem) => {
              const key = rowItem[columnItem.id];
              return `<a href="https://rocketchat.atlassian.net/${key}" target="_blank">${v}</a>`;
            },
          });
          defaultColumns.push({
            id: 'description',
            name: 'Description',
            width: 300,
            markdown: true,
            searchable: true,
          });
        },
      },
    ],
  ],

  testDir: './tests',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    // All requests we send go to this API endpoint.
    baseURL: process.env.URL,
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      Accept: 'application/vnd.github.v3+json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
