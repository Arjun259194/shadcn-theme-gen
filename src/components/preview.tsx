"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { useForm } from "react-hook-form";

export default function ThemePreview() {
   const form = useForm();

   return (
      <div className="min-h-screen bg-background p-6 space-y-6">
         <header className="flex justify-between items-center p-4 bg-secondary rounded-lg">
            <h1 className="text-xl font-bold">Theme Preview</h1>
            <Button variant="outline">Settings</Button>
         </header>

         <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Form */}
            <Card>
               <CardHeader>
                  <CardTitle>Login Form</CardTitle>
               </CardHeader>
               <CardContent>
                  <Form {...form}>
                     <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                 <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                 <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <Button className="mt-4 w-full">Login</Button>
                  </Form>
               </CardContent>
            </Card>

            {/* Table */}
            <Card>
               <CardHeader>
                  <CardTitle>Data Overview</CardTitle>
               </CardHeader>
               <CardContent>
                  <Table>
                     <TableHeader>
                        <TableRow>
                           <TableHead>Month</TableHead>
                           <TableHead>Sales</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        <TableRow>
                           <TableCell>January</TableCell>
                           <TableCell>$4000</TableCell>
                        </TableRow>
                        <TableRow>
                           <TableCell>February</TableCell>
                           <TableCell>$3000</TableCell>
                        </TableRow>
                        <TableRow>
                           <TableCell>March</TableCell>
                           <TableCell>$5000</TableCell>
                        </TableRow>
                     </TableBody>
                  </Table>
               </CardContent>
            </Card>

            {/* Dialog */}
            <Card>
               <CardHeader>
                  <CardTitle>Dialog Example</CardTitle>
               </CardHeader>
               <CardContent>
                  <Dialog>
                     <DialogTrigger asChild>
                        <Button>Open Dialog</Button>
                     </DialogTrigger>
                     <DialogContent>
                        <DialogHeader>
                           <DialogTitle>Dialog Title</DialogTitle>
                        </DialogHeader>
                        <p>This is a sample modal dialog showcasing the theme.</p>
                     </DialogContent>
                  </Dialog>
               </CardContent>
            </Card>
         </main>
      </div>
   );
}
