'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import Chart from 'react-apexcharts';

export default function DashboardPage() {
  const [statistics, setStatistics] = useState({
    total_products: 0,
    total_quantity: 0,
    average_price: 0,
  });
  const [lineChartData, setLineChartData] = useState([]);
  const [filter, setFilter] = useState('day');

  useEffect(() => {
    fetchStatistics();
    fetchLineChartData(filter);
  }, [filter]);

  const fetchStatistics = async () => {
    try {
      const res = await axios.get("http://localhost:8002/api/dashboard/statistics");
      setStatistics(res.data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  const fetchLineChartData = async (filter: string) => {
    try {
      const res = await axios.get(`http://localhost:8002/api/dashboard/line-chart?filter=${filter}`);
      setLineChartData(res.data);
    } catch (error) {
      console.error("Error fetching line chart data:", error);
    }
  };

  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Total Products', 'Total Quantity', 'Average Price'],
    },
    yaxis: {
      title: {
        text: 'Count'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val;
        }
      }
    }
  };

  const barChartSeries = [{
    name: 'Statistics',
    data: [statistics.total_products, statistics.total_quantity, statistics.average_price]
  }];

  const lineChartOptions = {
    chart: {
      type: 'line',
      height: 350,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      title: {
        text: 'Value'
      }
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      },
    }
  };

  const lineChartSeries = [{
    name: 'Line Data',
    data: lineChartData
  }];

  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TooltipProvider>
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        <Card className="rounded-lg border-none mt-6">
          <CardContent className="p-6">
            <div>
              <h1 className="text-3xl font-bold">Graph</h1>
              <p className="mt-2 text-sm text-gray-500">
                Visualization and analysis of data
              </p>
              <div className="flex justify-end mb-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2"
                >
                  <option value="day">Day</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
              {/* <Chart options={barChartOptions} series={barChartSeries} type="bar" height={350} /> */}
              <Chart options={lineChartOptions} series={lineChartSeries} type="line" height={350} />
            </div>
          </CardContent>
        </Card>
      </TooltipProvider>
    </ContentLayout>
  );
}