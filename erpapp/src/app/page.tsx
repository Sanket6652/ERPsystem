import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClipboardList } from "lucide-react"
export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col max-w-7xl mx-auto">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <h1 className="text-xl font-bold">ERP Workflow System</h1>
          <nav className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Help
            </Button>
            <Button size="sm">Login</Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Department Dashboard</h2>
            <p className="text-muted-foreground">Manage job workflows across all departments</p>
          </div>

          <Tabs defaultValue="sales" className="space-y-4">
            <TabsList className="grid grid-cols-7 w-full">
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="purchase">Purchase</TabsTrigger>
              <TabsTrigger value="store">Store</TabsTrigger>
              <TabsTrigger value="production">Production</TabsTrigger>
              <TabsTrigger value="quality">Quality</TabsTrigger>
              <TabsTrigger value="accounting">Accounting</TabsTrigger>
              <TabsTrigger value="dispatch">Dispatch</TabsTrigger>
            </TabsList>

            <TabsContent value="sales" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Job Orders</CardTitle>
                    <ClipboardList className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
                    <ClipboardList className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Job Orders</CardTitle>
                  <CardDescription>Create and manage job orders for customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 p-4 text-sm font-medium">
                        <div>Job ID</div>
                        <div>Customer</div>
                        <div>Date</div>
                        <div>Status</div>
                        <div className="text-right">Actions</div>
                      </div>
                      <div className="divide-y">
                        <div className="grid grid-cols-5 items-center p-4">
                          <div>JOB-1001</div>
                          <div>Acme Corp</div>
                          <div>2025-03-10</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              Active
                            </span>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                            <Button size="sm">Process</Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-5 items-center p-4">
                          <div>JOB-1002</div>
                          <div>TechSolutions Inc</div>
                          <div>2025-03-11</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                              Pending
                            </span>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                            <Button size="sm">Process</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button>Create New Job Order</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="purchase" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Purchase Department</CardTitle>
                  <CardDescription>Purchase raw materials and products for jobs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-6 p-4 text-sm font-medium">
                        <div>Job ID</div>
                        <div>Materials Needed</div>
                        <div>Quantity</div>
                        <div>Supplier</div>
                        <div>Status</div>
                        <div className="text-right">Actions</div>
                      </div>
                      <div className="divide-y">
                        <div className="grid grid-cols-6 items-center p-4">
                          <div>JOB-1001</div>
                          <div>Raw Material A</div>
                          <div>500 units</div>
                          <div>Supplier Co.</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                              Ordered
                            </span>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              Details
                            </Button>
                            <Button size="sm">Receive</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="store" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Store Department</CardTitle>
                  <CardDescription>Manage inventory and rack locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-6 p-4 text-sm font-medium">
                        <div>Product ID</div>
                        <div>Product Name</div>
                        <div>Quantity</div>
                        <div>Rack Location</div>
                        <div>Status</div>
                        <div className="text-right">Actions</div>
                      </div>
                      <div className="divide-y">
                        <div className="grid grid-cols-6 items-center p-4">
                          <div>PROD-101</div>
                          <div>Raw Material A</div>
                          <div>450 units</div>
                          <div>Rack A-12</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              In Stock
                            </span>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                            <Button size="sm">Issue</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="production" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Production Department</CardTitle>
                  <CardDescription>Manage production jobs and material requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 p-4 text-sm font-medium">
                        <div>Job ID</div>
                        <div>Materials</div>
                        <div>Start Date</div>
                        <div>Status</div>
                        <div className="text-right">Actions</div>
                      </div>
                      <div className="divide-y">
                        <div className="grid grid-cols-5 items-center p-4">
                          <div>JOB-1001</div>
                          <div>Raw Material A, B</div>
                          <div>2025-03-15</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                              In Progress
                            </span>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              Details
                            </Button>
                            <Button size="sm">Complete</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quality" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Quality Department</CardTitle>
                  <CardDescription>Inspect and approve completed jobs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 p-4 text-sm font-medium">
                        <div>Job ID</div>
                        <div>Product</div>
                        <div>Inspection Date</div>
                        <div>Status</div>
                        <div className="text-right">Actions</div>
                      </div>
                      <div className="divide-y">
                        <div className="grid grid-cols-5 items-center p-4">
                          <div>JOB-1001</div>
                          <div>Finished Product X</div>
                          <div>2025-03-18</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                              Pending Inspection
                            </span>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              Details
                            </Button>
                            <Button size="sm">Inspect</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accounting" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Accounting Department</CardTitle>
                  <CardDescription>Generate invoices for completed jobs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 p-4 text-sm font-medium">
                        <div>Job ID</div>
                        <div>Customer</div>
                        <div>Amount</div>
                        <div>Status</div>
                        <div className="text-right">Actions</div>
                      </div>
                      <div className="divide-y">
                        <div className="grid grid-cols-5 items-center p-4">
                          <div>JOB-1001</div>
                          <div>Acme Corp</div>
                          <div>$12,500</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                              Ready for Invoice
                            </span>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              Details
                            </Button>
                            <Button size="sm">Create Invoice</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dispatch" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Dispatch Department</CardTitle>
                  <CardDescription>Manage shipping and delivery of completed jobs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 p-4 text-sm font-medium">
                        <div>Job ID</div>
                        <div>Customer</div>
                        <div>Delivery Date</div>
                        <div>Status</div>
                        <div className="text-right">Actions</div>
                      </div>
                      <div className="divide-y">
                        <div className="grid grid-cols-5 items-center p-4">
                          <div>JOB-1001</div>
                          <div>Acme Corp</div>
                          <div>2025-03-20</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                              Ready for Dispatch
                            </span>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              Details
                            </Button>
                            <Button size="sm">Ship</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
