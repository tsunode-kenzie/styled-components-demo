import styles from './styles.module.css';

const RegisterUsers = () => {
  return (
    <div className={styles.container}>
      <form>
        <input type="text" />
        <input type="text" />

        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default RegisterUsers;