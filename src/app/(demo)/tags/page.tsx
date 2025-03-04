import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function TagsPage() {
  return (
    <ContentLayout title="Tags">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Tags</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6">
          <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          First name
                      </label>
                      <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="John"
                          required
                      />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Last name
                      </label>
                      <input
                          type="text"
                          id="last_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Doe"
                          required
                      />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Company
                      </label>
                      <input
                          type="text"
                          id="company"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Flowbite"
                          required
                      />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Unique visitors (per month)
                      </label>
                      <input
                          type="number"
                          id="visitors"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                      />
                  </div>
              </div>
              <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email address
                  </label>
                  <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="john.doe@company.com"
                      required
                  />
              </div>

              <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                  Submit
              </button>
          </form>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
