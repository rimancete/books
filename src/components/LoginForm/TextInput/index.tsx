import { Input, InputContent, InputLabel, InputDiv } from './styles';

type CustomTextInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  placeholder?: string;
  type: 'Text' | 'Password';
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function TextInput({
  label,
  placeholder,
  type,
  value,
  onChange,
  ...rest
}: CustomTextInputProps) {
  return (
    <InputContent>
      <InputLabel>{label}</InputLabel>
      <InputDiv>
        <Input
          type={type === 'Text' ? 'text' : 'password'}
          inputMode="text"
          placeholder={placeholder}
          textContentType={type === 'Password' ? 'password' : ''}
          autoCapitalize="none"
          value={value}
          onChange={onChange}
          {...rest}
        />
      </InputDiv>
    </InputContent>
  );
}
