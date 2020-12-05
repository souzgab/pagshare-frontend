export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.username = 'Nome necessário';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Nome invalido';
  // }
  if (!values.cpf) {
    errors.cpf = 'CPF necessário';
  } else if (values.password.length < 11 && values.password.length > 11) {
    errors.password = 'CPF inválido';
  }
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email inaválido';
  }
  if (!values.password) {
    errors.password = 'Senha necessária';
  } else if (values.password.length < 6) {
    errors.password = 'A senha precisa ter 6 caracteres ou mais';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirmação de senha necessária';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'As senhas não coincidem';
  }
  return errors;
}
