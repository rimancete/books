import { signIn } from '../../services/auth.service';
import { getBooksById } from '../../services/user.service';

export function Login() {
  const onSubmit = () => {
    // logout();
    signIn({
      email: 'desafio@ioasys.com.br',
      password: '12341234',
    });
    // getBooks();
    getBooksById();
  };

  return <button onClick={onSubmit}>Oi</button>;
}
