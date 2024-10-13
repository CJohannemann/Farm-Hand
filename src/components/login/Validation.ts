import { required, minLength } from '@vuelidate/validators';

interface LoginForm {
    username: string;
    password: string;
}

type LoginValidationRules = {
    [K in keyof LoginForm]: any;
};

export const loginValidationRules: LoginValidationRules = {
    username: { required },
    password: { required, minLength: minLength(6) },
};