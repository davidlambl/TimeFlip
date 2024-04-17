import { http, HttpResponse } from 'msw';

export const handlers = [
  // An example handler
  http.get('/report/daily', () => {
    return HttpResponse.json({
      "weeks": [
        {
          "year": 2024,
          "onum": 16,
          "tasksInfo": [],
          "days": [
            {
              "inPeriod": false,
              "tasksInfo": [],
              "totalTime": 0,
              "totalTimeRatio": 0.0,
              "totalPaymentByCurrencies": [],
              "totalPaymentByCurrenciesRatio": [
                {
                  "currencyId": 1,
                  "value": 0.0
                }
              ],
              "dateStr": "2024-04-14"
            },
            {
              "inPeriod": false,
              "tasksInfo": [],
              "totalTime": 0,
              "totalTimeRatio": 0.0,
              "totalPaymentByCurrencies": [],
              "totalPaymentByCurrenciesRatio": [
                {
                  "currencyId": 1,
                  "value": 0.0
                }
              ],
              "dateStr": "2024-04-15"
            },
            {
              "inPeriod": true,
              "tasksInfo": [
                {
                  "task": {
                    "id": 113596,
                    "name": "Coding",
                    "description": null,
                    "icon": "CODE",
                    "color": "#08B5F2",
                    "ownerId": 16297,
                    "createdAt": "2024-04-17T02:55:23.293+0000",
                    "updatedAt": "2024-04-17T02:55:23.863+0000",
                    "deletedAt": null,
                    "hourlyRate": 0.00,
                    "currencyId": 1,
                    "extId": "D6A5307C-F16C-465E-8671-C71E20DD80B1",
                    "pomodoroTime": 25,
                    "sideIndex": 3,
                    "tag": null,
                    "highPriority": false,
                    "pomodoro": false,
                    "billable": false
                  },
                  "totalTime": 164,
                  "totalTimeRatio": 1.0,
                  "totalPaymentByCurrencies": [
                    {
                      "currencyId": 1,
                      "value": 0.0
                    }
                  ],
                  "totalPaymentByCurrenciesRatio": [
                    {
                      "currencyId": 1,
                      "value": 0.0
                    }
                  ],
                  "totalPayment": 0.0,
                  "totalPaymentRatio": 0.0
                },
                {
                  "task": {
                    "id": 111126,
                    "name": "Coffee Break",
                    "description": null,
                    "icon": "BREAK",
                    "color": "#00C700",
                    "ownerId": 16297,
                    "createdAt": "2024-03-14T04:27:38.603+0000",
                    "updatedAt": "2024-03-15T04:34:34.207+0000",
                    "deletedAt": null,
                    "hourlyRate": 0.00,
                    "currencyId": 1,
                    "extId": "F3059189-C35A-4718-A76C-41749E798586",
                    "pomodoroTime": 25,
                    "sideIndex": 4,
                    "tag": null,
                    "highPriority": false,
                    "pomodoro": false,
                    "billable": false
                  },
                  "totalTime": 1,
                  "totalTimeRatio": 0.006097560975609756,
                  "totalPaymentByCurrencies": [
                    {
                      "currencyId": 1,
                      "value": 0.0
                    }
                  ],
                  "totalPaymentByCurrenciesRatio": [
                    {
                      "currencyId": 1,
                      "value": 0.0
                    }
                  ],
                  "totalPayment": 0.0,
                  "totalPaymentRatio": 0.0
                }
              ],
              "totalTime": 165,
              "totalTimeRatio": 1.0,
              "totalPaymentByCurrencies": [
                {
                  "currencyId": 1,
                  "value": 0.0
                }
              ],
              "totalPaymentByCurrenciesRatio": [
                {
                  "currencyId": 1,
                  "value": 0.0
                }
              ],
              "dateStr": "2024-04-16"
            },
            {
              "inPeriod": false,
              "tasksInfo": [],
              "totalTime": 0,
              "totalTimeRatio": 0.0,
              "totalPaymentByCurrencies": [],
              "totalPaymentByCurrenciesRatio": [
                {
                  "currencyId": 1,
                  "value": 0.0
                }
              ],
              "dateStr": "2024-04-17"
            },
            {
              "inPeriod": false,
              "tasksInfo": [],
              "totalTime": 0,
              "totalTimeRatio": 0.0,
              "totalPaymentByCurrencies": [],
              "totalPaymentByCurrenciesRatio": [
                {
                  "currencyId": 1,
                  "value": 0.0
                }
              ],
              "dateStr": "2024-04-18"
            },
            {
              "inPeriod": false,
              "tasksInfo": [],
              "totalTime": 0,
              "totalTimeRatio": 0.0,
              "totalPaymentByCurrencies": [],
              "totalPaymentByCurrenciesRatio": [
                {
                  "currencyId": 1,
                  "value": 0.0
                }
              ],
              "dateStr": "2024-04-19"
            },
            {
              "inPeriod": false,
              "tasksInfo": [],
              "totalTime": 0,
              "totalTimeRatio": 0.0,
              "totalPaymentByCurrencies": [],
              "totalPaymentByCurrenciesRatio": [
                {
                  "currencyId": 1,
                  "value": 0.0
                }
              ],
              "dateStr": "2024-04-20"
            }
          ],
          "totalTime": 165,
          "totalTimeRatio": null,
          "totalPaymentByCurrencies": [
            {
              "currencyId": 1,
              "value": 0.0
            }
          ],
          "totalPaymentByCurrenciesRatio": []
        }
      ],
      "currencies": [
        {
          "id": 1,
          "symbol": "$",
          "key": "Dollar"
        }
      ],
      "totalTime": 165,
      "totalPayment": [
        {
          "currencyId": 1,
          "value": 0.0
        }
      ],
      "beginDateStr": "2024-04-16",
      "endDateStr": "2024-04-16"
    });
  }),
];
