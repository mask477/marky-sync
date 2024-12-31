import LoginForm from '@/components/auth/login-form';
import AuthLayout from '@/layouts/AuthLayout';

export default function Login() {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
}
