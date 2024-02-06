import Chart from "chart.js";
import React, { useEffect, useRef } from "react";

const Analytics = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext("2d");

            // Data for the chart
            const data = [
                {
                    _id: "646ce78bfbf0b294472ede71",
                    desc: "asdasd",
                    category: "Cloths",
                    amount: 3000,
                    transcationType: "income",
                    accountId: "646b6c4bce711783c6a7f823",
                    userId: "645c8e1fb5331c90c0ba6acb",
                    date: "2023-05-23T16:19:23.695Z",
                    __v: 0
                },
                {
                    _id: "647591a8157638e32e15dc29",
                    desc: "testing",
                    category: "Cloths",
                    amount: 998,
                    transcationType: "transfer",
                    accountId: "646b6c4bce711783c6a7f823",
                    toAccountId: "646ca4944bab061cdaa6ca07",
                    userId: "645c8e1fb5331c90c0ba6acb",
                    date: "2023-05-30T06:03:20.277Z",
                    __v: 0
                }
            ];

            // Extract transaction types and their corresponding list
            const transactionTypes = [];
            const datasets = [];

            data.forEach(transaction => {
                const { transcationType, date, amount } = transaction;

                if (!transactionTypes.includes(transcationType)) {
                    transactionTypes.push(transcationType);
                }

                const datasetIndex = transactionTypes.indexOf(transcationType);
                if (!datasets[datasetIndex]) {
                    datasets[datasetIndex] = {
                        label: transcationType,
                        data: [],
                        backgroundColor: getRandomColor(),
                        borderColor: getRandomColor(),
                        fill: false
                    };
                }

                datasets[datasetIndex].data.push({
                    x: new Date(date),
                    y: amount
                });
            });

            // Create the chart
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: generateLabels(data),
                    datasets
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            type: "time",
                            time: {
                                unit: "day"
                            }
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }, []);

    // Generate labels from the list of transactions
    const generateLabels = (transactions) => {
        return transactions
            .map(transaction => new Date(transaction.date).toLocaleDateString())
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort((a, b) => new Date(a) - new Date(b));
    };

    // Generate a random color
    const getRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };

    return <canvas ref={chartRef} />;
};

export default Analytics;
