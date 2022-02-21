import { useEffect, useState } from 'react';
import { getCurrentUser, signIn } from '../../services/auth.service';
import {
  Button,
  Form,
  LoginFormContent,
  InputContent,
  FormErrorContent,
  ErrorMessage,
} from './styles';
import { TextInput } from './TextInput';
import { useNavigate } from 'react-router-dom';
import { env } from '../../environments';
import { ProductTitle } from '../ProductTitle';
import { theme } from '../../styles/theme';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const currentUser = getCurrentUser();

  const navigate = useNavigate();

  const setError = () => {
    setErrorMessage('Email e/ou senha incorretos.');
    return setFormError(true);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return setError();

    await signIn({
      email,
      password,
    })
      .then(() => navigate(`${env.ROUTER_UTILS.base.home}`))
      .catch(() => {
        return setError();
      });
  };

  useEffect(() => {
    setFormError(false);
    setErrorMessage('');
  }, []);
  useEffect(() => {
    setFormError(false);
    setErrorMessage('');
  }, [email, password]);

  useEffect(() => {
    currentUser && navigate(`${env.ROUTER_UTILS.base.home}`);
  });

  return (
    <LoginFormContent>
      <Form onSubmit={(e) => onSubmit(e)}>
        <ProductTitle colorTitle={theme.colors.white} />
        <InputContent>
          <TextInput
            type="Text"
            label="Email"
            placeholder="email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContent>
        <InputContent>
          <TextInput
            type="Password"
            label="Senha"
            placeholder="digite a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
        </InputContent>
        {formError && (
          <FormErrorContent>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </FormErrorContent>
        )}
      </Form>
    </LoginFormContent>
  );
}
