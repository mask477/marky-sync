import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useInertiaForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import ApplicationLogo from '@/components/application-logo';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, LogIn } from 'lucide-react';

const loginFormSchema = z.object({
    email: z.string(),
    password: z.string(),
});

type LoginFromType = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
    const form = useForm<LoginFromType>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const { errors, post, setData, processing } = useInertiaForm<LoginFromType>(
        {
            email: '',
            password: '',
        },
    );

    const [email, password] = form.watch(['email', 'password']);

    useEffect(() => {
        setData({ email, password });
    }, [email, password]);

    useEffect(() => {
        if (errors) {
            Object.keys(errors).forEach((field) => {
                form.setError(field as keyof LoginFromType, {
                    type: 'manual',
                    message: errors[field as keyof typeof errors],
                });
            });
        }
    }, [errors]);

    const onSubmit = () => {
        post(route('login'));
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card className="w-[350px]">
                    <CardHeader>
                        <div className="flex justify-center">
                            <ApplicationLogo width={'50%'} />
                        </div>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>
                            Login to your Dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            {/* Username */}
                            <FormField
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <FormField
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Password"
                                                type="password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button disabled={processing} type="submit">
                            {processing ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <LogIn />
                            )}
                            Login
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    );
}
